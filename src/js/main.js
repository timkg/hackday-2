/** @jsx React.DOM */
var React = require('react');
var InfoBox = require('./components/infoBox');
var Dialog = require('./components/dialog');

var dialogData = require('./lesson1');

React.renderComponent(
  <InfoBox />,
  document.getElementsByTagName('aside')[0]
);

React.renderComponent(
  <Dialog data={dialogData} />,
  document.getElementById('dialog')
);
