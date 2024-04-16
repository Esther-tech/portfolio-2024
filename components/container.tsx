import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-lg m-auto bg-gray-100 min-h-screen">
      {children}
    </div>
  );
}
