var React = require('react');
var ReactDOM = require('react-dom');

var BackgroundImage = React.createClass({
  componentWillMount:function(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    this.setState({x:x,y:y});
  },
  render:function(){
    return (<div><img className='bg' src={'https://source.unsplash.com/'+this.state.x+'x'+this.state.y+'/?nature'} /></div>)
  }
});

ReactDOM.render(
  <BackgroundImage/>,
  document.getElementById('app')
);
