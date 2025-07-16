import { useState, useEffect } from "react";
import { useSpring, animated as a, useSpringValue } from "@react-spring/web";
import developerCard from "../assets/developer_card.svg";
import simonSvg from "../assets/simon.svg";
import sonnySvg from "../assets/sonny.svg";
import calicoSvg from "../assets/calico.svg";

const FlippingCard = () => {
  const [flipped, setFlipped] = useState(false);
  const flipDuration = 500;

  // === Bobbing springs using useSpringValue for persistence
  const sonnyY = useSpringValue(0);
  const calicoY = useSpringValue(0);

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

    startBobbing(sonnyY);
    startBobbing(calicoY);
  }, [sonnyY, calicoY]);

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
    <div className="relative w-[340px] h-[460px] p-2">

      {/* Sonny */}
      <a.img
        src={sonnySvg}
        alt="sonny"
        className="w-[125px] absolute"
        style={{
          transform: sonnyY.to((y) => `translateY(${y}px)`),
          transformOrigin: "top left",
        }}
      />

      {/* Calico */}
      <a.img
        src={calicoSvg}
        alt="calico"
        className="w-[125px] absolute bottom-0 right-0 z-10"
        style={{
          transform: calicoY.to((y) => `translateY(${y}px)`),
          transformOrigin: "bottom right",
        }}
      />

      {/* Flip Card */}
      <div
        className="w-[220px] h-[310px] cursor-pointer absolute top-[90px] left-[60px]"
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