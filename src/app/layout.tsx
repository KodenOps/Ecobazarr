import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["100", "200", "400", "600", "800"],
	subsets: ["devanagari"],
});

export const metadata: Metadata = {
	title: "Ecobazar",
	description: "Fresh & healthy organic food",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
