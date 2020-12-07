import React from "react";
import Person from "../../PersonalInfo";
import Stats from "../Stats/Stats";
import image from "/Users/alicemaciejewska/Desktop/Projects/frontend_mentor/profile-card-component-main/profile-card/src/image-victor.jpg"
import './App.css';


function App() {
  return (
    <div className="component">
      <img 
        className="avatar" 
        src={image} 
        alt="avatar"/>
      <div className="middle">
          <p className="name"><strong>{Person.fname} {Person.lname}</strong><span className="age">{Person.age}</span></p>
          <p className="location">{Person.location}</p>
      </div>
      <div className="bottom"> 
      <Stats 
        stats={Person.stats}/>
      </div>
    </div>
  );
}


export default App;

//   const [followers, setFollowers] = useState("80k");
//   const [likes, setLikes] = useState("803k");
//   const [photos, setPhotos] = useState("1.4k");