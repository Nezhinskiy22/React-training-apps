import React from "react";

const LikedPerson = ({ person }) => {
  return (
    <div className="leked-person">
      <div className="liked-person-image">
        <img
          src={`.images/users/${person.image}`}
          alt={`You liked ${person.name}`}
        />
      </div>
    </div>
  );
};

export default LikedPerson;
