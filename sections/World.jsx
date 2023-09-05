"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

import styles from "@/styles/index";
import { TypingText, TitleText } from "@/components/CustomTexts";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />

        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.webp"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-01.webp" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-02.webp" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-03.webp" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-[40%] left-[20%] w-[217px] h-[167px] p-[10px] rounded-[20px] bg-[#5d6680] flex items-center justify-center">
            <div className="w-[90%] h-[90%] bg-pink-500 blur-[20px] absolute z-0" />
            <div className="relative z-1 w-full h-full">
              <img
                src="/upside-down.png"
                alt="people"
                className="w-full h-full rounded-[20px] object-cover"
              />

              <div className="absolute bottom-0 flex flex-col gap-1 p-3 w-full">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <img
                      src="/people-01.webp"
                      alt="people"
                      className="w-[22პხ] h-[22px] rounded-full relative z-[2]"
                    />
                    <img
                      src="/people-02.webp"
                      alt="people"
                      className="w-[22პხ] h-[22px] rounded-full -ml-[12px] relative z-[1]"
                    />
                    <img
                      src="/people-03.webp"
                      alt="people"
                      className="w-[22პხ] h-[22px] rounded-full -ml-[12px]"
                    />
                  </div>
                  <span className="-ml-[12px] text-[12px] flex items-center text-white">
                    + 264 has joined
                  </span>
                </div>
                <h4 className="text-[18px] text-white font-extrabold">
                  The Upside Down
                </h4>
              </div>
            </div>
          </div>

          <div className="absolute top-[7%] right-[20%] w-[217px] h-[167px] p-[10px] rounded-[20px] bg-[#5d6680] flex items-center justify-center">
            <div className="w-[90%] h-[90%] bg-indigo-500 blur-[20px] absolute z-0" />
            <div className="relative z-1 w-full h-full">
              <img
                src="/hawkins-hub.png"
                alt="people"
                className="w-full h-full rounded-[20px] object-cover"
              />

              <div className="absolute bottom-0 flex flex-col gap-1 p-3 w-full">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <img
                      src="/people-03.webp"
                      alt="people"
                      className="w-[22პხ] h-[22px] rounded-full relative z-[2]"
                    />
                    <img
                      src="/people-02.webp"
                      alt="people"
                      className="w-[22პხ] h-[22px] rounded-full -ml-[12px] relative z-[1]"
                    />
                    <img
                      src="/people-01.webp"
                      alt="people"
                      className="w-[22პხ] h-[22px] rounded-full -ml-[12px]"
                    />
                  </div>
                  <span className="-ml-[12px] text-[12px] flex items-center text-white">
                    + 264 has joined
                  </span>
                </div>
                <h4 className="text-[18px] text-white font-extrabold">
                  Hawkins Labs
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
