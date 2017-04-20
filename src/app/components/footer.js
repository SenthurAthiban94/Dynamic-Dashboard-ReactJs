import React from "react";

export class Footer extends React.Component{
    render(){
        return(
            <div className="container footer">
                <div className="col-sm-12 col-md-12 col-xs-12">
                    <div className="col-sm-2 col-md-2 col-xs-12 text-center">
                        <img src={this.props.logo}/>
                    </div>
                    <div className="col-sm-10 col-md-10 col-xs-12 footermenu">
                        <ul>
                            <li className="col-xs-12 col-md-1 col-sm-2 text-center" ><a href="#">About Us</a></li>
                            <li className="col-xs-12 col-md-1 col-sm-2 text-center" ><a href="#">Contact Us</a></li>
                            <li className="col-xs-12 col-md-2 col-sm-3 text-center" ><a href="#">Privacy & Terms</a></li>
                            <li className="col-xs-12 col-md-1 col-sm-2 text-center seperatemenu" ><a href="#">Feedback</a></li>
                            <li className="col-xs-12 col-md-2 col-sm-3 text-center pull-right">&copy; Feltso2017</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}