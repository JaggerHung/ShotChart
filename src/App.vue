
<template>
      <div id="app">
        <h1>Livestats</h1>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/roster">Roster</router-link></li>
          <li><router-link to="/livestats">Livestats</router-link></li>
        </ul>
        <router-view></router-view>
      </div>
</template>

<script>

export default {
}
</script>

<style>
.finished {
  text-decoration: line-through;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#basketball_court {
  border: 0px;
  width: 100%;
  background-color: #f05a28;
}
</style>
