import "./globals.css";
import NavMenu from "@/app/NavMenu";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const myFont = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextSpace",
    description: "Social Media - Not For Production",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={myFont.className}>
                <NavMenu />
                {children}
            </body>
        </html>
    );
}
