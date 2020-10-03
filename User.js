import React from "react";
import Contact from "./Contact";

const User = (props) => {
  // Object destructuring in ES6
  const { picture, name, age } = props.user;
  return (
    <div>
      <img src={picture} alt={name} />
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      {/* <Contact address={address} phone={phone} email={email} /> */}
      <Contact data={props.user} />
    </div>
  );
};

export default User;
