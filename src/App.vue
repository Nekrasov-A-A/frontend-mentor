<template>
  <div id="app">
    <div class="menu">
      <nav v-if="isOpen">
        <img src="./assets/first-try5.svg" />
        <router-link to="/" class="menu__link">
          <button :class="{ active: $route.path === '/' }">
            Newbie
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </router-link>
        <router-link to="/junior" class="menu__link">
          <button
            :class="{
              active: $route.path.includes('/junior'),
            }"
          >
            Junior
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </router-link>
        <font-awesome-icon
          icon="cog"
          class="menu__icon"
          :class="{ active: isOpenSettings }"
          @click="isOpenSettings = isOpenSettings ? false : true"
        />
        <div class="menu__tools" v-if="isOpenSettings">
          <label>
            <input
              type="radio"
              v-model="valueOfTarget"
              value="_self"
              @change="chooseTargetValue(valueOfTarget)"
            />
            <p>_self</p>
          </label>
          <label>
            <input
              type="radio"
              v-model="valueOfTarget"
              value="_blank"
              @change="chooseTargetValue(valueOfTarget)"
            />
            <p>_blank</p>
          </label>
        </div>
      </nav>
      <div class="menu__icon__wrapper" @click="isOpen = isOpen ? false : true">
        <font-awesome-icon icon="bars" class="menu__icon" />
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import "normalize.css";
import { mapActions } from "vuex";
export default {
  data: () => ({
    isOpen: true,
    isOpenSettings: false,
    valueOfTarget: "_self",
  }),
  methods: {
    ...mapActions(["chooseTargetValue"]),
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap')

#app
  position: relative
.menu
  position: fixed
  background-color: transparent
  top: 0
  left: 0
  padding: 10px
  display: flex
  align-items: center
  z-index: 99
  @media screen and (max-width: $mobile)
    padding: 10px 10px 0
    width: 100%
  > nav
    height: 40px
    display: flex
    align-items: center
    justify-content: space-between
    border-radius: 0 50px 50px 0
    position: relative
    padding: 0 20px
    > img
      position: absolute
      min-height: 40px
      height: 42px
      width: 100%
      left: 0
      top: -1px
      z-index: -1
      @media screen and (max-width: $mobile)
        display: none
    @media screen and (max-width: $mobile)
      width: 100%
      border-radius: 8px
      margin-left: 0
      flex-direction: column
      height: 100%
      box-shadow: 0 0 8px rgba(0,0,0,.1)
      justify-content: center
      background-color: rgba( 255, 255, 255, 0.9 )
    .menu__tools
      display: flex
      align-items: center
      height: 40px
      > label
        margin-left: 10px
        cursor: pointer
        @media screen and (max-width: $mobile)
          margin-left: 0
          margin-right: 10px
        > p
          color: hsl(60,12%,58%)
          opacity: .5
        > input
          display: none
          &:checked + p
            opacity: 1
    .menu__icon
      margin-left: 10px
      width: 20px
      height: 20px
      opacity: .5
      color: hsl(60,12%,58%)
      cursor: pointer
      @media screen and (max-width: $mobile)
        margin-left: 0
      &.active
        opacity: 1
      &:hover
        animation: infiniteRotate 1s linear infinite
        opacity: 1
        @keyframes infiniteRotate
          0%
            transform: rotate(0deg)
          100%
            transform: rotate(360deg)
    .menu__link
      > button
        background-color: transparent
        text-transform: uppercase
        padding: 0 20px
        position: relative
        display: flex
        align-items: center
        height: 38px
        overflow: hidden
        border-radius: 4px
        opacity: 0.3
        font-family: 'Open Sans'
        letter-spacing: .5px
        &.active
          opacity: 1
        &:active
          transform: scale(0.98)
        &:hover
          opacity: 1
          > span
            &:nth-child(1)
              animation: move1 2s ease forwards
              animation-delay: .1s
              @keyframes move1
                0%
                  left: 0
                  opacity: .5
                25%
                  left: 100%
                  opacity: .5
                26%, 35%
                  opacity: 0
                  left: -100%
                50%, 70%
                  left: 0
                  opacity: 0
                100%
                  opacity: 1
                  box-shadow:  0 0 2px
            &:nth-child(2)
              animation: move2 2s ease forwards
              animation-delay: .8s
              @keyframes move2
                0%
                  right: 0
                  opacity: .5
                25%
                  right: 100%
                  opacity: .5
                26%, 35%
                  opacity: 0
                  right: -100%
                45%
                  right: 0
                50%, 100%
                  opacity: 1
                  box-shadow:  0 0 2px
            &:nth-child(3)
              animation: move3 2s ease forwards
              @keyframes move3
                0%
                  top: 0
                  opacity: .5
                25%
                  top: -100%
                  opacity: .5
                26%, 50%
                  top: 100%
                  opacity: 0
                80%, 100%
                  top: 0
                  opacity: 1
                  box-shadow: 0 0 2px
            &:nth-child(4)
              animation: move4 2s ease forwards
              animation-delay: .6s
              @keyframes move4
                0%
                  bottom: 100%
                  opacity: .5
                25%
                  bottom: -100%
                  opacity: .5
                70%, 100%
                  bottom: 0
                  opacity: 1
                  box-shadow: 0 0 2px
        > span
          position: absolute
          display: block
          opacity: 0
          &:nth-child(1)
            top: 0
            left: 0
            width: 40%
            height: 2px
          &:nth-child(2)
            bottom: 0
            right: 0
            width: 40%
            height: 2px
          &:nth-child(3)
            top: 0
            left: 0
            width: 2px
            height: 40%
          &:nth-child(4)
            bottom: 0
            right: 0
            width: 2px
            height: 40%
      &:nth-child(2)
        > button
          color: hsl(181,100%,58%)
          > span
            background-color: hsl(181,100%,58%)
      &:nth-child(3)
        > button
          color: hsl(117,100%,60%)
          > span
            background-color: hsl(117,100%,60%)
    > *
      text-decoration: none
      &:active, &:hover
        text-decoration: none
  .menu__icon__wrapper
    order: -1
    height: 40px
    width: 40px
    border-radius: 50%
    border: 1px solid hsl(178,100%,61%)
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    opacity: .7
    transition: all .3s
    z-index: 98
    background: hsla(60,23%,91%,.4)

    @media screen and (max-width: $mobile)
      position: absolute
      top: 10px
      left: 10px

    &:hover
      box-shadow: 0px 0px 6px 1px hsl(178,100%,61%)
      opacity: 1
    .menu__icon
      color: hsl(178,82%,61%)
      width: 20px
      height: 20px
      box-shadow: 0 0 5px hsla(178,82%,61%,.1)
</style>
