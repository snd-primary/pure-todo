import { css } from "@/styled-system/css";
export default function Home() {
	return (
		<div
			className={css({
				w: 500,
				h: 500,
				backgroundColor: "slate.400",
				fontSize: "8xl",
				display: "grid",
				placeItems: "center",
				placeContent: "center",
				fontFamily: "gaistMono",
			})}
		>
			Next.js next.js vercel
		</div>
	);
}
