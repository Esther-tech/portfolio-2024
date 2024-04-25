import React, { ReactNode } from "react";

export default function PageSection({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-10 px-5 max-w-screen-md m-auto">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
