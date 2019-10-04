import React from 'react';

export default class AppPreview extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
      return this.props.getApp({
        data: this.props.data,
        setApp: this.props.setApp,
        context: this.props.context,
      });
  }
}
