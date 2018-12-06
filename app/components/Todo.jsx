var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {id,text,completed,createdAt,completedAt} = this.props;
    var helper = completed ? 'todo todo-completed' : 'todo';
    var showDate = () => {
     var message = 'Created ';
     var stamp = createdAt;

     if (completed) {
       message = 'Finished ';
       stamp = completedAt;
     }
     return message + moment.unix(stamp).format('MMM Do YYYY @ h:mm a');
   };
    return (
      <div className={helper} onClick ={() =>{
          this.props.onToggle(id);
        }}>
        <div>
      <input type="checkbox" checked={completed}/>
      </div>
      <div>
      <p>{text}</p>
      <p>{showDate()}</p>
      </div>
      </div>
    )
  }
});

module.exports = Todo;
