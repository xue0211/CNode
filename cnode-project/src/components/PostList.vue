<template>
   <div class="PostList">
    <div class="loading" v-if="isLoading">
          <div class="loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
      </div>
      <div class="posts">
        <ul>
            <li>
                <div class="toobar" v-if="isTopbarLoading">
                    <span>全部</span>
                    <span>精华</span>
                    <span>分享</span>
                    <span>问答</span>
                    <span>招聘</span>
                </div>
            </li>
            <li>
                <img src="" alt="">
                <span></span>
                <span></span>
                <span class="topic_title"></span>
                <span class="last_reply"></span>
            </li>
            <li></li>
        </ul>
      </div>
   </div>   
</template>

<script>
export default{
    name: 'PostList',
    data(){
        return{
            isLoading: false,
            isTopbarLoading:false,
            posts: [],
        }
    }
}
</script>

<style scoped>
.PostList {
  background-color: #e1e1e1;
  margin-bottom: 20px;
  margin-right: 340px;
  margin-top: 15px;
}
.posts {
  margin-top: 10px;
}



.PostList img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
}

ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
}

li:not(:first-child):hover {
  background: #f5f5f5;
}
li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}

.allcount {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply_count {
  color: #9e78c0;
  font-size: 14px;
}
.reply_count_padding{
  text-align: center;
  width: 76px;
  font-size: 10px;
  padding: 0 5px;
  display: inline-block;
}
.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.toobar {
  height: 40px;
  background-color: #f5f5f5;
}
.toobar span.isActived{
  color: #fff;
  background-color: #80bd01;
}
.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 5px;
}
.toobar span:hover {
  color: #fff;
  background-color: #80bd01;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
@-moz-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>