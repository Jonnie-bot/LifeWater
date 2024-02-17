"use client";

import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { NavMenu } from "./NavMenu";

export default function Navbar() {
	const navMenu = ["Home", "", "", "", "", ""];

	return (
		<div className="sticky top-0 w-full z-30 shadow-sm">
			<div className="py-2 border-b-[1px]">
				<Container>
					<div className="flex justify-between items-center gap-3 md:text-base md:gap-0 md:p-3 lg:p-1">
						<Link href="/">
							<Image
								src="/logos/white_color_logo.svg"
								alt="logo"
								width={110}
								height={90}
							/>
						</Link>
						<div className="hidden lg:flex lg:gap-3 cursor-pointer">
							<Link href="/">Home</Link>
							<Link href="/about">About</Link>
							<Link href="/services">Services</Link>
							<Link href="/contacts">Contacts</Link>
							<Link href="/testimonials">Testimonials</Link>
							<Link href="/faqs">FAQs</Link>
						</div>
						<div className="lg:hidden">
							<NavMenu />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
