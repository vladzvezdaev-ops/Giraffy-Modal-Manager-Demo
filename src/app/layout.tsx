import { type FC, type PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

import type { Metadata } from "next";


import { nunito, openSans } from "@/shared/lib/fonts";
import "@/shared/styles/globals.scss";

export const metadata: Metadata = {
  title: "Gyraffy",
  description: "The best e-commerce platform",
};

export const dynamic = "force-dynamic";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="uk">
      <body className={`${nunito.variable} ${openSans.variable}`}>

          <main>{children}</main>

      </body>
    </html>
  );
};

export default RootLayout;
