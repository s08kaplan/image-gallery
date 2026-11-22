import { useEffect, useRef, useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import "./Navbar.css";
import type { NavItem } from "../types";

const DRAWER_ID = "glass-nav-toggle";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Photos",
    href: "/photos",
    children: [
      { label: "Nature", href: "/photos/nature", description: "Nature images for you" },
      { label: "Wallpapers", href: "/photos/wallpapers", description: "Wallpapers for you" },
      { label: "Travel", href: "/photos/travel", description: "Beautiful trip photos" },
    ],
  },
 /*  {
    label: "Resources",
    href: "#resources",
    children: [
      { label: "Documentation", href: "#docs", description: "Guides and API reference" },
      { label: "Changelog", href: "#changelog", description: "Latest product updates" },
    ],
  }, */
 /*  { label: "Pricing", href: "#pricing" }, */
];

export default function Navbar() {
const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        const toggle = document.getElementById(DRAWER_ID) as HTMLInputElement | null;
        if (toggle) toggle.checked = false;
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const closeAll = () => {
    setOpenDropdown(null);
    const toggle = document.getElementById(DRAWER_ID) as HTMLInputElement | null;
    if (toggle) toggle.checked = false;
  };

  return (
    <header ref={navRef} className="glass-nav">
      <input
        id={DRAWER_ID}
        type="checkbox"
        className="glass-nav__toggle"
        aria-hidden="true"
      />

      <div className="glass-nav__inner">
        <a href="/" className="glass-nav__brand" onClick={closeAll}>
          <span className="glass-nav__brand-mark" aria-hidden="true" />
          <img src="/garip.webp" alt="logo" width={40} style={{borderRadius:".5rem"}}/>
        </a>

        <div className="glass-nav__desktop">
          <NavLinks
            items={NAV_ITEMS}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            onNavigate={closeAll}
          />
         {/*  <a href="#get-started" className="glass-nav__cta" onClick={closeAll}>
            Get Started
          </a> */}
        </div>

        <HamburgerButton htmlFor={DRAWER_ID} />
      </div>

      <MobileDrawer
        drawerId={DRAWER_ID}
        items={NAV_ITEMS}
        onClose={closeAll}
      />
    </header>
  );
}