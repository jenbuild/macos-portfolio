import { WindowControls } from "#components";
import { linkedInData } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { clsx } from "clsx";

const Linkedin = () => {
	return (
		<>
			<div id="window-header">
				<WindowControls target="linkedin" />
				<h2>LinkedIn</h2>
				<div></div>
			</div>

			<div className="content">
				{/* Hero Section */}
				<div className="linkedin-hero">
					<div className="bg-white relative rounded-lg">
						<div>
							<img
								src="/images/linkedin-cover.png"
								alt="Cover Image"
								className="rounded-t-lg"
							/>
							<img
								src="/images/ajay-dp.jpeg"
								alt="Profile Picture"
								className="w-[152px] h-[152px] rounded-full object-cover
                                absolute top-30 left-5
                                "
							/>
						</div>

						<div className="mt-17 py-8 px-6 flex justify-between">
							<div>
								<div className="text-2xl font-bold">
									Ajay Kumar MK
								</div>
								<div>Frontend Developer</div>
								<div className="text-sm text-black/40">
									India
								</div>
							</div>

							<div className="flex gap-2">
								<img
									src="/images/lbscek.jpg"
									alt="LBSCEK Logo"
									className="w-[32px] h-[32px] object-cover"
								/>
								<div className="text-sm font-semibold">
									<p>LBS College of Engineering,</p>
									<p>Kasaragod</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* About Section */}
				<section id="about">
					<h2>About</h2>
					{linkedInData.about.map((para, index) => (
						<p
							className="about-desc"
							key={index}
						>
							{para}
						</p>
					))}
				</section>

				{/* Work Experience Section */}
				<section id="experience">
					<h2>Experience</h2>
					{linkedInData.workExperience.children.map(
						(experience, index) => (
							<div
								key={index}
								className={clsx(
									"work-experience",
									index !==
										linkedInData.workExperience.children
											.length -
											1 && "border-b-1 border-b-gray-300",
								)}
							>
								<div>
									<img
										src={experience.image}
										alt={experience.title}
									/>
								</div>
								<div>
									<h3 id="title">{experience.title}</h3>
									<p id="company">
										{experience.company} - {experience.type}
									</p>
									<p id="duration">{experience.duration}</p>
									<p id="location">{experience.location}</p>
								</div>
							</div>
						),
					)}
				</section>

				{/* Education Section*/}
				<section id="education">
					<h2>Education</h2>
					{linkedInData.educationExperience.map(
						(
							{ institution, major, degree, id, duration, image },
							index,
						) => (
							<div
								className={clsx(
									"education-experience",
									index !==
										linkedInData.educationExperience
											.length -
											1 && "border-b-1 border-b-gray-300",
								)}
								key={id}
							>
								<div>
									<img
										src={image}
										alt={institution}
									/>
								</div>
								<div>
									<h3 id="institution">{institution}</h3>
									<p id="degree">{degree + ", " + major}</p>
									<p id="duration">{duration}</p>
								</div>
							</div>
						),
					)}
				</section>

				<section id="skills-section">
					<h2>Skills({linkedInData.skills.length})</h2>
					{linkedInData.skills.map((skill, index) => (
						<div
							key={index}
							className={clsx(
								"py-3 font-semibold",
								index !== linkedInData.skills.length - 1 &&
									"border-b-1 border-b-gray-300",
							)}
						>
							{skill}
						</div>
					))}
				</section>

				<section id="languages">
					<h2>Languages ({linkedInData.languages.length})</h2>
					{linkedInData.languages.map(({ id, name }, index) => (
						<div
							className={clsx(
								"lanuage-list",
								index !== linkedInData.languages.length - 1 &&
									"border-b-1 border-b-gray-300",
							)}
							key={id}
						>
							<h3 className="font-semibold py-3">{name}</h3>
						</div>
					))}
				</section>
			</div>
		</>
	);
};

const LinkedInWindow = WindowWrapper(Linkedin, "linkedin");

export default LinkedInWindow;
