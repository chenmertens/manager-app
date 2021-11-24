import React from 'react';

class FormBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  isStart: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.isStart) {
      alert('Beginning task: ' + this.state.value);
    }
    else {
      alert('Ending task: ' + this.state.value);
      this.setState({value: ''})
    }
    event.preventDefault();
    this.setState({isStart: !this.state.isStart});
  }

  startText(boolean) {
    if (boolean) {
      return "Start"
    }
    else {
      return "Stop"
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter task:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value={this.startText(this.state.isStart)} />
      </form>
    );
  }
}

export default FormBox;
