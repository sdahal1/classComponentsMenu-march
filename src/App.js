import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'

function App() {
  return (
    
      <div className="App">
        <Menu itemName={"Calamari"} desc = "Its some fried squid but its good tho" price = {12.99} orders= {12}>
          <h5>This is the first menu item!!!</h5>
          <p>This is a child paragraph tag to the MENU component</p>
        </Menu>
        <Menu itemName={"Al Pastor tacos"} desc= {"Tacos made exquisitly with a blend of squid and other secret ingredients "} price = {3.99} orders= {1}>
          <h3>This is the second menu item!</h3>
        </Menu>
        <Menu itemName= {"Salmon"} desc= {"Omega 3 tho "} price = {30.99} orders= {100}></Menu>
        <Menu itemName= {"Menudo"} desc= {"The menudo be on our menu tho"} price = {10.99} orders= {2}></Menu>
        <Menu itemName= {"Ramen"} desc= {"its not the Top Ramen tho"} price = {15.99} orders= {120}></Menu>
        
      </div>
  );
}

export default App;
