"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
    const path = usePathname();
    const isCurrentTab = (tab: string) => path === `/movies/123/${tab}`;
    return <div>
        <Link href={`/movies/123/credit`}>Credit</Link> {isCurrentTab("credit") && "👤"}
        <Link href={`/movies/123/videos`}>Videos</Link> {isCurrentTab("videos") && "🎥"}
    </div>
}