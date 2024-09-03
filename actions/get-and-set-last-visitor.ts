"use server";

import { kv } from "@vercel/kv";
import { headers } from "next/headers";

export async function getAndSetLastVisitor() {
	const _headers = headers();
	const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

	const ip = _headers.get("x-forwarded-for") || "";
	const countryCode = _headers.get("x-vercel-ip-country") || "";
	const city = _headers.get("x-vercel-ip-city") || "";
	const countryName = regionNames.of(countryCode);

	let setLastVisitor = "";
	const defaultUnknown = "Somewhere else in the world";

	if (city && countryCode) {
		setLastVisitor = `${city}, ${countryName}`;
	} else if (!city && countryCode) {
		setLastVisitor = `Somewhere in ${["GB", "US", "AE"].includes(countryCode) ? "the " : ""}${countryName}`;
	} else {
		setLastVisitor = defaultUnknown;
	}

	const lastVisitor = (await kv.get("last-visitor")) ?? defaultUnknown;

	await kv.set("last-visitor", setLastVisitor);

	if (ip !== "") {
		// i want to store the ip address as a key so we can see where people are visiting from
		await kv.set(ip, setLastVisitor);
	}

	return {
		lastVisitor:
			typeof lastVisitor === "string"
				? decodeURIComponent(lastVisitor)
				: defaultUnknown,
		currentVisitor: decodeURIComponent(setLastVisitor),
	};
}
