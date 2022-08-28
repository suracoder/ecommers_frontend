import React from 'react'
import loadData from '../controller/loadData'
import {Breadcrumbs, Container,Button} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDollarSign,faTag} from '@fortawesome/free-solid-svg-icons'
import ReactImageZoom from 'react-image-zoom'
import BreadCrumbs from './snippet/BreadCrumbs'
import CardView from './snippet/cardView'
import TextField from '@mui/material/TextField';
import {connect } from "react-redux"
import {setAddCart} from "../action/index.js"
class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            data:[],loaded:false,imageurl:"",product:null,
            quantity:1
        })
    }

    changeImage(url){
        this.setState({imageurl:url})
    }
    

    async componentDidMount(){
        const resp=await this.loadDetail()
        
        const imageurl="http://localhost:355/pictures/"+resp.data.id+"photo1.jpg"
        this.setState({data:resp.data,imageurl:imageurl})

    }
    async componentDidUpdate(prevprops,prevstate,snapshot){
        if(prevprops!==this.props){
            const resp=await this.loadDetail()
            const imageurl="http://localhost:355/pictures/"+resp.data.id+"photo1.jpg"
            this.setState({data:resp.data,imageurl:imageurl})
        }
    }
    async loadDetail(){
        const resp=await loadData({id:this.props.match.params.id},"loadDetail")
        this.loadProducts(resp.data.Product.id)
        return resp

    }
    async loadProducts(id){
        const resp=await loadData({id:id},"listProduct")
        this.setState({loaded:true,product:resp.data})
    }

    render(){
        console.log("from reducer ",this.props.addToCart)
        if(this.state.loaded){
            const cat="/category/"+this.state.data.Product.SubCategory.Category.id
            const subcat="/subcategory/"+this.state.data.Product.SubCategory.id
            const product="/product/"+this.state.data.Product.id
            const items=[]
            for(let i=1;i<=this.state.data.photos;i++){
                const imageurl="http://localhost:355/pictures/"+this.state.data.id+"photo"+i+".jpg"
                items.push( <div className="thumbnail" style={{background:`url("${imageurl}") 0% 0% / cover`}} onMouseOver={()=>{this.changeImage(imageurl)}}></div>)
            }
console.log("state ",this.state)


            return <Container className="top-part w-80">
            <BreadCrumbs links={[
                {link:cat,
                name:this.state.data.Product.SubCategory.Category.name
            
            },{
               link:subcat,
               name: this.state.data.Product.SubCategory.name
            },{
                link:product,
                name:this.state.data.Product.name
            },{
                link:"#",
                name:this.state.data.name
            }]}/>
            
            <Container className="   radius w-80 padding-0 ">
            <div className="flex">
            <div className="whitebg w-50  marginrit radius padding trans ">
                <ReactImageZoom   className="detail-image radius" height="400" zoomWidth="400" zoomStyle={'margin-left:5%;'} img={this.state.imageurl}/>
                {/* <div className="radius detail-image" style={{background:`#ddd url("${this.state.imageurl}") no-repeat center /contain`,height:'400px',}}></div> */}
                <div className="f-flex">
            {items}
            </div>
           
                </div>  <div className="whitebg padding w-50 radius " style={{position:'inherit'}}>
                    <h1>{this.state.data.name}</h1>
                    <p className="liltext">{this.state.data.description}</p>
                    <br></br>
                    <div className="f-flex">
                    {
                        this.state.data.ItemTags.map((dat,i)=>{
                            return  <div className="flex marginrit"><FontAwesomeIcon className="" color="gray" icon={faTag}/><p className="liltext"><b>{dat.Tag.name}</b></p></div>
                        })
                    }
                    </div>
                    <br></br>
                   
                    <br></br>
                    <div className="flex">
                <FontAwesomeIcon className="h-100 " style={{width:'25px',marginRight:'3px'}} icon={faDollarSign} color="lightgray"/><h1 className="" style={{color:'black',textShadow:'none'}}>{this.state.data.ItemPrice.price}</h1><p className="liltext" style={{color:'gray'}}><b>ETB</b></p>
                </div>
                <br></br><br></br>
              <TextField   size="small"  inputMode='numeric' defaultValue={this.state.quantity}
            
              onChange={(e)=>{
                  this.setState({quantity:e.target.value})
              }}
              
              />  <Button 
              onClick={()=>{
                  this.props.setAddCartAction({id:this.state.data.id,data:this.state.data.name,quantity:this.state.quantity})
              }}
              
              className="active w-40  radius ">Add to cart</Button>
                   
                </div>
                </div>
                </Container>
                 <Container>
                <h1>Items under the same product</h1>
                <Container className="">
                        {this.state.product.Items.map((dat,index)=>{
                            if(dat.id!==this.state.data.id){
                                const url="/detail/"+dat.id
                            const imageurl="http://localhost:355/pictures/"+dat.id+"photo1.jpg"
       
                            return <CardView url={url} name={dat.name} desc={dat.description} image={imageurl} price={dat.ItemPrice.price}/>
                      

                            }else{
                                return null
                            }
                             })}
                    </Container>
               
                </Container>
            </Container>
        }else{
            return <Container>Can't Find Items</Container>
        }
        
    }
}
 
const mapStateToProps = (state) => ({
    addToCart: state.addToCart,
  });
  const mapDispatchToProps = (dispatch) => ({
    setAddCartAction: (data) => dispatch(setAddCart(data)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Detail);
  
 