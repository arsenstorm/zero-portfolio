"use client";

import { Cursors } from "@instantdb/react";
import { room } from "./get-cursor-room";
import { useEffect, useState } from "react";
import clsx from "clsx";

// Icons
import CursorPointer from "@/icons/pointer.svg";

// Components
import { SelfCursor } from "./self-cursor";
import { Badge } from "../ui/badge";

// Colours
import { colors, cursorColors } from "./colours";

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
			<SelfCursor color={color} />
			{children}
		</Cursors>
	);
}

function CustomCursor({
	location,
	color,
}: { location: string; color: (typeof colors)[number] }) {
	return (
		<div className="relative">
			<div className="absolute top-0 left-0">
				<CursorPointer
					className={clsx("size-5 rotate-12", cursorColors[color])}
				/>
			</div>
			<Badge color={color} className="absolute top-2 left-2">
				{location}
			</Badge>
		</div>
	);
}
