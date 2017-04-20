import React from "react";


export class Download extends React.Component{
    render(){
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
                            <a href="#" download><img src={"./../../images/download.png"} height="34px"/></a>
                        </div>
                    </div>    
                </div>
            );
        }
}


