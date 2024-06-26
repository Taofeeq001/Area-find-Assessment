import { Inter } from "next/font/google";
import "./globals.css";
import Appwrapper from "@/components/Appwrapper";
import { ReviewsProvider } from "@/context/Review";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SPOTTA",
  description: "See through the lenses of people who have lived or visited the neighbourhood you might have in mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReviewsProvider>
          <Appwrapper>
            {children}
          </Appwrapper>
        </ReviewsProvider>
      </body>
    </html>
  );
}
