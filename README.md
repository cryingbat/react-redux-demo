# react-redux-demo 
这个项目是在react-native-app这个基础项目的基础之上集成了react-redux状态管理。
如果初学react-native的请先移步至https://github.com/cryingbat/react-native-app  
看完这个肯定会对react-native有一个基础的认识。再回头来看这个，事倍功半。


# 总的来说：

  react-navigation集成redux状态管理。相信看过这个示例之后不会再对redux有什么不理解的地方了。
项目运行：首先git clone 下来
其次npm i或者yarn  安装相关依赖
最后打开虚拟android或者连接你的android真机测试。
执行react-native run-android
# 说明（本项目并没有适配ios）
项目截图大家可以看我仓库react-native-app那个项目https://github.com/cryingbat/react-native-app 里面，这个项目是在那个的基础上完善了redux的集成部分。
# 部分截图
#首先进入app会有个全屏轮播图三张，
![](https://github.com/cryingbat/react-native-app/raw/master/screenshorts/4.jpg)
#第三张有进入app的进入按钮，
![](https://github.com/cryingbat/react-native-app/raw/master/screenshorts/5.jpg)
#点击进入进到登陆界面，
#点击登陆存储session进入到主页

#主页总共三大板块：首页+新闻+我的
![](https://github.com/cryingbat/react-native-app/raw/master/screenshorts/3.jpg)
#其中首页  我放的新闻的列表  支持上拉加载更多和下拉刷新功能。点击新闻可以进入新闻详情页面。
#新闻页面  放的是一个可以滑动的tab支持多tab横向滚动。具体内容没放。
![](https://github.com/cryingbat/react-native-app/raw/master/screenshorts/2.jpg)
#我的页面  是一些ui组件的集合。如：

![](https://github.com/cryingbat/react-native-app/raw/master/screenshorts/0.jpg)
觉得不错的，欢迎star。也欢迎fork。在大家看这个项目的同时又什么问题也欢迎大家和我一起来讨论。共同进步   apk版本亲测4.4/5.1/6.0 ok
