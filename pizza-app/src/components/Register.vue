<template>
  <div>
      <h2 class="text-center">注册</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form v-on:submit="register">
          <div class="form-group">
            <label>请输入邮箱</label>
            <input type="email" class="form-control" placeholder="请输入邮箱" v-model="newUser.email" name="email" required>
          </div>
          <div class="form-group">
            <label>请输入密码</label>
            <input type="password" class="form-control" placeholder="请输入密码" v-model="newUser.password1" name="password1" required>
          </div>
          <div class="form-group">
            <label>确认密码</label>
            <input type="password" class="form-control" placeholder="确认密码" v-model="newUser.password2" name="password2" required>
          </div>
          <div class="form-gtoup">
            <button type="submit" class="btn btn-primary btn-block" >注册</button>
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
      register(e) {
        e.preventDefault();
        if (this.newUser.password1 != this.newUser.password2) {
          this.$store.dispatch('getChangeAlert','两次密码不一致')
        }
        else {
          fetch("/apis/users/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.newUser)
          })
            .then(res => res.json())
            .then(data => {
              if(data.msg == 0){
                this.$store.dispatch('getChangeAlert','邮箱已被占用')
                clearForm();
              }else if (data.msg == 1){
                this.$store.dispatch('getChangeAlert','注册成功')
                this.$router.push({name:"login"})
              }
            })
            .catch(err => console.log(err))
        }
      },
      clearForm(){
        this.newUser = {}
      }
    }
  }
</script>
