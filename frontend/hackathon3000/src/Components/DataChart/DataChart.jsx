import React from 'react';
import PropTypes from 'prop-types';

const DataChart = ({ data }) => (
  <div id="data-chart">
    {data.map((link, i) => (
      <div key={link}>
        <img alt="acteur connu" src={link} />
        <p>{`Acteur ${i}`}</p>
      </div>
    ))}
  </div>
);

DataChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DataChart;
