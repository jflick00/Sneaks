import React, {Component} from "react";
import ProfileInfo from "../components/ProfileInfo"
import Closet from "../components/Closet"
import Wishlist from "../components/Wishlist"
import Trophies from "../components/Trophies"
import AddModal from "../components/AddModal"


class Profile extends Component {

  render() {
    return (
      <div>
        
          <ProfileInfo {...this.props}/>

          <div className="row" style={{borderBottom: "1px solid #eeeeee", paddingBottom: "30px"}}>
            <div className="col-sm-12 center" /* style={{borderRight: "2px dashed #eeeeee"}} */>
              <input className="waves-effect waves-light red btn" type="submit" value="+ Add" style={{cursor:"pointer", width:"150px"}} title="Add Shoe" onClick={this.props.showAddModal}></input>
             
            </div>

            {/* <div className="col-sm-6">
              <i className="medium material-icons">camera_alt</i>
            </div> */}
          </div>

          {this.props.showModal ? <AddModal {...this.props}/> : null}

          <div className="row center" id="content-tabs" style={{width: "30%", margin: "20px auto", display: "flex"}}>
            <div className="col sm-4" id="closet-tab" onClick={this.props.getUserShoes} style={{cursor: "pointer"}}>
              <i className="small material-icons" style={{verticalAlign: "middle"}}>grid_on</i><br></br>Closet
            </div>
            <div className="col sm-4" id="wishlist-tab" style={{cursor: "pointer"}} onClick={() => this.setState({showCloset:false, showWishlist:true, showTrophies:false})}>
              <i className="small material-icons" style={{verticalAlign: "middle"}}>bookmark_border</i><br></br>Saved
            </div>
            <div className="col sm-4" id="trohpies-tab" style={{cursor: "pointer"}} onClick={() => this.setState({showCloset:false, showWishlist:false, showTrophies:true})}>
              <i className="small material-icons" style={{verticalAlign: "middle"}}>card_membership</i><br></br>Trophies
            </div>
          </div>

          <div id="content" className="center" style={{backgroundColor: "#f7f5f6"}}>

            {this.props.shoes.map(shoe => (
              <img src={require("../images/Shoes/" + shoe + ".jpg")} key={shoe} style={{width:"30%"}}/> 
            ))}

          </div>

      </div>
    )
  }

};
  

export default Profile;
