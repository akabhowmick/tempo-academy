import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallBar from "./CallBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <CallBar />
    </>
  );
}
