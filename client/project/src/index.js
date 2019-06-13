import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App dangerouslySetInnerHTML={{ __html: "myHTML" }}/>, document.getElementById('root'));

serviceWorker.unregister();
