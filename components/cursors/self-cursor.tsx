"use client";

import React, { useEffect, useRef } from "react";
import { Badge } from "../ui/badge";
import { cursorColors } from "./colours";
import CursorPointer from "@/icons/pointer.svg";
import clsx from "clsx";

export function SelfCursor({
	color,
}: {
	readonly color: keyof typeof cursorColors;
}) {
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
			<div className="relative" ref={cursorRef}>
				<div className="absolute top-0 -left-[3px]">
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
