"use client";
import React, { useEffect, useState } from "react";
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
  console.log(message);
  console.log(type);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (!visible) {
      onClose();
    }
  }, [visible, onClose]);

  const icon =
    type === "success" ? (
      <CheckCircleIcon className="h-4 w-4 fill-green-500 opacity-90" />
    ) : (
      <XCircleIcon className="h-4 w-4 fill-red-500 opacity-90" />
    );

  return visible ? (
    <div className="fixed flex gap-3 top-16 left-1/2 py-3 px-5 bg-white rounded-md text-xs z-50 translate-x-[-50%] shadow-lg">
      {message}
      {icon}
    </div>
  ) : (
    <></>
  );
}
