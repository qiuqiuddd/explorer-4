import React from 'react';
import { PropTypes as T } from 'prop-types';
import { Helmet } from 'react-helmet';

import { environment, appTitle, appUrl } from '../config';

const MetaTags = ({ title, description, children }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description ? <meta name='description' content={description} /> : null}

      {/* Twitter */}
      <meta name='twitter:card' content='summary' />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={appUrl} />
      <meta property='og:site_name' content={appTitle} />
      <meta property='og:title' content={title} />
      <meta
        property='og:image'
        content='/assets/graphics/meta/default-meta-image.png'
      />
      {description ? (
        <meta property='og:description' content={description} />
      ) : null}

      {/* Additional children */}
      {children}
    </Helmet>
  );
};

if (environment !== 'production') {
  MetaTags.propTypes = {
    title: T.string,
    description: T.string,
    imgUrl: T.string,
    children: T.node
  };
}

export default MetaTags;
