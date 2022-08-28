import React from 'react'
import loadData from '../controller/loadData'
import CardView from './snippet/cardView'
import {Container} from '@material-ui/core'
import BreadCrumbs from './snippet/BreadCrumbs'

import CHeader from './snippet/CHeaders'


class ListProduct extends React.Component{
    constructor(props){
        super(props)
        this.state={loaded:false,data:[]}
    }

    async componentDidMount(){
        const resp=await loadData({id:this.props.match.params.id},"listProduct")
        this.setState({loaded:true,data:resp.data})
    }

    render(){
        if(this.state.loaded){
            return <Container class="top-part">
                    <CHeader header={this.state.data.name} description="list of items under this product"/>
                    
                    <Container className="w-80 br">
                    <BreadCrumbs links={[{
                        link:"/category/"+this.state.data.SubCategory.Category.id,
                        name:this.state.data.SubCategory.Category.name},
                        {
                            link:"/subcategory/"+this.state.data.SubCategory.id,
                            name:this.state.data.SubCategory.name
                        },,{name:this.state.data.name,link:"#"}
                    ]}/>
                    </Container>
                   

                    
                    <Container className="">
                    <h1>Items under <b>{this.state.data.name}</b></h1>
                        {this.state.data.Items.map((dat,index)=>{
                            const url="/detail/"+dat.id
                            const imageurl="http://localhost:355/pictures/"+dat.id+"photo1.jpg"
       
                            return <CardView url={url} name={dat.name} desc={dat.description} image={imageurl} price={dat.ItemPrice.price}/>
                        })}
                    </Container>
        </Container>
        }else{
            return <Container className="w-50 padding radius whitebg">
            <h1>PAGE NOT FOUND</h1>
            
        </Container>
        }
        
    }
}


export default ListProduct