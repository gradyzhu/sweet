import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutGraph extends Component{
  constructor(props) {
    debugger
    super(props);
    this.state = {
      graphData: this.props.graphData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }
  
  render(){
    return(
        <div>
          <Doughnut
            data={this.state.graphData}
            options={{
              title:{
                display: true,
                text:"Doughnut Graph",
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

export default DoughnutGraph;
 