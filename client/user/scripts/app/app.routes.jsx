import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './../components/layout/layout';

import HomePage from './../../pages/home/home.container';
import AboutUsPage from './../../pages/about-us/about-us.container';
import BrowsePage from './../../pages/listing/listing.container';
import PostPage from './../../pages/post/post.container';
import RegisterPage from './../../pages/register/register.container';
import DetailsPage from './../../pages/details/details.container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="all-artists/" component={BrowsePage} />
    <Route path="artist/category/:name/" component={DetailsPage} />
    <Route path="about-us/" component={AboutUsPage} />
    <Route path="post/" component={PostPage} />
    <Route path="register/" component={RegisterPage} />
  </Route>
);
