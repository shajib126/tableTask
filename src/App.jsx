import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Table from "./components/Table/Table";
import data from "./data.json";
import Sidebar from "./components/Sidebar/Sidebar";
import Heading from "./components/Heading";
import Arrow from "./assets/Polygon 3.png";
function App() {
  const [toggleMaterial, setToggleMaterial] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleInventory, setToggleInventory] = useState(false);
  const [green,setGreen] = useState(false)
  const [orange,setOrange] = useState(false)
  let filteredData;


  if(green && orange){
    filteredData = data
  }else if(green){
    filteredData = data.slice(0,10)
  }else if(orange){
    filteredData = data.slice(10, data.length)
  }
  else{
    filteredData = data
  }
   
  
  return (
    <>
      <div className="tableList">
        <Nav />
        <Heading />
        <div className="sideAndtable">
          <Sidebar />
          <div className="filterArea">
            <div className="material">
              <button className="toggle-btn">
                Matrial{" "}
                <img
                  onClick={() => setToggleMaterial(!toggleMaterial)}
                  src={Arrow}
                  alt=""
                />
              </button>
              {toggleMaterial && <input type="checkbox" name="" id="" />}
            </div>

            <div className="material">
              <button className="toggle-btn">
                Filters{" "}
                <img
                  onClick={() => setToggleFilter(!toggleFilter)}
                  src={Arrow}
                  alt=""
                />
              </button>
              {toggleFilter && (
                <div className="filterInput">
                  <div className="inputgroup">
                    <input onClick={(e)=>setGreen(e.target.checked)} type="checkbox" value="green" />
                    <span className="green">.</span>
                    <p>Forcast</p>
                  </div>

                  <div className="inputgroup">
                    <input onClick={(e)=>setOrange(e.target.checked)} type="checkbox"  />
                    <span className="yellow">.</span>
                    <p>Firm Orders</p>
                  </div>

                  <div className="inputgroup">
                    <input type="checkbox" name="" id="" />
                    <p>Include POs</p>
                  </div>
                </div>
              )}
            </div>

            <div className="material">
              <button className="toggle-btn">
                Inventory{" "}
                <img
                  onClick={() => setToggleInventory(!toggleInventory)}
                  src={Arrow}
                  alt=""
                />
              </button>
              {toggleInventory && <input type="checkbox" name="" id="" />}
            </div>
          </div>
          <Table data={filteredData} />
        </div>
      </div>
    </>
  );
}

export default App;
