import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footerstyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		HOTEL 
	</h1>
	<Container>
		<Row>
		<Column>
        <FooterLink href="/AboutUS"><b>About US</b></FooterLink>
		</Column>
		<Column>
			<Heading>Other Services</Heading>
			<FooterLink href="#">Book Train Tickets</FooterLink>
			<FooterLink href="#">Food</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Nashik</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
