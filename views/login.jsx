const Base = require("./base");

<Base>
	<main className="main">
		<div className="login-form">
			<h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
			<form className="form form--login">
				<div className="form__group">
					<label htmlFor="email" className="form__label">
						Email address
					</label>
					<input
						id="email"
						className="form__input"
						type="email"
						placeholder="you@example.com"
						required
					/>
				</div>
				<div className="form__group ma-bt-md">
					<label htmlFor="password" className="form__label">
						Password
					</label>
					<input
						id="password"
						className="form__input"
						type="password"
						placeholder="••••••••"
						required
						minLength="8"
					/>
				</div>
				<div className="form__group">
					<button type="button" className="btn btn--green">Login</button>
				</div>
			</form>
		</div>
	</main>
</Base>;
