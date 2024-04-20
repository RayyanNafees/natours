<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>{subject}</title>
		<link rel="stylesheet" href="./style.css" />
	</head>
	<body>
		<table
			className="body"
			role="presentation"
			border="0"
			cellpadding="0"
			cellspacing="0"
		>
			<tbody>
				<tr>
					<td />
					<td className="container">
						<div className="content">
							{/* START CENTERED WHITE CONTAINER */}
							<table className="main" role="presentation">
								{/* START MAIN AREA */}
								<tbody>
									<tr>
										<td className="wrapper">
											<table
												role="presentation"
												border="0"
												cellpadding="0"
												cellspacing="0"
											>
												<tbody>
													<tr>
														<td>
															{children}
															{/* Include dynamic content here */}
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							{/* START FOOTER */}
							<div className="footer">
								<table
									role="presentation"
									border="0"
									cellpadding="0"
									cellspacing="0"
								>
									<tbody>
										<tr>
											<td className="content-block">
												<span className="apple-link">
													Natours Inc, 123 Nowhere Road, San Francisco CA 99999
												</span>
												<br />
												Don't like these emails?
												<a href="#id">Unsubscribe</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>;
