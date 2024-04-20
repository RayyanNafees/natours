const Header = require("./_header");
const Footer = require("./_footer");
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="/css/style.css" />
		<link rel="shortcut icon" type="image/png" href="/img/favicon.png" />

		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Lato:300,300i,700"
		/>
		<title>Natours | {title}</title>
		{append_head || null}
	</head>

	<body>
		<Header />
		{children || "<h1>This is a placeholder heading</h1>"}
		<h1>This is a placeholder heading</h1>
		<Footer />
		{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js" />
		<script src="/js/mapbox.js" />
		<script src="/js/login.js" /> */}
		<script src="https://js.stripe.com/v3/" />
		<script src="/js/bundle.js" />
	</body>
</html>;
