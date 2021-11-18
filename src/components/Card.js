import { __ } from "@wordpress/i18n";
const Card = (props) => {
	const { social_media_networks } = props;
	console.log(props);
	return (
		<>
			<div className={`user-card`}>
				{props.image_url && (
					<img src={props.image_url} alt={props.first_name} />
				)}
				<div className="full-name">
					<span className="label">{__("Name:")}</span>
					<span className="first-name">{props.first_name}</span>
					<span className="last-name">{props.last_name}</span>
				</div>

				<div className="position">
					<span className="label">{__("Position:")}</span>
					<span>{props.position}</span>
				</div>
			</div>
			<div className="modal-wrap active">
				<button className="close-modal button-danger">{__("Close")}</button>
				<div className="modal-content">
					<div className="full-name">
						<span className="first-name">{props.first_name}</span>
						<span className="last-name">{props.last_name}</span>
					</div>
					<div className="intro">{props.short_description}</div>
					<ul className="social-media-networks">
						{social_media_networks[0] && social_media_networks[0].facebook && (
							<li className="facebook">
								<a href={social_media_networks[0].facebook}>Facebook</a>
							</li>
						)}
						{social_media_networks[0] && social_media_networks[0].github && (
							<li className="github">
								<a href={social_media_networks[0].github}>Github</a>
							</li>
						)}
						{social_media_networks[0] && social_media_networks[0].xing && (
							<li className="xing">
								<a href={social_media_networks[0].xing}>Xing</a>
							</li>
						)}
						{social_media_networks[0] && social_media_networks[0].linkedin && (
							<li className="linkedin">
								<a href={social_media_networks[0].linkedin}>LinkedIn</a>{" "}
							</li>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Card;
