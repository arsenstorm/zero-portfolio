// Functions
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Styles
import "@/styles/globals.css";

// Analytics
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "arsen shkrumelyak - i build things",
	description: "",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-zinc-50 dark:bg-zinc-950`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
