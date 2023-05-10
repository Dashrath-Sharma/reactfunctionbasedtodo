import React from "react";

export default function TodoList(props) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Your Items</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(function (item, i) {
          return (
            <tr key={item.id} class={i % 2 === 0 ? "table-active" : ""}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
