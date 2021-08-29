import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/Profile";
import React from "react";

function App() {
  const data = {
    fullName: "Ahmed Ben abdallah",
    bio: "on rêve toujours des visages que l'on a déjà vus",
    profession: "Etudiant",
    handleName(name) {
      return alert(`the name of the profile user is : ${name}`);
    },
  };

  return (
    <div className="App">
      <Profile data={data}>
        <img
          style={{ borderRadius: 150 }}
          src="/ahmed.jpg"
          alt="user image"
        ></img>
      </Profile>
    </div>
  );
}

export default App;
