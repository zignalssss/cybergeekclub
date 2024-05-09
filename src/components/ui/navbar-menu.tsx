"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 1,
};

export const MenuItemDropdownA = ({
  setActiveA,
  activeA,
  item,
  children,
}: {
  setActiveA: (item: string) => void;
  activeA: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActiveA(item)} className="relative">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        <div className={`group md:px-4 md:py-2 transition-all duration-250 ${activeA ? 'text-green-400 scale-110' : 'text-green-40'}`}>
          <div className="flex">
            {item}
            {activeA ? <RiArrowDropDownLine className="mt-1 text-xl transition-all duration-250 text-green-400" /> : <RiArrowDropDownLine className="mt-1 text-xl transition-all duration-250 rotate-180 text-white" />}
          </div>
          <span className={`flex justify-center justify-items-center scale-0 transition-all duration-500 h-0.5 bg-green-400 ${activeA ? 'scale-100' : 'scale-0'}`}></span>
        </div>
      </motion.div>
      {activeA !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {activeA === item && (
            <div className="absolute top-[calc(100%_+_0.2rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const MenuItemDropdownB = ({
  setActiveB,
  activeB,
  item,
  children,
}: {
  setActiveB: (item: string) => void;
  activeB: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActiveB(item)} className="relative">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        <div className={`group md:px-4 md:py-2 transition-all duration-250 ${activeB ? 'text-green-400 scale-110' : 'text-green-40'}`}>
          <div className="flex">
            {item}
            {activeB ? <RiArrowDropDownLine className="mt-1 text-xl transition-all duration-250 text-green-400" /> : <RiArrowDropDownLine className="mt-1 text-xl transition-all duration-250 rotate-180 text-white" />}
          </div>
          <span className={`flex justify-center justify-items-center scale-0 transition-all duration-500 h-0.5 bg-green-400 ${activeB ? 'scale-100' : 'scale-0'}`}></span>
        </div>
      </motion.div>
      {activeB !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {activeB === item && (
            <div className="absolute top-[calc(100%_+_0.2rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const MenuItemDropdownC = ({
  setActiveC,
  activeC,
  item,
  children,
}: {
  setActiveC: (item: string) => void;
  activeC: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActiveC(item)} className="relative">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        <div className={`group md:px-4 md:py-2 transition-all duration-250 ${activeC ? 'text-green-400 scale-110' : 'text-green-40'}`}>
          <div className="flex">
            {item}
            {activeC ? <RiArrowDropDownLine className="mt-1 text-xl transition-all duration-250 text-green-400" /> : <RiArrowDropDownLine className="mt-1 text-xl transition-all duration-250 rotate-180 text-white" />}
          </div>
          <span className={`flex justify-center justify-items-center scale-0 transition-all duration-500 h-0.5 bg-green-400 ${activeC ? 'scale-100' : 'scale-0'}`}></span>
        </div>
      </motion.div>
      {activeC !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {activeC === item && (
            <div className="absolute top-[calc(100%_+_0.2rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};


export const MenuA = ({
  setActiveA,
  children,
}: {
  setActiveA: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActiveA(null)} // resets the state
    >
      {children}
    </nav>
  );
};

export const MenuB = ({
  setActiveB,
  children,
}: {
  setActiveB: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActiveB(null)} // resets the state
    >
      {children}
    </nav>
  );
};

export const MenuC = ({
  setActiveC,
  children,
}: {
  setActiveC: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActiveC(null)} // resets the state
    >
      {children}
    </nav>
  );
};

// section mobile 
// export const MenuItemDropdownMobile = ({
//   ActiveMobile,
//   activeMobile,
//   item,
//   children,
// }: {
//   ActiveMobile: (item: string) => void;
//   activeMobile: string | null;
//   item: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div onClick={() => ActiveMobile(item)} className="relative">
//       <motion.div
//         transition={{ duration: 0.3 }}
//         className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
//       >
//         <div className={`group md:px-4 md:py-2 transition-all duration-250 ${activeMobile ? 'text-green-400 scale-110' : 'text-green-40'}`}>
//           <div className="flex">
//             {item}
//             {activeMobile ? <RiArrowDropDownLine className="mt-1 text-xl transition-all duration-250 text-green-400" /> : <RiArrowDropDownLine className="mt-1 text-xl transition-all duration-250 rotate-180 text-white" />}
//           </div>
//           <span className={`flex justify-center justify-items-center scale-0 transition-all duration-500 h-0.5 bg-green-400 ${activeMobile ? 'scale-100' : 'scale-0'}`}></span>
//         </div>
//       </motion.div>
//       {activeMobile !== null && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={transition}
//         >
//           {activeMobile === item && (
//             <div className="absolute top-[calc(100%_+_0.2rem)] left-1/2 transform -translate-x-1/2">
//               <motion.div
//                 transition={transition}
//                 layoutId="active" // layoutId ensures smooth animation
//                 className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
//               >
//                 <motion.div
//                   layout // layout ensures smooth animation
//                   className="w-max h-full p-4"
//                 >
//                   {children}
//                 </motion.div>
//               </motion.div>
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// };


// export const MenuMobile = ({
//   ActiveMobile,
//   children,
// }: {
//   ActiveMobile: (item: string | null) => void;
//   children: React.ReactNode;
// }) => {
//   return (
//     <nav
//       onMouseLeave={() => ActiveMobile(null)} // resets the state
//     >
//       {children}
//     </nav>
//   );
// };

