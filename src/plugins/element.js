import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Notification,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Loading,
  Calendar
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Calendar)
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
Vue.prototype.$loading = Loading
