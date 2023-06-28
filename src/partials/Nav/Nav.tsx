import { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { data } from "./data";

export function Nav(): ReactElement {
  const currentRouter = useRouter().pathname;

  return (
    <nav className="bg-body-primary text-white flex justify-between px-32 py-8">
      <div>Logo</div>
      <ul className="flex gap-5">
        {data.map((item, index) => (
          <li
            key={index}
            className={`${
              currentRouter === item.href && "border-b-2 border-primary-10"
            }`}
          >
            <Link
              href={item.href}
              className={`capitalize text-zinc-300 hover:text-primary-10 transition-colors ${
                currentRouter === item.href &&
                "cursor-not-allowed hover:text-zinc-300"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
