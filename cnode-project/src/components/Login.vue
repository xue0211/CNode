<template>
    <div class="login">
        <div class="formWrapper">
            <h2>用户登录</h2>
            <form action="">
                <label for=""></label>
                <input type="">
                <label for=""></label>
                <input type="">
            </form>
            <button>提交</button>
            <span></span>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Login',
}
</script>

<style scoped>
.login{
    height: 86vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.formWrapper{
    width: 500px;
    height: 300px;
    border:1px solid #d1d5da;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
}
.formWrapper:hover{
    box-shadow: 4px 4px 22px 0px rgba(0,0,0,0.25);
}
.formWrapper h2{
    padding-top: 18px;
    color: #333
}
form{
    text-align: start;
    padding-left: 140px;
    padding-bottom: 10px;
    margin-top: 18px
}
input{
    display: block;
    margin-left: 20px;
    height: 18px;
    border-radius: 4px
}
label{
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 15px;
}
button{
    width: 100px;
    height: 30px;
    background-color: #444;
    border: none;
    border-radius: 3px;
    color: #fff;
    display: block;
    margin: 20px auto
}
button:hover{
    background-color: #2F96B4;
}
span{
    padding-top: 6px;
    font-size: 14px;
    color: #586069
}
</style>