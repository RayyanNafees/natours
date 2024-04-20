const Base = require("./base");
<Base>
	<main className="main">
		<div className="user-view">
			<nav className="user-view__menu">
				<ul className="side-nav">
					<li className={`${user.role === "admin" ? "side-nav--active" : ""}`}>
						<a href="#id">Settings</a>
					</li>
					<li>
						<a href="/my-tours">My bookings</a>
					</li>
					<li>
						<a href="#id">My reviews</a>
					</li>
					<li>
						<a href="#id">Billing</a>
					</li>
				</ul>
				{user.role === "admin" && (
					<div className="admin-nav">
						<h5 className="admin-nav__heading">Admin</h5>
						<ul className="side-nav">
							<li>
								<a href="#id">Manage tours</a>
							</li>
							<li>
								<a href="#id">Manage users</a>
							</li>
							<li>
								<a href="#id">Manage reviews</a>
							</li>
							<li>
								<a href="#id">Manage bookings</a>
							</li>
						</ul>
					</div>
				)}
			</nav>
			<div className="user-view__content">
				<div className="user-view__form-container">
					<h2 className="heading-secondary ma-bt-md">Your account settings</h2>
					<form className="form form-user-data">
						<div className="form__group">
							<label className="form__label" htmlFor="name">
								Name
							</label>
							<input
								id="name"
								className="form__input"
								type="text"
								value={user.name}
								required
								name="name"
							/>
						</div>
						<div className="form__group ma-bt-md">
							<label className="form__label" htmlFor="email">
								Email address
							</label>
							<input
								id="email"
								className="form__input"
								type="email"
								value={user.email}
								required
								name="email"
							/>
						</div>
						<div className="form__group form__photo-upload">
							<img
								className="form__user-photo"
								src={`/img/users/${user.photo}`}
								alt="User Pic"
							/>
							<input
								className="form__upload"
								type="file"
								accept="image/*"
								id="photo"
								name="photo"
							/>
							<label htmlFor="photo">Choose new photo</label>
						</div>
						<div className="form__group right">
							<button type="button" className="btn btn--small btn--green">
								Save settings
							</button>
						</div>
					</form>
					<div className="line">&nbsp;</div>
					<div className="user-view__form-container">
						<h2 className="heading-secondary ma-bt-md">Password change</h2>
						<form className="form form-user-password">
							<div className="form__group">
								<label className="form__label" htmlFor="password-current">
									Current password
								</label>
								<input
									id="password-current"
									className="form__input"
									type="password"
									placeholder="••••••••"
									required
									minLength="8"
								/>
							</div>
							<div className="form__group">
								<label className="form__label" htmlFor="password">
									New password
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
							<div className="form__group ma-bt-lg">
								<label className="form__label" htmlFor="password-confirm">
									Confirm password
								</label>
								<input
									id="password-confirm"
									className="form__input"
									type="password"
									placeholder="••••••••"
									required
									minLength="8"
								/>
							</div>
							<div className="form__group right">
								<button
									type="button"
									className="btn btn--small btn--green btn--save-password"
								>
									Save password
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</main>
</Base>;
