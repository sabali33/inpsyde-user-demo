const Card = (props) => {
	const { social_media_networks, editContext, onCloseModal } = props;
	return (
		<div className={`user-card`}>
			<img src={props.image_url} alt={props.first_name} />
			<div className="full-name">
				<span className="first-name">{props.first_name}</span>{" "}
				<span className="last-name">{props.last_name}</span>
			</div>
			<div className="position">{props.position}</div>
			{!editContext && (
				<div className="modal-wrap">
					<button class="close-modal">close</button>
					<div className="modal-content">
						<div className="full-name">
							<span className="first-name">{props.first_name}</span>
							<span className="last-name">{props.last_name}</span>
						</div>
						<div className="intro">{props.short_description}</div>
						<ul className="social-media-networks">
							{social_media_networks[0] &&
								social_media_networks[0].facebook && (
									<li className="facebook">
										{social_media_networks[0].facebook}
									</li>
								)}
							{social_media_networks[0] && social_media_networks[0].github && (
								<li className="github">{social_media_networks[0].github}</li>
							)}
							{social_media_networks[0] && social_media_networks[0].xing && (
								<li className="xing">{social_media_networks[0].xing}</li>
							)}
							{social_media_networks[0] &&
								social_media_networks[0].linkedin && (
									<li className="linkedin">
										{social_media_networks[0].linkedin}
									</li>
								)}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;
