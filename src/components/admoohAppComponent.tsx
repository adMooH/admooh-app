import React from 'react';

interface AdmoohAppProps {
    setApp: (ref: React.Component | undefined) => undefined;
}

export default class AdmoohApp extends React.Component<AdmoohAppProps> {
  constructor(props: AdmoohAppProps) {
      super(props)
      if(this.props.setApp !== undefined) {
          this.props.setApp(this)
      }
  }
  componentWillUnmount() {
      if(this.props.setApp !== undefined) {
          this.props.setApp(undefined)
      }
  }
}
