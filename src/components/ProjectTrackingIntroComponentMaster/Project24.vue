<template>
  <div class="wrapper">
    <nav>
      <img src="./images/logo.svg" alt="logo" />
      <div
        class="icon__wrapper"
        @click="isShowMenu = isShowMenu ? false : true"
      >
        <font-awesome-icon icon="bars" v-if="!isShowMenu" />
        <font-awesome-icon icon="times" v-else />
      </div>
      <ul :class="{ show: isShowMenu }">
        <li>Product</li>
        <li>Features</li>
        <li>Pricing</li>
        <li><div></div></li>
        <button>Login</button>
      </ul>
    </nav>
    <div class="about">
      <div class="about__info">
        <h3><span>New </span>Monograph Dashboard</h3>
        <h1>Powerful insights into your team</h1>
        <p>
          Project planning and time tracking <br />
          for agile teams
        </p>
        <h3><button>Schedule a demo</button> to see a preview</h3>
      </div>
      <div class="about__image">
        <div class="image__bg">150px</div>
        <img src="./images/illustration-devices.svg" alt="devices" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isShowMenu: false,
  }),
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&display=swap')

*
    font-family: 'Barlow Condensed'

.wrapper
    display: flex
    flex-wrap: wrap


    overflow: hidden
    > nav
        display: flex
        justify-content: space-between
        align-items: center
        padding: 60px 10%
        height: 100%
        width: 100%
        margin-bottom: 70px
        @media screen and (max-width: $ipad)
            margin-bottom: 0
        @media screen and (max-width: $mobile)
            padding: 30px 5%
            position: relative
        .icon__wrapper
            display: none
            cursor: pointer
            > *
                width: 25px
                height: 25px
            @media screen and (max-width: $mobile)
                display: flex
        > img
            width: 30px
            height: 30px
            @media screen and (max-width: $mobile)
                width: 25px
                height: 25px
        > ul
            display: flex
            list-style: none
            @media screen and (max-width: $mobile)
                flex-direction: column
                padding: 25px
                box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                width: 90%
                align-items: center
                position: absolute
                display: none
                top: 85px
                left: 0
                margin: 0 5%
                z-index: 5
                background-color: #fff
                border-radius: 8px
            &.show
                display: flex

            > li
                text-transform: uppercase
                font-weight: 700
                margin-right: 40px
                letter-spacing: 1px
                cursor: pointer
                @media screen and (max-width: $mobile)
                    margin-right: 0
                    margin-bottom: 30px
                &:hover
                    text-decoration: underline
                &:nth-child(4)
                    cursor: default
                    display: flex
                    align-items: center
                    width: 100%
                    > div
                        width: 8px
                        height: 8px
                        background-color: hsla(231, 7%, 65%,.6)
                        border-radius: 50%
                        @media screen and (max-width: $mobile)
                            width: 100%
                            height: 1px
                            border-radius: 0
                    &:hover
                        text-decoration: none
            > button
                border: 0
                background-color: transparent
                font-weight: 700
                text-transform: uppercase
                cursor: pointer
                color: hsl(231, 7%, 65%)
                &:hover
                    text-decoration: underline
                &:active, &:focus
                    outline: none
    .about
        display: flex
        width: 100%
        padding: 0 10%
        @media screen and (max-width: $ipad)
            flex-direction: column
            padding: 0
        .about__info
            width: 50%
            padding: 35px 0
            @media screen and (max-width: $ipad)
                width: 100%
                padding: 0 10%
            @media screen and (max-width: $mobile)
                padding: 0 5%
            > h3
                color: hsl(231, 7%, 65%)
                font-weight: 400
                letter-spacing: 5px
                text-transform: uppercase
                font-size: 18px
                display: flex
                align-items: center
                margin-bottom: 25px
                @media screen and (max-width: $ipad-pro)
                    flex-direction: column
                    align-items: flex-start
                @media screen and (max-width: $ipad)
                    flex-direction: row
                    align-items: center
                &:nth-child(4)
                    @media screen and (max-width: $mobile)
                        letter-spacing: 2px
                > span
                    font-weight: 700
                    color: #fff
                    padding: 5px 10px
                    background-color: hsl(230, 29%, 20%)
                    letter-spacing: 1px
                    border-radius: 50px
                    display: inline-flex
                    justify-content: center
                    width: 60px
                    margin-right: 15px
                    @media screen and (max-width: $ipad-pro)
                        margin-bottom: 10px
                    @media screen and (max-width: $ipad)
                        margin-bottom: 0
                > button
                    margin-right: 20px
                    padding: 20px 30px
                    background-color: hsl(0, 100%, 68%)
                    border: 0
                    border-radius: 8px
                    text-transform: uppercase
                    color: #fafafa
                    font-weight: 700
                    cursor: pointer
                    &:active, &:focus
                        outline: none
                    &:hover
                        opacity: .7
                    @media screen and (max-width: $ipad-pro)
                        margin-right: 0
                        margin-bottom: 10px
                    @media screen and (max-width: $ipad)
                        margin-right: 15px
                        margin-bottom: 0

            > h1
                color: hsl(230, 29%, 20%)
                font-size: 4.5em
                text-transform: uppercase
                font-weight: 700
                line-height: 70px
                margin-bottom: 25px
                @media screen and (max-width: $mobile)
                    font-size: 3em
                    line-height: 50px
            > p
                color: hsl(231, 7%, 65%)
                font-family: 'Barlow'
                font-size: 18px
                line-height: 24px
                font-weight: 400
                margin-bottom: 60px

        .about__image
            width: 50%
            height: 100%
            position: relative
            @media screen and (max-width: $ipad)
                order: -1
                width: 100%
                margin-bottom: 80px
            img
                @media screen and (max-width: $ipad)
                    width: 110%
                @media screen and (max-width: $mobile)
                    width: 138%
            .image__bg
                position: absolute
                top: -300%
                bottom: 55%
                left: 0
                right: -100%
                background-color: hsl(207, 33%, 95%)
                border-bottom-left-radius: 80px
                z-index: -1
                @media screen and (max-width: $ipad)
                    left: 35%
                    bottom: -60px
                @media screen and (max-width: $mobile)
                    bottom: -60px
                    left: 50%
</style>
