const Base = require("./baseEmail");
<Base>
	<p>Hi {firstName},</p>
	<p>Welcome to Natours, we're glad to have you 🎉🙏</p>
	<p>
		We're all a big family here, so make sure to upload your user photo so we
		get to know you a bit better!
	</p>
	<table
		className="btn btn-primary"
		role="presentation"
		border="0"
		cellpadding="0"
		cellspacing="0"
	>
		<tbody>
			<tr>
				<td align="left">
					<table role="presentation" border="0" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td>
									<a href={url} target="_blank" rel="noreferrer">
										Upload user photo
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
	<p>
		If you need any help with booking your next tour, please don't hesitate to
		contact me!
	</p>
	<p>- Jonas Schmedtmann, CEO</p>
</Base>;