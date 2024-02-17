import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
	title: "LifeWater Counselling",
	description: "Counselling Web App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<div className="flex flex-col min-h-screen">
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
