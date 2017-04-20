import React from "react";

export class Header extends React.Component{
    myFunction(){
        document.getElementById("myDropdown").classList.toggle("show");
    }
    render(){
        return(
         <nav className="navbar navbar-default navbar-fixed-top" id="header_nav">
             <div className="container">
                 <img src={this.props.logo}/>
                 
                <div className="dropdown">
                <button onClick={this.myFunction}><img className="pull-right dropbtn profile" src={this.props.user}/></button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">Account</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                </div>
                </div>


             </div>
             <div className="card card-2">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <ul className="nav nav-pills">
                        <li className="col-xs-12 col-md-2 col-sm-4 text-center active"><a href="#">CONNECTORS</a></li>
                        <li className="col-xs-12 col-md-3 col-sm-4 text-center" ><a href="#">KNOW YOUR AUDIENCE</a></li>
                        <li className="col-xs-12 col-md-2 col-sm-3 text-center" ><a href="#">TOPIC SEARCH</a></li>
                    </ul>
                </div>
             </div>
         </nav>
        );
    }
}