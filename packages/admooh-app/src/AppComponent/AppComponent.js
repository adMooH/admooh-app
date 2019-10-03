import React from 'react';

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.setApp !== undefined) {
      this.props.setApp(this);
    }
  }

  componentWillUnmount() {
    if (this.props.setApp !== undefined) {
      this.props.setApp(undefined);
    }
  }
}
