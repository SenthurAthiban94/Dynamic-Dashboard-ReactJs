import React from "react";
var LineChart = require('react-chartjs').Line;
var BarChart = require('react-chartjs').Bar;

export class Bar extends React.Component{
    constructor(props) {
        super();
        var data=Object.keys(props.data);
        const datasetvalues=[
                            {
                            label: "Positive Sentiments",
                            fillColor: "rgba(14,148,214,0.5)",
                            strokeColor: "rgba(14,148,214,1)",
                            pointColor: "rgba(14,148,214,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(14,148,214,1)",
                            data: []
                        },
                            {
                            label: "Negative Sentiments",
                            fillColor: "rgba(255,0,154,0.2)",
                            strokeColor: "rgba(255,0,154,1)",
                            pointColor: "rgba(255,0,154,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(255,0,154,1)",
                            data: []
                        }    
                        ];
        for(var key in data){
            datasetvalues[0].data.push(props.data[data[key]].positive_count);
            datasetvalues[1].data.push(props.data[data[key]].negative_count);
        }
        this.state={
            data:{
                labels: data,
                datasets: datasetvalues
            },
            chartOptions :{
                responsive : true
            }

        };
    }
    render(){
        return(
            <div className="col-md-6 col-xs-12 col-sm-6 top">
                <div className="Module">
                    <div className="col-sm-12 col-xs-12 col-md-12 title">
                        <span>Source wise sentiments</span>
                        <div className="indicate">
                            <span className="indicatorValue pull-right">{this.state.data.datasets[0].label}</span>
                            <span className="pull-right">
                                <div className="indicator" style={{backgroundColor: this.state.data.datasets[0].pointColor}}>
                                </div>
                            </span>
                            <span className="indicatorValue pull-right">{this.state.data.datasets[1].label}</span>
                            <span className="pull-right">
                                <div className="indicator" style={{backgroundColor: this.state.data.datasets[1].pointColor}}>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div><BarChart data={this.state.data} options={this.state.chartOptions} width="600" height="250"/></div>
                </div>
            </div>
        );
    }
}


export class Line extends React.Component{
    constructor(props) {
        super();
        var keys = Object.keys(props.data);
        var positivelist=props.data.positive.sort(this.keysrt('time'));
        var negativelist=props.data.negative.sort(this.keysrt('time'));
        var removedpositiveDuplicates={};
        var removednegativeDuplicates={};
        for(var key in positivelist){
            removedpositiveDuplicates[positivelist[key].time]=positivelist[key].count;    
        }
        for(var key in negativelist){
            removednegativeDuplicates[negativelist[key].time]=negativelist[key].count;
        }
        var positivekeys = Object.keys(removedpositiveDuplicates);
        var negativekeys = Object.keys(removednegativeDuplicates);
        for(var root in removednegativeDuplicates){
                if(!removedpositiveDuplicates[root]){
                removedpositiveDuplicates[root]=0;
            }
        }
        for(var root in removedpositiveDuplicates){
                if(!removednegativeDuplicates[root]){
                removednegativeDuplicates[root]=0;
            }
        }
        const positivevalues=[];
        const negativevalues=[];
        var sortedpositivearray={};
        var sortednegativearray={};
        Object.keys(removedpositiveDuplicates).sort().forEach(function(key) {
            sortedpositivearray[key] = removedpositiveDuplicates[key];
        });
        Object.keys(removednegativeDuplicates).sort().forEach(function(key) {
            sortednegativearray[key] = removednegativeDuplicates[key];
        });
        for(var key in sortedpositivearray){
            positivevalues.push(sortedpositivearray[key]);
        }   
        for(var key in sortednegativearray){
            negativevalues.push(sortednegativearray[key]);
        }   
        var labelvalue=this.arrayUnique(positivekeys.concat(negativekeys));
        var positivedatasetvalue=[];
        var negativedatasetvalue=[];
        
        this.state={
            data:{
                labels: labelvalue,
                datasets: [
                    {
                        label: keys[0],
                        fillColor: "rgba(47,227,7,0.2)",
                        strokeColor: "rgba(47,227,7,1)",
                        pointColor: "rgba(47,227,7,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(47,227,7,1)",
                        data: positivevalues
                    },
                    {
                        label: keys[1],
                        fillColor: "rgba(240,31,7,0.2)",
                        strokeColor: "rgba(240,31,7,1)",
                        pointColor: "rgba(240,31,7,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(240,31,7,1)",
                        data: negativevalues
                    }
                ]
            },
            chartOptions :{
                responsive : true
            }

        };
    }
    arrayUnique(array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    }

    srt(desc) {
    return function(a,b){
    return desc ? ~~(a < b) : ~~(a > b);
    };
    }

    // sort on key values
    keysrt(key,desc) {
    return function(a,b){
    return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    }
    }


    maxAtIndex(data) {
        return Math.max.apply(null, data);
    }
    render(){
        return(
            <div className="col-md-6 col-xs-12 col-sm-6 top">
                <div className="Module">
                    <div className="col-sm-12 col-xs-12 col-md-12 title">
                        <span>Sentiments Over Time </span>
                        <div className="indicate">
                            <span className="indicatorValue pull-right">{this.state.data.datasets[0].label}</span>
                            <span className="pull-right">
                                <div className="lineindicator" style={{backgroundColor: this.state.data.datasets[0].pointColor}}>
                                </div>
                            </span>
                            <span className="indicatorValue pull-right">{this.state.data.datasets[1].label}</span>
                            <span className="pull-right">
                                <div className="lineindicator" style={{backgroundColor: this.state.data.datasets[1].pointColor}}>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div><LineChart data={this.state.data} options={this.state.chartOptions} width="600" height="250"/></div>
                </div>
            </div>
        );
    }
}