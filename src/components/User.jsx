import React, { Component } from "react";
import ChildClass from "./ChildClass";

class User extends Component {
  constructor(props) {
    super(props);
    console.log(props.name + " constructor is called");

    this.state = {
      count: 1000,
      email: "abc@gmail.com",
    };
  }

  componentDidMount() {
    //useEffect []
    console.log(this.props.name + "component did mount");
  }

  componentWillUnmount() {
    //useEffect return
    console.log(this.props.name + "component will unmount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.name + "component did update");

    if (prevState.count !== this.state.count) {
      console.log("count changed");
    }
  } //useEffect

  // useEffect(()=>{
  //   console.log("count updated")
  // },[count])

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>hi dear</h1>
        {console.log(this.props.name + "after render")}
        <h2>{name}</h2>

        <h4>{this.state.count}</h4>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1000,
            })
          }
        >
          increase count
        </button>

        <ChildClass name={"First child"} />
        <ChildClass name={"Second child"} />
        <ChildClass name={"Third child"} />
      </>
    );
  }
}

export default User;
