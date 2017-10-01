import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';


class Header extends React.Component{
	render(){
		
		return (<div><Navbar /></div>);
		
	};
	
}

ReactDOM.render(<Header />, document.getElementById('Header'));