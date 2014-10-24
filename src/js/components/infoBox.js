/** @jsx React.DOM */
var React = require('react');

var InfoBox = React.createClass({
  getInitialState: function () {
    return {
      word: <h3>are</h3>,
      categoryInfo: <h4>to be &middot; {this.state.category}</h4>,
      category: <em>verb</em>,
      info: <table> <tbody> <tr> <td>1st</td> <td>am</td> </tr> <tr> <td>2nd</td> <td>are</td> </tr> <tr> <td>3rd</td> <td>is</td> </tr> </tbody> </table>
    }
  },
  render: function () {
    return (
      <div className="info">
        {this.state.word}
        {this.state.categoryInfo}
        {this.state.info}
      </div>
    )
  }
})

module.exports = InfoBox