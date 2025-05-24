import UserProfileCardComp from './Components/UserProfileCardFunComp';
import './App.css';

// import image
import user1 from "./Assets/user-1.jpg";
import user2 from "./Assets/user-2.jpg";
import user3 from "./Assets/user-3.jpg";
import user4 from "./Assets/user-4.jpg";
import user5 from "./Assets/user-5.jpg";
import user6 from "./Assets/user-6.jpg";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <UserProfileCardComp image={user1} name="Jane Doe" skill=" UI/UX Designer" experience=" 5+ years" email="janeDoe@123.com" Location="New York, USA" Phone="+1 (555) 123-4567" />
        <UserProfileCardComp image={user2} name="Sarah Lee" skill="Product Manager" experience=" 1+ years" email="sarah@456.com" Location="London, UK" Phone=" +44 7700 900123"/>
        <UserProfileCardComp image={user3} name="Amina Khan" skill="Frontend Developer" experience=" 4+ years" email="aminakhan@123.com" Location="Toronto, Canada" Phone=" +1 (604) 555-0114"/>
        <UserProfileCardComp image={user4} name="John Smith" skill="Full Stack Developer" experience=" 5+ years" email="john@789.com" Location="Toronto, Canada" Phone="  +1 (416) 987-6543"/>
        <UserProfileCardComp image={user5} name="Emma Garcia" skill="QA Analyst" experience=" 8+ years" email="emma@999.com" Location="Madrid, Spain" Phone=" +44 20 7946 0958"/>
        <UserProfileCardComp image={user6} name="Hiro Tanaka" skill="DevOps Engineer" experience=" 3+ years" email="hiro@123.com" Location="Tokyo, Japan" Phone=" +49 170 9876543"/>
      </div>
    </div>
  );
}

export default App;
