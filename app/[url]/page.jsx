import React from "react";

const page = ({ params }) => {
  const { url } = params;
  return (
    <div>
      <p>{url}</p>
    </div>
  );
};

export default page;
