const menuInfo = {
  data: [
    {
      id: 1,
      authName: '刘潭站',
      path: 'lt',
      isDisabled: false
    },
    {
      id: 2,
      authName: '广石路站',
      path: 'gsl',
      isDisabled: false
    },
    {
      id: 3,
      authName: '黄巷站',
      path: 'hx',
      isDisabled: true
    },
    {
      id: 4,
      authName: '盛岸站',
      path: 'sa',
      isDisabled: true
    },
    {
      id: 5,
      authName: '惠山古镇站',
      path: 'hsgz',
      isDisabled: true
    }
  ],
  meta: {
    msg: '获取菜单列表成功',
    status: 200
  }
}
const res = {
  menuInfo
}
export default res
