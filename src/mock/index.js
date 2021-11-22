import Mock from 'mockjs'
import Login from './login.js'
import Menu from './menu.js'

Mock.mock('/login', 'post', () => {
  return Login.loginInfo
})
Mock.mock('/menu', 'get', () => {
  return Menu.menuInfo
})
