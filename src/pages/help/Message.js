import { Form } from "react-router-dom";

export default function Message() {
	return (
		<>
			<div className="root-faq">
				<div className="root-contact">
					<div className="contact">
						<h3>Contact Us</h3>
						<Form method="post" action="/help/contact">
							<label>
								<span>Your email:</span>
								<input type="email" name="email" required />
							</label>
							<label>
								<span>Your message:</span>
								<textarea name="message" required></textarea>
							</label>
							<button>Submit</button>
						</Form>
					</div>
				</div>
			</div>
		</>
	)
}
