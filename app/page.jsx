"use client";
import { useSession } from "next-auth/react";
import Layout from "./(Dashboard)/layout";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <main className="text-blue-400 flex w-full justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <section className="flex h-9 gap-2 items-center px-3 bg-gray-100 rounded-2xl">
          <Image
            className="w-6 h-6 rounded-full "
            src={session?.user?.image}
            alt="User profile image"
            width="30"
            height="30"
          />
          {session?.user?.name}
        </section>
      </main>
    </Layout>
  );
}
