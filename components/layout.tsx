import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

interface ParentComponentProps {
  children: React.ReactNode;
}

function Layout({ children }: ParentComponentProps) {
  return (
    <div className="layout">
      <Head>
        <link rel="icon" href="./leaf.png" type="image/png" />
        <title>Learnhall</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
