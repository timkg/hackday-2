/** @jsx React.DOM */
var React = require('react');
var Dispatcher = require('../dispatchers/dispatcher');

var InfoBoxHeader = React.createClass({
  render: function () {
    return (
      <h3>{this.props.text}</h3>
    )
  }
});

var InfoBoxSubheader = React.createClass({
  render: function () {
    return (
      <h4>{this.props.text}</h4>
    )
  }
});

var InfoBoxBody = React.createClass({
  render: function () {
    return (
      <div>{this.props.text}</div>
    )
  }
});

var InfoBox = React.createClass({
  getInitialState: function () {
    return {
      "display": "are",
      "root": "be",
      "POS": "verb",
      "PennPOS": "?",
      "verb_class": "copula",
      "person": 2,
      "number": "sg",
      "tense": "present"
    }
  },
  componentDidMount: function () {
    var self = this;
    Dispatcher.register(function (payload) {
      self.setState(payload);
    })
  },
  getHeaderContent: function (state) {
    return <span>{this.state.display}</span>;
  },
  getSubheaderContent: function (state) {
    switch (this.state.POS) {
      case "verb":
        return <span>{this.state.root} &middot; {this.state.POS}</span>;
        break;
      default:
        return <span>{this.state.POS}</span>;
    }
  },
  getBodyContent: function (state) {
    return <span>This is some fancy content for {this.state.display}</span>;
  },
  render: function () {
    var headerContent = this.getHeaderContent();
    var subheaderContent = this.getSubheaderContent();
    var bodyContent = this.getBodyContent();
    return (
      <div className="info">
        <InfoBoxHeader text={headerContent} />
        <InfoBoxSubheader text={subheaderContent} />
        <InfoBoxBody text={bodyContent} />
      </div>
    )
  }
});

module.exports = InfoBox;
