<template>
    <div class="autherinfo">
        <div class="authorsummary">
            <div class="toobar">作者</div>
            <img src="" alt="">
            <span class="loginname"></span>
            <p class="scoreStyle">积分 </p>
        </div>
        <div class="recent_topics">
            <div class="topbar">作者最近主题</div>
            <ul>
                <li></li>
            </ul>
        </div>
        <div class="recent_replies">
            <div class="topbar">作者最近回复</div>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    name: 'SideBar',
    data(){
        return{
            userinfo:{}
        }
    },
    computed:{

    },
    methods:{

    }
}
</script>

<style scoped>
.authorsummary,
.recent_replies,
.recent_topics {
  background-color: #fff;
  margin-bottom: 10px;
}
.autherinfo {
  width: 328px;
  float: right;
}
li {
  padding: 6px 10px;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authersummay .topbar {
  margin-top: 0px;
}
.scoreStyle {
  padding: 0 10px 10px;
  font-size:14px;
}
</style>