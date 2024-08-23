// Functions
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Styles
import "@/styles/globals.css";
import { CursorsProvider } from "@/components/cursors";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "arsen shkrumelyak - i build things",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const _headers = headers();
	const country = _headers.get("x-vercel-ip-country") || "Outer Space";
	const city = _headers.get("x-vercel-ip-country-city") || "Somewhere";
	const location = `${city}, ${country}`;

	return (
		<html lang="en">
			<body className={`${inter.className} bg-zinc-50 dark:bg-zinc-950`}>
				<CursorsProvider location={location || "Unknown"}>
					{children}
				</CursorsProvider>
			</body>
		</html>
	);
}
