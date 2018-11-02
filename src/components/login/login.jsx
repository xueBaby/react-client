import React, {Component} from 'react';
import { NavBar, List, InputItem,WingBlank,Button} from 'antd-mobile';
import Logo from '../logo/logo.jsx';
class Login extends Component {
  render () {
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <WingBlank/>
        <Logo/>
        <WingBlank/>
        <form>
          <List>
            <InputItem
              placeholder="请输入用户名"
              onChange={val => this.handleChange('username',val)}
            >用户名：
            </InputItem>
            <WingBlank/>
            <InputItem
              placeholder="请输入密码"
              type="password"
              onChange={val => this.handleChange('password',val)}
            >
              密码：
            </InputItem>
            <WingBlank/>
            <Button type="primary" onClick={this.register}>注册</Button>
            <WingBlank/>
            <Button onClick={this.goLogin}>还没有账户</Button>
          </List>
        </form>;
        <WingBlank/>
      </div>
    )
  }
}

export default Login;