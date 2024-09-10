import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { getRelativeCoordinates } from "@/lib";

export const CryoKinesisBanner = ({ bundle }) => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef(null);
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  // centerX and centerY is a value from -1 to 1

  return (
    <>
      <motion.div
        className="w-full h-full"
        ref={boxRef}
        style={{ perspective: 600 }}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <motion.img
          src={bundle.imageSet[0].src}
          alt={bundle.name + " background"}
          className="w-full h-3/4 object-cover scale-110"
          animate={{
            transform: ` scale(1.1) translateX(${
              mousePosition.centerX * 2
            }%) translateY(${mousePosition.centerY * 1}%)`,
          }}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={bundle.imageSet[1].src}
          alt={bundle.name + " 1"}
          className="w-[43%] z-50 h-auto object-cover absolute bottom-0 left-0"
          initial={{ opacity: 0, bottom: "0%", left: "26%" }}
          animate={{
            opacity: 1,
            transform: `translateX(${mousePosition.centerX * 2}%) translateY(${
              mousePosition.centerY * 1
            }%)`,
          }}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={bundle.imageSet[2].src}
          alt={bundle.name + " 2"}
          className="w-[39%] z-40 h-auto object-cover absolute bottom-0 left-0"
          initial={{ opacity: 0, bottom: "39%", left: "4%" }}
          animate={{
            opacity: 1,
            transform: `translateX(${mousePosition.centerX * 3}%) translateY(${
              mousePosition.centerY * 2
            }%)`,
          }}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={bundle.imageSet[3].src}
          alt={bundle.name + " 3"}
          className="w-[44%] z-30 h-auto object-cover absolute bottom-0 left-0"
          initial={{ opacity: 0, bottom: "48%", left: "42%" }}
          animate={{
            opacity: 1,
            transform: `translateX(${mousePosition.centerX * 4}%) translateY(${
              mousePosition.centerY * 3
            }%)`,
          }}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={bundle.imageSet[4].src}
          alt={bundle.name + " 4"}
          className="w-[14%] z-20 h-auto object-cover absolute bottom-0 left-0"
          initial={{ opacity: 0, bottom: "2%", left: "75%" }}
          animate={{
            opacity: 1,
            transform: `translateX(${mousePosition.centerX * -2}%) translateY(${
              mousePosition.centerY * -2
            }%)`,
          }}
          transition={{ type: "tween" }}
        />
        <motion.img
          src={bundle.imageSet[5].src}
          alt={bundle.name + " 5"}
          className="w-[13%] z-10 h-auto object-cover absolute bottom-0 left-0"
          initial={{ opacity: 0, bottom: "4%", left: "12%" }}
          animate={{
            opacity: 1,
            transform: `translateX(${mousePosition.centerX * -3}%) translateY(${
              mousePosition.centerY * -2
            }%)`,
          }}
          transition={{ type: "tween" }}
        />
      </motion.div>
    </>
  );
};
