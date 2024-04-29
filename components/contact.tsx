import React from "react";
import PageSection from "./pageSection";

export default function Contact() {
  return (
    <PageSection id="contact" title="Contact">
      <div className="max-w-xl m-auto">
        <form className="flex flex-col gap-4 ">
          <input type="email" className="border border-slate-200 rounded-sm" />
          <textarea className="border border-slate-200 rounded-sm" />
          <button type="submit">Send</button>
        </form>
      </div>
    </PageSection>
  );
}
