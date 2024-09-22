import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tab } from "../hooks/useTabs";
import Link from "next/link";

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.15,
};

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
  onTabClick: (label:string) => void;
};

const Tabs = ({ tabs, selectedTabIndex, setSelectedTab, onTabClick }: Props): JSX.Element => {
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
      className="nav-container"
      onPointerLeave={() => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        return (
          <Link scroll={false} key={i} href={`?tab=${encodeURIComponent(item.id.toLowerCase()).replace(/%20/g, '+')}`} style={{color:"white"}} className="text-decoration-none">
          <motion.button
            key={i}
            className={classNames(
              "tab btn", { "active-tab": hoveredTabIndex === i || selectedTabIndex === i, } 
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
              onTabClick(item.id);
            }}
          >
            {item.id} {item.hasBadge && <span className="badge text-bg-primary ms-2">{i}</span>}
          </motion.button>
          </Link>
        );
      })}
      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key="hover"
            className="tab-slider"
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
              
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>
      {selectedRect && navRect && (
        <motion.div
          className="underline"
          initial={false}
          animate={{
            width: selectedRect.width * 0.85,
            x: `calc(${selectedRect.left - navRect.left}px + 9%)`,
            opacity: 1,
          }}
          transition={transition}
        />
      )}
    </nav>
  );
};


export const Framer = { Tabs };