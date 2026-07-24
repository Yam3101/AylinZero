import { HiArrowUpRight } from "react-icons/hi2";

const SocialCard = ({ social, delay }) => {
	const Icon = social.icon;

	const openLink = () => {
		if (!social.url) return;
		window.open(social.url, "_blank", "noopener,noreferrer");
	};

	return (
		<button
			type="button"
			onClick={openLink}
			className="social-card fade-up"
			style={{ animationDelay: `${delay}s` }}
		>
			<div className="social-left">
				<div className="social-icon sm:text-3xl text-4xl">
					<Icon />
				</div>

				<div className="social-text">
					<h3 className="font-bold">{social.name}</h3>
					<p className="italic">{social.user}</p>
				</div>
			</div>

			<HiArrowUpRight className="social-arrow font-extrabold" />
		</button>
	);
};

export default SocialCard;
