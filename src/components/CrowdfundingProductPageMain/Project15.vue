<template>
  <div class="wrapper">
    <header class="header">
      <nav class="nav">
        <div class="image">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <font-awesome-icon
          icon="bars"
          :class="{ 'show-icon': isMobile }"
          class="header__icon"
          v-if="!isOpen"
          @click="isOpen = isOpen ? false : true"
        />
        <font-awesome-icon
          icon="times"
          v-else
          @click="isOpen = isOpen ? false : true"
          :class="{ 'show-icon': isMobile }"
          class="header__icon"
        />
        <ul :class="{ 'show-ul': isOpen }">
          <li>About</li>
          <li>Discover</li>
          <li>Get started</li>
        </ul>
      </nav>
    </header>
    <section class="wrapper__item">
      <section class="intro">
        <div class="image__wrap">
          <img src="./images/logo-mastercraft.svg" alt="logo-mastercraft" />
        </div>
        <div class="intro__item">
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div class="intro_tools">
          <button>Back this project</button>
          <button
            class="btn"
            :class="{ active: isActiveButton }"
            @click="toggleButton"
          >
            <div class="icon__wrapper">
              <font-awesome-icon icon="bookmark" class="icon" />
            </div>
            {{ buttonValue }}
          </button>
        </div>
      </section>
      <section class="target">
        <div class="target__info">
          <ul>
            <li>
              <h1>$89,914</h1>
              <p>of $100,000 backed</p>
            </li>
            <li>
              <h1>5,007</h1>
              <p>total backers</p>
            </li>
            <li>
              <h1>56</h1>
              <p>days left</p>
            </li>
          </ul>
        </div>
        <div class="band"></div>
      </section>
      <section class="about"></section>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
    isActiveButton: false,
    buttonValue: "Bookmark",
  }),
  computed: {
    isMobile: function() {
      return this.windowWidth > 415 ? false : true;
    },
  },
  methods: {
    toggleButton: function() {
      this.buttonValue =
        this.buttonValue === "Bookmark" ? "Bookmarked" : "Bookmark";
      this.isActiveButton = this.isActiveButton ? false : true;
    },
  },
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap')

$ipad: 768px
$mobile: 415px
$ipad-pro: 1024px

*
    padding: 0
    margin: 0
    box-sizing: border-box
    font-family: 'Commissioner'
.wrapper
    display: flex
    flex-wrap: wrap
    & .header
        background: url('./images/image-hero-desktop.jpg') no-repeat
        background-size: cover
        min-height: 40vh
        width: 100%
        padding: 60px 10% 0
        @media screen and (max-width: $mobile)
            padding: 5% 5% 0
            background: url('./images/image-hero-mobile.jpg') no-repeat

        & .nav
            display: flex
            width: 100%
            justify-content: space-between
            align-items: center
            position: relative
            & .header__icon
                display: none
                color: hsl(0, 0%, 100%)
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                cursor: pointer
                width: 30px
                height: 30px
                @media screen and (max-width: $mobile)
                    display: flex
            & .image
                cursor: pointer
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                & img
            & ul
                display: flex
                list-style: none
                width: 30%
                justify-content: space-between
                &.show-ul
                    display: flex
                    flex-direction: column
                    position: absolute
                    top: 200%
                    left: 0
                    margin: 0
                    width: 100%
                    background-color: hsl(0, 0%, 100%)
                    border-radius: 8px
                    & li:nth-child(3)
                        &::after
                            content: ''
                            width: 0
                            height: 0
                        &:hover::after
                            content: ''
                            width: 0
                            height: 0
                    & li
                        color: hsla(0, 0%, 0%,.9)
                        width: 100%
                        padding: 20px
                        margin: 0
                        font-weight: 700
                        position: relative
                        &::after
                            content: ''
                            width: 100%
                            position: absolute
                            height: 1px
                            background-color: hsla(0, 0%, 0%,.3)
                            bottom: 0
                            left: 0
                        &:hover::after
                            content: ''
                            width: 100%
                            position: absolute
                            height: 1px
                            background-color: hsla(0, 0%, 0%,.3)
                            bottom: 0
                            left: 0
                @media screen and (max-width: $mobile)
                    display: none
                @media screen and (max-width: $ipad-pro)
                    width: 40%
                @media screen and (max-width: $ipad)
                    width: 55%
                & li
                    margin-left: 40px
                    color: hsl(0, 0%, 100%)
                    position: relative
                    font-weight: 500
                    &:hover
                        cursor: pointer
                    &:hover::after
                        content: ''
                        position: absolute
                        bottom: 0
                        left: 0
                        width: 100%
                        height: 1px
                        background-color: hsl(0, 0%, 100%)
    & .wrapper__item
        width: 100%
        display: flex
        flex-direction: column
        justify-content: center
        padding: 0 20%
        transform: translateY(-15vh)
        @media screen and (max-width: $mobile)
          padding: 0 5%
        & .intro
            display: flex
            width: 100%
            position: relative
            background-color: hsl(0, 0%, 100%)
            border-radius: 8px
            box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
            padding: 60px 10% 40px
            flex-wrap: wrap
            & .image__wrap
                position: absolute
                width: 100%
                top: -8%
                left: 0
                display: flex
                justify-content: center
                & img
            & .intro__item
                width: 100%
                text-align: center
                margin-bottom: 40px
                & h1
                    color: hsl(0, 0%, 0%)
                    margin-bottom: 20px
                    @media screen and (max-width: $mobile)
                      font-size: 1.7em
                & p
                    color: hsl(0, 0%, 48%)
                    font-weight: 500
                    font-size: 18px
            & .intro_tools
                width: 100%
                display: flex
                justify-content: space-between
                align-items: center
                & button:nth-child(1)
                    padding: 18px 40px
                    background-color: hsl(176, 50%, 47%)
                    border-radius: 50px
                    border: 2px solid transparent
                    color: hsl(0, 0%, 100%)
                    font-weight: 500
                    font-size: 18px
                    transition: all .3s
                    cursor: pointer
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                    &:active
                        outline: none
                        transform: scale(0.98)
                    &:hover
                        color: hsl(176, 50%, 47%)
                        border: 2px solid hsl(176, 50%, 47%)
                        background-color: transparent
                & button.btn
                    padding: 20px 40px 20px 90px
                    border-radius: 50px
                    font-size: 18px
                    font-weight: 500
                    border: 0
                    position: relative
                    background-color: hsla(0, 0%, 48%,.2)
                    color: hsl(0, 0%, 48%)
                    cursor: pointer
                    user-select: none
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                    @media screen and (max-width: $mobile)
                      padding: 20px 0
                      width: 60px
                      overflow: hidden
                    &:active
                        outline: none
                    &.active
                        color: hsl(176, 50%, 47%)
                        & .icon__wrapper
                            background-color: hsl(176, 50%, 47%)
                            & .icon
                                color: hsl(0,0%,100%)
                    & .icon__wrapper
                        position: absolute
                        top: 0
                        left: 0
                        height: 100%
                        background-color: #272727
                        padding: 0 25px
                        border-radius: 50%
                        display: flex
                        align-items: center
                        justify-content: center
                        & .icon
                            color: hsla(0, 0%, 48%,.7)
        & .target
          border-radius: 8px
          box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
          margin-top: 20px
          padding: 60px
          @media screen and (max-width: $mobile)
            padding: 40px
          & .target__info
            margin-bottom: 40px
            & ul
              list-style: none
              display: flex
              @media screen and (max-width: $mobile)
                flex-direction: column
                align-items: center
                text-align: center
              & li:nth-child(3)
                @media screen and (max-width: $mobile)
                  margin-bottom: 0
              & li:nth-child(2)
                position: relative
                &::after
                  content: ''
                  width: 1px
                  height: 100%
                  position: absolute
                  top: 0
                  right: 25%
                  background-color: hsla(0, 0%, 0%,.3)
                  @media screen and (max-width: $mobile)
                    width: 25%
                    height: 1px
                    top: -15px
                    right: 37%
                &::before
                  content: ''
                  width: 1px
                  height: 100%
                  position: absolute
                  top: 0
                  left: -25%
                  background-color: hsla(0, 0%, 0%,.3)
                  @media screen and (max-width: $mobile)
                    width: 25%
                    height: 1px
                    top: calc(100% + 25px)
                    left: 37%
              & li
                width: 33%
                @media screen and (max-width: $mobile)
                  width: 100%
                  margin-bottom: 40px
                & h1
                  color: hsl(0, 0%, 0%)
                  margin-bottom: 5px
                & p
                  color: hsla(0, 0%, 0%,.6)
          & .band
            width: 100%
            height: 15px
            border-radius: 50px
            background-color: hsla(0, 0%, 48%,.2)
            position: relative
            &::after
              content: ''
              height: 100%
              position: absolute
              top: 0
              left: 0
              width: 90%
              background-color: hsl(176, 50%, 47%)
              border-radius: 50px
</style>
