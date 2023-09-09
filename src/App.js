function App() {
	return (
		<header>
			<img
				className="image-header"
				src="/images/desktop/image-header.jpg"
				alt="main iamge header"
			/>
			<div className="header-container">
				<p>sunnyside</p>
				<nav>
					<button>About</button>
					<button>Services</button>
					<button>Projects</button>
					<button>CONTACT</button>
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
	);
}

export default App;
