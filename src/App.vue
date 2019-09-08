<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Me</router-link> |
      <router-link to="/reports/weeks/1">Reports</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav a {
    color: grey;
}
#nav a:hover {
  color: green;
}
</style>
