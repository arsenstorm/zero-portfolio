"use client";

import { Cursors } from "@instantdb/react";
import { room } from "@/utils/get-room";
import { Badge } from "./badge";
import { useEffect, useState } from "react";

const colors = [
	"red",
	"green",
	"blue",
	"yellow",
	"purple",
	"pink",
	"orange",
	"amber",
	"lime",
	"emerald",
	"teal",
	"cyan",
	"sky",
	"indigo",
	"violet",
	"fuchsia",
	"rose",
	"zinc",
] as const;

export function CursorsProvider({
	children,
	location = "Someone, Somewhere",
}: { readonly children: React.ReactNode; readonly location: string }) {
	const [color, setColor] = useState<(typeof colors)[number]>("red");

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)]);
	}, []);

	const CursorComponent = () => {
		return <Badge color={color}>{location}</Badge>;
	};

	return (
		<Cursors
			room={room}
			renderCursor={CursorComponent}
			className="min-h-screen min-w-screen"
		>
			{children}
		</Cursors>
	);
}
