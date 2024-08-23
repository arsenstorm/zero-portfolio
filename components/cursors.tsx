"use client";

import { Cursors } from "@instantdb/react";
import { room } from "@/utils/get-room";
import { Badge } from "./badge";
import { useEffect, useState } from "react";

export const colors = [
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
	location = "Someone",
}: { readonly children: React.ReactNode; readonly location: string }) {
	const [color, setColor] = useState<(typeof colors)[number]>("red");

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)]);
	}, []);

	room.useSyncPresence({
		location,
		color,
	});

	return (
		<Cursors
			room={room}
			renderCursor={(props) => (
				<CustomCursor
					color={props.presence.color}
					location={props.presence.location}
				/>
			)}
			className="min-h-screen min-w-screen"
		>
			{children}
		</Cursors>
	);
}

function CustomCursor({
	location,
	color,
}: { location: string; color: (typeof colors)[number] }) {
	return <Badge color={color}>{location}</Badge>;
}
