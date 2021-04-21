import React from "react";

const List = (props) => {
  return (
    <>
      <div className="person">
        <img src={props.image} alt="" />
        <div>
          <h4>{props.name}</h4>
          <p>{props.age + " Years"}</p>
        </div>
      </div>
    </>
  );
};

export default List;
