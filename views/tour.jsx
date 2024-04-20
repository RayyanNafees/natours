const OverviewBox = require("./overview-box");
const Base = require("./base");
const ReviewCard = require("./_reviewCard");

<Base
	append_head={
		<>
			[<script src="https://api.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.js" />
			<link
				href="https://api.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.css"
				rel="stylesheet"
			/>
			]
		</>
	}
>
	<ReviewCard />
	<div>
		{/* Header section */}
		<section className="section-header">
			<div className="header__hero">
				<div className="header__hero-overlay">&nbsp;</div>
				<img
					className="header__hero-img"
					src={`/img/tours/${tour.imageCover}`}
					alt={tour.name}
				/>
			</div>
			<div className="heading-box">
				<h1 className="heading-primary">
					<span>{tour.name} tour</span>
				</h1>
				<div className="heading-box__group">
					<div className="heading-box__detail">
						<svg className="heading-box__icon">
							<title>Clock Icon</title>
							<use xlinkHref="/img/icons.svg#icon-clock" />
						</svg>
						<span className="heading-box__text">{tour.duration} days</span>
					</div>
					<div className="heading-box__detail">
						<svg className="heading-box__icon">
							<title>Pin Icon</title>
							<use xlinkHref="/img/icons.svg#icon-map-pin" />
						</svg>
						<span className="heading-box__text">
							{tour.startLocation.description}
						</span>
					</div>
				</div>
			</div>
		</section>

		{/* Description section */}
		<section className="section-description">
			<div className="overview-box">
				<div className="overview-box__group">
					<h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
					<OverviewBox
						label="Next date"
						text={tour.startDates[0].toLocaleString("en-us", {
							month: "long",
							year: "numeric",
						})}
						icon="calendar"
					/>
					<OverviewBox
						label="Difficulty"
						text={tour.difficulty}
						icon="trending-up"
					/>
					<OverviewBox
						label="Participants"
						text={`${tour.maxGroupSize} people`}
						icon="user"
					/>
					<OverviewBox
						label="Rating"
						text={`${tour.ratingsAverage} / 5`}
						icon="star"
					/>
				</div>
				<div className="overview-box__group">
					<h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
					{tour.guides.map((guide) => (
						<div key={guide.name} className="overview-box__detail">
							<img
								className="overview-box__img"
								src={`/img/users/${guide.photo}`}
								alt={guide.name}
							/>
							<span className="overview-box__label">
								{guide.role === "lead-guide" ? "Lead guide" : "Tour guide"}
							</span>
							<span className="overview-box__text">{guide.name}</span>
						</div>
					))}
				</div>
			</div>
			<div className="description-box">
				<h2 className="heading-secondary ma-bt-lg">About {tour.name} tour</h2>
				{tour.description.split("\n").map((p, index) => (
					<p key={p} className="description__text">
						{p}
					</p>
				))}
			</div>
		</section>

		{/* Other sections */}
		{/* You can continue translating the remaining sections similarly */}
	</div>
</Base>;
