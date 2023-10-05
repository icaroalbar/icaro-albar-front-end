import { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { data } from "./data";

export function Nav(): ReactElement {
  return (
    <nav className="bg-body-primary text-white flex md:justify-between px-20 py-8">
      <div>Logo</div>
      <ul className="hidden md:flex gap-5">
        {data.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`capitalize text-zinc-300 hover:text-primary-10 transition-colors`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
