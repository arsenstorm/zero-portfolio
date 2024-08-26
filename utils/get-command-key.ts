export function getCommandKey() {
	if (typeof window === "undefined") {
		return { device: "desktop", key: "Ctrl" };
	}

	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent,
		);
	const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

	return {
		device: isMobile ? "mobile" : "desktop",
		key: isMac ? "⌘" : "Ctrl",
	};
}
