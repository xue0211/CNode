<template>
  <div class="authorinfo">
    <div class="authorsummary">
      <div class="topbar">作者</div>
      <router-link :to="{ name: 'user_info', params: { name: userinfo.loginname } }">
        <img :src="userinfo.avatar_url">
      </router-link>
      <span class="loginname">
        <router-link :to="{ name: 'user_info', params: { name: userinfo.loginname } }">
          {{ userinfo.loginname }}
        </router-link>
      </span>
      <p class="scoreStyle">积分 {{ userinfo.score }}</p>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="item in topicLimitBy5">
          <router-link :to="{ name: 'post_content', params: { id: item.id, name: item.author.loginname } }">
            {{ item.title | postListConversion(44) }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="item in repliesLimitBy5">
          <router-link :to="{ name: 'post_content', params: { id: item.id, name: item.author.loginname } }">
            {{ item.title | postListConversion(44) }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideBar',
  data() {
    return {
      userinfo: {}
    }
  },
  computed: {
    topicLimitBy5() {
      // 这里不用 length 判断是因为刚开始渲染的时候 userinfo 是空的，是没有 length 的，所以会报错
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5)
      }
    },
    repliesLimitBy5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5)
      }
    }
  },
  methods: {
    getUserData() {
      this.$axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          if (res.data.success === true) {
            this.isLoading = false;
            this.userinfo = res.data.data;
            console.log(this.userinfo)
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getUserData()
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

.authorinfo {
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
  font-size: 14px;
}

@media screen and (max-width: 979px) {
  .autherinfo {
    float: none;
    position: absolute;
    bottom: -4px;
    left: 22px;
    display: none;
  }

  ul a {
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
</style>