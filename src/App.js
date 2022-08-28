import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faQuestion, faScrewdriver, faSearch, faHome } from '@fortawesome/free-solid-svg-icons'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Home from './components/Home'
import Search from './components/Search'
import Detail from './components/Detail'
import ListCategory from './components/ListCategory'
import ListSubCategory from './components/ListSubCategory'
import ListProduct from './components/ListProduct'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import SparePart from './components/SparePart'
import Support from './components/Support'
import Manual from './components/Manual'
import { Button } from '@material-ui/core';
import GoogleLogin from './components/GoogleLogin';
import UserProfilePover from "./components/UserProfilePover"
import Language from "./components/Language"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({ searchicon: faSearch, searchkey: "", bar: "home", active: '', clicked: 'one' })
  }

  changeicon(event) {

    let keys = document.getElementById('searchkey').value
    this.setState({ searchicon: faSearch, searchkey: keys })




  }
  makeActive = (id, target) => {
    console.log("clicked here" + id)
    document.getElementById(this.state.clicked).classList.remove("b")
    this.setState({ clicked: id })
    target.classList.add("b")




  }
  setBar(value) {
    this.setState({ bar: value })
  }
  render() {
    let link = "/search/" + this.state.searchkey
    return <BrowserRouter>
      <div className="w-100 navbar-mobile">
        <BottomNavigation value={this.state.bar} onChange={(event, newval) => { this.setBar(newval) }}>
          <BottomNavigationAction value="home" label="homepage" icon={<Link to="/"><FontAwesomeIcon icon={faHome} /></Link>} />
          <BottomNavigationAction value="SparePart" label="Spareparts" icon={<Link to="/sparepart"> <FontAwesomeIcon icon={faScrewdriver} /></Link>} />
          <BottomNavigationAction value="Manual" label="Manual" icon={<Link to="/manual"><FontAwesomeIcon icon={faBook} /></Link>} />
          <BottomNavigationAction value="Support" label="Manual" icon={<Link to="/support"><FontAwesomeIcon icon={faQuestion} /></Link>} />

        </BottomNavigation>
      </div>
      <div className="navbar whitebg   flex">
        <div>
        <div className="lil-t t-b" style={{ paddingTop: '30px',marginLeft:"20px" }}>
          <p><b>YeHagere </b></p>
          {/* <p>+251 933333333</p>
          <p>Addis Abeba,Ethiopia</p>

          <p className="t-b">ethimline@gmail.com</p> */}
        </div>
          {/* <img className="logo " src="../logo-8.svg" />*/}
          </div> 
        <div className="lil-t t-b" style={{ paddingTop: '30px' }}>
          {/* <p><b>YeHagere </b></p> */}
          {/* <p>+251 933333333</p>
          <p>Addis Abeba,Ethiopia</p>

          <p className="t-b">ethimline@gmail.com</p> */}
        </div>
        <div className="padding"  ><Link to="/"><li id="one" className="padding    radius li" onClick={(e) => { this.makeActive("one", e.currentTarget) }}  ><p >Homepage</p></li></Link></div>

        <div className="padding"><Link to="/sparepart"><li id="two" className="padding  radius li" onClick={(e) => { this.makeActive("two", e.currentTarget) }} >Catagory</li>  </Link> </div>
        {/* <div className="padding"><Link to="/manual"><li id="three" className="padding  radius li" onClick={(e) => { this.makeActive("three", e.currentTarget) }} >Manual</li>  </Link> </div> */}
        <div className="padding"><Link to="/support"><li id="four" className="padding  radius li" onClick={(e) => { this.makeActive("four", e.currentTarget) }} >Support</li>  </Link> </div>


 
      
        <div className=" padding w-10">
          <div style={{ padding: '5px' }}>
            <Button title='cart' variant='contained' color='primary' >Cart</Button>


            <Link to={link}>

            </Link>
          </div>

        </div>
        <div className=" padding w-10">
          <div style={{ padding: '0px' }}>
            {/* <Button  title='cart'  variant='contained' color='primary' >Chart</Button> */}

          {localStorage.getItem("loginSuccess")=='true'?<div><UserProfilePover/></div>:  <GoogleLogin />}
            <Link to={link}>

            </Link>


            <Language/>
          </div>

        </div>
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:key" >
          <Search keys={this.state.searchkey} />
        </Route>
        <Route path="/manual" component={Manual} />
        <Route path="/support" component={Support} />
        <Route path="/sparepart" component={SparePart} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/category/:id" component={ListCategory} />
        <Route path="/subcategory/:id" component={ListSubCategory} />
        <Route path="/product/:id" component={ListProduct} />
      </Switch>

    </BrowserRouter>


  }
}
export default App;


 