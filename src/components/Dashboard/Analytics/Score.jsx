import ReactECharts from 'echarts-for-react';
import React from 'react';

const Score = () => {
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Score From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 90, name: 'Quiz mark' },
          { value: 99, name: 'Module' },
          { value: 80, name: 'Video duration' },
          { value: 60, name: 'Assignment' },
        ],
      },
    ],
  };
  return <ReactECharts option={option} />;
};

export default Score;
