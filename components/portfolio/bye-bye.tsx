"use client";

import { useDocumentTitle, useDocumentVisibility } from "@mantine/hooks";

export function ByeBye() {
	const documentState = useDocumentVisibility();
	useDocumentTitle(
		documentState === "visible"
			? "arsen shkrumelyak - i build things"
			: "i guess this is goodbye",
	);

  return null;
}
