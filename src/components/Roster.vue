<template>
      <div id="app" class="container roster">
        <div class="row">
          <div class="col-md-12">
            <h1>Roster</h1>
          </div>
          <div class="col-md-6">
            <h4>Home Team</h4>
            <table class="table">
              <thead>
                <th>#</th>
                <th>Name</th>
                <th>Edit</th>
              </thead>
              <tbody v-for="(player, key) in players" v-if="player.team == 'home'">
                <th>{{player.jerseyNumber}}</th>
                <th>{{player.name}}</th>
                <th><b-button class="editButton"
                              variant="info"
                              v-on:click="editPlayer(player)"
                              v-bind:player="player"
                              v-b-modal.modal2
                              >Edit</b-button></th>
              </tbody>
            </table>
          </div>
          <div class="col-md-6">
            <h4>Away Team</h4>
              <table class="table">
                <thead>
                  <th>#</th>
                  <th>Name</th>
                  <th>Edit</th>
                </thead>
                <tbody v-for="player in players" v-if="player.team =='away'">
                  <th>{{player.jerseyNumber}}</th>
                  <th>{{player.name}}</th>
                  <th><b-button class="editButton" variant="info">Edit</b-button></th>
                </tbody>
              </table>
          </div>
          <div class="col-md-12">
            <b-btn v-b-modal.modal1>Add Player</b-btn>
          <!-- Add Player Modal Component -->
          <b-modal id="modal1" title="Add New Player" v-on:ok="submit" @shown="clearSpace">
            <form @submit.stop.prevent="submit">
              <div class="row">
                <div class="col-md-3">
                  <b-form-input min="0" type="number" placeholder="#" v-model="newPlayer.jerseyNumber"></b-form-input>
                </div>
                <div class="col-md-6">
                  <b-form-input type="text" placeholder="Enter your name" v-model="newPlayer.name"></b-form-input>
                </div>
                <div class="col-md-3">
                  <select class="form-control" type="Boolean" placeholder="H/A" v-model="newPlayer.team">
                    <option value= "home">Home</option>
                    <option value= "away">Away</option>
                  </select>
                </div>
              </div>
            </form>
          </b-modal>
          <!-- Add Player Modal Component End -->
          <!-- Update Player Modal Component -->
          <b-modal id="modal2" title="Update Player" v-on:ok="doneEdit, submit" @shown="clearSpace">
            <form @submit.stop.prevent="submit">
              <div class="row">
                <div class="col-md-3">
                  <b-form-input min="0" type="number" placeholder="#" v-model="this.editedPlayer.jerseyNumber"></b-form-input>
                </div>
                <div class="col-md-6">
                  <b-form-input type="text" placeholder="Enter your name" v-model="this.editedPlayer.name"></b-form-input>
                </div>
                <div class="col-md-3">
                  <select class="form-control" type="Boolean" placeholder="H/A" v-model="this.editedPlayer.team">
                    <option value= "home">Home</option>
                    <option value= "away">Away</option>
                  </select>
                </div>
              </div>
            </form>
          </b-modal>
          <!-- Update Player Modal Component End -->
          </div>
        </div>
      </div>
</template>

<script>
  import Store from '@/store'
  export default {
    name: 'Roster',
    data: function () {
      return {
        players: Store.fetch('players'),
        newPlayerId: Store.fetch('newPlayerId'),
        editedPlayer: '',
        newPlayer: {
          id: '',
          jerseyNumber: '',
          name: '',
          team: ''
        }
      }
    },
    methods: {
      clearSpace: function () {
        this.newPlayer.name = ''
        this.newPlayer.jerseyNumber = ''
        this.newPlayer.team = ''
      },
      submit: function (player) {
        if (this.newPlayer.name === '') {
          alert('Please enter the name')
          return player.preventDefault()
        }
        if (this.newPlayer.jerseyNumber === '') {
          alert('Please enter the number')
          return player.preventDefault()
        }
        if (this.newPlayer.team === '') {
          alert('Please enter the team')
          return player.preventDefault()
        }
        this.players.push({
          id: this.newPlayerId++,
          jerseyNumber: this.newPlayer.jerseyNumber,
          name: this.newPlayer.name,
          team: this.newPlayer.team
        })
      },
      editPlayer: function (player) {
        this.beforeEditCache = player
        this.editedPlayer = player
        console.log(player)
      },
      doneEdit: function (player) {
        if (!this.editedPlayer) {
          this.player = this.editedPlayer
          this.player.save()
        }
      }
    },
    watch: {
      players: {
        handler (players) {
          Store.save('players', players)
        },
        deep: true
      },
      newPlayerId: {
        handler (newPlayerId) {
          Store.save('newPlayerId', newPlayerId)
        },
        deep: true
      }
    }
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
.editButton {
  font-size: 0.5rem;
  padding: 0.5;
}
</style>
