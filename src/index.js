import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main/main';
import Register from './containers/register';
import Login from './components/login/login';
import {HashRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
//引入公共样式
import './assets/less/index.less';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        {/*只要不是/login和/register就是main的地址，默认是main地址*/}
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
 ,
  document.getElementById('root')
)

