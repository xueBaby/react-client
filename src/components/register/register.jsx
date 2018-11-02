import React, {Component} from 'react';
import { NavBar, List, InputItem,WingBlank,Radio,Button} from 'antd-mobile';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Logo from '../logo/logo.jsx';


//定义变量要放在获取下面
const Item = List.Item;
class Register extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  }
  state={
   username:'',
   password:'',
   rePassword:'',
   type:'laoban',
  }
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  register = async () => {
    // 1.获取表单数据
    const {username, password, rePassword, type} = this.state;
    //2.发送ajax请求
    this.props.register({username,password,rePassword,type});
  }
  
  goLogin = () => {
  // 跳转到登录路由，编程式导航
    this.props.history.replace('login');//替换浏览历史记录
  }
  render () {
    const {type} = this.state;
    const {msg,redirectTo } = this.props.user;
    if(redirectTo) {
      //编程式导航
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank/>
        {msg ? <p className='err-msg'>{msg}</p> : ''}
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
            <InputItem
              placeholder="请确认输入密码"
              type="password"
              onChange={val => this.handleChange('rePassword',val)}
            >
              确认密码：
            </InputItem>
            <WingBlank/>
            <Item>
              用户类型: &nbsp;&nbsp;
              <Radio
                className="my-radio"
                checked={type === 'laoban'}
                onChange={val =>this.handleChange('type','laoban')}
              >老板</Radio>&nbsp;&nbsp;
              <Radio
                className="my-radio"
                checked={type === 'dashen'}
                onChange={val =>this.handleChange('type','dashen')}
              >大神</Radio>
            </Item>
            <WingBlank/>
            <Button type="primary" onClick={this.register}>注册</Button>
            <WingBlank/>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </form>;
        <WingBlank/>
      </div>
    )
  }
}

export default Register;