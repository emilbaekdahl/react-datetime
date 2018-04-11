var DateTime = require('../DateTime.js');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(DateTime, {
    renderAddOn: function(closeCalendar) {
      return React.createElement(
        'button',
        {
          onClick: closeCalendar,
        },
        'test',
      );
    },
  }),
  document.getElementById('datetime'),
);
