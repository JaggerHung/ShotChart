<template>
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>HomeScore 9</h1>
        </div>
        <div class="col-md-6">
          <h1>AwayScore 0</h1>
        </div>
        <div class="col-md-2">
          <table class="table">
            <thead>
              <th>#</th>
              <th>動作</th>
              <th>位置</th>
            </thead>
            <tbody>
              <th>2</th>
              <th>Lozon Ball</th>
              <th>(0.333, 0.888)</th>
            </tbody>
          </table>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-2 playerlist">
              <b-button
                v-for="player in players"
                v-if="player.team =='home'"
                v-on:click="selectPlayer(player)"
              >{{player.jerseyNumber}}</b-button>
            </div>
            <div class="col-md-8" >
              <img  disavled v-on:click="getShotPosition" id="basketball_court" class="basketball_court" src="../assets/basketball_court.png" alt="basketball_court">
            </div>
            <div class="col-2">

            </div>
          </div>
        </div>
        <div class="col-md-2">
          <table class="table">
            <thead>
              <th>#</th>
              <th>動作</th>
              <th>位置</th>
            </thead>
            <tbody>
              <th>2</th>
              <th>Lozon Ball</th>
              <th>(0.333, 0.888)</th>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '@/store'
export default {
  name: 'Livestats',
  data () {
    return {
      players: Store.fetch(),
      InstantPlays: [],
      newInstantPlay: [
        {
          name: '',
          jerseyNumber: '',
          team: '',
          playtype: '',
          posx: '',
          posy: ''
        }
      ]
    }
  },
  methods: {
    selectPlayer: function (player) {
    },
    getShotPosition: function (e) {
      const posx = e.offsetX ? (e.offsetX) : e.pageX - document.getElementById('basketball_court').offsetLeft
      const posy = e.offsetY ? (e.offsetY) : e.pageY - document.getElementById('basketball_court').offsetTop
      console.log(posx / 476, posy / 476)
    },
    addNewInstantPlay: function () {
    }
  }
}
</script>

<style>
.basketball_court {
  width: 300px
}
.playerlist {
  display: flex;
  flex-direction: column;
  height: 100%
}
</style>
