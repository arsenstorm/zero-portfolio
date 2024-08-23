// Functions
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Styles
import "@/styles/globals.css";
import { CursorsProvider } from "@/components/cursors";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
	const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

	const _headers = headers();
	const countryCode = _headers.get("x-vercel-ip-country") || "";
	const city = _headers.get("x-vercel-ip-city") || "";

	const countriesWithThe = ["GB", "US", "AE"];
	const prependToCountry = countriesWithThe.includes(countryCode) ? "the " : "";

	const countryName = regionNames.of(countryCode);
	let location = "";

	if (city && countryCode) {
		location = `Someone in ${city}, ${countryCode}`;
	} else if (countryCode) {
		location = `Someone in ${prependToCountry}${countryName}`;
	} else {
		location = "Someone somewhere";
	}

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
