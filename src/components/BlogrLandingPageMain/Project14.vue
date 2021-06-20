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
    <section class="about">
      <h1>Designed for the future</h1>
      <div class="info">
        <div class="item">
          <h1>Introducing an extensible editor</h1>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div class="item">
          <h1>Robust content management</h1>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </div>
      </div>
      <div class="image">
        <img alt="image" :src="require(`${editorViewChanger}`)" />
      </div>
    </section>
    <section class="info">
      <div class="image">
        <img src="./images/illustration-phones.svg" alt="phones" />
      </div>
      <div class="text">
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
    <section class="skills">
      <div class="image">
        <img :src="require(`${laptopViewChanger}`)" alt="laptop" />
      </div>
      <div class="description">
        <div class="item">
          <h1>Free, open, simple</h1>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting. RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to learn
          </p>
        </div>
        <div class="item">
          <h1>Powerful tooling</h1>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="logo">
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div class="nav">
        <ul>
          <li>
            Product
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>integration</li>
            </ul>
          </li>
          <li>
            Company
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </li>
          <li>
            Connect
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
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
  computed: {
    isMobile: function() {
      return this.windowWidth > 415 ? false : true;
    },
    isIpad: function() {
      return this.windowWidth > 768 ? false : true;
    },
    editorViewChanger: function() {
      return this.isIpad
        ? "./images/illustration-editor-mobile.svg"
        : "./images/illustration-editor-desktop.svg";
    },
    laptopViewChanger: function() {
      return this.isIpad
        ? "./images/illustration-laptop-mobile.svg"
        : "./images/illustration-laptop-desktop.svg";
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,600;1,300;1,600&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap')

$ipad: 768px
$mobile: 415px
$ipad-pro: 1024px

*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Overpass'

.wrapper
    display: flex
    flex-wrap: wrap
    & .header
        min-height: 70vh
        max-height: 90vh
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
            min-height: 90vh
            background: url('./images/bg-pattern-intro.svg') 30% 30% no-repeat, linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))
            background-size: 300% 200%
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
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
            & .bars-icon
                display: none
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
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
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
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
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                    &:active
                      outline: none
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
    & .about
      display: flex
      flex-wrap: wrap
      max-height: 100vh
      width: 100%
      align-items: center
      justify-content: center
      overflow: hidden
      position: relative
      @media screen and (max-width: $ipad-pro)
        max-height: none
        height: 100%
      @media screen and (max-width: $ipad)
        max-height: none
        height: 100%
        padding: 100px 5%
      & > h1
        width: 100%
        position: absolute
        top: 15%
        left: 0
        text-align: center
        color: hsl(208, 49%, 24%)
        @media screen and (max-width: $ipad-pro)
          top: 10%
        @media screen and (max-width: $ipad)
          position: static
          order: -2
          margin-bottom: 40px
          font-size: 1.7em
      & .info
        width: 42%
        margin-left: 8%
        margin-top: 1.5%
        @media screen and (max-width: $ipad-pro)
          width: 35%
          margin-left: 15%
          margin-top: 0%
          padding: 15% 0 10%
        @media screen and (max-width: $ipad)
          width: 100%
          margin: 0
          text-align: center
          margin-top: 20px
          padding: 0
        & .item:nth-child(1)
          margin-bottom: 40px
        & .item
          padding-right: 5%
          @media screen and (max-width: $ipad)
            padding-right: 0
          & h1
            color: hsl(208, 49%, 24%)
            font-size: 1.6em
            margin-bottom: 20px
            @media screen and (max-width: $ipad)
              font-size: 1.4em
          & p
            color: hsla(208, 49%, 24%,.6)
            font-weight: 600
            line-height: 26px
      & .image
        width: 50%
        height: 90%
        transform: translateX(27%)
        @media screen and (max-width: $ipad-pro)
          width: 50%
        @media screen and (max-width: $ipad)
          width: 100%
          order: -1
          transform: translateX(0%)
        & img
          height: 100%
          width: 100%
    & > .info
      width: 100%
      position: relative
      border-radius: 0 80px 0 80px
      height: 22vw
      background: url('./images/bg-pattern-circles.svg') -44% 80% no-repeat, linear-gradient(90deg, hsl(237, 17%, 21%),hsl(237, 23%, 32%))
      display: flex
      justify-content: flex-end
      @media screen and (max-width: $ipad)
        height: 90vh
        border-radius: 0 120px 0 120px
        background: url('./images/bg-pattern-circles.svg') 50% 150% no-repeat, linear-gradient(90deg, hsl(237, 17%, 21%),hsl(237, 23%, 32%))
      & .image
        position: absolute
        top: -18%
        left: 5%
        width: 30%
        @media screen and (max-width: $ipad)
          top: -10%
          left: 20%
          width: 60%
        & img
          width: 100%
          height: 100%
      & .text
        display: flex
        flex-direction: column
        width: 54%
        height: 100%
        justify-content: center
        padding-right: 10%
        @media screen and (max-width: $ipad)
          padding-right: 0
          width: 100%
          text-align: center
          padding: 0 5%
        & h1
          color: hsl(0, 0%, 100%)
          margin-bottom: 20px
        & p
          color: hsla(0, 0%, 100%,.8)
          line-height: 28px
    & .skills
      display: flex
      align-items: center
      height: 100vh
      width: 100%
      @media screen and (max-width: $ipad-pro)
        height: 60vh
      @media screen and (max-width: $ipad)
        flex-wrap: wrap
        padding: 40px 0
        min-height: none
        height: 100%
      & .image
        width: 50%
        height: 80%
        transform: translateX(-28%)
        @media screen and (max-width: $ipad-pro)
          width: 60%
          height: 70%
        @media screen and (max-width: $ipad)
          width: 100%
          height: 100%
          transform: translateX(0%)
        & img
          height: 100%
          width: 100%
      & .description
        width: 50%
        padding-right: 10%
        @media screen and (max-width: $ipad-pro)
          width: 40%
        @media screen and (max-width: $ipad)
          width: 100%
          text-align: center
          padding-right: 0
          padding: 0 5%
        & .item:nth-child(1)
          margin-bottom: 40px
        & .item
          & h1
            margin-bottom: 20px
            color: hsl(208, 49%, 24%)
          & p
            color: hsla(208, 49%, 24%,.7)
            font-weight: 600
            line-height: 28px
    & .footer
      background-color: hsl(240, 10%, 16%)
      display: flex
      width: 100%
      padding: 5% 15%
      border-radius: 0 80px 0 0
      @media screen and (max-width: $ipad)
        min-height: 100vh
        flex-direction: column
        border-radius: 0 120px 0 0
        padding: 60px 0
      & .logo
        @media screen and (max-width: $ipad)
          width: 100%
          display: flex
          justify-content: center
      & .nav
        margin-left: 40px
        width: 100%
        margin-top: 8px
        @media screen and (max-width: $ipad)
          margin: 0
          margin-top: 60px
        & ul
          display: flex
          text-decoration: none
          align-items: flex-start
          list-style: none
          justify-content: space-around
          cursor: default
          @media screen and (max-width: $ipad)
            flex-direction: column
            width: 100%
            align-items: center
          & li
            font-family: 'Ubuntu'
            color: hsla(0, 0%, 100%,.9)
            @media screen and (max-width: $ipad)
              text-align: center
              margin-bottom: 20px
            & ul
              margin-top: 40px
              list-style: none
              display: flex
              flex-direction: column
              align-items: flex-start
              width: 100%
              @media screen and (max-width: $ipad)
                align-items: center
              & li
                display: block
                text-align: left
                margin-top: 20px
                color: hsla(0, 0%, 100%,.6)
                position: relative
                @media screen and (max-width: $ipad)
                  width: 250px
                  text-align: center
                  margin-top: 10px
                &:hover
                  cursor: pointer
                &:hover::after
                  content: ''
                  position: absolute
                  bottom: 0
                  left: 0
                  width: 100%
                  height: 2px
                  background-color: hsla(0, 0%, 100%,.6)
              & li:nth-child(1)
                margin-top: 0
</style>
