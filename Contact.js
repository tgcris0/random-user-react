import React from "react";

export default function Contact(props) {
  // console.log(props);
  const { address, email, phone } = props.data;
  return (
    <div>
      <p>Address: {address} </p>
      <p>Email: {email} </p>
      <p>Phone number: {phone} </p>
    </div>
  );
}
