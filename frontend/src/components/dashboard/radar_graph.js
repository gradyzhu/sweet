import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class RadarGraph extends Component{
  constructor(props) {
    super(props);
    this.state = {
      graphData: this.props.graphData
    };
  }
  
  render(){
    const gray = "rgba(40, 40, 40, 1)";

    return(
        <div>
          <Radar
            data={this.state.graphData}
            options={{
              scale:{
                gridLines: {
                  display: true,
                  color: gray,
                },
                angleLines: {
                  display: true,
                  color: gray,
                },
                ticks: {
                  backdropColor: "black",
                  fontSize: 10
                },
                pointLabels: {
                  fontSize: 13,
                  fontFamily: "Roboto Condensed",
                  fontStyle: "300",
                }
              },
              title:{
                display: true,
                text:"Radar Graph",
                fontSize: 25,
                fontFamily: "Roboto Condensed",
                fontStyle: "300",
                fontSize: 20
              },
              legend: {
                display: true,
                position:'bottom'
              }
            }}
          />
        </div>
    )
  }
}

export default RadarGraph;
 