import React from 'react'
import {Container} from '@material-ui/core'


class CHeader extends React.Component{
    render(){
        return <Container className="top-div padding radius whitebg border-o center w-50">
            <h1>{this.props.header}</h1>
            {/* <h2 className="liltext">{this.props.description}</h2> */}
        </Container>
    }
}

export default CHeader