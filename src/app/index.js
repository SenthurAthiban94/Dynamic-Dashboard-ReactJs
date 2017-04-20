import React from "react";
import { render } from "react-dom";
import { Header } from "./components/headers";
import { Home } from "./components/home";
import { Notfound } from "./components/404";
import { Footer } from "./components/footer";


class Feltso extends React.Component {
    constructor(){
        super();
        this.state={
            fetch_status: false,
            fetch_data:{}
        };
    }
    getData(){
         return fetch('./feltso.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                fetch_status: true,
                fetch_data: responseJson
            });
        })
        .catch((error) => {
            this.setState({
                fetch_status: false,
            });
            console.error(JSON.stringify(error));
        });
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        if(this.state.fetch_status){
            return(
                <div>
                    <Header logo="./images/logo.png" user="./images/profile.png"/>  
                    <Home data={this.state.fetch_data} />
                    <Footer logo="./images/footerlogo.png"/>  
                </div>
            );
        }
        else{
            return(
                <div>
                    <Header logo="./images/logo.png" user="./images/profile.png"/>  
                    <Notfound/>
                    <Footer logo="./images/footerlogo.png"/>  
                </div>
            );
        }
    }
}

render(<Feltso/> , document.getElementById('base'));