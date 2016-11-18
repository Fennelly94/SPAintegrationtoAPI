    import React from 'react';
    import ReactDOM from 'react-dom';
    import PlayerCatalogueApp from './App';
	import QuestionItem from './commentPage';
    import '../node_modules/bootstrap/dist/css/bootstrap.css';
	import { Router, Route, IndexRoute, browserHistory } from 'react-router';
	import PhoneDetail from './phoneDetail';
	import Phones from  './Data';
	import './index.css';
	
	var App = React.createClass({
      render : function() {
        return (
          <div>
            <h1><b>Current Real Madrid Football Squad</b></h1>
			<p> </p>
            {this.props.children}
          </div>
        )
      }
    });
	var Comment = React.createClass({
      render : function() {
        return (
          <div>
            <h2><b>Real Madrid Fan Community Questions Page</b></h2>
			<p> </p>
            {this.props.children}
          </div>
        )
      }
    });
	
    ReactDOM.render( (
	
	<Router history={browserHistory} >
	
	<Route path="/" component={App}>
	<IndexRoute component={PlayerCatalogueApp} />
	<Route path="players/:id" component={PhoneDetail} />
	</Route>
	
	<Route path="/players/" component={App}>
	<IndexRoute component={PlayerCatalogueApp} />
	<Route path="/players/" />
	</Route>
	
	<Route path="/commentPage/" component={Comment}>
	<IndexRoute component={QuestionItem} />
	<Route path="/commentPage/" />
	</Route>
	
	
	</Router>
	),
      document.getElementById('root')
    );