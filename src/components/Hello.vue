var Child = {
  template: '  <div class="hello">
                <h1>{{ msg }}</h1>
              </div>'
}

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: '1234'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
