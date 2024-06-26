const Base = require('./baseEmail');

<Base>
	<p>Hi {firstName},</p>
	<p>
		Forgot your password? Submit a PATCH request with your new password and
		passwordConfirm to: {url}.
	</p>
	<p>(Website for this action not yet implemented.)</p>
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
									<a href={`${url}`} target="_blank" rel="noreferrer">
										Reset your password
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
	<p>If you didn't forget your password, please ignore this email!</p>
</Base>;
