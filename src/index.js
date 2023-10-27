import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollWrapper from './ScrollWrapper';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ScrollWrapper>
		<App />
	</ScrollWrapper>
);
