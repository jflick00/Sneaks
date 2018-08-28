import React, {Component} from "react";
//import { Link } from "react-router-dom";
import "./AddModal.css";
import AddCard from "../AddCard";



const AddModal = (props) => (
  
  <div className="modal display-block" style={{background: "#ffffff"}}>
  <button style={{margin:"10px 10px"}} class="close" onClick={function(event){props.hideModal() ; props.getUserShoes()}}>×</button>
    <section className="modal-main">
      <div class="modal-body" style={{overflowY: "auto"}}>
     
          <form>
            <div className="row form-group">

              <div className="col-sm-4">
                <label for="sel1">Brand</label>
                <select class="form-control" id="brandSelect" onChange={props.handleBrandSelectChange}>
                    <option value="All">All</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                </select>
              </div>

              <div className="col-sm-4">
                <label for="sel1">Color</label>
                <select class="form-control" id="colorSelect" onChange={props.handleColorSelectChange}>
                    <option value="All">All</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Grey">Grey</option>
                    <option value="Blue">Blue</option>
                    <option value="Navy">Navy</option>
                    <option value="Pink">Pink</option>
                    <option value="Brown">Brown</option>
                    
                </select>
              </div>

              <div className="col-sm-4">
                <label for="sel1">Type</label>
                <select class="form-control" id="typeSelect" onChange={props.handleTypeSelectChange}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Youth">Youth</option>
                </select>
              </div>

            </div>

            <div>
              <button className="waves-effect waves-light red btn" style={{float: "right", marginBottom:"20px"}} onClick={props.filterShoes}>Filter</button>
            </div>  

          </form>

      </div> 
    
      <div style={{height: "300px", border: "solid 3px #eeeeee", overflowY:"scroll"}}>
        {props.addshoes ? <AddCard {...props}/> : null}
      </div>
    </section>
  </div> 
  
    


);
    
export default AddModal;
