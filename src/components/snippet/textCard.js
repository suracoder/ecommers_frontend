import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {Button,Avatar,Container} from '@material-ui/core'

class TextCard extends React.Component{

    render(){ 
        let namess=this.props.name
        return <Link to={this.props.link} >
        <div className="f-flex card-div card-hover w-100 whitebg padding radius br h-a">
            <Avatar className="r-5 marginrit">{namess.charAt(0)}</Avatar>
            <div><p className="h3 marginrit">{this.props.name}</p>
            <p className="liltext">{descriptiontext(this.props.description)}</p>
            </div>
            <Button className="   gray br w-20"><p className="marginrit">See Detail</p><FontAwesomeIcon className="" icon={faArrowRight}/></Button>
        </div></Link>
    }
}

function descriptiontext(desc){
    desc=desc+""
   if(desc.length>100){
       return (desc.slice(0,100)+"...")
   }else{
       return desc;
   }
}


export default TextCard
