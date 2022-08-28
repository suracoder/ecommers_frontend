import React from 'react'
import {Container,Avatar} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown,faSearch,faClock,faGlobe,faCog,faBookMedical} from '@fortawesome/free-solid-svg-icons'

class Headers extends React.Component{

    render(){
        return  <Container className="padding whitebg radius w-80 center  ">
        <div className="flex ">
        <div className="t-rit top-part">
        <h1 className="headers header-f  " style={{paddingBottom:'0px !important'}}>{this.props.header}</h1>
        <p className="h2 anim">{this.props.description}</p>
        <div className="" >
          <button className="button primary-button">Search Now</button>
        </div>
        </div>
        <img src="../something.jpg" className="hero " style={{float:'right'}}/>
        </div>
        
       <div className="features flex ">
            <div className="lil-card">
                <FontAwesomeIcon className="lil-icon" icon={faSearch}  color={"orange"}/>
                <h1>Search Easily</h1>
                <p>you can search medical items easily and order the equipment</p>

            </div>

            <div className="lil-card">
                <FontAwesomeIcon icon={faCog} className="lil-icon" color={"blue"}/>
                <h1>full maintainance</h1>
                <p>you can search medical items easily you talkin money need and order the equipment you can search medical items easily and order the equipment</p>

            </div>

            <div className="lil-card">
                <FontAwesomeIcon icon={faBookMedical} className="lil-icon" color={"skyblue"}/>
                <h1>Including Manual</h1>
                <p>you can search medical items easily and order the equipment</p>

            </div>
       </div>
        {/* <br></br>
        <Avatar className="active" ><FontAwesomeIcon icon={faArrowDown} /></Avatar> */}
    </Container>
    }
    
    
}

export default Headers