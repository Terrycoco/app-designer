import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'pages/App';
import Page from 'examples/ExampleLayoutPage';
import Designer from 'pages/ColorDesigner';
// import ColorItem from 'components/ColorItem';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Designer} />
  </Route>
);
