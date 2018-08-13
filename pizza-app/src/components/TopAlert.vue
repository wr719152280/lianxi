<template>
    <div class="box" v-if="showAlert">
      <div class="boxIn">
        <p>{{showAlert}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TopAlert",
        computed:{
          showAlert(){
            return this.$store.state.alert.msg
          }
        }
    }
</script>

<style scoped>
  .box{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .boxIn{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p{
    background: rgba(0,0,0,.5);
    text-align: center;
    padding: 2% 5%;
    font-size: 26px;
    color: #fff;
    border-radius: 10px;
  }
</style>
