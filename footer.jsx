import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
	render(){
		
		return (<footer className="container-fluid bg-4"><p>&copy; Mail to: <a href="mailto://vijayapalkpl@gmail.com">vijayabal</a></p></footer>);
		
	};
	
}

ReactDOM.render(<Footer />, document.getElementById('Footer'));