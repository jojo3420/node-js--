import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ErrorCatcher from '../ErrorCatcher';

function Layout({ children }) {
	return (
		<ErrorCatcher>
			<Header />
			<Main children={children} />
			<Footer />
		</ErrorCatcher>
	);
}

export default Layout;
