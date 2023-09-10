function App() {
	return (
		<>
			<header>
				<PictureWithOptionalText
					srcDesktop={"images/desktop/image-header.jpg"}
					srcMobile={"images/mobile/image-header.jpg"}
					className={`image-header`}
				/>
				<div className="header-container">
					<p>sunnyside</p>
					<nav>
						<button>About</button>
						<button>Services</button>
						<button>Projects</button>
						<button className="contact-btn">CONTACT</button>
					</nav>
				</div>
				<div className="header-title">
					<h1>we are creatives</h1>
					<img
						className="arrow-down-icon"
						src="/images/icons/icon-arrow-down.svg"
						alt="arrow down icon"
					/>
				</div>
			</header>
			<main>
				<TextComponent
					textTitle={"Transform your brand"}
					textDescription={`We are a full-service creativce agency specializing in
						helping brands grow fast. Enpage your clients through
						compelling visuals that do most of the marketing for
						you.`}
				/>
				<PictureWithOptionalText
					srcDesktop={"images/desktop/image-transform.jpg"}
					srcMobile={"images/mobile/image-transform.jpg"}
				/>
				<PictureWithOptionalText
					srcDesktop={"images/desktop/image-stand-out.jpg"}
					srcMobile={"images/mobile/image-stand-out.jpg"}
				/>
				<TextComponent
					textTitle={`Stand out to the right audience`}
					textDescription={`Using a collaborative formula of designers, researchers,
						photographers, videographeres, and copywriters, we'll
						build and extend your brand in digital places`}
				/>
				<PictureWithOptionalText
					srcDesktop={`images/desktop/image-graphic-design.jpg`}
					srcMobile={`images/mobile/image-graphic-design.jpg`}
					titleText={`Graphic Design`}
					descriptionText={`Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.`}
					textColor={`hsl(167, 40%, 24%)`}
				/>
				<PictureWithOptionalText
					textColor="hsl(198, 62%, 26%)"
					srcDesktop={`images/desktop/image-photography.jpg`}
					srcMobile={`images/mobile/image-photography.jpg`}
					titleText={"Photoraphy"}
					descriptionText={
						"Increase your credibillity by getting the most stunning, high-quality photos that improve your business image"
					}
				/>
			</main>
		</>
	);
}

function PictureWithOptionalText({
	srcDesktop,
	srcMobile,
	alt = "picture",
	className = "",
	titleText = "",
	descriptionText = "",
	textColor = "",
}) {
	return (
		<picture className="picture-container">
			<source
				className={className}
				media="(min-width: 1440px)"
				srcset={srcDesktop}
				type="image/jpeg"
			/>
			<source
				className={className}
				media="(max-width: 375px)"
				srcset={srcMobile}
				type="image/jpeg"
			/>

			<img className={className} src={srcDesktop} alt={alt} />
			{titleText && (
				<div
					className="picture-text-container"
					style={{ color: textColor }}
				>
					<h2>{titleText}</h2>
					<p>{descriptionText}</p>
				</div>
			)}
		</picture>
	);
}
function TextComponent({
	textTitle,
	textDescription,
	textButton = "learn more",
}) {
	return (
		<div className="info-container">
			<h2>{textTitle}</h2>
			<p>{textDescription}</p>
			<span>{textButton}</span>
		</div>
	);
}
export default App;
