var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {id,text,completed,createdAt,completedAt} = this.props;
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
