import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";

const Page = ({ title, children }) => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Page;
