<template>
  <div>
    <h2 class="text-center">登录</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form v-on:submit="login">
          <div class="form-group">
            <label>请输入邮箱</label>
            <input type="email" class="form-control" placeholder="请输入邮箱" v-model="newUser.email" name="email" required>
          </div>
          <div class="form-group">
            <label>请输入密码</label>
            <input type="password" class="form-control" placeholder="请输入密码" v-model="newUser.password" name="password" required>
          </div>
          <div class="form-gtoup">
            <button type="submit" class="btn btn-primary btn-block" >登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        newUser:{}
      }
    },
    methods:{
      login(e){
        e.preventDefault();
        fetch("/apis/users/login",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.newUser)
        })
          .then(res=>res.json())
          .then(data=>{
            if (data.msg == 0){
              this.$store.dispatch('getChangeAlert','邮箱不存在')
            }else if (data.msg == 1){
              this.$store.dispatch('getChangeAlert','登录成功！')
              this.$store.dispatch('changeLonginState',true)
              this.$store.dispatch('getUserMsg',this.newUser.email)
              this.$router.push({name:"Home"})
            } else if (data.msg == 2){
              this.$store.dispatch('getChangeAlert','密码错误！')
            }
          })
      }
    }
  }
</script>
