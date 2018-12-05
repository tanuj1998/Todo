var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {id, text, completed, created, completedAt} = this.props;
    var showDate = () => {
     var message = 'Created ';
     var timestamp = created;

     if (completed) {
       message = 'Finished ';
       timestamp = completedAt;
     }
     return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
   };
    return (
      <div onClick ={() =>{
          this.props.onToggle(id);
        }}>
      <input type="checkbox" checked={completed}/>
      <p>{text}</p>
      <p>{showDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
