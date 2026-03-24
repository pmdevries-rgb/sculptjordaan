import { Header } from "./header";
import { Footer } from "./footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">{children}</main>
      <Footer />
    </>
  );
}
