import React from "react";

const USAState = (props) => {
  const className = `${props.state} state`
  return (
    <path d={props.dimensions}
      fill={props.fill}
      data-name={props.state}
      className={className}
      onClick={props.onClickState}>
      <title>{props.stateName}</title>
    </path>
  );
}
export default USAState;
