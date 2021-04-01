import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from '@ant-design/charts';

import './ResourcesChart.scss';

const ResourcesChart = () => {
    const resources = useSelector((state) => state.app.resources);

    const config = {
        appendPadding: 10,
        data: resources,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          autoRotate: true,
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            formatter: function formatter() {
              return '';
            },
          },
        },
      };
    return (
        <div className="component ResourcesChart">
            <div className="title">Resources: {resources.length}</div>
            
            <Pie {...config} />

        </div>
    )
};

export default ResourcesChart;