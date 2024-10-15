"use client";

import * as React from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggleButton() {
  const { setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleThemeChange = (theme: React.SetStateAction<string>) => {
    setTheme(theme);
    setOpen(false); // Close the popup after setting the theme
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center hover:bg-gray-200/20 duration-300  rounded-full p-2 relative"
      >
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: open ? 0 : 1, scale: open ? 0.5 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <IoSunnyOutline size={20} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <RiMoonClearLine size={20} />
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 mt-2 bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-none rounded-md p-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => handleThemeChange("light")}
              className="block w-full px-5 py-2 text-left text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-14-regular"
            >
              Light
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className="block w-full px-5 py-2 text-left text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-14-regular"
            >
              Dark
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className="block w-full px-5 py-2 text-left text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-14-regular"
            >
              System
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
