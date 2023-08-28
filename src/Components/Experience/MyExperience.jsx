import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

/* Adding all skill in List */
const frontendSkills = [
	{ id: 1, name: "React", level: "Experienced" },
	{ id: 2, name: "React Native", level: "Intermediate" },
	{ id: 3, name: "Bootstrap", level: "Experienced" },
	{ id: 4, name: "Tailwind", level: "Experienced" },
];

const backendSkills = [
	{ id: 1, name: "NodeJS", level: "Experienced" },
	{ id: 2, name: "MongoDB", level: "Intermediate" },
	{ id: 4, name: "MySQL", level: "Basic" },
	{ id: 5, name: "Python", level: "Experienced" },
];
export default function Experience() {
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>
			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						{frontendSkills.map((skill) => (
							<article
								className="experience__details"
								key={skill.id}
							>
								<BsPatchCheckFill className="experience__details-icon" />
								<div>
									<h4>{skill.name}</h4>
									<small className="text-light">
										{skill.level}
									</small>
								</div>
							</article>
						))}
					</div>
				</div>

				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						{backendSkills.map((skill) => (
							<article
								className="experience__details"
								key={skill.id}
							>
								<BsPatchCheckFill className="experience__details-icon" />
								<div>
									<h4>{skill.name}</h4>
									<small className="text-light">
										{skill.level}
									</small>
								</div>
							</article>
						))}
					</div>
				</div>
				
			</div>
		</section>
	);
}
