/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Hi people and TypeScript!</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
		{/* MEMO: bundleするときにfile名を探しに入ってるっぽい */}
		<Link to="/page-2/">Go to page 2</Link>
		{/* MEMO: gatsby外のURLはaタグを使うべきらしい */}
		<a href="https://google.com">googleサイト</a>
		<Link to="/page-3/">Go to page 3</Link>
		<Link to="/navigation/">Go to page navigation</Link>
	</Layout>
);

export default IndexPage;
