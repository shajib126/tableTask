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
  const [green, setGreen] = useState(false);
  const [orange, setOrange] = useState(false);
  let filteredData;

  if (green && orange) {
    filteredData = data;
  } else if (green) {
    filteredData = data.slice(10, 14);
  } else if (orange) {
    filteredData = data.slice(11, 13);
  } else {
    filteredData = data;
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
              {toggleMaterial && (
                <div className="inputgroup">
                  <p>CDM DIM1 DIM2 DIM3 IDSC ODSC</p>
                </div>
              )}
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
                    <input
                      onClick={(e) => setGreen(e.target.checked)}
                      type="checkbox"
                      value="green"
                    />
                    <span className="green">.</span>
                    <div className="flexcol">
                      <p>Forcast</p>
                      <p>60</p>
                    </div>
                  </div>

                  <div className="inputgroup">
                    <input
                      onClick={(e) => setOrange(e.target.checked)}
                      type="checkbox"
                    />
                    <span className="yellow">.</span>
                    <div className="flexcol">
                      <p>Firm Orders</p>
                      <p>30</p>
                    </div>
                  </div>

                  <div className="inputgroup">
                    <input type="checkbox" name="" id="" />
                    <div className="flexcol">
                      <p>Include POs</p>
                      <p>30</p>
                    </div>
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
              {toggleInventory && (
                <div className="branchAndQuantity">
                  <div className="text">
                    <p> Branch</p>
                    <p className="quantity">
                      <i className="fa-solid fa-arrow-down"></i>Quantity(FT)
                    </p>
                  </div>
                </div>
              )}

              {toggleInventory && (
                <div className="">
                  <div className="inputgroup">
                    <input type="checkbox" name="" id="" />
                    <div className="flexcol">
                      <p>Butler</p>
                      <p>2937</p>
                    </div>
                  </div>
                  <div className="inputgroup">
                    <input type="checkbox" name="" id="" />
                    <div className="flexcol">
                      <p>Spring Valey</p>

                      <p>107</p>
                    </div>
                  </div>
                  <div className="inputgroup">
                    <input type="checkbox" name="" id="" />
                    <div className="flexcol">
                      <p>Sacramento</p>
                      <p>120</p>
                    </div>
                  </div>

                  <div className="inputgroup">
                    <input type="checkbox" name="" id="" />
                    <div className="flexcol">
                      <p>Birmingham</p>
                      <p>120</p>
                    </div>
                  </div>

                  <div className="tc">
                    
                    <div className="flexcol">
                      <p>TC</p>
                      <p>120</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Table green={green} orange={orange} data={filteredData} />
        </div>
      </div>
    </>
  );
}

export default App;
