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
      "sentence": "Good morning.",
      "speaker": 1,
      "sentence_related_content": [
        {
          "lesson_title": "Greetings and goodbyes",
          "lesson_id": 102239,
          "lesson_description": "Greetings and goodbyes - Basic vocabulary"
        },
        {
          "lesson_title": "Salutations",
          "lesson_id": 102211,
          "lesson_description": "Salutations - Useful sentences"
        }
      ],
      "sentence_tags": [ "Greeting", "Morning", "Conversation Opener"],
      "sentence_primary_tag": "Greeting",
      "words": [
        {
          "display": "Good",
          "root": "good",
          "POS": "Adjective",
          "PennPOS": "JJ",
          "word_related_content": [
            {
              "lesson_title": "Small Talk",
              "lesson_id": 106532,
              "lesson_description": "Small Talk - Basic vocabulary"
            }
          ]
        },
        {
          "display": "morning.",
          "root": "morning",
          "POS": "Noun",
          "PennPOS": "NN",
          "noun_class": "common",
          "word_related_content": [
            {
              "lesson_title": "Time",
              "lesson_id": 106748,
              "lesson_description": "Time - Advanced vocabulary"
            }
          ]
        }
      ]
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
