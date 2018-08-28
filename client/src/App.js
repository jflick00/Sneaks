import React, {Component} from "react";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import AuthService from "./components/AuthService";
import "./App.css";


//Pages
import Home from "./pages/Home";
import Review from "./pages/Review";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Create from "./components/Create";

//Components
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

import swal from "sweetalert"



class App extends Component {

  constructor() {

    super();

    this.state = { 

      userName: '' ,
      password: '',
      userId: '',
      loggedIn: false,
      shoes: [],
      addshoes: [],
      addedShoe: '',

      randomshoes: [],
      selectRandomShoe: '',

      showModal: false,

      brandSelect: '',
      colorSelect: '',
      typeSelect: '',
      
      createUsername: '',
      createPassword: '',
      createPasswordConfirm: ''
    };

    // Home Page
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    //---------------------------------------------------------------//


    // Create Page
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.usernameValidate = this.usernameValidate.bind(this);

    this.handleCreateUserChange = this.handleCreateUserChange.bind(this);
    this.handleCreatePasswordChange = this.handleCreatePasswordChange.bind(this);
    this.handleCreatePasswordCChange = this.handleCreatePasswordCChange.bind(this);
    //------------------------------------------------------------------------------//

    // Profile Page
    this.showAddModal = this.showAddModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getUserShoes = this.getUserShoes.bind(this);

    // Add Shoe
    this.handleBrandSelectChange = this.handleBrandSelectChange.bind(this);
    this.handleColorSelectChange = this.handleColorSelectChange.bind(this);
    this.handleTypeSelectChange = this.handleTypeSelectChange.bind(this);
    this.filterShoes = this.filterShoes.bind(this);
    this.handleAddShoeClick = this.handleAddShoeClick.bind(this)

    // Review Page
    this.getRandomShoes = this.getRandomShoes.bind(this);

    this.Auth = new AuthService();
  }

  //Home
  handleUserChange(e) {
    this.setState({ userName: e.target.value });
  } 
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  //---------------------------------------------------------------//
 

  //Create
  usernameValidate() {
     
    fetch('/users', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userName: this.state.createUsername, password: this.state.createPassword})
    }).then(results => {
      return results.json();
    }).then(data => {
      if (data.err === null) {
        alert("User Created")
      } else if (data.err !== null) {
        alert("Username Taken Already")
      }
    })

  }
  handleCreateUser(e) {

    e.preventDefault();
    
    if (this.state.createUsername === '' || this.state.createPassword === '' || this.state.createPasswordConfirm === '') {
      alert("Please Fill Out All Entries") 
    } else if (this.state.createPassword !== this.state.createPasswordConfirm) {
      alert("Passwords Do Not Match")
    } else (this.usernameValidate())
    
  }
  handleCreateUserChange(e) {
    this.setState({ createUsername: e.target.value });
  } 
  handleCreatePasswordChange(e) {
    this.setState({ createPassword: e.target.value });
  } 
  handleCreatePasswordCChange(e) {
    this.setState({ createPasswordConfirm: e.target.value });
  } 
  //---------------------------------------------------------------//


  // Profile
  showAddModal(e) { 
    e.preventDefault();
    fetch('/allshoes', { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(results => {
      return results.json();
    }).then(data => {
      var newArr = data.map(result => {
       return result.shoe_id
      })
      this.setState({
        addshoes: newArr,
        showModal: true
      }) 
    })

  }
  hideModal() {
    this.setState({showModal: false})
  }
  // Profile Content 
  getUserShoes() {
    fetch('/shoes/' + this.state.userId, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(results => {
      return results.json();
    }).then(data => {
       console.log(data)
      var newArr = data.map(result => {
       return result.shoe_id
      })
      this.setState({shoes: newArr})
    })

  }
  // Add Shoe
  filterShoes(e) {
    e.preventDefault();
    fetch('/filtershoes/' + this.state.brandSelect + "/" + this.state.colorSelect + "/" + this.state.typeSelect, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(results => {
      return results.json();
    }).then(data => {
       console.log(data)
      var newArr = data.map(result => {
       return result.shoe_id
      })

      this.setState({addshoes: newArr}) 
    })
  }
  handleAddShoeClick(e) {

    fetch('/addshoe', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId: this.state.userId, shoeId: e.target.id})
    }) .then(results => {
      return results.json();
    }).then(data => {
      console.log(data)
      swal("Shoe Added!","","success");
    }) 
  }
  handleBrandSelectChange(e) {
    this.setState({brandSelect: e.target.value})
  }
  handleColorSelectChange(e) {
    this.setState({colorSelect: e.target.value})
  }
  handleTypeSelectChange(e) {
    this.setState({typeSelect: e.target.value})
  }
  //---------------------------------------------------------------//


  // Login Logout
  handleLogout(e) {
    this.Auth.logout()
    this.setState({loggedIn: false})
    //this.props.history.push('/home')
  }
  handleLoginSubmit(e) {

    e.preventDefault()
    
    this.Auth.login(this.state.userName, this.state.password)
    //.then( () => { return this.Auth.getProfile() })
    //.then(result => { return this.setState({shoes: result.result})
    .then( () => { this.props.history.push('/profile')})
    .catch(err => { alert(err) })

  }
  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.getRandomShoes();
      var user = this.Auth.getProfile()
      this.setState({ userId: user.userid, userName: user.username, loggedIn: true })
    }
  }
  componentDidMount() {
    if (this.Auth.loggedIn()) {
      this.getUserShoes();
      
    }
  } 
  //---------------------------------------------------------------//


  // Review
  getRandomShoes() {
    fetch('/allshoes', { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(results => {
      return results.json();
    }).then(data => {
      console.log(data)
      var newArr = data.map(result => {
       return result.shoe_id
      })
      this.setState({
        randomshoes: newArr,
        selectRandomShoe: newArr[Math.floor(Math.random() * newArr.length)]
      }) 
    })
  } 
  
  


  render() {
    return(
      <Router>
        <div>
          <Navbar loggedIn={this.state.loggedIn}/>
      
            <Wrapper>
              
              
              <Route exact path="/" render={() => <Home/>} />

              <Route exact path="/home" render={() => <Home
              loggedIn={this.state.loggedIn}
              userName={this.state.userName}
              password={this.state.password}
              handleUserChange={this.handleUserChange}
              handlePasswordChange={this.handlePasswordChange}
              handleLoginSubmit={this.handleLoginSubmit}
              loginMessage={this.state.loginMessage}
              />} />

              <Route exact path="/login" render={() => <Login 
              loggedIn={this.state.loggedIn}
              userName={this.state.userName}
              password={this.state.password}
              handleUserChange={this.handleUserChange}
              handlePasswordChange={this.handlePasswordChange}
              handleLoginSubmit={this.handleLoginSubmit}
              loginMessage={this.state.loginMessage}
              handleLogout={this.handleLogout}           
              />
              }/>

              <Route exact path="/create" render={() => <Create

              handleCreateUser={this.handleCreateUser}
              createPassword={this.state.createPassword}
              createUsername={this.state.createUsername}
              
              handleCreateUserChange={this.handleCreateUserChange}
              handleCreatePasswordCChange={this.handleCreatePasswordCChange}
              handleCreatePasswordChange={this.handleCreatePasswordChange}
              />} />

              <Route exact path="/review" render={() => <Review
              getRandomShoes={this.getRandomShoes}
              randomshoes={this.state.randomshoes}
              selectRandomShoe={this.state.selectRandomShoe}
              />} />

              <Route exact path="/profile" render={() => <Profile
              userName={this.state.userName}
              showModal={this.state.showModal}
              shoes={this.state.shoes}
              getUserShoes={this.getUserShoes}
              showAddModal={this.showAddModal}
              hideModal={this.hideModal}
              addshoes={this.state.addshoes}

              filterShoes={this.filterShoes}
              handleBrandSelectChange={this.handleBrandSelectChange}
              handleColorSelectChange={this.handleColorSelectChange}
              handleTypeSelectChange={this.handleTypeSelectChange}
              handleAddShoeClick={this.handleAddShoeClick}

              />} />

            </Wrapper>
          
        </div>
      </Router>
    )
  }
}

export default withRouter(App);

