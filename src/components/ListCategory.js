import React from 'react'
import {Container} from '@material-ui/core'
import loadData from '../controller/loadData'
import TextCard from './snippet/textCard'

import CHeader from './snippet/CHeaders'

class ListCategory extends React.Component{

    constructor(props){
        super(props)
        this.state={loaded:false,data:[]}
    }



    async componentDidMount(){
        const resp=await loadData({id:this.props.match.params.id},"listCategoryOnly")
        this.setState({data:resp.data,loaded:true})
        console.log(resp)
    }
    render(){
        if(this.state.loaded){
            return <Container className="top-part w-80">
            <CHeader header={this.state.data.name} description={this.state.data.description}/>
           
            <Container className="radius   padding">
            
            <ul className="left w-100">
            <p>Subcategories under <b>{this.state.data.name}</b></p>
                {
                    this.state.data.SubCategories.map((dat,index)=>{
                        const link="/subcategory/"+dat.id
                        return <TextCard link={link} name={dat.name} description={dat.description}/>
                    })
                }
                </ul>
            </Container>
        </Container>
        }else{
            return "nothing"
        }
       
    }
}


export default ListCategory