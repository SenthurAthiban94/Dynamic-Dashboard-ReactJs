import React from "react";


export class Postiveposts extends React.Component{
    constructor(props){
        super();
        this.state={}; 
    }
    render(){
        return(
            <div className="col-md-6 col-xs-12 col-sm-6 top">
                <div className="Module">
                    <div className="col-sm-12 col-xs-12 col-md-12 title">
                        <span>Top Positive Posts</span>
                        <hr/>
                    </div>
                    <div className="posts">
                      {
                            this.props.data.map(function(element,i) {
                                return( 
                                    <div className="row card card-1" key={i}>
                                        <a href={element.permalink_url} target="_blank">
                                            <div className="row">
                                                <div className="col-xs-3 col-sm-2 col-md-2">
                                                    <img src={element.picture} className="img-responsive" alt="Profile"/>
                                                </div>
                                                <div className="col-xs-6 col-sm-7 col-md-8 Profile">
                                                    <div className="Profile_Name">
                                                        {/*<b><a href={}>{element.}</a></b>*/}
                                                        <div className="col-xs-12 col-sm-12 col-md-12 Message">
                                                            {element.message}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-2">
                                                    <div>
                                                        <img src={"./images/positive.png"}/>
                                                    </div>
                                                    <div>
                                                        <span className="customer_Percentage"><span>{element.percentage}</span>%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="row submodule">
                                            <div className="col-xs-12 col-sm-12 col-md-12 created">
                                                <span className="col-xs-4 col-sm-3 col-md-2 createddate"> Created Date :</span><span className="col-xs-8 col-sm-9 col-md-10 createddate">
                                                    {
                                                        new Date(element.created_time.date).toUTCString()
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }  
                        
                    </div>
                </div>
            </div>
        );
    }
}
export class Negativeposts extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-xs-12 col-sm-6 top">
                <div className="Module">
                    <div className="col-sm-12 col-xs-12 col-md-12 title">
                        <span>Top Negative Posts</span>
                        <hr/>
                    </div>
                    <div className="posts">
                        {
                            this.props.data.map(function(element,i) {
                                return( 
                                    <div className="row card card-1" key={i}>
                                        <a href={element.permalink_url} target="_blank">
                                            <div className="row">
                                                <div className="col-xs-3 col-sm-2 col-md-2">
                                                    <img src={element.picture} className="img-responsive" alt="Profile"/>
                                                </div>
                                                <div className="col-xs-6 col-sm-7 col-md-8 Profile">
                                                    <div className="Profile_Name">
                                                        {/*<b><a href={}>{element.}</a></b>*/}
                                                        <div className="col-xs-12 col-sm-12 col-md-12 Message">
                                                            {element.message}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-2">
                                                    <div>
                                                        <img src={"./images/negative.png"}/>
                                                    </div>
                                                    <div>
                                                        <span className="customer_Percentage"><span>{element.percentage}</span>%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="row submodule">
                                            <div className="col-xs-12 col-sm-12 col-md-12 created">
                                                <span className="col-xs-4 col-sm-3 col-md-2 createddate"> Created Date :</span><span className="col-xs-8 col-sm-9 col-md-10 createddate">
                                                    {
                                                        new Date(element.created_time.date).toUTCString()
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}