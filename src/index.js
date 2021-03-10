import React from 'react';
import ReactDOM from "react-dom"
import './index.css';
import * as serviceWorker from "./serviceWorker";
import App from './App';
import { Datalayer } from './Datalayer';
import Reducer, { initialstate } from './Reducer';

ReactDOM.render(<>
    <Datalayer initialstate={initialstate} reducer={Reducer}>
    <App />
    </Datalayer>
    </>,
  document.getElementById('root')
);

serviceWorker.unregister();