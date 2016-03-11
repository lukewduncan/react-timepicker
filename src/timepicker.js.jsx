var TimePicker = React.createClass({
  getInitialState: function() {
    return { start_time: '4:00pm'}
  },
  componentDidMount: function(){
    $(this.refs.startTimePicker).timepicker({step: 15, scrollDefault: 'now'})
      .on('changeTime', (e) => {
      this.startTimeChange(e);
    });
  },
  render: function(){
    return(
      <input ref="startTimePicker" value={this.state.starttime} onChange={this.startTimeChange} />
    )
  }
});