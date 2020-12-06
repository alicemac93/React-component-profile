
import Person from "../../PersonalInfo";
import Stats from "../Stats/Stats";
import './App.css';


function App() {
  return (
    <div className="component">
        <img src={Person.src} alt="avatar" />
      <p>{Person.name}<span>{Person.age}</span></p>
      <p>{Person.location}</p>
      <div className="bottom"> 
      <Stats 
        statsName="Likes"
        statNumber="50"
      />
      </div>
    </div>
  );
}

export default App;


// items={Person.stats}