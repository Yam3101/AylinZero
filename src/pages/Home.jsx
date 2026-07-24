import "../styles/home.css";
import "../styles/animations.css";

import Stars from "../components/Stars";
import ProfileCard from "../components/ProfileCard";
import SocialCard from "../components/SocialCard";

import { socials } from "../data/socials";

const Home = () => {
	return (
		<div className="home sm:py-8 py-7 px-5">
			<Stars />

			<div className="glass-card">
				<ProfileCard />

				<div className="social-list">
					{socials.map((social, index) => (
						<SocialCard
							key={social.name}
							social={social}
							delay={0.2 + index * 0.15}
						/>
					))}
				</div>

				<footer className="italic">@AylinZero | by Yam · 2026</footer>
			</div>
		</div>
	);
};

export default Home;
