/** @jsx React.DOM */
var React = require('react');
var Dispatcher = require('../dispatchers/dispatcher');
var merge = require('react/lib/merge');

var Word = React.createClass({
  handleClick: function (event) {
    var words = document.querySelectorAll('.info .word');
    for ( var i = 0; i < words.length; i++ ) {
      if (words[i].dataset.active) { words[i].dataset.active = false; }
    };
    Dispatcher.dispatch(merge({action: 'WORD_CLICKED'}, this.props.data));
    event.target.dataset.active = true;
  },
  render: function () {
    return (
      <span onClick={this.handleClick} className="word" data={this.props.data}>{this.props.data.display}</span>
    )
  }
});

module.exports = Word;
