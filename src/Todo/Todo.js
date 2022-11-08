import React    from "react";
import template from "./Todo.jsx";

class Todo extends React.Component {

  render() {
    return template.call(this);
  }
}

export default Todo;
