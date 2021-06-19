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
	</Layout>
);

export default ThirdPage;
