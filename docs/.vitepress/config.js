// const basic = [];
// form = []
// feedback=[]
// roll
// navigator
// display
// business



module.exports = {
  title: '简易微信小程序组件库',
  description: 'Just playing around.',
  lang:'zh-CN',
  themeConfig:{
    nav:[
      {text:'首页',link:'/'},
      {text:'关于',link:'/about'},
      {text:'GitHub',link:'https://github.com/ER-Tiylor/wx-study'}
    ],
    sidebar:{
      '/components-docs/': getComponentsSidebar(),
    }
  }
}
function getComponentsSidebar(){
  return [
    {
      text:'基础组件',
      children:[
        {text:'Button 按钮',link:'/components-docs/basic/button'},
        {text:'Badge 徽标',link:'/components-docs/basic/badge'},
        {text:'CellItem 列表单元格',link:'/components-docs/basic/cell-item'},
        {text:'DetailItem 清单单元格',link:'/components-docs/basic/detail-item'}
      ]
    },
    {
      text:'表单组件',
      children:[
        {text:'Input 输入框',link:'/components-docs/form/input'},
        {text:'TextArea 文本域',link:'/components-docs/form/text-area'},
        {text:'CheckBox 复选框',link:'/components-docs/form/check-box'},
        {text:'Radio 单选框',link:'/components-docs/form/radio'},
        {text:'Switch 开关',link:'/components-docs/form/switch'},
        {text:'Form 表单',link:'/components-docs/form/form'},
      ]
    },
    {
      text:'反馈组件',
      children:[
        {text:'Dialog 弹出框',link:'/components-docs/feedback/dialog'},
        {text:'Popup 弹出层',link:'/components-docs/feedback/popup'},
        {text:'Toast 吐司',link:'/components-docs/feedback/toast'},
        {text:'Drawer 抽屉',link:'/components-docs/feedback/drawer'},
        {text:'OverLay 遮罩层',link:'/components-docs/feedback/overlay'},
        {text:'Steps 步骤条',link:'/components-docs/feedback/steps'},
        {text:'DropMenu 下拉菜单',link:'/components-docs/feedback/drop-menu'},
        {text:'SwipeCell 滑动单元格',link:'/components-docs/feedback/swipe-cell'},
      ]
    },
    {
      text:'滚动组件',
      children:[
        {text:'Scroll ',link:'/components-docs/roll/scroll'},
        {text:'Slide ',link:'/components-docs/roll/slide'},
      ]
    },
    {
      text:'导航组件',
      children:[
        {text:'Grid 宫格',link:'/components-docs/navigator/grid'},
        {text:'NavBar 导航栏',link:'/components-docs/navigator/nav-bar'},
        {text:'ScrollNavBar 弹出框',link:'/components-docs/navigator/scroll-nav-bar'},
        {text:'SideBar 侧边导航',link:'/components-docs/navigator/side-bar'},
        {text:'Tabs 弹出框',link:'/components-docs/navigator/tabs'},
        {text:'TabBar 导航栏',link:'/components-docs/navigator/tab-bar'},
      ]
    },
    {
      text:'展示组件',
      children:[
        {text:'Empty 空状态',link:'/components-docs/display/empty'},
        {text:'Collapse 折叠面板',link:'/components-docs/display/collapse'},
        {text:'Divider 分割线',link:'/components-docs/display/divider'},
        {text:'Progress 进度条',link:'/components-docs/display/progress'},
        {text:'Swiper 轮播图',link:'/components-docs/display/swiper'},
        {text:'Tag 标签',link:'/components-docs/display/tag'},
        {text:'Paper 纸张',link:'/components-docs/display/paper'},
      ]
    },
    {
      text:'业务组件',
      children:[
        {text:'CountDown 倒计时',link:'/components-docs/business/count-down'},
        {text:'Price 金额',link:'/components-docs/business/price'},
        {text:'NoticeBar 通知栏',link:'/components-docs/business/notice-bar'},
        {text:'ShareSheet 分享面板',link:'/components-docs/business/share-sheet'},
        {text:'Search 搜索',link:'/components-docs/business/search'},
        {text:'GeneratePoster 生成海报',link:'/components-docs/business/generate-poster'},
        {text:'CropImage 图片裁剪',link:'/components-docs/business/crop-image'},
        {text:'RotaryDraw 转盘抽奖',link:'/components-docs/business/rotary-draw'},
        {text:'GridDraw 宫格抽奖',link:'/components-docs/business/grid-draw'},
      ]
    }
  ]
}