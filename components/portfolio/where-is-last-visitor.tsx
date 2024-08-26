"use client";

import { Strong, Text } from "@/components/ui/text";

export function WhereIsLastVisitor({
	lastVisitor,
	style,
}: { lastVisitor?: string; style: React.CSSProperties }) {
	if (!lastVisitor) return null;

	return (
		<Text style={style}>
			My last visitor was from <Strong>{lastVisitor}</Strong>.
		</Text>
	);
}
