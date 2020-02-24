import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Lonely from "./components/Lonely";
import data from "./data.json";

function App() {
  const [person, setPerson] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;
  const removePersonFromDataSrc = (people, userIs) => {
    people.filter(person => {
      person.id !== userId;
    });
  };

  const modifySuperficialChoices = (user, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikeUsers = [...dislikedUsers];

    switch (action) {
      case "ADD_TO_LIKED_USER":
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);

          setLikedUsers(newLikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
        break;
      case "ADD_TO_DISLIKED_USER":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);

          dislikedUsers(newLikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
        break;
      case "ADD_TO_SUPERLIKED_USERS":
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);

          superLikedUsers(newLikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };
  return (
    <div className="app">
      <Header />

      {people[1] ? (
        <Person
          key={person[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )}
    </div>
  );
}

export default App;
