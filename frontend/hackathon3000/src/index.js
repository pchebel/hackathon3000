/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import App from './App';
import { GridProvider } from './Components/GridProvider/GridProvider';
import './index.css';
import {Provider} from "react-redux";
import store from './Components/Redux/Store'

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
            <GridProvider>
                <App />
            </GridProvider>
        </Provider>
  </DndProvider>,
    
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
