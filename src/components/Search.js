import React from 'react'
import {Container,Tabs,Tab,Badge,Button,Avatar} from '@material-ui/core'
import loadData from '../controller/loadData'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class Search extends React.Component{

    constructor(props){
        super(props)
        this.state={
            value:"item",data:[],loaded:false,keys:"null"
        }
    }

    async componentDidMount(){
         const resp=await this.loader()
        console.log(resp.data)
         this.setState({keys:this.props.keys,data:resp.data,loaded:true})
    }
    async loader(){
        console.log(this.props.keys)
        const resp=await loadData({key:this.props.keys},"searchItems")
        
        
        return resp
    }
    async componentDidUpdate(prevprops,prevstate,snapshot){
        
        if(this.props.keys!==prevprops.keys){
            const resp=await this.loader()
            this.setState({data:resp.data,keys:this.props.keys})
            if(resp.data.Products.length>0){
                this.setState({value:'product'})
            }else if(resp.data.SubCategory.length>0){
                this.setState({value:'subcategory'})
            }else if(resp.data.Categories.length>0){
                this.setState({value:'category'})
            }else if(resp.data.Items.length>0){
                this.setState({value:'item'})
            }
        }else{
        }
         

    }
    setValue(event,value){
        this.setState({value:value})
    }

    render(){
       
        if(this.state.loaded){
            
            return <Container className="top-part">
            <h1>Search results for {this.state.keys}</h1>
            <Container className="w-80 whitebg radius padding ">
                <div>
                    <Tabs textColor="primary" onChange={this.setValue.bind(this)} indicatorColor="primary" value={this.state.value} centered>
                    
                    <Tab label={<Badge badgeContent={this.state.data.Items.length} className="red-badge">Items</Badge>} value="item" active/>
                    <Tab label={<Badge badgeContent={this.state.data.Products.length} className="red-badge">Products  </Badge>}  value="product"/>
                    <Tab label={<Badge badgeContent={this.state.data.Categories.length} className="red-badge">Category </Badge>} value="category"/>
                    <Tab label={<Badge badgeContent={this.state.data.SubCategory.length} className="red-badge">Sub Category </Badge>} value="subcategory"/>
                    </Tabs>
                </div>
                <div>
                    <Searcher value={this.state.value} data={this.state.data}/>
                </div>
            </Container>
        </Container>
        }else{
            return <div class="top-div">nothing to show</div>
        }
       
    }
}
function Searchresult(props){
    let items=[]
    props.SubCategory.map((data,i)=>{
        const url="/"+props.link+"/"+data.id
        items.push(<Link to={url}>
            <div className="padding radius flex outliner card-hover h-100">
                <Avatar className="h-70 marginrit">{data.name.charAt(0)}</Avatar>
                <div><h1>{data.name}</h1>
                <p className="liltext">{data.description}</p>
                </div>
                <FontAwesomeIcon className="btn w-fit" style={{marginTop:'20px'}} icon={faArrowRight}/>

            </div></Link>
        )
        return null
    })
    return <div>{items}</div>
}

function Searcher(props){
    let items=[]
            if(props.value==='item'){
                const imageurl="http://localhost:355/pictures/"+props.data.Items.id+"photo1.jpg"
       
                props.data.Items.map((data,i)=>{
                    const imageurl="http://localhost:355/pictures/"+data.id+"photo1.jpg"
                    const url="/detail/"+data.id
                    items.push(<Link to={url}><div className="padding radius flex outliner card-hover">
                    <img src={imageurl} className="radius marginrit" width="70px" height="70px"/>
                    <div>
                        <h1>{data.name}</h1>
                        <p className="liltext">{data.description}</p>
                    </div>
                    <FontAwesomeIcon className="btn" style={{marginTop:'20px'}} icon={faArrowRight}/>
        
                </div></Link>)
                return null
                })
                return items
                
            }else if(props.value==='category'){
                return <Searchresult link={"category"} SubCategory={props.data.Categories}/>
            }else if(props.value==='product'){
                return <Searchresult link={"product"} SubCategory={props.data.Products}/>
            }else if(props.value==='subcategory'){
            return <Searchresult link={"subcategory"} SubCategory={props.data.SubCategory}/>
            }
}

export default Search