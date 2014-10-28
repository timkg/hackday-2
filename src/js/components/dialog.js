/** @jsx React.DOM */
var React = require('react');
var DialogLine = require('./dialogLine');

var Dialog = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.data.map(function(dialogLine) {
          return <DialogLine data={dialogLine} />;
        })}
      </div>
    )
  }
});

module.exports = Dialog;
