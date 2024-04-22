import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-md px-5 m-auto min-h-screen">{children}</div>
  );
}
