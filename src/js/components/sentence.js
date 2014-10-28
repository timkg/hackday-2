/** @jsx React.DOM */
var React = require('react');
var Word = require('./word');
var Dispatcher = require('../dispatchers/dispatcher');
var merge = require('react/lib/merge');

var Sentence = React.createClass({
  handleClick: function () {
    Dispatcher.dispatch(merge({action: 'SENTENCE_CLICKED'}, this.props.data));
  },
  render: function () {
    return (
      <p onClick={this.handleClick} className="sentence" data-speaker={this.props.data.speaker}>
        {this.props.data.words.map(function(word) {
          return <Word data={word} />;
        })}
      </p>
    )
  }
});

module.exports = Sentence;
