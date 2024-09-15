import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-20 px-4 sm:px-6 lg:px-8">
      <Link href="/login">Login</Link>
    </section>
  );
}
