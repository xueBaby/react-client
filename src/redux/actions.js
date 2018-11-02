
/**
 * 创建action creator对象的工厂函数{type="",data=""}
 *  - 同步action creator： 返回值是action对象
 - 异步action creator： 返回值是一个回调函数
 */
//引入action-types 通常有几个action-types就会有几个同步
import {AUTH_SUCCESS, ERR_MSG} from './action-type';
import {reqLogin, reqRegister} from '../api';
//同步注册成功
export const authSuccess = user => ({type:AUTH_SUCCESS,data:user});
  // 同步注册失败
export const errMsg = msg => ({type:ERR_MSG,data:msg});

  //异步注册成功
export  const register = data => { //data 用户的提交的请求参数
  //表单验证同步方式
  const {username, password, rePassword, type} = data;
  if(!username){
    return errMsg({username, password,msg:'请输入正确的用户名'})
    
  }else if(!password){
    return errMsg({username, password,msg:'请输入正确的密码'})
  }else if(rePassword !== password){
    return errMsg({username, password,msg:'两次密码输入不一致，请重新输入'})
  }else if(!type){
    return errMsg({username, password,msg:'请选择账号类型'})
  }
  // 异步方法
  return dispatch => {
    // 发送ajax请求 reqRegister是一个promise对象
    reqRegister(data) //从数据库响应回来的数据
      .then(res => {
        //请求成功
        const result = res.data;//
        if(result.code === 0){
          dispatch(authSuccess(result.data))
        }else{
          console.log(result.msg);
          //注册失败
          dispatch(errMsg(result.msg));
        }
      })
      .catch(err => {
        //请求失败
        //注册失败
        dispatch(errMsg('网络不稳定，请刷新重试'));
        
      })
  }
}
