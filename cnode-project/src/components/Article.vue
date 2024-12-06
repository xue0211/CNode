<template>
    <div class="article">
        <div class="loading" v-if="isLoading">
            <div class="loader">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
        <div v-else>
            <div class="topic_header">
                <div class="topic_title">{{ post.title }}</div>
                <ul>
                    <li>· 发表于{{ post.create_at | formatDate }}</li>
                    <li>· 作者： {{ post.author.loginname }}</li>
                    <li>· {{ post.visit_count }} 次浏览</li>
                    <li>· 来自 {{ post | tabFormatter }}</li>
                </ul>
                <div v-html="post.content" class="topic_content markdown-body"></div>
            </div>
            <div class="reply">
                <div class="topbar">回复</div>
                <div v-if="post.replies.length === 0" class="noReplyStyle">本文暂无评论...</div>
                <div v-for="(reply, index) in post.replies" class="replySec markdown-body">
                    <div class="replyUp">
                        <img :src="reply.author.avatar_url" class="replyUserImg">
                        <span>{{ reply.author.loginname }}</span>
                        <span>#{{ index + 1 }}楼</span>
                        <span v-if="reply.ups.lenght > 0">👍{{ reply.ups.length }}</span>
                        <span v-else></span>
                    </div>
                    <p v-html="reply.content" class="replyContentStyle markdown-body"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    data() {
        return {
            isLoading: false,
            post: {}
        }
    },
    methods: {
        getArticleData() {
            this.$axios
                .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
                .then(res => {
                    if (res.data.success === true) {
                        this.isLoading = false;
                        this.post = res.data.data
                        console.log(this.post.replies.length)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    beforeMount() {
        this.isLoading = true;
        this.getArticleData();
    },
    watch: {
        '$route'(to, from) {
            this.getArticleData()
        }
    }
}
</script>

<style scoped>

.noReplyStyle {
    margin: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    color: #778087;
}

.topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
}

.article{
    margin-right: 340px;
    margin-top: 15px;
}

#reply,
.topic_header {
    background-color: #fff;
}

.reply {
    margin-top: 15px;
    margin-bottom: 15px;
}

.replyUserImg {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
}

.topic_header a,
#reply a,
#reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
}

.replySec {
    border-bottom: 1px solid #e5e5e5;
    padding: 0 10px;
}

.loading {
    text-align: center;
    padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
}

.topic_header {
    padding: 10px;
}

.topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
}

.topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
}

.topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
}

.topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 10px 10px;
}

.markdown-text img {
    width: 92% !important;
}

.replyContentStyle {
    padding: 10px 35px 0 35px;
}

@media screen and (max-width: 979px) {
    .article{
        margin: 10px 10px 10px;
    }
}

body {
    margin: 0;
}

.loader {
    position: absolute;
    top: 30%;
    left: 25%;
    margin-left: 10%;
    transform: translate3d(-50%, -50%, 0);
}

.dot {
    width: 24px;
    height: 24px;
    background: #3ac;
    border-radius: 100%;
    display: inline-block;
    animation: slide 1s infinite;
}

.dot:nth-child(1) {
    animation-delay: 0.1s;
    background: #32aacc;
}

.dot:nth-child(2) {
    animation-delay: 0.2s;
    background: #64aacc;
}

.dot:nth-child(3) {
    animation-delay: 0.3s;
    background: #96aacc;
}

.dot:nth-child(4) {
    animation-delay: 0.4s;
    background: #c8aacc;
}

.dot:nth-child(5) {
    animation-delay: 0.5s;
    background: #faaacc;
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

@media screen and (max-width: 979px) {
    .loading {
        text-align: center;
        padding-top: 100px;
    }

    .loader {
        position: absolute;
        top: 30%;
        left: 35%;
        margin-left: 10%;
        transform: translate3d(-50%, -50%, 0);
    }
}
.loader {
  position: absolute;
  top: 30%;
  left: 25%;
  margin-left: 10%;
  transform: translate3d(-50%, -50%, 0);
}
.dot {
  width: 24px;
  height: 24px;
  background: #3ac;
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
}
.dot:nth-child(1) {
  animation-delay: 0.1s;
  background: #32aacc;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
  background: #64aacc;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
  background: #96aacc;
}
.dot:nth-child(4) {
  animation-delay: 0.4s;
  background: #c8aacc;
}
.dot:nth-child(5) {
  animation-delay: 0.5s;
  background: #faaacc;
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