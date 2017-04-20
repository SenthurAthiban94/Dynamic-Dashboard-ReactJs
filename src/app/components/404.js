import React from "react";

export class Notfound extends React.Component{
    render(){
        return(
            <div className="err_body_content text-center">
                <div className="logo">
                    <p className="ErrorMessage col-sm-12 col-xs-12 col-md-12">OOPS! - Could not Retrive Data</p>
                    <div className="col-sm-12 col-xs-12 col-md-12">
                    <img src="./images/404.png" className="col-xs-12 col-sm-6 col-sm-offset-3"/>
                    </div>
                    <div className="sub">
                    <div className="col-sm-12 col-xs-12 col-md-12 back">
                    <p><a href="#">Back </a></p>
                    </div>
                    </div>
                </div>
            </div>       
        );
    }
}