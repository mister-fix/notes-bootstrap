import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = (props) => {
	const navigate = useNavigate();
	const onSubmit = (event) => {
		event.preventDefault();

		props.onLogin("mluukkai");
		navigate("/");
	};

	return (
		<div>
			<h2>Login</h2>

			<Form onSubmit={onSubmit}>
				<Form.Group>
					<Form.Label>username:</Form.Label>
					<Form.Control
						type="text"
						name="username"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>password:</Form.Label>
					<Form.Control
						type="password"
						name="password"
					/>
				</Form.Group>
				<Button
					variant="primary"
					type="submit"
				>
					login
				</Button>
			</Form>
		</div>
	);
};

export default Login;
