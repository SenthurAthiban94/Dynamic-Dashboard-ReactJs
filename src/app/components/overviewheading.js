import React from "react";
 
export class Overview extends React.Component{
    render(){
        return(
            <div className="panel-heading">
                <div className="col-sm-6 col-xs-6 col-md-6 text-right selected">
                    <a href="#">{this.props.head1}</a>
                </div>
                <div className="col-sm-6 col-xs-6 col-md-6 text-left ">
                    <a href="#">{this.props.head2}</a>
                </div>    
            </div>
        );
    }
}