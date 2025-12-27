import "./globals.css";
import NavMenu from "@/app/NavMenu";
import { Open_Sans } from "next/font/google";

const myFont = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
    title: "NextSpace",
    description: "Example App - Not For Production",
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
