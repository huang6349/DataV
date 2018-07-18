import * as React from 'react';
import { connect } from 'dva';
import {
  DataVLayout,
} from '../../components';

function ExamplePage({ example }) {
  const { layouts } = example;
  return (
    <DataVLayout layouts={layouts} isDesign={true} />
  );
}

export default connect(function (state) {
  return { example: state['example'] };
})(ExamplePage);
