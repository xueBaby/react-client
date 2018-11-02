import React, {Component} from 'react';
import {Grid, List} from 'antd-mobile';
import PropTypes from 'prop-types';

class HeaderSelector extends Component {
  static propTypes = {
    setHeader:PropTypes.func.isRequired
  }
  state = {
    icon: null
  }
  setHeader = ({icon, text} )=> {
    //更新自身组件的状态
    this.setState({
      icon
    })
    //更新父组件状态
    this.props.setHeader(text);
  }
  render () {
    const {icon} = this.state;
    const headerUI = icon ?<div>请选择头像<img src={icon}/></div>: '请选择头像';
    const data = Array.from(new Array(20)).map((item, index) => ({ //_代表私人的，只有在这用
      icon: require(`./avatars/头像${index + 1}.png`),
      text: `头像${index + 1}`,
  }));
  
    // const data = Array.from(new Array(20)).map((item, index) => ({
    //   //通过require将图片资源动态加载进来 引入遍历 必须以./开头
    //   icon: require(`./avatars/头像${index + 1}.png`),
    //   text: `头像${index + 1}`,
    // }));
  
    return (
      <List renderHeader={() => headerUI }>
        <Grid data={data} columnNum={5} onClick={this.setHeader}/>
      </List>
    )
  }
}

export default HeaderSelector;