import { IoLogoTwitch } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { TbBrandDiscord } from "react-icons/tb";

const socials = [
	{
		name: "Twitch",
		icon: <IoLogoTwitch />,
		url: "https://twitch.tv/",
	},
	{
		name: "Twitter",
		icon: <FiTwitter />,
		url: "https://x.com/",
	},
	{
		name: "TikTok",
		icon: <PiTiktokLogo />,
		url: "https://tiktok.com/@",
	},
	{
		name: "Discord",
		icon: <TbBrandDiscord />,
		url: "https://discord.gg/",
	},
];

const Home = () => {
	return (
		<div className="min-h-screen bg-degraded1 flex items-center justify-center px-5 py-8">
			<div className="card-main">
				<div className="card-content">
					<div className="profile-section">
						<img
							src="/pfpAylin.jpg"
							alt="AylinZero"
							className="profile-image"
						/>

						<h1 className="PlaywriteID profile-title">@AylinZero</h1>

						<p className="Caveat-Brush profile-description">
							Hallo, soy Aylin ꒰｡ര ᎑ ര｡ ꒱ tu vtuber con energía infinita y
							mucha torpeza, hablo mucho y grito de vez en cuando. Si no me das
							tu follow te morderé. 🐻‍❄️🌨️
						</p>
					</div>

					<div className="socials-section">
						{socials.map((social) => (
							<button
								key={social.name}
								type="button"
								className="social-button Caveat-Brush"
								onClick={() => window.open(social.url, "_blank")}
							>
								<span className="social-icon">{social.icon}</span>

								{social.name}
							</button>
						))}
					</div>
				</div>

				<div className="bottom-bar" />
			</div>
		</div>
	);
};

export default Home;
