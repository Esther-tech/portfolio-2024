"use client";
import React, { useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error" | null;
  onClose: () => void;
}) {
  const icon =
    type === "success" ? (
      <CheckCircleIcon className="h-4 w-4 fill-green-500 opacity-90" />
    ) : (
      <XCircleIcon className="h-4 w-4 fill-red-500 opacity-90" />
    );

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 5000);
  }, [onClose]);

  return (
    <div className="fixed flex items-center justify-between gap-3 top-16 left-1/2 w-[90%] md:w-auto px-4 py-3 bg-white dark:bg-slate-300 dark:text-slate-900 rounded-md text-xs z-50 translate-x-[-50%] shadow-lg">
      <div>{message}</div>
      <div className="w-5">{icon}</div>
    </div>
  );
}
