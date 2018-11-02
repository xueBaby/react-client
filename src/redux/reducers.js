/**
 * reducers函数是有之前的状态和action产生新的状态
 */
import {combineReducers} from 'redux';
import {AUTH_SUCCESS, ERR_MSG} from './action-type';
import {getRedirectPath} from'../utiles';
const initUserState = {
  username:'',
  type:'',
  msg:'',
  redirectTo: ''
  
};
function user(preState=initUserState,action){
  switch (action.type){
    case AUTH_SUCCESS :
      return {username:action.data.username,type:action.data.type,msg:'',redirectTo: getRedirectPath(action.data.type,action.data.header)};
    case ERR_MSG:
      return {...action.data}
    default:
      return preState
  }
}
//采用分别暴露的方式store才能读取到
export default combineReducers({
  user
})
// 最终向外暴露的是{xxx: xxx(),yyy: yyy()}