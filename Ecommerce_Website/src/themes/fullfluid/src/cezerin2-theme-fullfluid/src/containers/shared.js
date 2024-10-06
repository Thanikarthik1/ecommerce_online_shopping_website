import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { themeSettings } from '../lib/settings';
import Header from '../components/header';
import Footer from '../components/footer';

const SharedContainer = props => {
	const {
		children,
		cookieBannerContent,
		state: { currentPage, settings, cookiebanner }
	} = props;
	const hideFooter =
		(currentPage.path === '/checkout-success' ||
			currentPage.path === '/checkout') &&
		themeSettings.hide_footer_on_checkout === true;

	return (
		<Fragment>
			<Header {...props} />
			{children}
			{!hideFooter && (
				<Footer
					settings={settings}
					cookieBannerContent={cookieBannerContent}
					cookiebanner={cookiebanner}
				/>
			)}
		</Fragment>
	);
};

SharedContainer.propTypes = {
	children: PropTypes.element.isRequired,
	state: PropTypes.shape({
		currentPage: PropTypes.shape({}),
		settings: PropTypes.shape({}),
		cookiebanner: PropTypes.shape({})
	}).isRequired
};

export default SharedContainer;
