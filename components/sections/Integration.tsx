"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import IntegrationItem from "../ui/IntegrationItem";
import Button from "../ui/Button";

const data = [
  "Octo Browser",
  "AdsPower",
  "GoLogin",
  "Dolphin",
  "Multilogin",
  "Zennoposter",
  "BaBlosoft",
];

export default function Integration() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const translateRow1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const translateRow2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="pb-[40px] min-[1100px]:px-[40px] py-[40px] md:py-[140px] bg-white space-y-[80px]"
    >
      <div className="max-w-[1328px] mx-auto">
        {/* Заголовки */}
        <div className="text-black space-y-[24px] px-[16px] md:px-0">
          <h2 className="text-center">Good for integration with</h2>
          <h3 className="text-center">
            Tested and compatible with all major antidetect solutions.
          </h3>
        </div>

        {/* 💻 Десктоп */}
        <div className="hidden min-[1100px]:flex justify-center gap-[24px] py-[48px]">
          {data.map((ele, index) => (
            <IntegrationItem key={index} title={ele} />
          ))}
        </div>

        {/* 📱 Мобилка: 2 строки, каждая с полным списком, дублированным */}
        <div className="flex flex-col gap-[16px] min-[1100px]:hidden overflow-hidden py-[40px] md:py-[48px] px-[16px]">
          {/* Первая строка */}
          <motion.div
            style={{ x: translateRow1 }}
            className="flex gap-[24px] w-max"
          >
            {[...data, ...data].map((ele, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 whitespace-nowrap"
              >
                <IntegrationItem title={ele} />
              </div>
            ))}
          </motion.div>

          {/* Вторая строка */}
          <motion.div
            style={{ x: translateRow2 }}
            className="flex gap-[24px] w-max px-2 ml-auto"
          >
            {[...data, ...data].map((ele, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 whitespace-nowrap"
              >
                <IntegrationItem title={ele} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center">
          <Button
            link="/"
            color="gradient"
            text="TALK WITH SPECIALIST"
            size={true}
          />
        </div>
      </div>
    </section>
  );
}
