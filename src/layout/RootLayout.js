import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
	return (
		<>
			<header>
				<h1>Land Of Paradise</h1>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="about">About</NavLink>
					<NavLink to="contact">Contact</NavLink>
					<NavLink to="help">Help</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>

	)
}