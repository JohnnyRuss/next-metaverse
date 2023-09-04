"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

import styles from "@/styles/index";
import { TypingText, TitleText } from "@/components/CustomTexts";
import { ExploreCard } from "@/components";

import { exploreWorlds } from "@/constants";

const Explore = () => {
  const [active, setActive] = useState("");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />

        <TitleText
          textStyles="text-center"
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore{" "}
            </>
          }
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              world={world}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
