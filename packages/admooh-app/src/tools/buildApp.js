import React from 'react';

export const buildApp = (admoohApp, prepare) => {
  window.admoohApp = {
    get: (props) => <App {...props} />,
    prepare: (props) => prepare(props)
  };
};

export default buildApp;
