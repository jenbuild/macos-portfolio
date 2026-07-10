import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Photos = () => {
	const { openWindow } = useWindowStore();

	const renderList = (name, items) => (
		<div>
			<h3>{name}</h3>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<img
							src={item.icon}
							className="w-4"
							alt={item.title}
						/>
						<p className="text-sm font-medium truncate">
							{item.title}
						</p>
					</li>
				))}
			</ul>
		</div>
	);

	return (
		<>
			<div id="window-header">
				<div id="window-controls">
					<WindowControls target="photos" />
					<h2>Photos</h2>
				</div>
			</div>

			<div className="bg-white flex h-full">
				<div className="sidebar">
					{renderList("Photos", photosLinks)}
				</div>

				<ul className="grid grid-cols-2 p-4">
					{gallery.map((item) => (
						<li
							key={item.id}
							className="p-2"
						>
							<img
								src={item.img}
								className="cursor-pointer"
								onClick={() => openWindow("imgfile")}
							/>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
