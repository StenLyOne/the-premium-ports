"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const data = [
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "Brazil",
  "France",
  "India",
  "Japan",
  "Singapore",
  "Italy",
  "Turkey",
  "Netherlands",
];

export default function Locations() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 20%"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section
      ref={ref}
      id="locations"
      className="pb-[40px]  md:px-[40px] py-[40px] md:py-[140px] bg-white "
    >
      {/* Header */}
      <div className=" space-y-[40px] md:space-y-[80px]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1328px] mx-auto flex gap-[40px]">
          <div className="space-y-[20px] md:space-y-[24px] px-[16px] md:px-[0px] md:max-w-[504px] text-center md:text-left">
            <h2 className="!text-black">Top Locations</h2>
            <h3 className="!text-black !font-[400]">
              Our company offers mobile and home residential proxies in 195
              countries.
            </h3>
          </div>
          <div className="px-[16px]">
            <img src="/svg/map.svg" alt="" />
          </div>
        </div>

        {/* Desktop block */}
        <div className="max-w-[1328px] mx-auto  md:grid md:grid-cols-4 md:grid-rows-3 md:gap-[24px] hidden md:block">
          {data.map((ele, index) => (
            <div className="flex gap-[12px] items-center" key={index}>
              <img src={`/svg/${ele}.svg`} alt="" />
              <p>{ele}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile block with motion */}
      <div className="md:hidden flex flex-col gap-y-6 overflow-hidden">
        {/* Row 1 */}
        <motion.div className="flex gap-x-[16px] w-max px-2" style={{ x: x1 }}>
          {data.map((ele, index) => (
            <div
              className="flex gap-[12px] items-center min-w-[160px]"
              key={`row1-${index}`}
            >
              <img src={`/svg/${ele}.svg`} alt="" />
              <p className="whitespace-nowrap">{ele}</p>
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex gap-x-[16px] w-max px-2 ml-auto"
          style={{ x: x2 }}
        >
          {data.map((ele, index) => (
            <div
              className="flex gap-[12px] items-center min-w-[160px]"
              key={`row2-${index}`}
            >
              <img src={`/svg/${ele}.svg`} alt="" />
              <p className="whitespace-nowrap">{ele}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
