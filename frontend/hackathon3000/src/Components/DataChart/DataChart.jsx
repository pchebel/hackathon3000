import React from 'react';
import PropTypes from 'prop-types';

const DataChart = ({ data }) => <div>{data.map((depObj) => depObj.code)}</div>;

DataChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default DataChart;
