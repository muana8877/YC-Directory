import { auth } from "@/auth";
import { signInWithGithub, signOutUser } from "@/auth-actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth(); // ✅ call it

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form action={signOutUser}>
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session.user.id ?? ""}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={signInWithGithub}>
              <button type="submit">Log In</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
