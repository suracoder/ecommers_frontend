import React from 'react'
import {Breadcrumbs} from '@material-ui/core'
import {Link} from 'react-router-dom'

class BreadCrumbs extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props.links)
    }
    render(){
        return <Breadcrumbs separator="›" className="bottom-0">
            {this.props.links.map((dat,index)=>{
                return <Link to={dat.link}>{dat.name}</Link>
            })}<p></p>
        </Breadcrumbs>
    }
}
export default BreadCrumbs