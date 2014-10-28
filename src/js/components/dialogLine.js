/** @jsx React.DOM */
var React = require('react');
var Sentence = require('./sentence');

var DialogLine = React.createClass({
  render: function () {
    switch (this.props.data.item_type) {
      case "Phrase":
        return (
          <div className="dialogLine">
            {this.props.data.sentences.map(function(sentence) {
              return <Sentence data={sentence} />
            })}
          </div>
        );
        break;
      case "Task":
        return (
          <p className="dialogLine">{this.props.data.l1_text}</p>
        );
        break;
    }

  }
});

module.exports = DialogLine;
