<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto" v-if="isLogin">
                        <li class="nav-item">
                            <router-link class="nav-link" v-bind:to="{name:'Home'}">首页</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" v-bind:to="{name:'Menu'}">菜单</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" v-bind:to="{name:'Admin'}">管理</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" v-bind:to="{name:'About'}">关于我们</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto" v-if="!isLogin">
                        <li class="nav-item">
                            <router-link class="nav-link" v-bind:to="{name:'Login'}">登录</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" v-bind:to="{name:'Register'}">注册</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto" v-if="isLogin">
                      <li class="nav-item">
                        <a class="nav-link">{{getUserName}}</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">[登出]</a>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: "Header",
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    },
    getUserName(){
      return this.$store.state.userMsg
    }
  }
};
</script>
