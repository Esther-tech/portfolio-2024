"use client";
import React from "react";
import PageSection from "./pageSection";
import { sendEmail } from "@/lib/actions/sendEmail";
import FormButton from "./formButton";

export default function Contact() {
  return (
    <PageSection id="contact" title="Contact">
      <div className="max-w-xl m-auto">
        <form
          className="flex flex-col gap-4 items-center"
          action={async (formData: FormData) => {
            console.log("yes");
            const { data, error } = await sendEmail(formData);

            if (error) {
              alert(error);
              return;
            }

            alert("Email sent successfully");
          }}
        >
          <input
            type="email"
            name="sender"
            required
            placeholder="Your email"
            className="border border-slate-200 w-full px-4 py-2 rounded-md"
          />
          <textarea
            required
            name="message"
            maxLength={500}
            placeholder="Your message"
            className="border border-slate-200 rounded-md w-full p-4 h-52"
          />
          <FormButton />
        </form>
      </div>
    </PageSection>
  );
}
