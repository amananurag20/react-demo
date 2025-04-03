import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 1000,
      data: "songs",
      email: "abc@gmail.com",
    };
  }

  render() {
    const { name, gfName } = this.props;
    return (
      <>
        <h1>hi dear</h1>
        <h2>{name}</h2>
        <h3>{gfName}</h3>
        <h4>{this.state.data}</h4>
        <h4>{this.state.email}</h4>
        <h4>{this.state.count}</h4>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1000,
              data: "toota dil",
            })
          }
        >
          increase count
        </button>
      </>
    );
  }
}

export default User;
