import React, { Component } from "react";

class ChildClass extends Component {
  constructor(props) {
    super(props);
    console.log(props.name + " constructor is called");
  }

  componentDidMount() {
    //useEffect []
    console.log(this.props.name + "component did mount");
  }

  componentWillUnmount() {
    //useEffect return
    console.log(this.props.name + "component will unmount");
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>hi dear</h1>
        {console.log(this.props.name + "after render")}
        <h2>{name}</h2>
      </>
    );
  }
}

export default ChildClass;
