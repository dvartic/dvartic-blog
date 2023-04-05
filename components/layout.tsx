import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
    children: React.ReactNode;
};

// Creates a Layout component which is then imported in _app.tsx that applies the same structure to all pages.
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header propWidth={"90%"} propMaxWidth={"1200px"} />
            {children}
            <Footer propMt={32} propMb={14} />
        </>
    );
}
