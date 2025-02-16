import Tabs from "./page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        {children}
        <Tabs />
    </div>
}