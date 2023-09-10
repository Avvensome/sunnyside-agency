function App() {
	return (
		<>
			<header>
				<picture>
					<source
						className="image-header"
						media="(min-width: 1440px)"
						srcset="images/desktop/image-header.jpg"
						type="image/jpeg"
					/>
					<source
						className="image-header"
						media="(max-width: 375px)"
						srcset="images/mobile/image-header.jpg"
						type="image/jpeg"
					/>

					<img
						className="image-header"
						src="/images/desktop/image-header.jpg"
						alt="main iamge header"
					/>
				</picture>
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
				<div className="info-container">
					<h2>Transform your brand</h2>
					<p>
						We are a full-service creativce agency specializing in
						helping brands grow fast. Enpage your clients through
						compelling visuals that do most of the marketing for
						you.
					</p>
					<span>Learn More</span>
				</div>
				<picture>
					<source
						media="(min-width: 1439px)"
						srcset="images/desktop/image-transform.jpg"
						type="image/jpeg"
					/>
					<source
						media="(max-width: 375px)"
						srcset="images/mobile/image-transform.jpg"
						type="image/jpeg"
					/>

					<img
						src="images/desktop/image-transform.jpg"
						alt="main iamge header"
					/>
				</picture>
				<picture>
					<source
						media="(min-width: 1439px)"
						srcset="images/desktop/image-stand-out.jpg"
						type="image/jpeg"
					/>
					<source
						media="(max-width: 375px)"
						srcset="images/mobile/image-stand-out.jpg"
						type="image/jpeg"
					/>

					<img
						src="images/desktop/image-stand-out.jpg"
						alt="main iamge header"
					/>
				</picture>
				<div className="info-container">
					<h2>Stand out to the right audience</h2>
					<p>
						Using a collaborative formula of designers, researchers,
						photographers, videographeres, and copywriters, we'll
						build and extend your brand in digital places
					</p>
					<span>Learn More</span>
				</div>
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
	<picture>
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
		{titleText || (
			<div className="picture-text-container">
				<h2 style={`color:${textColor}`}>{titleText}</h2>
				<p>{descriptionText}</p>
			</div>
		)}
	</picture>;
}
function TextComponent({
	textTitle,
	textDescription,
	textButton = "learn more",
}) {
	<div className="info-container">
		<h2>{textTitle}</h2>
		<p>{textDescription}</p>
		<span>{textButton}</span>
	</div>;
}
export default App;
