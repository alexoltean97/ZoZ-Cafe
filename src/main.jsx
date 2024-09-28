import {h, render } from 'preact'
import  App  from './app.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-horizontal-scrolling-menu/dist/styles.css";
import './index.css'

render(<App />, document.getElementById('app'))
