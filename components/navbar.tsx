"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavLogo from "./navbar-components/NavLogo";
import LoginButton from "./navbar-components/LoginButton";
import SignUpButton from "./navbar-components/SingUpButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLogo closeMenu={closeMenu} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-4 ">
            <LoginButton pathname={pathname} />
            <SignUpButton pathname={pathname} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-slate-700 dark:text-slate-200" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700 dark:text-slate-200" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900">
              <nav className="flex flex-col space-y-3">
                <Link href="/login" passHref>
                  <Button
                    variant="ghost"
                    className={cn(
                      " cursor-pointer w-full justify-start text-slate-700 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400",
                      pathname === "/login" &&
                        "text-violet-600 dark:text-violet-400"
                    )}
                    onClick={closeMenu}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup" passHref>
                  <Button
                    className={cn(
                      "cursor-pointer w-full bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700",
                      pathname === "/signup" &&
                        "bg-violet-700 dark:bg-violet-700"
                    )}
                    onClick={closeMenu}
                  >
                    Sign Up
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
