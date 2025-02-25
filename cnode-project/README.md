# cnode-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 实战

## cnode 社区基本架构

- Header 头部

- PostList 列表

- Article 帖子详情页

- SideBar 侧边栏

- UserInfo 个人信息

- Pagination 分页组件

---

## 安装 vue-cli

---

## Header组件

展示 logo 及 一级菜单。

---

## PostList

展示项目中的 文章列表，其中包括作者、点击量、评论量、文章标题、发表时间等。

- 数据获取

通过官方提供的 API ： [https://cnodejs.org/api/v1/topics](https://cnodejs.org/api/v1/topics) 获取帖子列表

通过 Chrome 的一个小插件 [yformater](https://chrome.google.com/webstore/detail/yformater/eaomiplfdajdfecncbllnmgbdccdblkf) 格式化 API 返回的 JSON 文件，分析需要获取的数据。

```JSON
"id": "5baee8de9545eaf107b9c6f3",   // 帖子ID

"author_id": "51f0f267f4963ade0e08f503",    // 作者ID  

"tab": "share",     // 帖子分类-分享 表示除了置顶和精华之外的其余分区 ­share 分享 / ask 问答 ­/ job 招聘

"content": ...,     // 帖子内容

"title": "Node 地下铁第七期「深圳站」线下沙龙邀约 -  Node.js 新生态",    // 帖子标题

"last_reply_at": "2018-10-12T00:40:26.741Z",    // 帖子最后回复时间

"good": false,      // 代表是否精华

"top": true,        // 代表是否置顶

"reply_count": 13,  // 回复数量

"visit_count": 1420,    // 浏览数量

"create_at": "2018-09-29T02:52:14.701Z",    // 帖子发表时间

"author": {

    "loginname": "lellansin",   // 作者名称

    "avatar_url": "https://avatars2.githubusercontent.com/u/2081487?v=4&s=120"      // 作者头像
}
```

- 引入 axios

- 把获取的数据渲染到页面上

- 运用 filter 对时间戳进行处理：

```javascript
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
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
})
```

- 用过滤器来判断帖子分类：

```javascript
Vue.filter('tabFormatter',function (post) {
  if(post.good == true){
    return '精华'
  }else if(post.top == true){
    return '置顶'
  }else if(post.tab == 'ask'){
    return '问答'
  }else if(post.tab == 'share'){
    return '分享'
  }else{
    return '招聘'
  }
})
```
- 用 v-bind 动态绑定样式：

```javascript
<span :class="[
    {put_good:(post.good === true)},
    {put_top:(post.top === true)},
    {'topiclist-tab':(post.good !== true && post.top !== true)}
    ]">
    {{ post | tabFormatter}}
</span>
```
---

## Article组件

获取文章详情页，其中包括文章标题、发布日期、正文、评论等内容

API [https://cnodejs.org/api/v1/topic/](https://cnodejs.org/api/v1/topic/) + 帖子ID

- 用 router-link 从帖子列表 PostList 跳转到帖子详情页 Article

实现思路：

1.在 PostList.vue 中的每条帖子上添加 router-link:

```html
<router-link :to="{name:'post_content',params:{id:post.id}}">
    <span>{{ post.title}}</span>
</router-link>
```

2.点击后带着参数 `id:post.id` 找到 router 中的 index.js 中设定的路径 `name:'post_content'`

3.打开 url `path:'/topic/:id'`，渲染组件 Article

4.Article 中通过 API 获取了单篇帖子的数据 ```this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)```，然后赋值给了组件中的 data，在页面中渲染出来

即 `router-link` -> `router/index.js` -> `router-view`

---

## userInfo组件

API [https://cnodejs.org/api/v1/user/](https://cnodejs.org/api/v1/user/) + username

**问题**

 API 返回了一篇文章的内容 content，content 是由 markdown 语法编写的。

 解决方法:

1.在项目中安装： `cnpm i markdow-github-css`

2.在 main.js 中引入：`import markdow-github-css`

3.在容器div添加类名 `markdown-body`：

```html
<div v-html="post.content" class="topic_content markdown-body"></div>
```

---

## SideBar组件

展示侧边栏，包括作者信息、最近主题，最近回复等。

- 用 computed 对取得的文章列表做一个筛选，只显示前 5 条：

```javascript
computed:{
    topicLimitBy5(){
        // 这里不用 length 判断是因为刚开始渲染的时候 userinfo 是空的，是没有 length 的，所以会报错
        if(this.userinfo.recent_replies){
            return this.userinfo.recent_replies.slice(0,5);
        }
    },
    repliesLimitBy5(){
        if(this.userinfo.recent_replies){
            return this.userinfo.recent_replies.slice(0,5);
        }
    }
},
```

**问题** 提示 `[vue-router] missing param for named route "user_info": Expected "name" to be defined`

即 点击链接后 url 有变化，但是不跳转。

```html
<!-- SideBar.vue -->
<li v-for="item in topicLimitBy5">
    <router-link :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}">
    {{item.title}}
    </router-link>
</li>
```

原因：没有对路由进行检测，相当于复用了组件，没有对路由参数的变化做出响应，

修改：

```javascript
// Article.vue
watch:{
    '$route'(to,from){
    // 通过 id 获取文章详情
      this.getArticleData()
    }
  }
```

每当 Article 检测到路由发生变化，则执行方法，通过新的帖子 id 获取帖子数据，渲染新的页面。

## Pagination组件

- 用 `:class` 绑定样式，`@click='changebBtn'`实现点击不同页码后按钮样式切换，同时通过 $emit 向父组件发出信息，从 API 获取不同页码的数据，渲染在页面上。

```html
<!-- Pagination.vue -->
<button v-for="btn in pagebtns" :class="[{currentPage:btn === currentPage},{pagebtn:true}]">
    {{btn}}
</button>
```

```javascript
data() {
    return {

        // 先给分页器一个固定的数组
        'pagebtns':[1,2,3,4,5,'...'],

        // 给每个按钮一个「坐标」
        currentPage:1,

        isEllipsis:false
    };
  },
  methods:{
      changeBtn(page){
          if(typeof page !== 'number'){
              switch (page.currentTarget.innerText){
                  case '首页':
                    this.pagebtns = [1,2,3,4,5,'...']
                    this.changeBtn(1)
                    break;
                  case '上一页':
                    $('button.currentPage').prev().click()
                    break;
                  case '下一页':
                    $('button.currentPage').next().click()
                    break;
                  default:
                    break;
              }
              return
          }
          if(page >4){
              this.isEllipsis = true
          }else{
              this.isEllipsis = false
          }
          this.currentPage = page

        //   当点击的按钮是第5个时
          if(page === this.pagebtns[4]){
              this.pagebtns.shift()
              this.pagebtns.splice(4,0,this.pagebtns[3]+1 )

        // 当点击的按钮是第1个时
          }else if(page === this.pagebtns[0] && this.pagebtns[1]>2){
              this.pagebtns.splice(4,1)
              this.pagebtns.unshift(this.pagebtns[0]-1)
          }

        //   传递数据给父组件 PostList
          this.$emit('handleList',this.currentPage)
      }
  },
```

## 完善

### tab 菜单 

可以选择不同的主题进行浏览：

1.tab 菜单中每个选项绑定点击事件，点击后根据传入参数的不同获取不同主题的内容：

```html
<!-- PostList.vue -->
<span @click="changeTab('')">全部</span>
<span @click="changeTab('good')">精华</span>
<span @click="changeTab('share')">分享</span>
<span @click="changeTab('ask')">问答</span>
<span @click="changeTab('job')">招聘</span>
```

```javascript
// PostList.vue
changeTab(value){
    this.tab = value
    this.getData()
}
```

改变 tab，重新执行方法 getData()，获取不同主题帖子的数据，在页面中渲染出来。

2.点击了 tab 菜单后，页码回到该主题的第1页

如果只停留在上一步，则会出现这样的问题：点击 `问答` -> 跳转到第6页 -> 再点击 `首页` -> 页码显示停留在 `首页` 的第6页，但是内容实际上是 `首页` 的第1页

也就是他的样式没有转换过来。

解决方法：父组件把 tab 当成参数传递给子组件，子组件 watch 这个 tab，一旦这个 tab 发生变化，则回到这个 tab 对应的主题的第一页：

```html
<!-- PostList.vue -->
<Pagination @handleList='renderList' :tab='tab'></Pagination>
```

```javascript
// Pagination
...

props:[
    'tab'
  ],

...

watch:{
    tab:function(val,oldVal){
      this.pagebtns = [1,2,3,4,5,'...']
      this.changeBtn(1)
    }
  }
```

### 增加对帖子标题的长度限制

对帖子中同时包含了中英文的字符串的长度进行解析，限制字符串长度

```javascript
Vue.filter('postListConversion',function(str,len){
  var result = "";
  var strlen = 0;
  for(var i = 0;i < str.length; i++){
      if(str.charCodeAt(i) > 255){
        strlen += 2; //如果是汉字，则字符串长度加2
      } else {
        strlen++;
      }
      result += str.substr(i,1);
      if(strlen >= len){
          break;
      }
  }
  if(strlen < len){
    return result
  }else{
    return `${result}...`;
  }
})
```

### 媒体查询 响应移动端

如：

```css
@media screen and (max-width: 979px){
  .autherinfo{
    float: none;
    position: absolute;
    bottom: -4px;
    left: 22px;
  }
  ul a{
    max-width: 96%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
```
当设备分辨率宽度小于 979px 时，样式会生效。

## Registered / Login

注册和登录页

1.注册页：

使用 localStorage 存储注册用户的用户名和密码，v-model 绑定输入框的 value ，判断 localStorage 里有没有 value：

有，可以直接登录；无，则注册成功。

```javascript
methods:{
      submitInfo(){
          //判断是否存在此用户名
          if (localStorage.getItem(this.username) === null) {
              this.usernameIsRight = false

              //存入用户名和密码
              localStorage.setItem(this.username,this.password)
              this.isWorks = true
              setTimeout(()=>{

                // 跳转到登录页
                this.$router.push({path:'/login'})
              },2000)
            }else{
                this.usernameIsRight = true
            }
      }
  }
```

2.登录页：

通过 localStorage 判断输入框 value，匹配则转到首页，不匹配则提示密码错误或者用户未注册。

```javascript
methods:{
      submitInfo(){
          //判断是否存在此用户名
          if (localStorage.getItem(this.username) === null) {
              this.usernameIsRight = true

            //   判断用户名和密码是否匹配
            }else if(localStorage.getItem(this.username) !== this.password){
                this.passwordIsRight = true
            }

            // 用户名和密码匹配则带着参数（用户名）跳转到 /user/
            else if(localStorage.getItem(this.username) === this.password){
                this.usernameIsRight = false
                this.$router.push({name:'user',params:{name:this.username}})

                window.location.reload()
            }
      }
  }
```

3.首页：

通过 url 参数拿到 用户名：`username:this.$route.params.name`

然后把用户名渲染到页面中。



