/** @jsx React.DOM */
var React = require('react');
var InfoBox = require('./components/infoBox');

React.renderComponent(
  <InfoBox />,
  document.getElementsByTagName('aside')[0]
);