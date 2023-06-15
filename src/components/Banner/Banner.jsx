export default function Banner(props) {
	return (
		<div style={props.BannerSrc?{backgroundImage : `url(${props.BannerSrc})`}:{}} className="banner-container">
			<div className="banner-text-container">
				<div className="banner-text">{props.title}</div>
			</div>
		</div>
	);
}
