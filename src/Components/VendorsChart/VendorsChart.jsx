import React, { } from 'react';
import { useSelector } from 'react-redux';
import { Column } from '@ant-design/charts';

import './VendorsChart.scss';

const VendorsChart = () => {
    const vendors = useSelector((state) => state.app.vendors);

    const config = {
        data: vendors,
        xField: 'type',
        yField: 'value',
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
      };

    return (
        <div className="component VendorsChart">
            <div className="title">Vendors: {vendors.length}</div>
            <Column {...config} />
        </div>
    )
};

export default VendorsChart;