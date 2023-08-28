import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

/* Adding all skill in List */
const frontendSkills = [
	{ id: 2, name: "React Native", level: "Experienced" },
	{ id: 3, name: "Bootstrap", level: "Intermediate" },
	{ id: 4, name: "Tailwind", level: "Intermediate" },
	{ id: 5, name: "CSS", level: "Basic" },
];

const backendSkills = [
	{ id: 1, name: "NodeJS", level: "Experienced" },
	{ id: 5, name: "Python", level: "Intermediate" },
	{ id: 6, name: "Firebase", level: "Experienced" },
];
const DevOps = [
	{ id: 1, name: "Docker", level: "Experienced" },
	{ id: 2, name: "Kubernetes", level: "Intermediate" },
	{ id: 3, name: "AWS", level: "Intermediate" },
	{ id: 4, name: "Azure", level: "Basic" },
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

				<div className="experience__devops">
					<h3>DevOps </h3>
					<div className="experience__content">
						{DevOps.map((skill) => (
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
