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
                <div class="topic_title"></div>
                <ul>
                    <li>· 发表于</li>
                    <li>· 作者：</li>
                    <li>· 次浏览</li>
                    <li>· 来自</li>
                </ul>
                <div></div>
            </div>
            <div class="reply">
                <div class="topbar"></div>
                <div v-if="" class="noReplyStyle">本文暂无评论...</div>
                <div v-for="" class="replySec">
                    <div class="replyUp">
                        <img src="" alt="">
                        <span></span>
                        <span>#楼</span>
                        <span v-if="">👍</span>
                        <span v-else></span>
                    </div>
                    <p class="replyContentStyle markdown-body"></p>
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

.article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
}

#reply,
.topic_header {
    background-color: #fff;
}

#reply {
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
</style>