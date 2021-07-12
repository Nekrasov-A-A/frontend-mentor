<template>
  <div class="grid__cards">
    <router-link
      v-for="(card, index) in getJuniorCards"
      :key="index"
      :to="`/junior/${card.projectName}`"
      class="link"
    >
      <div class="card">
        <div
          class="card__image"
          :style="{
            backgroundImage: 'url(' + card.imgURL + ')',
          }"
        ></div>
        <div class="card__info">
          <h1>{{ card.number }}</h1>
          <p>{{ projectNameView(card.projectName) }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getJuniorCards"]),
  },
  methods: {
    projectNameView: function(projectName) {
      return projectName
        .split("-")
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(" ");
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap')

*
  font-family: 'Roboto'

.grid__cards
  display: grid
  grid-template: auto / repeat(4, 1fr)
  grid-gap: 40px
  padding: 40px 5%
  background-color: #e6e6fa
  @media screen and (max-width: $ipad-pro)
    grid-template: auto / repeat(3, 1fr)
  @media screen and (max-width: $ipad)
    grid-template: auto / repeat(2, 1fr)
  @media screen and (max-width: $mobile)
    grid-template: auto / repeat(1, 1fr)
  .link
    text-decoration: none
    &:active, &:hover
      text-decoration: none
    .card
      border-radius: 16px
      overflow: hidden
      box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
      background-color: #f8f8ff
      .card__image
          background-position: center center
          background-size: 100% 100%
          overflow: hidden
          width: 100%
          height: 200px
          transition: all .6s ease
          @media screen and (max-width: $mobile)
            height: 260px
          @media screen and (max-width: 320px)
            height: 220px
          &:hover
            background-size: 120% 120%
      .card__info
        display: flex
        padding: 20px
        justify-content: space-between
        align-items: center
        height: 100px
        > h1
          background-color: #ee6363
          border-radius: 50%
          color: #fafae6
          display: flex
          justify-content: center
          align-items: center
          width: 40px
          height: 40px
          font-size: 1.5em
          font-family: 'Poppins'
        > p
          width: calc(85% - 15px)
          color: #ee6363
          font-size: 1em
          line-height: 22px
          opacity: .87
</style>
