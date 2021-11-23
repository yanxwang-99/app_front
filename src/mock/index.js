import Mock from 'mockjs'
import Login from './login.js'
import Menu from './menu.js'
import LT_SUBSYSTEM from './station/lt/subSystem.js'
import LT_DXT from './station/lt/dxt.js'
import LT_XXT from './station/lt/xxt.js'
import LT_KTS from './station/lt/kts.js'

Mock.mock('/login', 'post', () => {
  return Login.loginInfo
})
Mock.mock('/menu', 'get', () => {
  return Menu.menuInfo
})
Mock.mock('/station/lt/subSystem', 'get', () => {
  return LT_SUBSYSTEM.subSystemInfo
})
Mock.mock('/station/lt/dxt', 'get', () => {
  return LT_DXT.deviceInfo
})
Mock.mock('/station/lt/xxt', 'get', () => {
  return LT_XXT.deviceInfo
})
Mock.mock('/station/lt/kts', 'get', () => {
  return LT_KTS.deviceInfo
})
