import React from 'react';

export const buildApp = (app, prepare) => {
  window.admoohApp = {
    get: (props) => React.createElement(app, props),
    prepare: (props) => prepare(props)
  };
};

export default buildApp;
