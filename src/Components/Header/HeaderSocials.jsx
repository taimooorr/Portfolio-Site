import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const socialMediaLinks = [
	{
		name: "LinkedIn",
		icon: <BsLinkedin />,
		url: "https://linkedin.com",
	},
	{ name: "GitHub", icon: <FaGithub />, url: "https://github.com" },
];
const HeaderSocials = () => {
	return (
		<div className="header__socials">
			{socialMediaLinks.map((link, index) => (
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
	);
};

export default HeaderSocials;
