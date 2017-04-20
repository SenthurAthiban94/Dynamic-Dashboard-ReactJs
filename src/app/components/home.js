import React from "react";
import { render } from "react-dom";
import { Line , Bar } from "./chart";
import { Overview } from "./overviewheading";
import { Download } from "./download";
import { Postiveposts  , Negativeposts } from "./posts";
import { Likers  , DisLikers } from "./customers";
import { Postivecomments , Negativecomments } from "./comments";


export class Home extends React.Component{
    constructor(props){
        super();
        this.state={
            feltso_data : props.data
        };
    }
    render(){
        return( 
            <div className="body_content container">
                <div className="panel panel-default">
                    <Overview head1="OVERVIEW" head2="DETAILED ANALYSIS"/>
                    <div className="panel-body">
                        <div className="row" >
                            <Download/>           
                        </div>
                        <hr/>
                        <div className="row">
                            <Line data={this.state.feltso_data.overview.sentiment_over_time} />
                            <Bar data={this.state.feltso_data.overview.source_wise_stats} />                    
                        </div>
                        <div className="row">
                            <Likers data={this.state.feltso_data.overview.top_likers}/>
                            <DisLikers data={this.state.feltso_data.overview.top_dis_likers}/>
                        </div>
                        <div className="row">
                            <Postiveposts data={this.state.feltso_data.overview.top_pos_posts}/>
                            <Negativeposts data={this.state.feltso_data.overview.top_neg_posts}/>
                        </div>
                        <div className="row">
                            <Postivecomments data={this.state.feltso_data.overview.top_pos_comments}/>
                            <Negativecomments data={this.state.feltso_data.overview.top_neg_comments}/>                   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}