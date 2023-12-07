import React from "react";

export const Card = ({ title, body }) => {
  return (
    <div class='card'>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
