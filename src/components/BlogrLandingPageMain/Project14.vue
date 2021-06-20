<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__tools">
        <img src="./images/logo.svg" alt="logo" />
        <font-awesome-icon
          icon="bars"
          class="bars-icon"
          @click="isShow = isShow ? false : true"
          v-if="!isShow"
        />
        <font-awesome-icon
          icon="times"
          class="bars-icon"
          v-else
          @click="isShow = isShow ? false : true"
        />
      </div>
      <nav class="nav" :class="{ 'show-nav': isShow }">
        <div class="nav__wrap">
          <ul class="menu">
            <li class="item">
              <div class="control" @click="isShowOptionsProductToggle">
                Product
                <font-awesome-icon
                  icon="angle-down"
                  class="icon"
                  :class="{ rotate: isShowOptionsProduct }"
                />
              </div>
              <div
                class="options"
                :class="{ 'show-options': isShowOptionsProduct }"
              >
                <ul>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
            </li>
            <li class="item">
              <div class="control" @click="isShowOptionsCompanyToggle">
                Company
                <font-awesome-icon
                  icon="angle-down"
                  class="icon"
                  :class="{ rotate: isShowOptionsCompany }"
                />
              </div>
              <div
                class="options"
                :class="{ 'show-options': isShowOptionsCompany }"
              >
                <ul>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
            </li>
            <li class="item">
              <div class="control" @click="isShowOptionsConnectToggle">
                Connect
                <font-awesome-icon
                  icon="angle-down"
                  class="icon"
                  :class="{ rotate: isShowOptionsConnect }"
                />
              </div>
              <div
                class="options"
                :class="{ 'show-options': isShowOptionsConnect }"
              >
                <ul>
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="auth__wrap">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
      <div class="intro">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div class="intro__btn">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data: () => ({
    isShowOptionsConnect: false,
    isShowOptionsProduct: false,
    isShowOptionsCompany: false,
    isShow: false,
  }),
  methods: {
    isShowOptionsProductToggle: function() {
      this.isShowOptionsConnect = false;
      this.isShowOptionsCompany = false;
      this.isShowOptionsProduct = this.isShowOptionsProduct ? false : true;
    },
    isShowOptionsConnectToggle: function() {
      this.isShowOptionsConnect = this.isShowOptionsConnect ? false : true;
      this.isShowOptionsCompany = false;
      this.isShowOptionsProduct = false;
    },
    isShowOptionsCompanyToggle: function() {
      this.isShowOptionsConnect = false;
      this.isShowOptionsCompany = this.isShowOptionsCompany ? false : true;
      this.isShowOptionsProduct = false;
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,600;1,300;1,600&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap')

$ipad: 900px
$mobile: 415px


*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Overpass'

.wrapper
    display: flex
    & .header
        min-height: 70vh
        background: url('./images/bg-pattern-intro.svg') 30% 50% no-repeat, linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))
        display: flex
        align-items: center
        justify-content: center
        flex-wrap: wrap
        width: 100%
        padding: 5% 10%
        border-bottom-left-radius: 80px
        position: relative
        @media screen and (max-width: $ipad)
            padding: 10% 5%
        @media screen and (max-width: $mobile)
            min-height: 100vh
        & .header__tools
            display: flex
            align-items: center
            width: 10%
            @media screen and (max-width: $ipad)
                width: 100%
                display: flex
                justify-content: space-between
            & img
                width: 80px
                height: 30px
                margin-right: 40px
                cursor: pointer
            & .bars-icon
                display: none
                @media screen and (max-width: $ipad)
                    display: flex
                    width: 40px
                    height: 40px
                    color: hsl(0, 0%, 100%)
                    cursor: pointer
        & .nav
            align-self: flex-start
            display: flex
            width: 90%
            justify-content: space-between
            position: relative
            @media screen and (max-width: $ipad)
                display: none
                position: absolute
                flex-direction: column
                top: 20%
                left: 0
                width: 90%
                background-color: hsl(0, 0%, 100%)
                margin: 0 5%
                padding: 5% 5%
                border-radius: 8px
            &.show-nav
                display: flex
            & .nav__wrap
                display: flex
                align-items: center
                position: relative
                @media screen and (max-width: $ipad)
                    width: 100%
                & .menu
                    text-decoration: none
                    list-style: none
                    display: flex
                    align-items: center
                    justify-content: space-between
                    @media screen and (max-width: $ipad)
                        flex-direction: column
                        justify-content: center
                        width: 100%
                    & .item:nth-child(1)
                        @media screen and (max-width: $ipad)
                            margin-top: 0
                    & .item
                        color: hsla(0, 0%, 100%, .75)
                        position: relative
                        user-select: none
                        margin-left: 30px
                        @media screen and (max-width: $ipad)
                            color: hsla(208, 49%, 24%,.7)
                            font-weight: 600
                            margin-left: 0
                            margin-top: 20px
                            width: 100%
                            text-align: center
                        &:hover
                            color: hsl(0, 0%, 100%)
                            @media screen and (max-width: $ipad)
                                color: hsl(208, 49%, 24%)
                            &::after
                                content: ''
                                position: absolute
                                top: 18px
                                left: 0
                                width: 80%
                                height: 2px
                                background-color: hsl(0, 0%, 100%)
                                @media screen and (max-width: $ipad)
                                    width: 0
                                    height: 0
                        & .control
                            cursor: pointer
                            & .icon
                                margin-left: 5px
                                transition: all .3s
                                &.rotate
                                    transform: rotate(180deg)
                                @media screen and (max-width: $ipad)
                                    color: hsl(356, 100%, 66%)
                        & .options
                            display: none
                            position: absolute
                            top: 30px
                            left: -30%
                            border-radius: 8px
                            box-shadow: 1px 1px 4px 2px rgba( 0,0,0,.1)
                            width: 200%
                            background-color: hsl(0, 0%, 100%)
                            @media screen and (max-width: $ipad)
                                position: static
                                width: 100%
                                background-color: hsla(240, 2%, 79%,.7)
                                margin-top: 20px
                            & ul
                                padding: 30px
                                text-decoration: none
                                list-style: none
                                display: flex
                                flex-direction: column
                                align-items: flex-start
                                @media screen and (max-width: $ipad)
                                    width: 100%
                                & li
                                    margin-top: 30px
                                    color: hsla(240, 10%, 16%, .6)
                                    cursor: pointer
                                    @media screen and (max-width: $ipad)
                                        width: 100%
                                        text-align: center
                                        color: hsla(240, 10%, 16%,.7)
                                        margin-top: 20px
                                    &:hover
                                        color: hsl(240, 10%, 16%)
                                & li:nth-child(1)
                                    margin-top: 0
                            &.show-options
                                display: flex
                                align-items: center
            & .auth__wrap
                display: flex
                align-items: center
                position: relative
                @media screen and (max-width: $ipad)
                    flex-direction: column
                    margin-top: 30px
                    padding: 30px 0 0
                &::before
                    content: ''
                    @media screen and (max-width: $ipad)
                        position: absolute
                        width: 100%
                        height: 1px
                        top: 0
                        left: 0
                        background-color: hsla(240, 10%, 16%,.3)
                & button
                    border: 0
                    cursor: pointer
                    font-weight: 600
                    transition: all .3s
                & button:nth-child(1)
                    background-color: transparent
                    color: hsla(0, 0%, 100%,.7)
                    margin-right: 30px
                    position: relative
                    @media screen and (max-width: $ipad)
                        color: hsl(240, 10%, 16%)
                        margin-right: 0
                        margin-bottom: 30px
                    &:hover
                        color: hsl(0, 0%, 100%)
                        &::after
                            content: ''
                            width: 100%
                            height: 2px
                            background-color: hsl(0, 0%, 100%)
                            position: absolute
                            bottom: 0
                            left: 0
                & button:nth-child(2)
                    padding: 15px 40px
                    background-color: hsl(0, 0%, 100%)
                    border-radius: 50px
                    color: hsl(356, 100%, 66%)
                    @media screen and (max-width: $ipad)
                        color: hsl(0, 0%, 100%)
                        background-image: linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))
                    &:active
                        transform: scale(0.98)
                    &:hover
                        color: hsla(0, 0%, 100%,.7)
                        background-color: hsl(355, 100%, 74%)
        & .intro
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            text-align: center
            height: 100%
            & h1
                font-size: 64px
                color: hsl(0, 0%, 100%)
                margin-bottom: 20px
                @media screen and (max-width: $mobile)
                    font-size: 3.3em
            & p
                color: hsla(0, 0%, 100%,.7)
                margin-bottom: 40px
            & .intro__btn
                display: flex
                & button
                    border: 2px solid transparent
                    padding: 10px 20px 8px
                    border-radius: 50px
                    font-weight: 600
                    transition: all 0.3s
                & button:nth-child(1)
                    background-color: hsl(0, 0%, 100%)
                    color: hsl(356, 100%, 66%)
                    &:hover
                        color: hsla(0, 0%, 100%,.7)
                        background-color: hsl(355, 100%, 74%)
                & button:nth-child(2)
                    padding: 10px 30px 8px
                    margin-left: 20px
                    color: hsl(0, 0%, 100%)
                    border: 2px solid hsl(0, 0%, 100%)
                    background-color: transparent
                    &:hover
                        background-color: hsl(0, 0%, 100%)
                        color: hsl(356, 100%, 66%)
</style>
