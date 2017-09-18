import React from "react";
import spdf from "simple-react-pdf";
import { Printtemplate } from "./printtemplate";

// Default export is a4 paper, portrait, using milimeters for units
var doc = new jsPDF();
export class Download extends React.Component{
    constructor(props){
        super();
        var positivelist=props.data.overview.sentiment_over_time.positive.sort(this.keysrt('time'));
        var negativelist=props.data.overview.sentiment_over_time.negative.sort(this.keysrt('time'));
        this.state={
            download : false,
            sentiment_over_time :{
                            positive : positivelist,
                            negative : negativelist
                        },
            source_wise_sentiments :{
                            positive : props.data.overview.source_wise_stats.facebook.positive_count,
                            negative : props.data.overview.source_wise_stats.facebook.negative_count
                        },
            top_pos_posts : props.data.overview.top_pos_posts,
            top_neg_posts : props.data.overview.top_neg_posts,
            top_pos_comments : props.data.overview.top_pos_comments,
            top_neg_comments : props.data.overview.top_neg_comments,
            top_likers :  props.data.overview.top_likers,
            top_dislikers : props.data.overview.top_dis_likers
        };
    }
    downloadtoPDF(){
        // alert(this.state.templaturl);
        // doc.fromHTML($('#first').html(),10,10);
        doc.text("Hi Felt So.... The Preview is yet to be formatted to PDF...",10,10);
        this.setState({
            download : true
        });
        doc.save('Report.pdf');
    }
    srt(desc) {
    return function(a,b){
    return desc ? ~~(a < b) : ~~(a > b);
    };
    }
    revert(){
        this.setState({
            download : false
        });
    }
    // sort on key values
    keysrt(key,desc) {
    return function(a,b){
    return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    }
    }
    render(){
        if(this.state.download){
            return(
                <div className="printBase" id="download_printcontent">
                    <h1 className="text-center closepreview"><div className="col-md-12 col-xs-12 col-sm-12"><button className=" pull-right btn btn-sm btn-warning" onClick={()=> this.revert()} >close</button></div><div className="col-md-12 col-xs-12 col-sm-12">Preview of the Report</div></h1>
                        <div className="col-md-12 col-xs-12 col-sm-12">
                        <h2 className="text-center">Feltso Detailed Report</h2>
                        <div className="card card-2" id="first">
                            <div className="printoutHeading">
                                <div className="printheader text-center"><b>Sentiments OverTime</b></div>
                                <hr/>
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <div className="col-md-6 col-xs-6 col-sm-6">
                                        <div className="printoutSubHeading">Positive</div>
                                        <table className="Table text-center">
                                            <thead>
                                                <tr>
                                                <th className="text-center">Time</th>
                                                <th className="text-center">Count</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.sentiment_over_time.positive.map(function(element,i) { 
                                                    return(
                                                        <tr key={i}>
                                                            <td>{element.time}</td>
                                                            <td>{element.count}</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>    
                                    <div className="col-md-6 col-xs-6 col-sm-6">
                                        <div className="printoutSubHeading">Negative</div>
                                        <table className="Table text-center">
                                            <thead>
                                                <tr>
                                                <th className="text-center">Time</th>
                                                <th className="text-center">Count</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.sentiment_over_time.negative.map(function(element,i) { 
                                                    return(
                                                        <tr key={i}>
                                                            <td>{element.time}</td>
                                                            <td>{element.count}</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card card-2" id="second">
                            <div className="printoutHeading">
                                <div className="printheader text-center"><b>Source Wice Sentiments</b></div>
                                <hr/>
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <table className="Table text-center">
                                        <thead>
                                            <tr>
                                            <th className="text-center">Source</th>
                                            <th className="text-center">Positive</th>
                                            <th className="text-center">Negative</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><b>Facebook</b></td>
                                                <td>{this.state.source_wise_sentiments.positive}</td>
                                                <td>{this.state.source_wise_sentiments.negative}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-md-12 col-xs-12 col-sm-12 nopadding">
                            <div className="card card-2" id="third">
                                    <div className="printoutHeading">
                                        <div className="printheader text-center"><b>Top Likers</b></div>
                                        <hr/>
                                        <div className="col-md-12 col-xs-12 col-sm-12">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                    <th className="text-center">Name</th>
                                                    <th className="text-center">Url</th>
                                                    <th className="text-center">Score</th>
                                                    <th className="text-center">Percentage</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.top_likers.map(function(element,i) { 
                                                         return (
                                                             <tr key={i}>
                                                                <td><b>{element.name}</b></td>
                                                                <td>{element.url}</td>
                                                                <td className="text-center">{element.score}</td>
                                                                <td className="text-center">{element.percentage}</td>
                                                            </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-12 col-xs-12 col-sm-12 nopadding">
                                <div className="card card-2" id="fourth">
                                    <div className="printoutHeading">
                                        <div className="printheader text-center"><b>Top Dislikers</b></div>
                                        <hr/>
                                        <div className="col-md-12 col-xs-12 col-sm-12">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                    <th className="text-center">Name</th>
                                                    <th className="text-center">Url</th>
                                                    <th className="text-center">Score</th>
                                                    <th className="text-center">Percentage</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.top_dislikers.map(function(element,i) { 
                                                         return (
                                                             <tr key={i}>
                                                                <td><b>{element.name}</b></td>
                                                                <td>{element.url}</td>
                                                                <td className="text-center">{element.score}</td>
                                                                <td className="text-center">{element.percentage}</td>
                                                            </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                        <div className="col-md-12 col-xs-12 col-sm-12 nopadding">
                            <div className="col-md-6 col-xs-6 col-sm-6 nopadding">
                                <div className="card card-2" id="fifth">
                                    <div className="printoutHeading">
                                        <div className="printheader text-center"><b>Top Positve Posts</b></div>
                                        <hr/>
                                        <div className="col-md-12 col-xs-12 col-sm-12">
                                            {
                                                this.state.top_pos_posts.map(function(element,i) {
                                                    return( 
                                                        <div className="row card" key={i}>
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
                                                            <hr/>
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
                            </div>
                            <div className="col-md-6 col-xs-6 col-sm-6 nopadding">
                                <div className="card card-2" id="sixth">
                                    <div className="printoutHeading">
                                        <div className="printheader text-center"><b>Top Negative Posts</b></div>
                                        <hr/>
                                        <div className="col-md-12 col-xs-12 col-sm-12">
                                            {
                                                this.state.top_neg_posts.map(function(element,i) {
                                                    return( 
                                                        <div className="row card" key={i}>
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
                                                            <hr/>
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
                            </div>
                        </div>




                        <div className="col-md-12 col-xs-12 col-sm-12 nopadding">
                            <div className="col-md-6 col-xs-6 col-sm-6 nopadding">
                                <div className="card card-2" id="seventh">
                                    <div className="printoutHeading">
                                        <div className="printheader text-center"><b>Top Positive Comments</b></div>
                                        <hr/>
                                        <div className="col-md-12 col-xs-12 col-sm-12">
                                            {
                                                this.state.top_pos_comments.map(function(element,i) {
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
                            </div>
                            <div className="col-md-6 col-xs-6 col-sm-6 nopadding">
                                <div className="card card-2" id="eight">
                                    <div className="printoutHeading">
                                        <div className="printheader text-center"><b>Top Negative Comments</b></div>
                                        <hr/>
                                        <div className="col-md-12 col-xs-12 col-sm-12">
                                            {
                                                this.state.top_neg_comments.map(function(element,i) {
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
                            </div>
                        </div>
                    </div>
            </div>
            );
        }
        else{
            return(
                <div className="col-md-12 col-xs-12 col-sm-12">
                    <div className="col-md-6 col-sm-3 paddingtop">
                        <img src={"./../../images/fbuser.png"}/>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-9 text-center">
                        <div className="col-md-4 col-xs-12 col-sm-4 paddingtop">
                            <div className="input-group days">
                                <span className="input-group-addon" id="basic-addon1">Days </span>
                                <select className="form-control">
                                    <option>30</option>
                                    <option>29</option>
                                    <option>28</option>
                                    <option>27</option>
                                    <option>26</option>
                                    <option>25</option>
                                    <option>24</option>
                                    <option>23</option>
                                    <option>22</option>
                                    <option>21</option>
                                    <option>20</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-7 col-xs-12 col-sm-7 paddingtop">
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1">View Overview Source Vice</span>
                                <select className="form-control">
                                    <option>All</option>
                                    <option>Single</option>
                                    <option>Double</option>
                                    <option>Trible</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-1 col-xs-12 col-sm-1 download paddingtop">
                            <a href="#" onClick={this.downloadtoPDF.bind(this)}><img src={"./../../images/download.png"} height="34px"/></a>
                        </div>
                    </div>

                </div>
            );
            }
        }
}


