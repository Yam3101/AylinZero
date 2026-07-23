import { IoLogoTwitch } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { TbBrandDiscord } from "react-icons/tb";

const socials = [
	{
		name: "Twitch",
		icon: <IoLogoTwitch />,
		url: "https://www.twitch.tv/aylinzero",
	},
	{
		name: "Twitter",
		icon: <FiTwitter />,
		url: "https://x.com/AylinZero",
	},
	{
		name: "TikTok",
		icon: <PiTiktokLogo />,
		url: "https://www.tiktok.com/@aylinzerovt",
	},
	{
		name: "Discord",
		icon: <TbBrandDiscord />,
		url: "",
	},
];

const Home = () => {
	const openLink = (url) => {
		if (!url) return;
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="min-h-screen bg-degraded1 flex justify-center items-center px-6 py-10">
			<div className="bg-white border-3 border-black shadow-[10px_10px_0px_#000] rounded-md sm:w-3/4 w-full max-w-4xl overflow-hidden">
				<div className="grid md:grid-cols-2 gap-10 p-10">
					<div className="flex flex-col justify-center">
						<img
							src="/pfpAylin.jpg"
							alt="AylinZero"
							className="w-40 rounded-full object-cover border-3 border-black shadow-[5px_5px_0px_#86afce]"
						/>

						<h1 className="sm:text-4xl text-3xl mt-2 Caveat-Brush">
							@AylinZero
						</h1>

						<p className="mt-2 text-lg leading-8 text-neutral-700 max-w-md Caveat-Brush">
							Hallo, soy Aylin ꒰｡ര ᎑ ര｡ ꒱ tu vtuber con energía infinita y
							mucha torpeza, hablo mucho y grito de vez en cuando, si no me das
							tu follow te morderé. 🐻‍❄️🌨️
						</p>
					</div>

					<div className="flex flex-col justify-center items-center gap-3">
						{socials.map((social, index) => (
							<button
								key={social.name}
								type="button"
								onClick={() => openLink(social.url)}
								className={`
									animated${index + 4}
									group
									bg-[#edf7ff]
									border-[3px]
									border-black
									shadow-[6px_6px_0px_#86afce]
									hover:translate-x-1
									hover:translate-y-1
									hover:shadow-none
									duration-200
									sm:text-3xl
									text-2xl
									py-3.5
									rounded-md
									flex
									items-center
									justify-center
									gap-4
									Caveat-Brush
									cursor-pointer
									sm:w-full
									w-9/10
								`}
							>
								<span className="text-xl duration-200">{social.icon}</span>

								{social.name}
							</button>
						))}
					</div>
				</div>

				<div className="h-5 bg-[#86afce] border-t-4 border-black" />
			</div>
		</div>
	);
};

export default Home;
