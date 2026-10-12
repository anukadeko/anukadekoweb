import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import Website from './Website';
import './style.css';
import './interiors.css';
createRoot(document.getElementById('root')).render(<BrowserRouter><Website/></BrowserRouter>);
