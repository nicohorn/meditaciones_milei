import React from "react";
import SignInButton from "../login/sign_in_button";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth_options";
import SignOutButton from "../login/sign_out_button";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <Link href="/" className="flex flex-col">
      <div className="text-5xl space-x-2 flex items-center">
        <Image
          width={30}
          height={30}
          src="/assets/laurel-left.png"
          alt={"Laurel izquierdo"}
          className="translate-y-1"
        />
        <h1>
          Meditaciones <b>Milei</b>
        </h1>
        <Image
          width={30}
          height={30}
          src="/assets/laurel-right.png"
          alt={"Laurel derecho"}
          className="translate-y-1 "
        />
      </div>
      {session ? <SignOutButton /> : <SignInButton provider="google" />}
    </Link>
  );
}
