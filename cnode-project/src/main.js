// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'github-markdown-css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 过滤器
Vue.filter('tabFormatter', function (post) {
  if (post.good == true) {
    return '精华'
  } else if (post.top == true) {
    return '置顶'
  } else if (post.tab == 'ask') {
    return '问答'
  } else if (post.tab == 'share') {
    return '分享'
  } else {
    return '招聘'
  }
})

Vue.filter('postListConversion', function (str, len) {
  var result = "";
  var strlen = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255) {
      strlen += 2; //如果是汉字，则字符串长度加2
    } else {
      strlen++;
    }
    result += str.substr(i, 1);
    if (strlen >= len) {
      break;
    }
  }
  if (strlen < len) {
    return result
  } else {
    return `${result}...`;
  }
})

Vue.filter('formatDate', function (str) {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '个小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '个月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
}
)