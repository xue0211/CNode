<template>
    <div class="header">
        <img src="../assets/cnodejs_light.svg" alt="">
        <ul>
            <li>首页</li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li v-if='isRegistered'>
                <router-link :to='{ name: "registered" }'>
                    注册
                </router-link>
            </li>
            <li>登录</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            username: this.$route.params.name
        }
    },
    computed: {
        isRegistered() {
            return !localStorage.getItem(this.username)
        },
        userNameIsExit() {
            return localStorage.getItem(this.username)
        }
    }
}
</script>

<style scoped>
.header {
    background-color: #444;
    height: 50px;
}

img {
    max-width: 120px;
    margin-left: 50px;
    margin-top: 10px;
}

ul {
    list-style: none;
    float: right;
    margin-right: 50px;
}

li {
    display: inline-block;
    line-height: 50px;
    padding: 0 10px
}

a {
    text-decoration: none;
    color: #ccc;
    font-size: 13px;
    text-shadow: none;
}

li span {
    color: #fff;
    font-size: 13px;
}
</style>