import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";

const footerSocialMediaLinks = [
	{ icon: <FaFacebookF />, url: "https://facebook.com" },
	{ icon: <FiInstagram />, url: "https://instagram.com" },
	{ icon: <IoLogoTwitter />, url: "https://twitter.com" },
	{ icon: <RiAdminFill />, url: "#login" }, // Replace '#' with the actual URL if needed
];
const Footer = () => {
	const name = "Taimoor Khan";
	return (
		<footer>
			<a href="#" className="footer__logo">
				{name}
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				{footerSocialMediaLinks.map((link, index) => (
					<a
						href={link.url}
						target="_blank"
						key={index}
						rel="noreferrer"
					>
						{link.icon}
					</a>
				))}
			</div>

			<div className="footer__copyright">
				<small>&copy; {name}. All rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
