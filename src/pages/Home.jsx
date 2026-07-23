import "../home.css";

import { IoLogoTwitch } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { TbBrandDiscord } from "react-icons/tb";

const socials = [
	{
		name: "Twitch",
		icon: <IoLogoTwitch />,
		url: "https://www.twitch.tv/aylinzero/about",
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
		url: "/",
		icon: <TbBrandDiscord />,
	},
];

const Home = () => {
	return (
		<div className="home">
			<div className="card">
				<div className="card-content">
					<div className="left-side">
						<img src="/pfpAylin.jpg" alt="AylinZero" className="profile" />

						<h1 className="PlaywriteID username">@AylinZero</h1>

						<p className="Caveat-Brush description">
							Hallo, soy Aylin ꒰｡ര ᎑ ര｡ ꒱ tu vtuber con energía infinita y
							mucha torpeza, hablo mucho y grito de vez en cuando, si no me das
							tu follow te morderé. 🐻‍❄️🌨️
						</p>
					</div>

					<div className="right-side">
						{socials.map((social) => (
							<button
								key={social.name}
								type="button"
								className="social-btn Caveat-Brush"
								onClick={() =>
									window.open(social.url, "_blank", "noopener,noreferrer")
								}
							>
								<span className="icon">{social.icon}</span>

								{social.name}
							</button>
						))}
					</div>
				</div>

				<div className="footer-bar" />
			</div>
		</div>
	);
};

export default Home;
