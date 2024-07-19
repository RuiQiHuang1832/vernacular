/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tab } from "./useTabs";

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.15,
};

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
};

const Tabs = ({ tabs, selectedTabIndex, setSelectedTab, }: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  return (
    <nav
      ref={navRef}
      className="custom-class-1"
      onPointerLeave={(e) => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        return (
          <motion.button
            key={i}
            className={classNames(
              "custom-class-2 btn ", { "custom-class-3": hoveredTabIndex === i || selectedTabIndex === i, }
            )}
            ref={(el) => (buttonRefs[i] = el)}
            onPointerEnter={() => {
              setHoveredTabIndex(i);
            }}
            onFocus={() => {
              setHoveredTabIndex(i);
            }}
            onClick={() => {
              setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
            }}
          >
            {item.label}
          </motion.button>
        );
      })}
      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key={"hover"}
            className="custom-class-4"
            initial={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            animate={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            exit={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>
      {selectedRect && navRect && (
        <motion.div
          className={"custom-class-5"}
          initial={false}
          animate={{
            width: selectedRect.width * 0.8,
            x: `calc(${selectedRect.left - navRect.left}px + 10%)`,
            opacity: 1,
          }}
          transition={transition}
        />
      )}
    </nav>
  );
};


export const Framer = { Tabs };