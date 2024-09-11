import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { getRelativeCoordinates } from "@/lib";

interface WasabiBannerProps {
    bundle?: any;
}

export const WasabiBanner = ({ bundle }: WasabiBannerProps) => {
    const [mousePosition, setMousePosition] = useState({} as any);
    const boxRef = useRef(null);
    const handleMouseMove = (e: any): void => {
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
                    className="no-select w-full h-3/4 object-cover scale-110"
                    animate={{
                        transform: ` scale(1.1) translateX(${mousePosition.centerX * 2
                            }%) translateY(${mousePosition.centerY * 1}%)`,
                    }}
                    transition={{ type: "tween" }}
                />
                <motion.img
                    src={bundle.imageSet[1].src}
                    alt={bundle.name + " 1"}
                    className="no-select w-[12%] z-50 h-auto object-cover absolute bottom-0 left-0"
                    initial={{ opacity: 0, bottom: "13%", left: "10%" }}
                    animate={{
                        opacity: 1,
                        transform: `translateX(${mousePosition.centerX * 2}%) translateY(${mousePosition.centerY * 1
                            }%)`,
                    }}
                    transition={{ type: "tween" }}
                />
                <motion.img
                    src={bundle.imageSet[2].src}
                    alt={bundle.name + " 2"}
                    className="no-select w-[58%] z-40 h-auto object-cover absolute bottom-0 left-0"
                    initial={{ opacity: 0, bottom: "34%", left: "4%" }}
                    animate={{
                        opacity: 1,
                        transform: `translateX(${mousePosition.centerX * 3}%) translateY(${mousePosition.centerY * 2
                            }%)`,
                    }}
                    transition={{ type: "tween" }}
                />
                <motion.img
                    src={bundle.imageSet[3].src}
                    alt={bundle.name + " 3"}
                    className="no-select w-[43%] z-30 h-auto object-cover absolute bottom-0 left-0"
                    initial={{ opacity: 0, bottom: "1%", left: "25%" }}
                    animate={{
                        opacity: 1,
                        transform: `translateX(${mousePosition.centerX * -4}%) translateY(${mousePosition.centerY * -3
                            }%)`,
                    }}
                    transition={{ type: "tween" }}
                />
                <motion.img
                    src={bundle.imageSet[4].src}
                    alt={bundle.name + " 4"}
                    className="no-select w-[36%] z-20 h-auto object-cover absolute bottom-0 left-0"
                    initial={{ opacity: 0, bottom: "12%", left: "59%" }}
                    animate={{
                        opacity: 1,
                        transform: `translateX(${mousePosition.centerX * -2}%) translateY(${mousePosition.centerY * -2
                            }%)`,
                    }}
                    transition={{ type: "tween" }}
                />
                <motion.img
                    src={bundle.imageSet[5].src}
                    alt={bundle.name + " 5"}
                    className="no-select w-[58%] z-50 h-auto object-cover absolute bottom-0 left-0"
                    initial={{ opacity: 0, top: "8%", left: "40%" }}
                    animate={{
                        opacity: 1,
                        transform: `translateX(${mousePosition.centerX * 2}%) translateY(${mousePosition.centerY * 1
                            }%)`,
                    }}
                    transition={{ type: "tween" }}
                />
                <motion.img
                    src={bundle.imageSet[6].src}
                    alt={bundle.name + " 5"}
                    className="no-select w-[27%] z-50 h-auto object-cover absolute bottom-0 left-0"
                    initial={{ opacity: 0, top: "6%", left: "3%" }}
                    animate={{
                        opacity: 1,
                        transform: `translateX(${mousePosition.centerX * 2}%) translateY(${mousePosition.centerY * 1
                            }%)`,
                    }}
                    transition={{ type: "tween" }}
                />
            </motion.div>
        </>
    );
};
