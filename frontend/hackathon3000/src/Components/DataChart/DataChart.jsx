import React from 'react';
import PropTypes from 'prop-types';

const DataChart = ({ data }) => (
  <div>
    {data.map((link) => (
      <img key={link} alt="acteur connu" src={link} />
    ))}
  </div>
);

DataChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DataChart;
