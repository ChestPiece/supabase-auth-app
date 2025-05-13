// components/NavLogo.tsx
import React from "react";
import Link from "next/link";

const NavLogo = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center" onClick={closeMenu}>
        <span className="text-xl font-bold text-slate-900 dark:text-white">
          <span className="text-violet-600 dark:text-violet-400">ath</span>.test
        </span>
      </Link>
    </div>
  );
};

export default NavLogo;
