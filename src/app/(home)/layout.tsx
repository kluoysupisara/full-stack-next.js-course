import Providers from "@/components/Providers";
import "../globals.css";
import { AppHeader } from "./ui/AppHeader";
import { AppFooter } from "./ui/AppFooter";
export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppHeader />
          {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
