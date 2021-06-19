/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image"
import Button from '@material-ui/core/Button';

const ThirdPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the second page</h1>
		<p>Welcome to page 3</p>
		<Link to="/">Go back to the homepage</Link>
		<Button variant="contained">Hello!!</Button>;
		<StaticImage 
		alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hmrsolutions.net%2Ffdas-fire-detection-and-alarm-system%2F&psig=AOvVaw2sp6IcNr5NEVLnWsCJ3z4s&ust=1624171779349000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCOCH28GNo_ECFQAAAAAdAAAAABAD'
		/>
	</Layout>
);

export default ThirdPage;
