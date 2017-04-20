import React from "react";

export class Postivecomments extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-xs-12 col-sm-6 top">
                <div className="Module">
                    <div className="col-sm-12 col-xs-12 col-md-12 title">
                        <span>Top Positive Comments</span>
                        <hr/>
                    </div>
                    <div className="comment_positive">


                         {
                    this.props.data.map(function(element,i) {
                        return( 
                             <div className="row card" key={i}>
                                <div className="row">
                                    <div className="col-xs-3 col-sm-2 col-md-2">
                                        <img src={"./images/profile.png"} className="img-responsive" alt="Profile"/>
                                    </div>
                                    <div className="col-xs-6 col-sm-7 col-md-8 Profile">
                                        <div className="Profile_Name">
                                            <b><a href={element.user_info.url} target="_blank">{element.user_info.name}</a></b>
                                            <div className="col-xs-12 col-sm-12 col-md-12 Message">
                                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                <span className="comment_msg"> 
                                                    {element.text}
                                                </span>
                                                <i className="fa fa-quote-right" aria-hidden="true"></i> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-2">
                                        <div>
                                            <img src={"./images/positive.png"}/>
                                        </div>
                                        {/*<div>
                                            <span className="customer_Percentage"><span>70</span>%</span>
                                        </div>*/}
                                    </div>
                                </div>
                                <div className="row submodule">
                                    <div className="col-xs-12 col-sm-12 col-md-12 created">
                                        <span className="col-xs-4 col-sm-3 col-md-2 createddate"> Created Date :</span><span className="col-xs-8 col-sm-9 col-md-10 createddate">12-12-2017 6:00 AM</span>
                                    </div>
                                </div>
                                <hr/>
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
export class Negativecomments extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-xs-12 col-sm-6 top">
                <div className="Module">
                    <div className="col-sm-12 col-xs-12 col-md-12 title">
                        <span>Top Negative Comments</span>
                        <hr/>
                    </div>
                    <div className="comment_negative">
                {
                    this.props.data.map(function(element,i) {
                        return( 
                             <div className="row card" key={i}>
                                <div className="row">
                                    <div className="col-xs-3 col-sm-2 col-md-2">
                                        <img src={"./images/profile.png"} className="img-responsive" alt="Profile"/>
                                    </div>
                                    <div className="col-xs-6 col-sm-7 col-md-8 Profile">
                                        <div className="Profile_Name">
                                            <b><a href={element.user_info.url} target="_blank">{element.user_info.name}</a></b>
                                            <div className="col-xs-12 col-sm-12 col-md-12 Message">
                                                <i className="fa fa-quote-right" aria-hidden="true"></i> 
                                                <span className="comment_msg"> 
                                                    {element.text}
                                                </span>
                                                <i className="fa fa-quote-right" aria-hidden="true"></i> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-2">
                                        <div>
                                            <img src={"./images/negative.png"}/>
                                        </div>
                                        {/*<div>
                                            <span className="customer_Percentage"><span>70</span>%</span>
                                        </div>*/}
                                    </div>
                                </div>
                                <div className="row submodule">
                                    <div className="col-xs-12 col-sm-12 col-md-12 created">
                                        <span className="col-xs-4 col-sm-3 col-md-2 createddate"> Created Date :</span><span className="col-xs-8 col-sm-9 col-md-10 createddate">12-12-2017 6:00 AM</span>
                                    </div>
                                </div>
                                <hr/>
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