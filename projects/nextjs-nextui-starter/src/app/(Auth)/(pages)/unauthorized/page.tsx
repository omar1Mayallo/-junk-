import React from "react";

const Unauthorized = ({ searchParams: { redirect } }: any) => {
  console.log(redirect);

  return (
    <div>
      <h1>
        You don't have permissions to this page,{" "}
        <a href={redirect} rel="noopener noreferrer">
          Go Back
        </a>
      </h1>
    </div>
  );
};

export default Unauthorized;
