import React from 'react'
import { Container, Avatar, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faSearch, faCircleNotch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import loadData from '../controller/loadData'
import CardView from '../components/snippet/cardView'
import { Link } from 'react-router-dom'
import Headers from './snippet/Headers'
import Slides from './slides'
import GoogleAuth from "./GoogleLogin"
 
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ searchicon: faSearch, category: [], featured: [], cat1: [], cat2: [], slidedata: [] })
    }

    changeicon() {
        this.setState({ searchicon: faCircleNotch })
    }

    async componentDidMount() {
        let resp = await loadData({}, "listCategory");
        const resp2 = await loadData({}, "recentItems");


        this.setState({ category: resp.data, featured: resp2.data })
        this.state.category.map((data, index) => {
            if (index < this.state.category.length / 2) {
                let catt = this.state.cat1;
                catt.push(data)
                this.setState({ cat1: catt })

            }
            return null;

        }

        )
        resp = await loadData({}, "fetchSlides", false);
        if (resp.status === 200) {
            console.log("kkkk", JSON.stringify(resp.data))
            this.setState({ slidedata: resp.data })
        }

        this.state.category.map((data, index) => {
            console.log("the divider" + this.state.category.length / 2)
            if (index >= this.state.category.length / 2) {
                console.log("am here");
                let catt = this.state.cat2;
                catt.push(data);
                this.setState({ cat2: catt })
            }
            return null;
        })
    }

    render() {
        let arr = [];
        return <div className="whitebg top-part   ">
        {/* <Headers header="Ethiopan " description="choose categories and subcategories or search using keys,tags and names and something for website marketing stuf!" /> */}
            
                 <Slides/>
{/* <GoogleAuth/> */}
            <br></br>
            <h1 className="w-80 m-r">
                select from The categories below
            </h1>
            <Container className="w-100">
                <div className="left">
                    <ul className='w-100 flex justify'>

                        <AlignAccordions categories={this.state.cat1} />
                        <AlignAccordions categories={this.state.cat2} />

                    </ul>
                </div>
            </Container>
            <br></br>
            <br></br>
            <Container className=" m-r top" style={{ display: 'flow-root' }}><h1 >New Items</h1>
                <p className="liltext">new items added recently</p>
            </Container>
            <Container><ul className="w-100 inline-t">
                {
                    this.state.featured.map((data, index) => {
                        let url = "/detail/" + data.Item.id
                        const imageurl = "http://localhost:355/pictures/" + data.ItemId + "photo1.jpg"

                        return <CardView url={url} name={data.Item.name} desc={data.Item.description} price={data.Item.ItemPrice.price} image={imageurl} />
                    })

                }
            </ul>
            </Container>
        </div>




    }
}
function showicon(len) {
    if (len > 0) {
        return <FontAwesomeIcon className="marginrit h-100 " color="#0d8ce0" icon={faChevronDown} style={{ width: '20px' }} />
    }
}
function CheckLength(len,props){
    if(len>0){
        return <AccordionSummary><Typography className="w-fitt">{props.name}</Typography> {showicon(props.subcategories.length)}
            </AccordionSummary>
    }else{
        const link = "/subcategory/1" 
        return <Link to={link}><AccordionSummary><Typography className="w-fitt">{props.name}</Typography> {showicon(props.subcategories.length)}
        </AccordionSummary></Link>
    }
}


function ShowAccordion(props) {

    return <li className="w-100 marginrit">
        <Accordion className="whitebg w-100 marginrit dropdown"  >
            {CheckLength(props.subcategories.length,props)}
            {props.subcategories.map((dat, index) => {
                const link = "/subcategory/" + dat.id
                return <Link to={link}><AccordionDetails><p>{dat.name}</p></AccordionDetails></Link>
            })}
        </Accordion>

    </li>
}

function AlignAccordions(props) {
    return <div className="w-48">
        {props.categories.map((data, index) => {
            return <ShowAccordion index={index} length={props.categories.length} name={data.name} subcategories={data.SubCategories} />

        })}
    </div>
}




export default Home