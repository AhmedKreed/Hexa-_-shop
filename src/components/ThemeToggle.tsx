"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import Image from "next/image";
const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  if (resolvedTheme === "dark") {
    return (
      <BsSunFill
        className="text-primary mr-3 cursor-pointer"
        size={32}
        onClick={() => setTheme("light")}
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <FaMoon
        className="text-primary mr-3 cursor-pointer"
        size={32}
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default ThemeToggle;
