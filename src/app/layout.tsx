import { type FC, type PropsWithChildren } from "react";

import { nunito, openSans } from "@/shared/lib/fonts";
import "@/shared/styles/globals.scss";

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
