import React from "react";
import Header from "./_layout/components/Header";
import { PagesURLs } from "@/shared/constants/pagesUrls";
import Footer from "./_layout/components/Footer";

type Props = { children: React.ReactNode };

const HomeLayout = ({ children }: Props) => {
  const { ABOUT_URL, FAQ_URL, DOCS_URL } = PagesURLs;

  return (
    <>
      <Header
        links={[
          { name: "About", url: ABOUT_URL },
          { name: "FAQ", url: FAQ_URL },
          { name: "Docs", url: "/contacts" },
        ]}
      />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
