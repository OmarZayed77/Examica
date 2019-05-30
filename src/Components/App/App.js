import React from 'react';
import 'element-theme-default';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import CreateQuestions from '../../Containers/Questions-list';
// import Register from '../../Containers/Account/Register';
import AddOrgnization from '../../Containers/AddOrgnization';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect from="/home" to="/" />
				{/* <Route path="/" exact component={Home}/> */}
				{/* <Route path="/register" exact component={Register} /> */}
				<Route path="/" exact component={AddOrgnization} />
				{/* <Route path="/CreateQuestions" exact component={CreateQuestions} /> */}
				<Route
					render={() => {
						return 'not found!!!';
					}}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
