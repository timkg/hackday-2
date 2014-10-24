/** @jsx React.DOM */
var React = require('react');
var Dispatcher = require('../dispatchers/dispatcher');
var Word = require('./word');

var SentenceInfoBoxHeader = React.createClass({
  render: function () {
    return (
      <header>
        {this.props.words.map(function(word) {
          return <Word data={word} />
        })}
      </header>
    )
  }
});

var SentenceInfoBoxSubheader = React.createClass({
  render: function () {
    var relatedLessons = this.props.sentence_related_content.map(function (lesson) {
      return <li>{lesson.lesson_title}</li>;
    });
    return (
      <div>
        <span>{this.props.sentence_primary_tag}</span>
        {relatedLessons}
      </div>
    )
  }
});

var SentenceInfoBox = React.createClass({
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
  render: function () {
    return (
      <div className="info">
        <SentenceInfoBoxHeader words={this.state.words} />
        <SentenceInfoBoxSubheader sentence_related_content={this.state.sentence_related_content} sentence_primary_tag={this.state.sentence_primary_tag} />
        <WordInfo />
      </div>
    )
  }
});

var WordInfo = React.createClass({
  componentDidMount: function () {
    var self = this;
    Dispatcher.register(function (payload) {
      if (payload.action === 'WORD_CLICKED') {
        self.setState(payload);
      }
    })
  },
  getInitialState: function () {
    return {
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
    }
  },
  getPOS: function () {
    switch (this.state.POS) {
      case "verb":
        return <span>{this.state.root} &middot; {this.state.POS}</span>;
        break;
      default:
        return <span>{this.state.POS}</span>;
    }
  },
  render: function () {
    var partOfSpeechInfo = this.getPOS();
    return (
      <div className="wordinfo">
        <h4>{this.state.display}</h4>
        {partOfSpeechInfo}
        <p>This is some fancy content for {this.state.display}</p>
      </div>
    )
  }
});

module.exports = SentenceInfoBox;
