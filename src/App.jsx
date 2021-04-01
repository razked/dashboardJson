import React from 'react';
import { useSelector } from 'react-redux';

// components
import SearchBox from './Components/SearchBox/SearchBox';
import ResourcesChart from './Components/ResourcesChart/ResourcesChart';
import VendorsChart from './Components/VendorsChart/VendorsChart';
import FingersLoader from './Components/FingersLoader/FingersLoader';

// styling
import 'antd/dist/antd.css';
import './Styles/component.scss';
import './Styles/typo.scss';
import './App.scss';

const App = () => {
  const resources = useSelector((state) => state.app.resources);
  const vendors = useSelector((state) => state.app.vendors);

  return (
    <div className="App">
      <SearchBox />

      {resources.length && vendors.length ? <div className="App__main">
        <ResourcesChart />
        <VendorsChart />
      </div> : <FingersLoader />}
    </div>
  );
}

export default App;
