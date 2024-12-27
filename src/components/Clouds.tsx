import { motion } from "motion/react";
import { CSSProperties } from "react";

export default function Clouds() {

  const random = (min: number, max: number) => Math.random() * (max - min) + min;

  const clouds = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: random(300, 500),
    startY: random(window.innerHeight + 300, window.innerHeight + 600),
    endY: random(-300, -600),
    duration: random(15, 25),
    delay: random(0, 10),
    right: random(0, window.innerWidth - 300),
    opacity: random(0.7, 1)
  }));

  const getCloudStyle = (cloud: typeof clouds[0]): CSSProperties => ({
    width: `${cloud.size}px`,
    height: `${cloud.size}px`,
    backgroundImage: "url('/assets/cloud_gap.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'fixed',
    pointerEvents: 'none',
    opacity: cloud.opacity,
  });

  return (
    <div
      className="fixed inset-0"
      style={{ zIndex: -999 }}
    >
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          style={{ ...getCloudStyle(cloud), right: cloud.right }}
          animate={{
            y: [cloud.startY, cloud.endY]
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "linear",
            delay: cloud.delay
          }}
        />
      ))}
    </div>
  )
}



