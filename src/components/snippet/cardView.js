import React from 'react'
import {Link} from 'react-router-dom'
import { Typography,Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faDollarSign } from '@fortawesome/free-solid-svg-icons'


class CardView extends React.Component{
    render(){
        return <Link to={this.props.url}><li className="li whitebg card-div  radius w-30 marginrit">
        <div className="img-div radius " style={{background:`url(${this.props.image})`,backgroundSize:'cover'}}></div>
        
        <div className="padding card">
        <Typography className="head-txt"><b>{this.props.name}</b></Typography>
            <p>{descriptiontext(this.props.desc)}</p>
            <br></br>
            <div className="flex bottom-up">
            <FontAwesomeIcon className="h-100 " style={{width:'10px',marginRight:'3px'}} icon={faDollarSign} color="green"/><h1 className="liltext" style={{color:'green'}}>{this.props.price}etb</h1>
            </div>
            <Link to={this.props.url}><Button className="radius  m-top bg-eee bottom"><p className="marginrit ">Details</p><FontAwesomeIcon icon={faArrowRight}/></Button></Link>

           
        </div>
           
        </li>
        </Link>
    }
}
export default CardView

function descriptiontext(desc){
    desc=desc+""
   if(desc.length>100){
       return (desc.slice(0,100)+"...")
   }else{
       return desc;
   }
}