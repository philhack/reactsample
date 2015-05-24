/** @jsx React.DOM */
'use strict';
var Quiz = React.createClass({
    render: function() {
        console.log('rendering');
        return <div>{this.props.name}</div>;
    }
});

React.render(<Quiz name="foo" />, document.getElementById('app'));

