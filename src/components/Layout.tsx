import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallBar from "./CallBar";
import ClosureBanner from "./ClosureBanner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <ClosureBanner />
      <main id="main">{children}</main>
      <Footer />
      <CallBar />
    </>
  );
}
