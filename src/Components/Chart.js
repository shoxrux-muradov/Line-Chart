import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Biznes ",
          data: [4, 11, 16, 8, 33, 24, 36, 45, 67, 77, 89, 94],
        },
      ],
      options: {
        chart: {
          height: 650,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
          colors:['#ff0000']
        },
        title: {
          text: "Shoxrux Muradov Kompaniyasi yillik hisoboti",
          align: "center",
          style:{
            fontSize: '32px',
            FontWeight: 'normal',
            fontFamily: 'monospace',
            color: '#fff'
          }
        },

        grid: {
          row: {
            colors: [ "black", ], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "Iyun",
            "Iyul",
            "Avgust",
            "Sentabr",
            "Oktabr",
            "Noyabr",
            "Dekabr",
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={650}
        />
      </div>
    );
  }
}
