import React from 'react'
import {faSearch,faDice,faCircleNotch,faSpinner,faHome,faPager} from '@fortawesome/free-solid-svg-icons'
import { Button,Paper, TextField,FormControl,Container,InputLabel,InputAdornment,BottomNavigation,BottomNavigationAction } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loadData from '../controller/loadData'
import SpareCard from './snippet/spareCard'

import Slides from './slides'

class SparePart extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            data:[],loaded:false,key:''
        })
    }
    async handleSearch(event){
        this.setState({key:event.target.value})
        let query={key:this.state.key}
        let resp=await loadData(query,"searchSparePart")
        this.setState({data:resp.data})
    }
    async componentDidMount(){
        let resp=await loadData({},"fetchSpare",false)
        this.setState({data:resp.data,loaded:true})
        console.log(resp.data)
    }
    async searchSparePart(){
      
    }
    render(){
        return <div className="top-part ">
        <center>
            <Container>
            
            <h1>Select SparePart Items</h1>
            <div className=" padding w-80">
      <div className="border flex" style={{padding:'5px'}}>
               <input className="padding b-none w-100" id="searchkey" type="text" placeholder="search items" onChange={(event)=>{this.handleSearch(event)}}/><Link to={""}><FontAwesomeIcon id="search" className="h-100 marginrit" icon={faSearch}/></Link>
               </div>
               
            
        </div>
        <h2>sparepart items</h2>
        <div className="w-100 whitebg" style={{display:'flow-root'}}>
            {this.state.data.map((data,index)=>{
                return <SpareCard header={data.name} description={descriptiontext(data.description)}/>
            })}
            </div>
            </Container>
            </center>
            <Slides/>
        </div>
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
export default SparePart