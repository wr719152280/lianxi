<template>
  <div id="app">
    <appheader></appheader>
    <TopAlert></TopAlert>
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import TopAlert from  './components/TopAlert'
export default {
  name: 'App',
  components:{
    'appheader':Header,
    TopAlert
  }
}
</script>

<style>

</style>
