<template>
  <h1>Hello there!</h1>
  <p>This is the new style</p>
  <div style="background-color: var(--error)"><p><b>DANGER</b></p></div>
  <div style="background-color: var(--warning)"><p><b>Warning</b></p></div>
  <div style="background-color: var(--information)"><p><i>Information</i></p></div>
  <footer><p>Vilhelm Niemi, Jonathan Methuen</p></footer>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import "./assets/styles/colors.css";
@import "./assets/styles/theme.css";
@import "./assets/styles/elements.css";
@import "./assets/styles/components.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
