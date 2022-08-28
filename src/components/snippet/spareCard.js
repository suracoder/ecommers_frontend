import React from 'react'
import {Button} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
class SpareCard extends React.Component{
    render(){
        return <div className="flex padding radius m-1  lil-card li  t-left block spare-div" >
            <h2><b>{this.props.header}</b></h2>
            <p>{this.props.description}</p>
            <div className="spare-bottom t-b"><div className="flex m-top padding"><FontAwesomeIcon icon={faPhoneAlt} color="blue"/><p>+251 9595943</p></div>
        
        </div>
        </div>
    }
}
export default SpareCard