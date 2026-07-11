import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Mail, Search } from "lucide-react";

const Photos = () => {
	const { openWindow } = useWindowStore();

	const renderList = (name, items) => (
		<>
			<h2>{name}</h2>
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
		</>
	);

	return (
		<>
			<div id="window-header">
				<div id="window-controls">
					<WindowControls target="photos" />
				</div>
				<div className="flex w-full justify-end items-center gap-3 text-gray-500">
					<Mail className="icon" />
					<Search className="icon" />
				</div>
			</div>

			<div className="bg-white flex w-full">
				<div className="sidebar">
					{renderList("Photos", photosLinks)}
				</div>

				<div className="gallery h-[600px] overflow-y-auto">
					<ul>
						{gallery.map(({ id, imageUrl, name }) => (
							<li
								key={id}
								className="p-2"
							>
								<img
									src={imageUrl}
									alt={name}
									className="cursor-pointer"
									onClick={() =>
										openWindow("imgfile", {
											id,
											imageUrl,
											name,
										})
									}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
