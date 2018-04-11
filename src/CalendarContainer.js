'use strict';

var React = require('react'),
	createClass = require('create-react-class'),
	DaysView = require('./DaysView'),
	MonthsView = require('./MonthsView'),
	YearsView = require('./YearsView'),
	TimeView = require('./TimeView')
	;

var CalendarContainer = createClass({
	viewComponents: {
		days: DaysView,
		months: MonthsView,
		years: YearsView,
		time: TimeView
	},

	render: function() {
		return React.createElement('div', {}, [React.createElement( this.viewComponents[ this.props.view ], this.props.viewProps ), this.props.renderAddon && this.props.renderAddon(this.props.closeCalendar)]);
	}
});

module.exports = CalendarContainer;
