import React from 'react';
import Layout from '../components/layout/Layout';
import Home from '../components/home/Home';

function HomePage(props) {
	return <Layout children={<Home />} />;
}

export default HomePage;
