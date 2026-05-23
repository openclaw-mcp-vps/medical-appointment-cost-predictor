import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedCost Predictor – Know Your Out-of-Pocket Before You Book",
  description: "Connect your insurance plan and get real-time out-of-pocket cost estimates for any medical procedure or appointment before you book."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cf16c7dd-b131-4120-90dd-b2c3daa423c1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
