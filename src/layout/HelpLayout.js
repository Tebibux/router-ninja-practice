import { NavLink, Link, Outlet } from "react-router-dom"
export default function HelpLayout() {
	return (
		<>
			<div className="main-nav">
				<Link index className="hover-effect">FAQ</Link>
				<NavLink to='message' className="hover-effect">Message</NavLink>
			</div>
			<Outlet />
		</>
	)
}