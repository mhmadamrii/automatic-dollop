import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-blue-500">
      <Button>Click me</Button>
      <Link href="/seed">Seed</Link>
    </main>
  );
}
