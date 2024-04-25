import { ReactElement } from "react";

export default function PageSection({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: ReactElement;
}) {
  return (
    <section id={id} className="py-10 px-3 sm:px-5 max-w-screen-md m-auto">
      {title && <h2 className="capitalize mb-5 text-lg font-bold">{title}</h2>}
      {children}
    </section>
  );
}
