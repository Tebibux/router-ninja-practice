import { NavLink,Link, Outlet } from "react-router-dom"
export default function HomeLayout() {
	return (
		<main>
			<div className="main-nav">
				<Link index className="hover-effect">Paradise</Link>
				<NavLink to='explore'className="hover-effect">Explore</NavLink>
			</div>
			<Outlet />

		</main>
	)
}