import Home from "./Components/home/Home";
import Login from "./Components/common/Login";
import App from "./Components/common/App";
import Speakers from "./Components/speakers/Speakers";
import RouteNotFound from "./RouteNotFound";


export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...Login,
                path: '/login',
                exact: true
            },
            {
                ...Speakers,
                path: '/speakers',
                exact: true
            },
            {
                ...RouteNotFound
            }
        ]
    }
];



//
// import React, {Component} from 'react';
//
// import {Route, Switch} from 'react-router-dom';
//
// import Login from "./Components/common/Login";
// import Speakers from "./Components/speakers/Speakers";
// import Home from "./Components/home/Home";
// import RouteNotFound from "./RouteNotFound";
//
// class Routes extends Component {
//     constructor(props){
//         super(props);
//         this.handler = this.handler.bind(this);
//     }
//
//     handler() {
//         this.props.action();
//     }
//
//
//
//     render() {
//         return (
//             <div>
//                 <Switch>
//                     {/*<Route exact path="/" component={Home}/>*/}
//                     <Route exact path="/speakers" component={Speakers}/>
//                     {/*<Route exact path="/login" component={Login}/>*/}
//                     {/*<Route render={props => <RouteNotFound action={this.handler}  />}></Route>*/}
//                 </Switch>
//             </div>
//         );
//     }
// }
//
// Routes.propTypes = {};
// Routes.defaultProps = {};
//
// export default Routes;
//
