"use server";

import { kv } from "@vercel/kv";
import { headers } from "next/headers";

export async function getAndSetLastVisitor() {
	const _headers = headers();
	const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

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

	return {
		lastVisitor: typeof lastVisitor === "string" ? lastVisitor : defaultUnknown,
		currentVisitor: setLastVisitor,
	};
}
