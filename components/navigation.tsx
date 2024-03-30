"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "../components/navigation.module.css";

function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About-us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
