import React from 'react';
import evalApp from '../tools/evalApp';

class AdmoohApp extends React.Component {
  setCurrentApp(app) {
    if(app)
    {
      this._app = app;
      if(this.props.onSetApp) {
        this.props.onSetApp(this._app);
      }
    }
  }

  render() {
    const { template, context, data  } = this.props;

    let templateProps = {
      context: context,
      setApp: this.setCurrentApp.bind(this),
      data: JSON.parse(data)
    };

    evalApp(template);

    if(window.admoohApp) {
      const appComponent = window.admoohApp.get(templateProps);
      window.admoohApp.get = null;
      delete window.admoohApp;
      templateProps = null;
      return appComponent
    }

    return <></>
  }

  componentWillUnmount() {
    if (window.admoohApp) {
        window.admoohApp = null;
        delete window.admoohApp;
    }
    if (this._app) {
        this._app = null;
        delete this._app;
    }
  }
}

export default AdmoohApp;
