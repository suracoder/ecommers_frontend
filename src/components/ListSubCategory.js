import { Container } from '@material-ui/core'
import React from 'react'
import loadData from '../controller/loadData'
import TextCard from './snippet/textCard'
import BreadCrumbs from './snippet/BreadCrumbs'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import CHeader from './snippet/CHeaders'

class ListSubCategory extends React.Component{
    constructor(props){
        super(props)
        this.state={loaded:false,data:[]}
    }
    async componentDidMount(){
        const resp=await loadData({id:this.props.match.params.id},"listSubCategory")
        this.setState({loaded:true,data:resp.data})
        console.log(resp.data)
    }
    render(){
        if(this.state.loaded){
            return <Container className="top-part w-80">
            <CHeader header={this.state.data.name} description={this.state.data.description}/>
            <Container className="w-80 ">
            <p className="head-txt"></p>
                <BreadCrumbs links={[{name:this.state.data.Category.name,link:"/category/"+this.state.data.Category.id},{name:this.state.data.name,link:"#"}]}/>
               
            </Container>
            
            <Container className="w-80">
                {
                    this.state.data.Products.map((dat,index)=>{
                        const link="/product/"+dat.id
                        return <TextCard name={dat.name} description={""} link={link}/>
                    })
                }
            </Container>
        </Container>
        }else{
            return <Container className="w-50 padding radius whitebg">
                <h1>PAGE NOT FOUND</h1>
            </Container>
        }
        
    }
}


export default ListSubCategory