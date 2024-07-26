import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <img
        src="https://raccoelec.fr/wp-content/uploads/2024/06/template-2-1-1024x164.png"
        alt="Logo"
        className="w-[200px]"
      />
    </Link>
  );
};

export default Logo;
