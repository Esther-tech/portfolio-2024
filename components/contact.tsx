import React from "react";
import PageSection from "./pageSection";

export default function Contact() {
  return (
    <PageSection id="contact" title="Contact">
      <div className="max-w-xl m-auto">
        <form className="flex flex-col gap-4 items-center">
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
          <button
            type="submit"
            className="py-3 px-6 bg-slate-950 text-slate-50 rounded-xl hover:scale-110 focus:scale-110 transition"
          >
            Send
          </button>
        </form>
      </div>
    </PageSection>
  );
}
