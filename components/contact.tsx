"use client";
import React, { useState, createRef } from "react";
import PageSection from "./pageSection";
import { sendEmail } from "@/actions/sendEmail";
import FormButton from "./formButton";
import Toast from "./toast";
import indicator from "@/public/svg/section-indicator2.svg";

export default function Contact() {
  const [toast, setToast] = useState<{
    message: null | string;
    type: "success" | "error" | null;
  }>({ message: null, type: null });

  const formRef = createRef<HTMLFormElement>();

  return (
    <PageSection id="contact" title="Contact" indicator={indicator}>
      <div className="max-w-xl m-auto">
        {toast.message && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ message: null, type: null })}
          />
        )}

        <form
          ref={formRef}
          className="flex flex-col gap-4 items-center"
          action={async (formData: FormData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              setToast({
                message: error || "An error has occurred",
                type: "error",
              });
              return;
            }

            formRef.current?.reset();

            return setToast({
              message: "Email sent successfully",
              type: "success",
            });
          }}
        >
          <input
            type="email"
            name="sender"
            required
            placeholder="Your email"
            className="border border-slate-300 w-full px-4 py-2 rounded-md"
          />
          <textarea
            required
            name="message"
            maxLength={500}
            placeholder="Your message"
            className="border border-slate-300 rounded-md w-full p-4 h-52"
          />
          <FormButton />
        </form>
      </div>
    </PageSection>
  );
}
