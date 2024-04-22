import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-screen-lg m-auto min-h-screen">{children}</div>;
}
