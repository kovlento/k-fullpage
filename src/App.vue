<template>
  <div id="app">
    <fullpage ref='fullpage' >
      <div slot='section' class="section-one">
          <div>page1</div>
      </div>
      <div slot='section' class="section-two" >
          <div>page2</div>
      </div>
    </fullpage>
  </div>
</template>
<script>
import fullpage from './components/fullpage'
export default {
  components:{
    fullpage
  },
  mounted(){
    /* eslint-disable */
    console.log(this.$refs['fullpage'])
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.section-one {
  background: #10B15F;
  color: white;
}
.section-two {
  background: #11A8CD;
  color: white;
}
</style>
