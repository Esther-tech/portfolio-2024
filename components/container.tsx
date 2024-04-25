import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pb-5 md:pb-24 min-h-screen relative">{children}</div>;
}
