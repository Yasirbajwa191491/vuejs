<template>
<img alt="Vuelogo" src="./assets/logo.png" />
    <nav>
        <ul>
            <li><router-link to="/" class="list">Show-Data</router-link></li>
            <li><router-link to="/post" class="list">Post-Data</router-link></li>
            <!-- <li><router-link to="/child" class="list">Test</router-link></li> -->
            <li><router-link to="/validate" class="list">Validations</router-link></li>
            <li><router-link to="/date" class="list">Date</router-link></li>
            <li><router-link to="/home/1" class="list">Update-Data</router-link></li>
        </ul>
        <router-view></router-view>
    </nav>
</template>
<script>
export default {
    name:"App"
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav ul li{
  display: inline-block;
  margin: 4px;
}
.list{
  text-decoration: none;
  background-color: black;
  color: white;
  height: 30px;
  width: 40px;
}
</style>
