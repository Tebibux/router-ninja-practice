import { Link, Outlet } from "react-router-dom"
export default function HomeLayout() {
	return (
		<main>
			<div className="main-nav">
				<Link index className="hover-effect">Paradise</Link>
				<Link to='explore'className="hover-effect">Explore</Link>
			</div>
			<Outlet />

		</main>
	)
}