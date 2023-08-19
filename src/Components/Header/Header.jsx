import React from 'react'
import './Header.css'
import CTA from "./CTA";

/* Assets */
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
  return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Taimoor Khan</h1>
				<h5>Frontend Developer</h5>
				<CTA />
				<HeaderSocial />
				<div className="me">
					<img src={ME} alt="Taimoor Khan" />
				</div>
				<a href="contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
  );
}
