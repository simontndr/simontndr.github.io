import { useState, useEffect, useRef } from "react";
import { useSpring, animated as a, to } from "@react-spring/web";
import simonSvg from "../assets/svgs/simon.svg";
import BACard from "../assets/flipping-card-images/ba-card.webp";
import sonny from "../assets/flipping-card-images/sonny.webp";
import calico from "../assets/flipping-card-images/calico.webp";
import marble from "../assets/flipping-card-images/marble.webp";

// ---------------------------------------------------------------------------
// Endless idle animations (bob, float, pulse) are plain CSS keyframes.
// They run on the browser's compositor, so no re-render, hover or flip can
// ever stall them. react-spring is only used for event-driven motion.
// ---------------------------------------------------------------------------

const EASE_SINE = "cubic-bezier(0.37, 0, 0.63, 1)"; // easeInOutSine

const KEYFRAMES = `
@keyframes fc-drift-x {
  from { transform: translateX(calc(var(--dx) * -1)); }
  to   { transform: translateX(var(--dx)); }
}
@keyframes fc-drift-y {
  from { transform: translateY(calc(var(--dy) * -1)); }
  to   { transform: translateY(var(--dy)); }
}
@keyframes fc-wobble {
  from { transform: rotate(calc(var(--sway) * -1)); }
  to   { transform: rotate(var(--sway)); }
}
@keyframes fc-hop {
  0%, 62%, 100% { transform: translateY(0) scale(1, 1); }
  67% { transform: translateY(0) scale(1.1, 0.88); }
  76% { transform: translateY(calc(var(--hop) * -1)) scale(0.94, 1.1); }
  85% { transform: translateY(0) scale(1.1, 0.9); }
  91% { transform: translateY(0) scale(0.97, 1.04); }
}
@keyframes fc-float {
  from { transform: translateY(0) rotate(-1deg); }
  to   { transform: translateY(-6px) rotate(1deg); }
}
@keyframes fc-shadow {
  from { transform: scale(1);    opacity: 1; }
  to   { transform: scale(0.91); opacity: 0.6; }
}
@keyframes fc-ring {
  from { transform: scale(1);    opacity: 0.9; }
  to   { transform: scale(1.18); opacity: 0; }
}
@keyframes fc-pill {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
}
@media (prefers-reduced-motion: reduce) {
  .fc-anim { animation: none !important; }
}
`;

const usePrefersReducedMotion = () => {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && !!window.matchMedia?.(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia?.(query);
    if (!mq) return;
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

// Resting / hovered pose of the card
const REST = { rx: 0, ry: 0, rz: -8, scale: 1, lift: 0, glare: 0, gx: 50, gy: 50 };
const HOVER = { rz: -3, scale: 1.05, lift: -12, glare: 1 };

// ---------------------------------------------------------------------------
// A character that wanders on its own and ignores the card entirely.
// Four nested layers, each with a different non-matching period, so the
// combined path never visibly repeats:
//   drift X  ->  drift Y  ->  squash-and-hop every few seconds  ->  wobble
// ---------------------------------------------------------------------------

const Buddy = ({
  src,
  alt,
  className,
  driftX = 14, // px of side-to-side wander
  driftY = 14, // px of up-and-down wander
  xDur = 5000, // ms for one sweep across X
  yDur = 3500, // ms for one sweep across Y
  sway = 4, // degrees of rocking
  swayDur = 2500,
  hopEvery = 6000, // ms between hops
  hopHeight = 24, // px
  offset = 0, // ms, desyncs characters from each other
}) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <div
      className="fc-anim"
      style={{
        "--dx": `${driftX}px`,
        animation: `fc-drift-x ${xDur}ms ${EASE_SINE} -${offset}ms infinite alternate`,
      }}
    >
      <div
        className="fc-anim"
        style={{
          "--dy": `${driftY}px`,
          animation: `fc-drift-y ${yDur}ms ${EASE_SINE} -${offset}ms infinite alternate`,
        }}
      >
        <div
          className="fc-anim"
          style={{
            "--hop": `${hopHeight}px`,
            transformOrigin: "50% 100%",
            animation: `fc-hop ${hopEvery}ms ease-in-out -${offset}ms infinite`,
          }}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="fc-anim block h-auto w-full"
            style={{
              "--sway": `${sway}deg`,
              transformOrigin: "50% 100%",
              animation: `fc-wobble ${swayDur}ms ${EASE_SINE} -${offset}ms infinite alternate`,
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

// Shine that follows the cursor. Mirrored on the back face.
const Glare = ({ tilt, mirror = false }) => (
  <a.div
    className="pointer-events-none absolute inset-0"
    style={{
      opacity: tilt.glare.to((g) => g * 0.9),
      mixBlendMode: "soft-light",
      backgroundImage: to(
        [tilt.gx, tilt.gy],
        (x, y) =>
          `radial-gradient(circle at ${mirror ? 100 - x : x}% ${y}%, rgba(255,255,255,0.95), rgba(255,255,255,0) 60%)`
      ),
    }}
  />
);

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const FlippingCard = () => {
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef(null);

  const [flipped, setFlipped] = useState(false);
  const [flipCount, setFlipCount] = useState(0);
  const [hovered, setHovered] = useState(false);
  const hasFlipped = flipCount > 0;

  // --- Flip: springy, so it overshoots and settles instead of a flat tween
  const { rot } = useSpring({
    rot: flipped ? 180 : 0,
    immediate: reduced,
    config: { tension: 200, friction: 17 },
  });
  // Card rises + grows mid-flip, lands back down
  const flipScale = rot.to({ range: [0, 90, 180], output: [1, 1.1, 1], extrapolate: "clamp" });
  const flipLift = rot.to({ range: [0, 90, 180], output: [0, -14, 0], extrapolate: "clamp" });

  // --- Pointer-driven tilt / lift / press
  const [tilt, tiltApi] = useSpring(() => ({
    ...REST,
    config: { tension: 300, friction: 22 },
  }));

  // --- "Come on, click me" wiggle until the first flip
  const [wiggle, wiggleApi] = useSpring(() => ({ w: 0 }));
  useEffect(() => {
    if (hasFlipped || hovered || reduced) return;
    const wiggleOnce = () =>
      wiggleApi.start({
        from: { w: 0 },
        to: [{ w: 16 }, { w: -12 }, { w: 7 }, { w: 0 }],
        config: { tension: 320, friction: 10 },
      });
    const first = setTimeout(wiggleOnce, 1200);
    const repeat = setInterval(wiggleOnce, 3500);
    return () => {
      clearTimeout(first);
      clearInterval(repeat);
    };
  }, [hasFlipped, hovered, reduced, wiggleApi]);

  // --- Click affordance visibility
  const ringVisible = useSpring({ o: hasFlipped ? 0 : 1 });
  const hint = useSpring({ o: !hasFlipped || hovered ? 1 : 0 });

  // --- Handlers
  const flip = () => {
    setFlipped((f) => !f);
    setFlipCount((c) => c + 1);
  };

  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse") return;
    setHovered(true);
    if (!reduced) tiltApi.start(HOVER);
  };

  const onPointerMove = (e) => {
    if (e.pointerType !== "mouse" || reduced || !wrapRef.current) return;
    // Measured on the static wrapper so the tilt can't feed back into the hit-box
    const r = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    tiltApi.start({
      rx: (0.5 - py) * 24,
      ry: (px - 0.5) * 24,
      gx: px * 100,
      gy: py * 100,
    });
  };

  const onPointerLeave = () => {
    setHovered(false);
    tiltApi.start(REST);
  };

  const onPointerDown = () => {
    if (!reduced) tiltApi.start({ scale: 0.96, lift: 0 });
  };

  const onPointerUp = (e) => {
    if (reduced) return;
    tiltApi.start(
      e.pointerType === "mouse"
        ? { scale: HOVER.scale, lift: HOVER.lift }
        : { scale: 1, lift: 0 }
    );
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flip();
    }
  };

  const label = flipped ? "Flip back" : hasFlipped ? "Flip" : "Click to flip";

  return (
    <div className="relative w-[340px] h-[460px]">
      <style>{KEYFRAMES}</style>

      {/* Sonny */}
      <Buddy
        src={sonny}
        alt="sonny"
        className="w-[125px] top-5 absolute"
        driftX={16}
        driftY={18}
        xDur={5200}
        yDur={3700}
        sway={4}
        swayDur={2600}
        hopEvery={6400}
        hopHeight={26}
        offset={0}
      />

      {/* Calico */}
      <Buddy
        src={calico}
        alt="calico"
        className="w-[125px] absolute bottom-5 right-0 z-10"
        driftX={12}
        driftY={10}
        xDur={6100}
        yDur={4300}
        sway={2.5}
        swayDur={3100}
        hopEvery={8200}
        hopHeight={18}
        offset={2300}
      />

      {/* Marble */}
      <Buddy
        src={marble}
        alt="marble"
        className="w-[80px] absolute bottom-1 right-20 z-20"
        driftX={24}
        driftY={14}
        xDur={3900}
        yDur={2900}
        sway={7}
        swayDur={1500}
        hopEvery={4800}
        hopHeight={30}
        offset={1100}
      />

      {/* Card hit-area (static, so pointer maths stays stable) */}
      <div
        ref={wrapRef}
        role="button"
        tabIndex={0}
        aria-label={flipped ? "Flip card back over" : "Flip card over"}
        aria-pressed={flipped}
        onClick={flip}
        onKeyDown={onKeyDown}
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerLeave}
        className="absolute top-[90px] left-[80px] w-[220px] h-[310px] cursor-pointer select-none rounded-md outline-none focus-visible:ring-4 focus-visible:ring-white/80"
      >
        {/* Ground shadow: lift is a spring, idle breathing is CSS */}
        <a.div
          className="pointer-events-none absolute -bottom-3 left-3 right-3 h-5"
          style={{
            opacity: tilt.lift.to((l) => 0.35 + l * 0.012),
            transform: tilt.lift.to((l) => `scale(${1 + l * 0.015})`),
          }}
        >
          <div
            className="fc-anim h-full w-full rounded-[50%] bg-black blur-md"
            style={{ animation: `fc-shadow 2200ms ${EASE_SINE} infinite alternate` }}
          />
        </a.div>

        {/* Tilt / press / flip-lift (springs) */}
        <a.div
          className="absolute inset-0"
          style={{
            willChange: "transform",
            transform: to(
              [wiggle.w, tilt.rx, tilt.ry, tilt.rz, tilt.scale, tilt.lift, flipScale, flipLift],
              (w, rx, ry, rz, s, lift, fs, fl) =>
                `translateY(${lift + fl}px) rotate(${rz}deg) perspective(900px) rotateX(${rx}deg) rotateY(${ry + w}deg) scale(${s * fs})`
            ),
          }}
        >
          {/* Idle float (CSS) */}
          <div
            className="fc-anim absolute inset-0"
            style={{ animation: `fc-float 2200ms ${EASE_SINE} infinite alternate` }}
          >
            {/* Pulsing ring (until first flip) */}
            <a.div
              className="pointer-events-none absolute inset-0"
              style={{ opacity: ringVisible.o }}
            >
              <div
                className="fc-anim absolute inset-0 rounded-md border-2 border-white"
                style={{ animation: "fc-ring 1800ms cubic-bezier(0.215, 0.61, 0.355, 1) infinite" }}
              />
            </a.div>

            {/* Front */}
            <a.div
              className="absolute inset-0 rounded-md overflow-hidden shadow-lg"
              style={{
                transform: rot.to((r) => `perspective(1000px) rotateY(${r}deg)`),
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
              }}
            >
              <img
                src={BACard}
                alt="Card Front"
                draggable={false}
                className="w-full h-full object-cover"
              />
              <Glare tilt={tilt} />
            </a.div>

            {/* Back */}
            <a.div
              className="absolute inset-0 border-b-2 border-midnight p-2 rounded-md overflow-hidden bg-gradient-to-br from-china to-royal shadow-lg"
              style={{
                transform: rot.to((r) => `perspective(1000px) rotateY(${r + 180}deg)`),
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
              }}
            >
              <img
                src={simonSvg}
                alt="Card Back"
                draggable={false}
                className="w-full h-full object-contain"
              />
              <Glare tilt={tilt} mirror />
            </a.div>

            {/* Hint pill (doesn't flip with the card) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
              <a.div
                className="fc-anim flex items-center gap-1.5 whitespace-nowrap rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                style={{
                  opacity: hint.o,
                  animation: `fc-pill 1800ms ease-in-out infinite`,
                }}
              >
                <a.span
                  aria-hidden="true"
                  className="inline-block"
                  style={{ transform: rot.to((r) => `rotate(${r * 2}deg)`) }}
                >
                  ↻
                </a.span>
                {label}
              </a.div>
            </div>
          </div>
        </a.div>
      </div>
    </div>
  );
};

export default FlippingCard;