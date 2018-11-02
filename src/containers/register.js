/**
 * 注册容器
 */
//
import {connect} from 'react-redux';
import Register from '../components/register/register';
import {register} from '../redux/actions';
export default connect(
  state => ({user:state.user}),//状态数据
  {register} //操作状态数据的方法
)(Register)