import React from "react";


export class Likers extends React.Component{
    constructor(props) {
        super();
        this.state={

        };
    }
    render(){
        return(
            <div className="col-md-6 col-xs-12 col-sm-6 top">
                <div className="Module">
                    <div className="col-sm-12 col-xs-12 col-md-12 title">
                        <span>Top Likers</span>
                        <hr/>
                    </div>
                    <div className="customers">
                        <table className="table">
                            <thead>
                                <tr>
                                <th style={{width:"29%"}}>Name</th>
                                <th style={{width:"25%"}}>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {
                                    this.props.data.map(function(element,i) {
                                        return( <tr key={i}>
                                        <td style={{width:"50%"}}><b><a className="ProfileLink" target="_blank" href={element.url}>{element.name}</a></b></td>
                                        <td style={{width:"22%"}}><span className="customer_Percentage"><span>{element.percentage}</span>%</span></td>
                                        <td style={{width:"20%"}}><img src={"./images/positive.png"}/></td>
                                        </tr>);
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export class DisLikers extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-xs-12 col-sm-6 top">
                <div className="Module">
                    <div className="col-sm-12 col-xs-12 col-md-12 title">
                        <span>Top Dis-Likers</span>
                        <hr/>
                    </div>
                    <div className="customers">
                        <table className="table">
                            <thead>
                                <tr>
                                <th style={{width:"29%"}}>Name</th>
                                <th style={{width:"25%"}}>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.data.map(function(element,i) {
                                        return( <tr key={i}>
                                        <td style={{width:"50%"}}><b><a className="ProfileLink" target="_blank" href={element.url}>{element.name}</a></b></td>
                                        <td style={{width:"22%"}}><span className="customer_Percentage"><span>{element.percentage}</span>%</span></td>
                                        <td style={{width:"20%"}}><img src={"./images/positive.png"}/></td>
                                        </tr>);
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}