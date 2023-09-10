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
		</>
	);
}

export default App;
