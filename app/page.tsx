// Functions
import { getAndSetLastVisitor } from "@/actions/get-and-set-last-visitor";

// Components
import Portfolio from "@/components/portfolio/main";
import { CursorsProvider } from "@/components/cursors/cursors";
import { ByeBye } from "@/components/portfolio/bye-bye";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PortfolioPage() {
	const { currentVisitor: location, lastVisitor } =
		await getAndSetLastVisitor();

	return (
		<CursorsProvider location={location || "Unknown"}>
			<Portfolio lastVisitor={lastVisitor} />
			<ByeBye />
		</CursorsProvider>
	);
}
