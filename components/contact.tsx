"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { contactData, profileData } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);

  return (
    <section id="contact" ref={ref} className="scroll-mt-28 border-b-2 border-[var(--line)] bg-[var(--pink)]">
      <div className="mx-auto w-[min(100%,102rem)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <SectionHeading label="Reach Out">Contact</SectionHeading>

        <div className="grid overflow-hidden border-2 border-[var(--line)] lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="bg-black p-5 text-white sm:p-8 lg:p-10">
            <p className="gm-kicker text-white/75">{profileData.role}</p>
            <h3 className="mt-2 text-2xl leading-tight text-[var(--yellow)] sm:text-3xl">
              Let&apos;s discuss role fit and engineering scope.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
              Share team context, project constraints, and expected outcomes. I&apos;ll respond with practical
              next steps.
            </p>

            <a
              className="mt-6 block text-lg font-semibold text-white underline decoration-2 underline-offset-4 sm:text-xl"
              href={`mailto:${contactData.email}`}
            >
              {contactData.email}
            </a>
            <p className="mt-2 text-base text-white/85 sm:text-lg">{contactData.phone}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                className="gm-button inline-flex items-center bg-[var(--yellow)] px-4 py-2 text-sm font-semibold text-black"
                href={contactData.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="gm-button inline-flex items-center bg-[var(--panel-soft)] px-4 py-2 text-sm font-semibold text-black"
                href={contactData.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </aside>

          <div className="gm-line-top bg-[var(--panel-soft)] p-5 sm:p-8 lg:border-l-2 lg:border-t-0 lg:border-[var(--line)] lg:p-10">
            <form
              className="space-y-4"
              action={async (formData) => {
                const { error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success("Message sent successfully.");
              }}
            >
              <label className="gm-kicker text-[var(--ink-muted)]" htmlFor="senderEmail">
                Your email
              </label>
              <input
                id="senderEmail"
                className="gm-input w-full px-4 py-3 text-sm outline-none placeholder:text-[var(--ink-muted)] sm:text-base"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="you@example.com"
              />

              <label className="gm-kicker block pt-2 text-[var(--ink-muted)]" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="gm-input h-44 w-full resize-none px-4 py-3 text-sm outline-none placeholder:text-[var(--ink-muted)] sm:text-base"
                name="message"
                placeholder="Role, team size, timeline, and technical context."
                required
                maxLength={5000}
              />

              <div className="pt-1">
                <SubmitBtn />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
