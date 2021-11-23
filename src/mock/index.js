import Mock from 'mockjs'
import Login from './login.js'
import Menu from './menu.js'
import LT_SUBSYSTEM from './station/lt/subSystem.js'
import LT_DXT from './station/lt/dxt.js'
import LT_XXT from './station/lt/xxt.js'
import LT_KTS from './station/lt/kts.js'
import GSL_SUBSYSTEM from './station/gsl/subSystem.js'
import GSL_DXT from './station/gsl/dxt.js'
import GSL_XXT from './station/gsl/xxt.js'
import GSL_KTS from './station/gsl/kts.js'
import GSL_SDTF from './station/gsl/sdtf.js'

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
Mock.mock('/station/gsl/subSystem', 'get', () => {
  return GSL_SUBSYSTEM.subSystemInfo
})
Mock.mock('/station/gsl/dxt', 'get', () => {
  return GSL_DXT.deviceInfo
})
Mock.mock('/station/gsl/xxt', 'get', () => {
  return GSL_XXT.deviceInfo
})
Mock.mock('/station/gsl/kts', 'get', () => {
  return GSL_KTS.deviceInfo
})
Mock.mock('/station/gsl/sdtf', 'get', () => {
  return GSL_SDTF.deviceInfo
})
