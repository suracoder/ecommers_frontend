import React from 'react'
import { TextField, Button } from '@material-ui/core'
class Support extends React.Component {
    componentDidMount() {

    }
    render() {
        return <div className="top-part">
            <center>
                <div className="radius border flex w-50 m-1 " id="bgg" style={{ backgroundImage: `url(./something.jpg)`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                    <div className="full-h w-50 " ></div>
                    <h2 className="w-48 help padding whitebg padding m-r radius"><h2>send Us your feedback</h2>
                    <TextField label="Your email" type="email" variant={"outlined"} className="w-100" />
                    <br></br><br></br>
                    <TextField label="Your Feedback" type="text" variant={"outlined"} className="w-100" multiline />
                      <br></br><br></br>
                        <Button className="morepadding active radius w-100">Submit Question</Button></h2>



                </div>
            </center>
        </div>
    }
}
export default Support