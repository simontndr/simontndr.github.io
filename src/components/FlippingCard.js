import { useState, useEffect } from "react";
import { useSpring, animated as a, useSpringValue } from "@react-spring/web";
import developerCard from "../assets/developer_card.png";
import simonSvg from "../assets/simon.svg";
import sonny from "../assets/sonny.png";
import calico from "../assets/calico.png";
import marble from "../assets/marble.png";

const FlippingCard = () => {
  const [flipped, setFlipped] = useState(false);
  const flipDuration = 450;

  // === Bobbing springs using useSpringValue for persistence
  const posY = useSpringValue(0);

  // Start bobbing animations on mount
  useEffect(() => {
    const startBobbing = (springValue) => {
      const animate = () => {
        springValue.start({
          from: 0,
          to: -10,
          config: { duration: 1000 },
          onRest: () => {
            springValue.start({
              from: -10,
              to: 0,
              config: { duration: 1000 },
              onRest: animate,
            });
          },
        });
      };
      animate();
    };

    startBobbing(posY);
  }, [posY]);

  // === Card flip spring
  const { transform, frontOpacity, backOpacity } = useSpring({
    frontOpacity: flipped ? 0 : 1,
    backOpacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { duration: flipDuration },
  });

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="relative w-[340px] h-[460px]">

      {/* Sonny */}
      <a.img
        src={sonny}
        alt="sonny"
        className="w-[125px] top-5 absolute"
        style={{
          transform: posY.to((y) => `translateY(${y}px)`),
          transformOrigin: "top left",
        }}
      />

      {/* Calico */}
      <a.img
        src={calico}
        alt="calico"
        className="w-[125px] absolute bottom-5 right-0 z-10"
        style={{
          transform: posY.to((y) => `translateY(${y}px)`),
          transformOrigin: "bottom right",
        }}
      />

      {/* Calico */}
      <a.img
        src={marble}
        alt="mable"
        className="w-[80px] absolute bottom-1 right-20 z-20"
        style={{
          transform: posY.to((y) => `translateY(${y}px)`),
          transformOrigin: "bottom right",
        }}
      />

      {/* Flip Card */}
      <div
        className="rotate-[-8deg] w-[220px] h-[310px] cursor-pointer absolute top-[90px] left-[80px]"
        onClick={handleFlip}
      >
        {/* Front */}
        <a.div
          className="absolute rounded-md w-full h-full overflow-hidden"
          style={{
            opacity: frontOpacity,
            transform,
            backfaceVisibility: "hidden",
            willChange: "transform, opacity",
          }}
        >
          <img
            src={developerCard}
            alt="Card Front"
            className="w-full h-full object-cover"
          />
        </a.div>

        {/* Back */}
        <a.div
          className="border-b-2 border-midnight p-2 absolute rounded-md w-full h-full bg-gradient-to-br overflow-hidden from-china to-royal"
          style={{
            opacity: backOpacity,
            transform: transform.to((t) => `${t} rotateY(180deg)`),
            backfaceVisibility: "hidden",
            willChange: "transform, opacity",
          }}
        >
          <img
            src={simonSvg}
            alt="Card Back"
            className="w-full h-full object-contain"
          />
        </a.div>
      </div>
    </div>

  );
};

export default FlippingCard;