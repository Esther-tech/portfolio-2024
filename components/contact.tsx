"use client";
import React, { useState } from "react";
import PageSection from "./pageSection";
import { sendEmail } from "@/actions/sendEmail";
import FormButton from "./formButton";
import Toast from "./toast";

export default function Contact() {
  const [toast, setToast] = useState<{
    message: null | string;
    type: "success" | "error" | null;
  }>({ message: null, type: null });

  console.log(toast.type);

  return (
    <PageSection id="contact" title="Contact">
      <div className="max-w-xl m-auto">
        {toast.message && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ message: null, type: null })}
          />
        )}

        <form
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
