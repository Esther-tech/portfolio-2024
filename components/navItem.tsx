import React from "react";
import Link from "next/link";

export default function NavItem({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return <Link href={href}>{title}</Link>;
}
