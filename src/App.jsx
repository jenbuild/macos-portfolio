import { Dock, Navbar, Welcome } from "#components";
import {
	Contact,
	FinderWindow,
	Home,
	ImageWindow,
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
			<Welcome />
			<Dock />

			<TerminalWindow />
			<SafariWindow />
			<ResumeWindow />
			<FinderWindow />
			<TextWindow />
			<ImageWindow />
			<Contact />
			<Home />
		</main>
	);
};

export default App;
