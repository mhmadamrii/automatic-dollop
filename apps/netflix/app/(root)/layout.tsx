import Navbar from "~/components/Navbar";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "~/lib/utils/auth";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
