import React, { Component } from 'react';
import LineGraph from './line_graph';
import RadarGraph from './radar_graph';
import DoughnutGraph from './doughnut_graph';
import BarGraph from './bar_graph';
import '../../css/dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barGraphData: {},
      lineGraphData: {},
      radarGraphData: {},
      doughnutGraphData: {}
    };
  }

  componentWillMount() {
    this.getGraphData();
  }

  getGraphData() {
    const purple = 'rgba(118, 0, 234, 1)';
    const purpleLowOpac = 'rgba(118, 0, 234, .5)';
    const purpleBorder = 'rgba(118, 0, 234, 1)';

    const blue = 'rgba(53, 0, 212, 1)';
    const blueLowOpac = 'rgba(53, 0, 212, .5)';
    const blueBorder = 'rgba(53, 0, 212, 1)';

    const none = 'rgba(0, 0, 0, 0)';

    const barCount = (length, color) => {
      let res = [];
      for (let i = 0; i < length; i++) {
        res.push(color);
      }
      return res;
    };
    
    const barBorderCount = (length, color) => {
      let res = [];
      for (let i = 0; i < length; i++) {
        res.push(color);
      }
      return res;
    };

    this.setState({
      // bar graph (avg sentiment over 100 tweets for specific hashtag)
      barGraphData: {
        labels: ['Boston', "San Francisco", "Los Angeles", "New York"], // x-axis
        datasets: [
          {
            label: 'Population', // bar name
            data: [100, 200, 300, 400], // y-axis
            backgroundColor: barCount(4, blueLowOpac), // this.props.data.length
            borderColor: barBorderCount(4, blueBorder),
            borderWidth: 2,
          },
          {
            label: "Hype",
            data: [200, 300, 120, 60],
            backgroundColor: barCount(4, purpleLowOpac),
            borderColor: barBorderCount(4, purpleBorder),
            borderWidth: 1,
          }
        ]
      },

      //line graph (sentiment over time for specific hashtag)
      lineGraphData: {
        labels: ['mon','tues','weds','thurs','fri','sat','sun'], // x-axis (time data)
        datasets: [
          {
            label: 'Joy',  // (sentiment category)
            data: [70, 35, 45, 80, 89, 92, 75], // y-axis (sentiment value)
            lineTension: 0,
            borderWidth: 2,
            backgroundColor: none,
            pointBackgroundColor: "black",
            borderColor: blue,
            pointBorderColor: blue
          },
          {
            label: "Sadness", // (sentiment category)
            data: [20, 60, 62, 45, 32, 80, 44], // y-axis (sentiment value)
            lineTension: 0,
            borderWidth: 2,
            backgroundColor: none,
            pointBackgroundColor: "black",
            borderColor: purple,
            pointBorderColor: purple
          }
        ]
      },

      //radar graph (response to hashtag by sentiment category)
      radarGraphData: {
        labels: ['sad','happy','angst','envy','pride','love','anger',"joy", "shock"], // (sentiment category)
        datasets: [
          {
            label: 'hashtag 1', // hashtag searched
            data: [19, 73, 72, 54, 32, 35, 80], // (sentiment value)
            borderColor: blue,
            lineTension: 0,
            borderWidth: 2,
            backgroundColor: blueLowOpac,
            pointBackgroundColor: "black",
            pointBorderColor: blueBorder,
            pointBorderWidth: 2,
            pointRadius: 3
          },
          {
            label: "hashtag 2",
            data: [35, 19, 32, 75, 32, 62, 15],
            borderColor: purple,
            lineTension: 0,
            borderWidth: 2,
            backgroundColor: purpleLowOpac,
            pointBackgroundColor: "black",
            pointBorderColor: purpleBorder,
            pointBorderWidth: 2,
            pointRadius: 3
          }
        ]
      },

      //doughnut graph (distribution of sentiment over 100 tweets)
      doughnutGraphData: {
        labels: ['sad','happy','angst'], // sentiment categories
        datasets: [
          {
            data: [19, 73, 72], // (sentiment count by category)
            hoverBorderColor: [
              blueBorder,
              purpleLowOpac, 
              blue
            ],
            backgroundColor: [
              blueLowOpac,
              purpleLowOpac,
              blue,
            ],
            hoverBorderWidth: 2,
            borderWidth: 0,
          }
        ]
      },
    });
  }

  render() {
    //replace later with data passed in through container
    return (
      <div className="dashboard">
        {/* manually passing data for now */}
        <div>
          <div className="graph-size"><BarGraph graphData={this.state.barGraphData} /></div>
          <div className="graph-size"><LineGraph graphData={this.state.lineGraphData} /></div>
        </div>
        <div>
          <div className="graph-size"><RadarGraph graphData={this.state.radarGraphData} /></div>
          <div className="graph-size"><DoughnutGraph graphData={this.state.doughnutGraphData} /></div>
        </div>
      </div>
    )
  }
}

export default Dashboard;