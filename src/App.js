
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import IndividualTeams from './components/IndividualTeams';
import LiveScore from './components/LiveScore';


function App(){

  const data=[
    {
      teamName:"RCB",
      batsman:"10",
      bowlers:"5",
      allrounders:"6"
    },

    {
      teamName:"CSK",
      batsman:"11",
      bowlers:"6",
      allrounders:"5"
    },

    {
      teamName:"KKR",
      batsman:"11",
      bowlers:"6",
      allrounders:"5"
    }
  ]
  const rcbData=[
    {
      player:"Virat Kohli",
      type:'Batsman'
  },
  {
    player:"Ab devilliers",
    type:'Batsman'
  },
  {
    player:"Harshal patel",
    type:'Bowler'
    },

  {
      player:"Maxwell",
  type:'Allrounder'
    },

  ]
  return(
      <div className='App'>
        <Header></Header>
        <Teams teamName={data[0].teamName} batsman={data[0].batsman} bowlers={data[0].bowlers} allrounders={data[0].allrounders}></Teams>
        <Teams teamName={data[1].teamName} batsman={data[1].batsman} bowlers={data[1].bowlers} allrounders={data[1].allrounders}></Teams>
        <Teams teamName={data[2].teamName} batsman={data[2].batsman} bowlers={data[2].bowlers} allrounders={data[2].allrounders}></Teams>
        <br></br>
              RCB Team
              <br></br>

         <IndividualTeams player={rcbData[0].player} type={rcbData[0].type}></IndividualTeams>
         <IndividualTeams player={rcbData[1].player} type={rcbData[1].type}></IndividualTeams>

        <Footer></Footer>
      </div>
  );
}
export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>


// function App(){
//   return(
//     <div>
//       <Header></Header>
//       <Teams></Teams>
//  </div>
//   );
// }



