"use client";

import React, { useEffect, useRef } from "react";

// UI
import { Badge } from "@/components/ui/badge";
import { cursorColors } from "./colours";

// Icons
import CursorPointer from "@/icons/pointer.svg";

// Hooks
import { useIdle } from "@mantine/hooks";

// Utils
import clsx from "clsx";

export function SelfCursor({
	color,
}: {
	readonly color: keyof typeof cursorColors;
}) {
	const mouseIdle = useIdle(30000, {
		events: ["mousemove"],
	});
	const cursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (cursorRef.current == null || cursorRef == null) return;

		document.addEventListener("mousemove", (e) => {
			if (cursorRef.current == null) return;
			cursorRef.current.setAttribute(
				"style",
				`top: ${e.pageY}px; left: ${e.pageX}px;`,
			);
		});

		document.addEventListener("click", () => {
			if (cursorRef.current == null) return;
			cursorRef.current.classList.add("expand");

			setTimeout(() => {
				if (cursorRef.current == null) return;
				cursorRef.current.classList.remove("expand");
			}, 500);
		});
	}, []);

	return (
		<div
			className="fixed inset-0 pointer-events-none"
			style={{
				zIndex: 9999,
			}}
		>
			<div className={clsx("relative", mouseIdle && "hidden")} ref={cursorRef}>
				<div
					className="absolute top-0 -left-[3px]"
				>
					<CursorPointer
						className={clsx("size-5 rotate-12", cursorColors[color])}
					/>
				</div>
				<Badge color={color} className="absolute top-2 left-2">
					You
				</Badge>
			</div>
		</div>
	);
}
