/**
 *自定义Logo组件
 */
import React, {Component} from 'react';
import logo from './logo.png';
import './logo.less';
class Logo extends Component {
  render () {
    return (
      <div className="logo-content">
        <img className="logo-img" src={logo} alt="logo"/>
      </div>
    )
  }
}

export default Logo;
