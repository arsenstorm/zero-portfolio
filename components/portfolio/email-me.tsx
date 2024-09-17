"use client";

// UI
import { Code, Text, TextLink } from "@/components/ui/text";

// Functions
import { getCommandKey } from "@/utils/get-command-key";
import { useHotkeys } from "@mantine/hooks";

export function EmailMe({ style }: { readonly style: React.CSSProperties }) {
	useHotkeys([
		[
			"mod+b",
			() => {
				window.open("https://arsen.dev/time", "_blank");
			},
		],
	]);

	const { key, device } = getCommandKey();

	return (
		<Text style={style}>
			Want to book a call?{" "}
			{device === "desktop" ? (
				<Code>{key} + B</Code>
			) : (
				<TextLink href="https://arsen.dev/time">Here’s a link!</TextLink>
			)}
		</Text>
	);
}
