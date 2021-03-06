import React, { useContext } from 'react';
import './Grid.css';
import styled from 'styled-components';
import GridContext from '../GridProvider/GridProvider';

export const Grid = ({ navBarHeight, children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: `calc(100% - ${navBarHeight}px)`,
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  );
};

export const GridImage = styled.div`
  flex-grow: 1;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
`;

const GridItemWrapper = styled.div`
  flex: 0 0 33.3%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  height: 33%;
`;

export const GridItem = ({ forwardedRef, ...props }) => {
  const { isDraggable } = useContext(GridContext);
  return (
    <div ref={forwardedRef} className={'grid-item-wrapper'}>
      <div className={`grid-item ${isDraggable ? 'disabled' : 'enabled'}`} {...props}></div>
    </div>
  );
};
