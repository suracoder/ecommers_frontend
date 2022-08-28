import React from 'react'
import {Button} from '@material-ui/core'
import loadData from '../controller/loadData'
import {Link} from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Slides extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            data:[],loaded:false
        })
    }

    async componentDidMount(){
        let resp = await loadData({}, "fetchSlides", false);
        if (resp.status === 200) {
            this.setState({ data: resp.data })
        }

    }
    render(){
        return <center>
        <CarouselProvider naturalSlideWidth={100} isPlaying={true}  isIntrinsicHeight={true} totalSlides={this.state.data.length}>
                <Slider>{
            this.state.data.map((data,index)=>{
                
                let url = "/detail/" + data.Item.id
                let imageurl="http://localhost:355/pictures/"+data.ItemId+"photo1.jpg"
                return   <Slide index={index}><div id="devil" className="w-80 slide-div" style={{backgroundImage:`url('${imageurl}')`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                <div className="bottom-a padding"><h1>{data.Item.name}</h1>
                <p>{data.Item.description}</p>
                <Link to={url}><Button className="whitebg slide-btn">SEE MORE</Button></Link>
                </div>
                </div>
                </Slide>
            })
        }
        </Slider>
        </CarouselProvider>
        </center>
    }
}

export default Slides