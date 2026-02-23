"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import portfolioImage from "@/public/portfolioSiteImage.png";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { contactData, introStats, profileData } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.45);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const mainStats = introStats.slice(0, 3);
  const domainStat = introStats[3];

  return (
    <section
      ref={ref}
      id="home"
      className="relative scroll-mt-36 overflow-hidden border-b-2 border-[var(--line)] bg-[var(--bg)] pb-10 pt-10 sm:pb-12 sm:pt-14 lg:pb-16 lg:pt-16"
    >
      <span className="gm-hero-coin gm-hero-coin-left" aria-hidden>
        A
      </span>
      <span className="gm-hero-coin gm-hero-coin-top" aria-hidden>
        M
      </span>
      <span className="gm-hero-coin gm-hero-coin-right" aria-hidden>
        R
      </span>

      <div className="relative mx-auto w-[min(100%,102rem)] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="gm-kicker text-[var(--ink-muted)]">{profileData.role}</p>
          <h1 className="mt-4 text-3xl leading-[0.92] text-[var(--ink)] sm:text-5xl lg:text-[4.7rem]">
            Building resilient systems from idea to production.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-xl">
            {profileData.summary}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="#contact"
              className="gm-button inline-flex items-center gap-2 bg-black px-5 py-3 text-sm font-semibold text-white max-sm:w-full max-sm:justify-center sm:text-base"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me
              <BsArrowRight className="text-xs" />
            </Link>

            <a
              href={contactData.resumePath}
              download
              className="gm-button inline-flex items-center bg-[var(--panel-soft)] px-5 py-3 text-sm font-semibold text-[var(--ink)] max-sm:w-full max-sm:justify-center sm:text-base"
            >
              Download resume
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="gm-button inline-flex items-center gap-2 bg-[var(--panel-soft)] px-4 py-3 text-sm font-semibold text-[var(--ink)] max-sm:flex-1 max-sm:justify-center sm:text-base"
            >
              <BsLinkedin /> LinkedIn
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noreferrer"
              className="gm-button inline-flex items-center gap-2 bg-[var(--panel-soft)] px-4 py-3 text-sm font-semibold text-[var(--ink)] max-sm:flex-1 max-sm:justify-center sm:text-base"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <p className="mt-5 text-sm text-[var(--ink-muted)] sm:text-base">
            Portfolio and resume are fully synced to latest role details.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border-2 border-black/20 bg-[var(--panel-soft)] p-6 sm:p-8">
            <h2 className="text-2xl leading-[0.95] text-[var(--ink)] sm:text-3xl">
              Experience that ships
            </h2>

            <ul className="mt-6 space-y-5">
              {mainStats.map((item) => (
                <li key={item.label} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="mt-2 h-5 w-5 rounded-full border-2 border-[var(--line)] bg-[var(--pink)]" />
                  <div>
                    <p className="text-base font-semibold text-[var(--ink)] sm:text-lg">
                      {item.label}: {item.value}
                    </p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)] sm:text-base">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border-2 border-black/20 bg-[var(--panel-soft)] p-6 sm:p-8">
            <h2 className="text-2xl leading-[0.95] text-[var(--ink)] sm:text-3xl">
              Make your own road
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              {profileData.headline}
            </p>

            <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border-2 border-[var(--line)] sm:grid-cols-3">
              <div className="bg-[var(--panel)] p-4">
                <p className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">2+</p>
                <p className="text-xs text-[var(--ink-muted)] sm:text-sm">Years</p>
              </div>
              <div className="border-y-2 border-[var(--line)] bg-[var(--panel)] p-4 sm:border-x-2 sm:border-y-0">
                <p className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">4</p>
                <p className="text-xs text-[var(--ink-muted)] sm:text-sm">Domains</p>
              </div>
              <div className="bg-[var(--panel)] p-4">
                <p className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">80%</p>
                <p className="text-xs text-[var(--ink-muted)] sm:text-sm">Bandwidth cut</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-[var(--ink-muted)] sm:text-base">
              {domainStat.value}
            </p>
          </article>

          <div className="gm-tech-window mt-1 lg:absolute lg:left-1/2 lg:top-[-3.6rem] lg:mt-0 lg:w-[34rem] lg:-translate-x-1/2">
            <div className="gm-tech-window-top">
              <span />
              <span />
              <span />
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.85fr]">
              <div>
                <p className="gm-kicker text-[var(--ink-muted)]">Primary stack</p>
                <h3 className="mt-2 text-xl leading-tight text-[var(--ink)] sm:text-2xl">
                  TypeScript, Next.js, PostgreSQL
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="gm-pill bg-[var(--teal)] text-black">Backend</span>
                  <span className="gm-pill bg-[var(--yellow)] text-black">Web + Mobile</span>
                  <span className="gm-pill bg-[var(--pink)] text-black">SaaS</span>
                </div>
              </div>

              <div className="rounded-xl border-2 border-[var(--line)] bg-black p-4 text-[var(--blue)]">
                <p className="text-sm uppercase tracking-wide text-white/70">Current focus</p>
                <ul className="mt-3 space-y-2">
                  <li className="text-base leading-tight sm:text-lg">System reliability</li>
                  <li className="text-base leading-tight sm:text-lg">Data correctness</li>
                  <li className="text-base leading-tight sm:text-lg">Fast delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border-2 border-[var(--line)] bg-[var(--panel)] p-3 lg:mt-10">
          <Image
            src={portfolioImage}
            alt="Portfolio preview"
            className="h-52 w-full rounded-2xl border-2 border-[var(--line)] object-cover sm:h-64 lg:h-72"
            priority
          />
        </div>
      </div>
    </section>
  );
}
