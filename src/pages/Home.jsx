import { IoLogoTwitch } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { TbBrandDiscord } from "react-icons/tb";

const socials = [
	{
		name: "Twitch",
		icon: <IoLogoTwitch />,
	},
	{
		name: "Twitter",
		icon: <FiTwitter />,
	},
	{
		name: "TikTok",
		icon: <PiTiktokLogo />,
	},
	{
		name: "Discord",
		icon: <TbBrandDiscord />,
	},
];

const Home = () => {
	return (
		<div className="min-h-screen bg-degraded1 flex items-center justify-center px-4 py-8">
			<div className="w-full max-w-4xl bg-white border-[3px] border-black rounded-md shadow-[10px_10px_0px_#000] overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 lg:p-12">
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<img
							src="/pfpAylin.jpg"
							alt="AylinZero"
							className="w-28 sm:w-36 md:w-40 rounded-full border-[3px] border-black object-cover shadow-[5px_5px_0px_#86afce]"
						/>

						<h1 className="yellowtail mt-6 text-4xl sm:text-5xl lg:text-6xl">
							@AylinZero
						</h1>

						<p className="Caveat-Brush mt-5 max-w-md text-xl sm:text-2xl leading-relaxed text-neutral-700">
							Hallo, soy Aylin ꒰｡ര ᎑ ര｡ ꒱ tu vtuber con energía infinita y
							mucha torpeza, hablo mucho y grito de vez en cuando. Si no me das
							tu follow te morderé. 🐻‍❄️🌨️
						</p>
					</div>

					<div className="flex flex-col justify-center gap-4">
						{socials.map((social) => (
							<button
								key={social.name}
								type="button"
								className="
								group
								w-full
								bg-[#edf7ff]
								border-[3px]
								border-black
								rounded-md
								shadow-[6px_6px_0px_#86afce]
								hover:translate-x-[6px]
								hover:translate-y-[6px]
								hover:shadow-none
								transition-all
								duration-200
								py-3
								sm:py-4
								text-2xl
								sm:text-3xl
								md:text-4xl
								Caveat-Brush
								flex
								items-center
								justify-center
								gap-4
								cursor-pointer
								select-none
								"
							>
								<span className="text-3xl md:text-4xl">{social.icon}</span>

								{social.name}
							</button>
						))}
					</div>
				</div>

				<div className="h-5 bg-[#86afce] border-t-[3px] border-black" />
			</div>
		</div>
	);
};

export default Home;
