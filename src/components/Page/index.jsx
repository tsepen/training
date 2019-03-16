import React, { Fragment } from 'react';

import { Helmet } from 'react-helmet';

import Header from '../Header'
import Footer from '../Footer'

const Page = ({ title, children }) => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    <Header />
    { children }
    <Footer />
  </Fragment>
)

export default Page;
