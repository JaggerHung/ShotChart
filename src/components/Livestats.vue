<template>
    <div class="">
      <div class="row">
        <div class="col-md-6">
          <h1>HomeScore: {{score.home_team_score}}</h1>
        </div>
        <div class="col-md-6">
          <h1>AwayScore: {{score.away_team_score}}</h1>
        </div>
        <div class="col-md-2">
          <table class="table">
            <thead>
              <th>#</th>
              <th>Name</th>
              <th>位置</th>
            </thead>
            <tbody v-for="InstantPlay in InstantPlays" v-if="InstantPlay.team == 'home'">
              <th>{{InstantPlay.jerseyNumber}}</th>
              <th>{{InstantPlay.name}}</th>
              <th>({{InstantPlay.posx}},{{InstantPlay.posy}})</th>
            </tbody>
          </table>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-2 playerlist">
              <b-button
                class="player"
                v-for="player in players"
                v-if="player.team =='home'"
                v-on:click="selectPlayer(player)"
              >{{player.jerseyNumber}}</b-button>
            </div>
            <div class="col-md-8 basketball_court">
              <span class="madeShotTag" v-for="InstantPlay in InstantPlays" v-if="InstantPlay.madeShot == true" v-bind:style="{left: InstantPlay.imageposx, top: InstantPlay.imageposy}"></span>
              <span class="missShotTag" v-for="InstantPlay in InstantPlays" v-if="InstantPlay.madeShot == false" v-bind:style="{left: InstantPlay.imageposx, top: InstantPlay.imageposy}"></span>
              <pop-confirm ok-text="Made" cancel-text="Miss" :on-ok="addNewInstantPlayMade" @shown="clearMadeShot" :on-cancel="addNewInstantPlayMiss">
                <svg class="svg_basketball_court"v-on:click="getPosition" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="-86.2 173.3 786.5 442.2" enable-background="new -86.2 173.3 786.5 442.2" xml:space="preserve">
                    <g class="2pts_area">
                     <path fill="rgba(0,0,0,0)" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-86.3,209.2h39l-3,0.1
                       C0,207.5,48.9,226.4,85,261.4s56.5,83.3,56.3,133.6v-1.4c0.2,50.3-20.1,98.6-56.3,133.6S0,581.1-50.3,579.3l3,0.1h-39"></path>
                    </g>
                    <g class="2pts_area">
                     <path fill="rgba(0,0,0,0)" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M700,209.2h-39l3,0.1
                      c-50.3-1.8-99.2,17.1-135.3,52.1s-56.5,83.3-56.3,133.6v-1.4c-0.2,50.3,20.1,98.6,56.3,133.6c36.1,35,85,53.9,135.3,52.1l-3,0.1h39"></path>
                    </g>
                      <path fill="none" stroke="#073763" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-43.8,360.3L-43.8,360.3
                         c0.2,0,0.5,0,0.7,0"/>
                      <path fill="none" stroke="#073763" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M657.6,360.3L657.6,360.3
                           c-0.2,0-0.5,0-0.7,0"/>
                      <path class="" v-on:click="" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-87.1,615.5V173.3
                        h787.4v442.2H-87.1z"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M306.6,629.4V160.7"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M306.6,445.1L306.6,445.1
                        c-27.7,0-50.1-22.4-50.1-50.1l0,0c0-13.3,5.3-26,14.7-35.4s22.1-14.7,35.4-14.7l0,0c27.7,0,50.1,22.4,50.1,50.1l0,0
                        C356.7,422.7,334.2,445.1,306.6,445.1z"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-86.2,460.1V330.2H64.7
                        v129.9H-86.2z"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M37.6,459.8v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M37.6,324.6v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M8.1,324.6v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M8.1,459.8v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-44.2,324.6v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-44.2,459.8v5.6"/>
                      <path stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-22.2,464.2V461h8.4v3.1h-8.4V464.2z"
                        />
                      <path stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-22.2,329v-3.1h8.4v3.1H-22.2z"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M64.1,343.6L64.1,343.6
                        c28,0.8,50.3,23.8,50.1,51.9s-22.8,50.8-50.8,51.2"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-56.3,420.1v-50.8"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-44.3,402.5L-44.3,402.5
                        c-4,0-7.3-3.3-7.3-7.3l0,0c0-1.9,0.8-3.8,2.1-5.2c1.4-1.4,3.2-2.1,5.2-2.1l0,0c4,0,7.3,3.3,7.3,7.3l0,0
                        C-37,399.2-40.3,402.5-44.3,402.5z"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-56.4,395.2h4.7"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-42.4,429.9H-56"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-43.8,360.3h-12.5"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M-43.8,360.3L-43.8,360.3
                        c19.2,0,34.8,15.6,34.8,34.8s-15.6,34.8-34.8,34.8"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M699.9,460.1V330.2H549
                        v129.9H699.9z"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M576.1,459.8v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M576.1,324.6v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M605.6,324.6v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M605.6,459.8v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M657.9,324.6v5.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M657.9,459.8v5.6"/>
                      <path stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M635.9,464.2V461h-8.4v3.1h8.4V464.2z"
                        />
                      <path stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M635.9,329v-3.1h-8.4v3.1H635.9z"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M549.7,343.6L549.7,343.6
                        c-28,0.8-50.3,23.8-50.1,51.9c0.2,28.1,22.8,50.8,50.8,51.2"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M670.1,420.1v-50.8"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M658.1,402.5L658.1,402.5
                        c4,0,7.3-3.3,7.3-7.3l0,0c0-1.9-0.8-3.8-2.1-5.2s-3.2-2.1-5.2-2.1l0,0c-4,0-7.3,3.3-7.3,7.3l0,0C650.7,399.2,654,402.5,658.1,402.5z
                        "/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M670.2,395.2h-4.7"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M656.2,429.9h13.6"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M657.6,360.3h12.5"/>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M657.6,360.3L657.6,360.3
                        c-19.2,0-34.8,15.6-34.8,34.8s15.6,34.8,34.8,34.8"/>
                </svg>
              </pop-confirm>
            </div>
            <div class="row">
              <div class="col-md-2">
                <a v-on:click="FreeThrowMade" class="button is-primary is-outlined">罰中</a>
              </div>
              <div class="col-md-2">
                <a v-on:click="FreeThrowMiss" class="button is-primary is-outlined">罰不中</a>
              </div>
              <div class="col-md-2">
                <a class="button is-primary is-outlined">攻版</a>
              </div>
              <div class="col-md-2">
                <a class="button is-primary is-outlined">守版</a>
              </div>
              <div class="col-md-2">
                <a class="button is-primary is-outlined">抄截</a>
              </div>
              <div class="col-md-2">
                <a class="button is-primary is-outlined">火鍋</a>
              </div>
              <div class="col-md-1">
                <a class="button is-primary is-outlined">助攻</a>
              </div>
              <div class="col-md-1">
                <a class="button is-primary is-outlined">犯規</a>
              </div>
            </div>
            <div class="col-md-2 playerlist">
              <b-button
                class="player"
                v-for="player in players"
                v-if="player.team =='away'"
                v-on:click="selectPlayer(player)"
              >{{player.jerseyNumber}}</b-button>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <table class="table">
            <thead>
              <th>#</th>
              <th>Name</th>
              <th>位置</th>
            </thead>
            <tbody v-for="InstantPlay in InstantPlays" v-if="InstantPlay.team == 'away'">
              <th>{{InstantPlay.jerseyNumber}}</th>
              <th>{{InstantPlay.name}}</th>
              <th>({{InstantPlay.posx}},{{InstantPlay.posy}})</th>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
import Store from '@/store'
import VueBlu from 'vue-blu'
import Vue from 'vue'
import 'vue-blu/dist/css/vue-blu.min.css'
Vue.use(VueBlu)
export default {
  name: 'Livestats',
  data () {
    return {
      score: {
        home_team_score: 0,
        away_team_score: 0
      },
      players: Store.fetch('players'),
      InstantPlays: Store.fetch('InstantPlays'),
      selectdPlayer: [],
      styleObject: {
        'background-color': ''
      },
      play: [
        {
          playtype: '',
          madeShot: '',
          posx: '',
          posy: '',
          imageposx: '',
          imageposy: ''
        }
      ],
      newInstantPlay: [
        {
          player_id: '',
          name: '',
          jerseyNumber: '',
          team: '',
          playtype: '',
          madeShot: '',
          posx: '',
          posy: '',
          createdtime: ''
        }
      ]
    }
  },
  methods: {
    selectPlayer: function (player) {
      this.selectdPlayer = player
    },
    getPosition: function (e) {
      const posx = e.offsetX ? (e.offsetX) : e.pageX - document.getElementByClassName('basketball_court').offsetLeft
      const posy = e.offsetY ? (e.offsetY) : e.pageY - document.getElementByClassName('basketball_court').offsetTop
      this.play.posx = posx / document.getElementsByClassName('basketball_court')[0].clientWidth
      this.play.posy = posy / document.getElementsByClassName('basketball_court')[0].clientHeight
      this.play.imageposx = this.play.posx * 100 + '%'
      this.play.imageposy = this.play.posy * 100 + '%'
      if (e.path[1].classList.value === '2pts_area') {
        this.play.playtype = '2pts_in'
      } else {
        this.play.playtype = '3pts_in'
      }
    },
    addNewInstantPlayMade: function () {
      this.madeShot = true
      const createdtime = new Date()
      const chosenOne = this.selectdPlayer
      const posx = this.play.posx
      const posy = this.play.posy
      const playtype = this.play.playtype
      const imageposx = this.play.imageposx
      const imageposy = this.play.imageposy

      if (playtype === '2pts_in' && chosenOne.team === 'home' && this.madeShot === true) {
        this.score.home_team_score += 2
      } else if (playtype === '3pts_in' && chosenOne.team === 'home' && this.madeShot === true) {
        this.score.home_team_score += 3
      }
      if (playtype === '2pts_in' && chosenOne.team === 'away' && this.madeShot === true) {
        this.score.away_team_score += 2
      } else if (playtype === '3pts_in' && chosenOne.team === 'away' && this.madeShot === true) {
        this.score.away_team_score += 3
      }
      this.InstantPlays.push({
        player_id: chosenOne.id,
        name: chosenOne.name,
        jerseyNumber: chosenOne.jerseyNumber,
        team: chosenOne.team,
        playtype,
        madeShot: this.madeShot,
        posx,
        posy,
        imageposx,
        imageposy,
        createdtime
      })
    },
    clearMadeShot: function () {
      this.madeShot = ''
    },
    addNewInstantPlayMiss: function () {
      this.madeShot = false
      const createdtime = new Date()
      const chosenOne = this.selectdPlayer
      const posx = this.play.posx
      const posy = this.play.posy
      const playtype = this.play.playtype
      const imageposx = this.play.imageposx
      const imageposy = this.play.imageposy
      this.InstantPlays.push({
        player_id: chosenOne.id,
        name: chosenOne.name,
        jerseyNumber: chosenOne.jerseyNumber,
        team: chosenOne.team,
        playtype,
        madeShot: this.madeShot,
        posx,
        posy,
        imageposx,
        imageposy,
        createdtime
      })
    },
    FreeThrowMade: function () {
      this.play.madeShot = true
      this.play.playtype = '1pt_in'
      const createdtime = new Date()
      const chosenOne = this.selectdPlayer
      if (this.play.playtype === '1pt_in' && chosenOne.team === 'home' && this.play.madeShot === true) {
        this.score.home_team_score += 1
      } else if (this.play.playtype === '1pt_in' && chosenOne.team === 'away' && this.madeShot === true) {
        this.score.home_team_score += 1
      }
      this.InstantPlays.push({
        player_id: chosenOne.id,
        name: chosenOne.name,
        jerseyNumber: chosenOne.jerseyNumber,
        team: chosenOne.team,
        playtype: this.play.playtype,
        madeShot: this.madeShot,
        posx: '',
        posy: '',
        createdtime
      })
    },
    FreeThrowMiss: function () {
      this.play.madeShot = false
      this.play.playtype = '1pt_miss'
      const createdtime = new Date()
      const chosenOne = this.selectdPlayer
      this.InstantPlays.push({
        player_id: chosenOne.id,
        name: chosenOne.name,
        jerseyNumber: chosenOne.jerseyNumber,
        team: chosenOne.team,
        playtype: this.play.playtype,
        madeShot: this.madeShot,
        posx: '',
        posy: '',
        createdtime
      })
    }
  },
  watch: {
    InstantPlays: {
      handler (InstantPlays) {
        const STORAGE_KEY = 'InstantPlays'
        Store.save(STORAGE_KEY, InstantPlays)
      },
      deep: true
    }
  }
}
</script>

<style>
.basketball_court {
  border: 0px;
  padding: 0;
}
.playerlist {
  display: flex;
  flex-direction: column;
  height: 100%;
  border:0px;
  align-content: center;
}
.playerlist .player {
  border: none;
  font-size: 2.0rem;
  border-radius: 4px;
  margin-bottom: 1.3rem;
  box-shadow: 2px 2px 3px rgba(0,0,0,.1);
  font-weight: 500;
  font-family: Questrial,sans-serif;
}
.playerlist .player:focus {
  color: rgb(82, 87, 96);
}
.madeShotTag {
  width: 11px;
  height: 11px;
  position:absolute;
  margin-left: -5px;
  margin-top: -5px;
  display: block;
  background-color: red;
  -moz-border-radius: 30px;
  border-radius: 30px;
}
.missShotTag {
  width: 11px;
  height: 11px;
  position:absolute;
  margin-left: -5px;
  margin-top: -5px;
  display: block;
  background-color: green;
  -moz-border-radius: 30px;
  border-radius: 30px;
}
.svg_basketball_court {
  position: relative;
}
</style>
