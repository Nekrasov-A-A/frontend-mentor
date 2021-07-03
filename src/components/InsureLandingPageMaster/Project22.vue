<template>
  <div class="wrapper">
    <nav class="nav">
      <img src="./images/logo.svg" alt="logo" />
      <font-awesome-icon
        icon="bars"
        class="nav__icon"
        v-if="!isShowMenu"
        @click="isShowMenu = isShowMenu ? false : true"
      />
      <font-awesome-icon
        icon="times"
        class="nav__icon"
        v-if="isShowMenu"
        @click="isShowMenu = isShowMenu ? false : true"
      />
      <ul :class="{ 'show-menu': isShowMenu }">
        <li>How we work</li>
        <li>Blog</li>
        <li>Account</li>
        <li>
          <button>View plans</button>
        </li>
      </ul>
    </nav>
    <section class="intro">
      <div class="intro__bg"></div>
      <div class="intro__card">
        <div class="intro__card__bg-right"></div>
        <div class="card__info">
          <div class="card__info__bg"></div>
          <hr />
          <h1>
            Humanizing <br />
            your insurance.
          </h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button>View plans</button>
        </div>
        <div class="card__image">
          <img
            :src="
              isMobile
                ? require('./images/image-intro-mobile.jpg')
                : require('./images/image-intro-desktop.jpg')
            "
            alt="family"
          />
        </div>
      </div>
      <hr />
    </section>
    <section class="about">
      <h1>We’re different</h1>
      <div class="about__grid">
        <div class="grid__card">
          <div class="icon_wrapper">
            <font-awesome-icon icon="bolt" />
          </div>
          <h3>Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div class="grid__card">
          <div class="icon_wrapper">
            <font-awesome-layers class="fa-lg">
              <font-awesome-icon icon="circle" />
              <font-awesome-icon
                icon="dollar-sign"
                transform="shrink-6 right-0.7"
                :style="{
                  color: 'hsl(216, 30%, 68%)',
                }"
              />
            </font-awesome-layers>
          </div>
          <h3>Affordable Prices</h3>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div class="grid__card">
          <div class="icon_wrapper">
            <font-awesome-icon icon="user" />
          </div>
          <h3>People First</h3>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
      <div class="about__item">
        <h1>
          Find out more <br />
          about how we work
        </h1>
        <button>how we work</button>
      </div>
    </section>
    <footer class="footer">
      <nav>
        <img src="./images/logo.svg" alt="logo" />
        <ul>
          <li>
            <font-awesome-icon :icon="['fab', 'facebook-square']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'pinterest']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </li>
        </ul>
      </nav>
      <hr />
      <ul>
        <li>
          Our company
          <ul>
            <li>How we work</li>
            <li>Why Insure?</li>
            <li>View plans</li>
            <li>Reviews</li>
          </ul>
        </li>
        <li>
          Help me
          <ul>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </ul>
        </li>
        <li>
          Contact
          <ul>
            <li>Sales</li>
            <li>Support</li>
            <li>Live chat</li>
          </ul>
        </li>
        <li>
          Others
          <ul>
            <li>Careers</li>
            <li>Press</li>
            <li>Licenses</li>
          </ul>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    isShowMenu: false,
  }),
  computed: {
    isMobile: function() {
      return this.windowWidth > 426 ? false : true;
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Karla:ital,wght@0,700;1,400&display=swap')

$mobile: 426px
$ipad: 768px
$ipad-pro: 1024px

*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Karla'
    user-select: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

.wrapper
    .nav
        display: flex
        justify-content: space-between
        align-items: center
        padding: 20px 10%
        position: relative
        @media screen and (max-width: $ipad-pro)
            padding: 20px 5%
        @media screen and (max-width: $mobile)
            padding: 20px 5%
        > ul
            list-style: none
            display: flex
            align-items: center
            justify-content: space-between
            min-width: 500px
            @media screen and (max-width: $mobile)
                display: none
                position: absolute
                top: 72px
                left: 0
                height: calc(100vh - 72px)
                width: 100%
                min-width: 0
                flex-direction: column
                justify-content: flex-start
                padding: 40px 5%
                background: url('./images/bg-pattern-mobile-nav.svg') center bottom no-repeat, hsl(270, 9%, 17%)
                background-size: contain
                font-size: 1.2em
                z-index: 5
            &.show-menu
                display: flex
            > li
                text-transform: uppercase
                color: hsl(216, 30%, 68%)
                font-weight: 700
                letter-spacing: 1px
                cursor: pointer
                &:hover
                    color: hsl(256, 26%, 20%)
                @media screen and (max-width: $mobile)
                    width: 100%
                    margin-bottom: 40px
                    display: flex
                    justify-content: center
                    color: hsl(0, 0%, 98%)
                > button
                    text-transform: uppercase
                    border: 1px solid hsl(256, 26%, 20%)
                    padding: 10px 30px
                    letter-spacing: 1px
                    font-weight: 700
                    color: hsl(256, 26%, 20%)
                    background-color: transparent
                    cursor: pointer
                    &:hover
                        color: hsl(0, 0%, 98%)
                        background-color: hsl(256, 26%, 20%)
                    &:active, &:focus
                        outline: none
                    &:active
                        transform: scale(0.98)
                    @media screen and (max-width: $mobile)
                        width: 100%
                        padding: 20px
                        border-color: hsl(0, 0%, 98%)
                        color: hsl(0, 0%, 98%)
                        font-size: 1.1em
        .nav__icon
            display: none
            font-size: 2em
            width: 36px
            padding: 5px
            border: 1px solid hsl(256, 26%, 20%)
            cursor: pointer
            color: #222222
            @media screen and (max-width: $mobile)
                display: flex
    .intro
      width: 100%
      position: relative
      overflow: hidden
      display: flex
      flex-direction: column
      > hr
        width: 7.7%
        margin: 0 10% 28px
        border: 0
        height: 2px
        background-color: #b8a2b9
        color: #b8a2b9
        @media screen and (max-width: $ipad-pro)
          margin: 0 5% 28px
          width: 9.3%
        @media screen and (max-width: $ipad)
          margin: 0 30%
          width: 40%
          margin-top: 140px
          margin-bottom: 30px
          height: 1px
      .intro__bg
        position: absolute
        width: 100%
        background: url('./images/bg-pattern-intro-left-desktop.svg') left bottom no-repeat, url('./images/bg-pattern-intro-right-desktop.svg') right -86px no-repeat
        top: 0
        left: 0
        bottom: 0
        z-index: 3
        @media screen and (max-width: $ipad)
          background: url('./images/bg-pattern-intro-right-mobile.svg') right bottom no-repeat
      .intro__card
        display: flex
        width: 100%
        padding: 100px 10% 120px
        position: relative
        @media screen and (max-width: $ipad-pro)
          padding: 100px 5% 100px
        @media screen and (max-width: $ipad)
          padding: 0
          flex-direction: column

        .card__image
          width: 50%
          margin-left: 40px
          position: relative
          z-index: 2
          @media screen and (max-width: $ipad-pro)
            width: 50%
          @media screen and (max-width: $ipad)
            order: -1
            width: 100%
            margin-left: 0
          img
            height: 100%
            width: 100%

        .card__info
          height: 100%
          width: 50%
          position: relative
          @media screen and (max-width: $ipad-pro)
            width: 60%
          @media screen and (max-width: $ipad)
            padding: 100px 5%
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            width: 100%
            text-align: center
          .card__info__bg
            position: absolute
            top: -100px
            left: -25.9%
            right: -135%
            bottom: -120px
            background-color: hsl(256, 26%, 20%)
            z-index: -1
            @media screen and (max-width: $ipad-pro)
              bottom: -100px
            @media screen and (max-width: $ipad)
              top: -5px
              bottom: 0
              left: 0
              right: 0
              background: url('./images/bg-pattern-intro-left-mobile.svg') left top no-repeat, hsl(256, 26%, 20%)



          > hr
            width: 20%
            color: hsl(0, 0%, 98%)
            margin-bottom: 60px
            @media screen and (max-width: $ipad-pro)
              margin-bottom: 40px
            @media screen and (max-width: $ipad)
              display: none
          > h1
            color: hsl(0, 0%, 98%)
            font-size: 4em
            font-family: 'DM Serif Display'
            margin-bottom: 20px
            font-weight: 400
            @media screen and (max-width: $ipad)
              font-size: 3em
          > p
            color: hsla(0, 0%, 98%,.8)
            line-height: 24px
            margin-bottom: 30px
          > button
            border: 2px solid hsl(0, 0%, 98%)
            background-color: transparent
            text-transform: uppercase
            padding: 10px 30px
            cursor: pointer
            color: hsl(0, 0%, 98%)
            transition: all .3s
            position: relative
            z-index: 5
            &:active, &:focus
              outline: none
            &:active
              transform: scale(0.98)
            &:hover
              color: hsl(256, 26%, 20%)
              background-color: hsl(0, 0%, 98%)
    .about
      padding: 20px 10% 150px
      @media screen and (max-width: $ipad-pro)
        padding: 20px 5% 150px
      @media screen and (max-width: $ipad)
        text-align: center
      > h1
       margin-bottom: 100px
       font-family: 'DM Serif Display'
       font-weight: 400
       font-size: 4em
       @media screen and (max-width: $mobile)
        font-size: 3em
      .about__grid
        width: 100%
        display: grid
        grid-template: repeat(1, 1fr) / repeat(3, 1fr)
        grid-gap: 0 20px
        margin-bottom: 150px
        @media screen and (max-width: $ipad)
          grid-template: repeat(3, 1fr) / repeat(1, 1fr)
          grid-gap: 60px 0
        .grid__card
          @media screen and (max-width: $ipad)
            display: flex
            flex-direction: column
            align-items: center
          .icon_wrapper
            width: 60px
            height: 60px
            border-radius: 50%
            background-color: hsl(216, 30%, 68%)
            margin-bottom: 40px
            display: flex
            align-items: center
            justify-content: center
            > *
              color: hsl(0, 0%, 98%)
              width: 20px
              height: 20px
          > h3
            color: hsl(270, 9%, 17%)
            font-weight: 600
            font-family: 'DM Serif Display'
            font-size: 1.3em
            margin-bottom: 20px
          > p
            color: hsl(216, 30%, 68%)
            line-height: 24px
      .about__item
        padding: 60px 70px
        display: flex
        justify-content: space-between
        align-items: center
        background: url('./images/bg-pattern-how-we-work-desktop.svg') right center no-repeat, hsl(256, 26%, 20%)
        @media screen and (max-width: $ipad)
          padding: 60px 40px
          flex-direction: column
          background: url('./images/bg-pattern-how-we-work-mobile.svg') right center no-repeat, hsl(256, 26%, 20%)

        > h1
          color: hsl(0, 0%, 98%)
          font-family: 'DM Serif Display'
          font-weight: 400
          font-size: 3em
          line-height: 46px
          @media screen and (max-width: $ipad)
            margin-bottom: 30px
            font-size: 2.5em
        > button
          border: 2px solid hsl(0, 0%, 98%)
          text-transform: uppercase
          color: hsl(0, 0%, 98%)
          background-color: transparent
          padding: 10px 30px
          cursor: pointer
          &:active, &:focus
            outline: none
          &:active
            transform: scale(0.98)
          &:hover
            background-color: hsl(0, 0%, 98%)
            color: hsl(256, 26%, 20%)
    .footer
      padding: 60px 10% 45px
      background: url('./images/bg-pattern-footer-desktop.svg') left top no-repeat, hsl(0, 0%, 98%)
      @media screen and (max-width: $ipad-pro)
        padding: 60px 5% 45px
      @media screen and (max-width: $mobile)
        background: url('./images/bg-pattern-footer-mobile.svg') center top no-repeat, hsl(0, 0%, 98%)
        background-size: 100% 20%
        padding: 80px 5% 80px
      > nav
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 30px
        @media screen and (max-width: $mobile)
          flex-direction: column
          align-items: center
          justify-content: center
        > img
          @media screen and (max-width: $mobile)
            margin-bottom: 30px
        > ul
          list-style: none
          display: flex
          > li
            margin-left: 15px
            @media screen and (max-width: $mobile)
              margin-right: 15px
              margin-left: 0
            > *
              width: 25px
              height: 25px
              color: hsl(273, 4%, 51%)
              cursor: pointer
              &:hover
                color: hsl(270, 9%, 17%)
      > hr
        margin-bottom: 40px
      > ul
        display: flex
        width: 80%
        justify-content: space-between
        list-style: none
        @media screen and (max-width: $ipad)
          width: 100%
        @media screen and (max-width: $mobile)
          flex-direction: column
          align-items: center
          justify-content: center
          text-align: center

        > li
          color: hsl(273, 4%, 51%)
          text-transform: uppercase
          font-weight: 700
          @media screen and (max-width: $mobile)
            margin-bottom: 20px
          > ul
            list-style: none
            margin-top: 30px

            > li
              color: hsl(270, 9%, 17%)
              font-weight: 600
              margin-bottom: 15px
              cursor: pointer
              position: relative
              &:hover
                text-decoration: underline
              @media screen and (max-width: $mobile)
                margin-bottom: 10px
</style>
