"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white shadow-subtle rounded-[20px] p-[20px] shadow-sm transition-all duration-300 ${
        open ? "shadow-md" : ""
      }`}
    >
      <div
        className="flex  justify-between items-center cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <p className="text-[18px] md:text-[20px] font-[600] leading-tight text-[#001251] max-w-[90%]">
          {question}
        </p>

        <div
          className={`flex items-center justify-center rounded-full shrink-0 ${
            open ? "bg-[#E8EFFF]" : "bg-[#E8EFFF]"
          } w-[38px] h-[38px] md:w-[48px] md:h-[48px]`}
        >
          {open ? (
            <svg
              width="20"
              height="2"
              viewBox="0 0 20 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[25px] md:h-[2px]"
            >
              <rect width="20" height="2" fill="#001251" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[25px] md:h-[25px]"
            >
              <rect x="9" width="2" height="20" fill="#001251" />
              <rect y="9" width="20" height="2" fill="#001251" />
            </svg>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pt-[12px]"
          >
            <p className="text-[#001251] text-[16px] md:text-[17px] leading-[1.5]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
