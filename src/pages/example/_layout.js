import * as React from 'react';
import {
  Layout,
} from './components';

function LayoutView({ match, children }) {
  return (
    <Layout pathname={match['url']}>{children}</Layout>
  );
}

export default LayoutView;
