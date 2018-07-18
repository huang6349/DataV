import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  Layout,
} from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.css';

export const LayoutProps = {
  pathname: PropTypes.string.isRequired,
};

class LayoutView extends React.Component {

  static propTypes = {
    ...LayoutProps,
  }

  render() {
    return (
      <Layout className={styles['layout']}>
        <Layout.Header className={styles['header']}>
          <span>Example</span>
        </Layout.Header>
        <Layout.Content className={styles['content']}>
          <Scrollbars>{this.props.children}</Scrollbars>
        </Layout.Content>
      </Layout>
    );
  }
}

export default LayoutView;
