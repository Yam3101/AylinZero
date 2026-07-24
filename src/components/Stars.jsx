const Stars = () => {
	return (
		<div className="stars">
			{Array.from({ length: 60 }).map((_, index) => (
				<span
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className="star"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 4}s`,
					}}
				/>
			))}
		</div>
	);
};

export default Stars;
