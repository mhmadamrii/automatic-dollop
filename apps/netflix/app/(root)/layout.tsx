import { getServerSession } from "next-auth";
import { authOptions } from "~/lib/utils/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
