"use client";

import React from "react";
import { contactData, links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaGithub, FaStar } from "react-icons/fa";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed left-0 top-0 z-[999] w-full border-y border-white/20 bg-black text-white">
      <nav className="mx-auto grid w-[min(100%,102rem)] items-stretch lg:grid-cols-[auto_1fr_auto]">
        <Link
          href="#home"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
          className="flex items-center gap-3 border-r border-white/20 px-4 py-4 sm:px-6"
        >
          <span className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
            ANIKET
          </span>
          <span className="hidden items-center gap-2 rounded-full border border-white/35 px-3 py-1 text-xs font-semibold md:inline-flex">
            <FaGithub className="text-sm" />
            Portfolio
            <FaStar className="text-[0.65rem]" />
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-2 px-4 lg:flex">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  activeSection === link.name
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-stretch">
          <a
            href={contactData.resumePath}
            download
            className="hidden items-center border-l border-white/20 px-5 text-sm font-semibold md:flex"
          >
            Resume
          </a>
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="flex items-center border-l border-white/20 bg-[var(--pink)] px-5 text-base font-semibold text-black sm:px-7"
          >
            Contact
          </Link>
        </div>
      </nav>

      <div className="flex items-center gap-1 overflow-x-auto border-t border-white/20 px-3 py-2 lg:hidden">
        {links.map((link) => (
          <Link
            key={link.hash}
            className={clsx(
              "rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap",
              activeSection === link.name
                ? "bg-white text-black"
                : "bg-white/10 text-white"
            )}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
