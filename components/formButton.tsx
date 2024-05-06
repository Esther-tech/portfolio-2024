import React from "react";

import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex justify-center items-center h-10 w-20 bg-slate-950 text-white text-sm rounded-xl hover:scale-105 transition disabled:bg-slate-900"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>Send</>
      )}
    </button>
  );
}
