import React from 'react'
import loadData from '../controller/loadData'
import Slides from './slides'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload,faBookMedical} from '@fortawesome/free-solid-svg-icons'


class Manual extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            data:[],loaded:false
        })

    }
    async componentDidMount(){
        let resp=await loadData({},"loadManual")
        this.setState({loaded:true,data:resp.data})
    }
    render(){
       
        return <div className="top-part padding">
            <Slides/>
            <div className="">
                <FontAwesomeIcon icon={faBookMedical} className="lil-icon" color={"skyblue"}/><h1>Manuals</h1></div>
            <p>download manuals for instruction on how to use the equipment</p>
            <div className="m-1">
            {this.state.data.map((data,i)=>{
                let lnk="http://localhost:355/manuals/"+data.id+"manual.pdf";
                return <div className="lil-card t-left spare-div">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <a href={lnk}>
                    <div className="f-flex m-2 blue-h">
                        <FontAwesomeIcon icon={faDownload}/><p>Download PDF</p>
                    </div>
                    </a>
                </div>

            })}
            </div>
        </div>
    }
}
export default Manual