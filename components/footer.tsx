import React from "react";
import { contactData, profileData } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-y-2 border-[var(--line)] bg-black text-white">
      <div className="mx-auto grid w-[min(100%,102rem)] items-stretch md:grid-cols-[1fr_auto]">
        <div className="border-b-2 border-[var(--line)] px-4 py-5 md:border-b-0 md:border-r-2 md:px-6">
          <p className="text-sm font-semibold sm:text-base">{profileData.name} · {profileData.role}</p>
          <p className="mt-1 text-sm text-white/80 sm:text-base">© {year} · {profileData.location}</p>
        </div>

        <a
          href={`mailto:${contactData.email}`}
          className="flex items-center bg-[var(--pink)] px-6 py-4 text-sm font-semibold break-all text-black sm:text-base md:px-8"
        >
          {contactData.email}
        </a>
      </div>
    </footer>
  );
}
