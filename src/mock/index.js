import Mock from 'mockjs'
import Login from './login.js'

Mock.mock('/login', 'post', () => {
  return Login.loginInfo
})
