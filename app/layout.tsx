import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s| Next-Learn",
    default: "Loading...",
  },
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
