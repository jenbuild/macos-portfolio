import { Dock, Navbar } from "#components";
import {
	Contact,
	FinderWindow,
	Home,
	ImageWindow,
	LinkedInWindow,
	PhotosWindow,
	ResumeWindow,
	SafariWindow,
	TerminalWindow,
	TextWindow,
} from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main>
			<Navbar />
			{/* <Welcome /> */}
			<Dock />

			<TerminalWindow />
			<SafariWindow />
			<ResumeWindow />
			<FinderWindow />
			<TextWindow />
			<ImageWindow />
			<Contact />
			<Home />
			<PhotosWindow />
			<LinkedInWindow />
		</main>
	);
};

export default App;
