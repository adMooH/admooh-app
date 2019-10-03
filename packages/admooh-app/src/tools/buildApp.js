import React from 'react';

export const buildApp = (App, prepare) => {
  window.admoohApp = {
    get: (props) => <App {...props} />,
    prepare: (props) => prepare(props)
  };
};

export default buildApp;
