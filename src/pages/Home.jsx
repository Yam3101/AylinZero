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
		<div className="min-h-screen bg-degraded1 flex justify-center items-center px-6 py-10">
			<div className="bg-white border-4 border-black shadow-[10px_10px_0px_#000] rounded-md w-full max-w-5xl overflow-hidden">
				<div className="grid md:grid-cols-2 gap-12 p-10">
					<div className="flex flex-col justify-center">
						<img
							src="/pfpAylin.jpg"
							alt="AylinZero"
							className="w-40 rounded-full object-cover border-3 border-black shadow-[5px_5px_0px_#86afce]"
						/>

						<h1 className="sm:text-3xl text-2xl font-black mt-8 PlaywriteID">
							@AylinZero
						</h1>

						<p className="mt-6 text-2xl leading-8 text-neutral-700 max-w-md Caveat-Brush">
							Hallo, soy Aylin ꒰｡ര ᎑ ര｡ ꒱ tu vtuber con energía infinita y
							mucha torpeza, hablo mucho y grito de vez en cuando, si no me das
							tu follow te morderé. 🐻‍❄️🌨️
						</p>
					</div>

					<div className="flex flex-col justify-center gap-5">
						{socials.map((social) => (
							<button
								key={social.name}
								className="
								group
								bg-[#edf7ff]
								border-[3px]
								border-black
								shadow-[6px_6px_0px_#86afce]
								hover:translate-x-1
								hover:translate-y-1
								hover:shadow-none
								duration-200
								sm:text-4xl
								text-3xl
								py-5
								rounded-md
								flex
								items-center
								justify-center
								gap-4
								Caveat-Brush
								"
							>
								<span className="text-3xl duration-200">{social.icon}</span>

								{social.name}
							</button>
						))}
					</div>
				</div>

				<div className="h-5 bg-[#86afce] border-t-4 border-black"></div>
			</div>
		</div>
	);
};

export default Home;
