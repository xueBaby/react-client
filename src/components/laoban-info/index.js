/**
 * 老板UI组件
 */
import React, {Component} from 'react';
import {NavBar, InputItem, Button,TextareaItem} from 'antd-mobile';
import HeaderSelector from '../headerSelector/index';
class LaobanInfo extends Component {
  state = {
    header: '',
    info: '',
    post: '',
    salary: '',
    company: ''
}
  setHeader = header => {
    this.setHeader({
      header
    })
  }
  render () {
    return (
      <div>
        <NavBar >老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <InputItem onChange={val => this.handleChange('post',val)}>招聘职位：</InputItem>
        <InputItem onChange={val => this.handleChange('company',val)}>公司是名称：</InputItem>
        <InputItem onChange={val => this.handleChange('salary',val)}>职位薪资</InputItem>
        <TextareaItem title="职位要求" rows={3} onChange={val => this.handleChange('info',val)}/>
        <Button className="primary">保存</Button>
      </div>
    )
  }
}

export default LaobanInfo;