<template>
  <div class="wrapper">
    <header class="header">
      <nav>
        <img src="./images/logo.svg" alt="logo" />
        <div class="icon__wrapper" v-if="isMobile">
          <font-awesome-icon
            icon="bars"
            v-if="!isShowMenu"
            class="header__icon"
            @click="isShowMenu = isShowMenu ? false : true"
          />
          <font-awesome-icon
            icon="times"
            v-if="isShowMenu"
            class="header__icon"
            @click="isShowMenu = isShowMenu ? false : true"
          />
        </div>

        <ul :class="{ 'show-menu': isShowMenu }">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
      <h1>IMMERSIVE <br />EXPERIENCES <br />THAT DELIVER</h1>
    </header>
    <section class="about__wrapper">
      <div class="about__image">
        <img
          :src="
            isMobile
              ? require('./images/mobile/image-interactive.jpg')
              : require('./images/desktop/image-interactive.jpg')
          "
          alt=""
        />
      </div>
      <div class="about__info">
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand
        </p>
      </div>
    </section>
    <section class="creations__wrapper">
      <h1>OUR CREATIONS</h1>
      <button>SEE ALL</button>
      <div class="gallery">
        <figure>
          <img
            :src="
              isMobile
                ? require('./images/mobile/image-deep-earth.jpg')
                : require('./images/desktop/image-deep-earth.jpg')
            "
            alt="image-deep-earth"
          />
          <figcaption>Deep <br />Earth</figcaption>
        </figure>
        <figure>
          <img
            :src="
              isMobile
                ? require('./images/mobile/image-night-arcade.jpg')
                : require('./images/desktop/image-night-arcade.jpg')
            "
            alt="image-night-arcade"
          />
          <figcaption>night<br />arcade</figcaption>
        </figure>
        <figure>
          <img
            :src="
              isMobile
                ? require('./images/mobile/image-soccer-team.jpg')
                : require('./images/desktop/image-soccer-team.jpg')
            "
            alt="image-soccer-team"
          />
          <figcaption>
            soccer <br />
            team vr
          </figcaption>
        </figure>
        <figure>
          <img
            :src="
              isMobile
                ? require('./images/mobile/image-grid.jpg')
                : require('./images/desktop/image-grid.jpg')
            "
            alt="image-grid"
          />
          <figcaption>
            the <br />
            grid
          </figcaption>
        </figure>
        <figure>
          <img
            :src="
              isMobile
                ? require('./images/mobile/image-from-above.jpg')
                : require('./images/desktop/image-from-above.jpg')
            "
            alt="image-from-above"
          />
          <figcaption>
            from up <br />
            above vr
          </figcaption>
        </figure>
        <figure>
          <img
            :src="
              isMobile
                ? require('./images/mobile/image-pocket-borealis.jpg')
                : require('./images/desktop/image-pocket-borealis.jpg')
            "
            alt="image-pocket-borealis"
          />
          <figcaption>pocket<br />borealis</figcaption>
        </figure>
        <figure>
          <img
            :src="
              isMobile
                ? require('./images/mobile/image-curiosity.jpg')
                : require('./images/desktop/image-curiosity.jpg')
            "
            alt="image-curiosity"
          />
          <figcaption>the<br />curiosity</figcaption>
        </figure>
        <figure>
          <img
            :src="
              isMobile
                ? require('./images/mobile/image-fisheye.jpg')
                : require('./images/desktop/image-fisheye.jpg')
            "
            alt="image-fisheye"
          />
          <figcaption>make it<br />fisheye</figcaption>
        </figure>
      </div>
    </section>
    <footer class="footer">
      <nav>
        <img src="./images/logo.svg" alt="logo" />
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
      <div class="media">
        <div class="media__icon">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'pinterest']" />
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
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
      return this.windowWidth > 415 ? false : true;
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap')

$mobile: 415px
$ipad: 768px
$ipad-pro: 1024px


*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Alata'
    user-select: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

.wrapper
    display: flex
    flex-direction: column
    width: 100%
    .header
        display: flex
        flex-direction: column
        align-items: flex-start
        min-height: calc(100vw / 2.215371301855157 )
        width: 100%
        background: url('./images/desktop/image-hero.jpg') no-repeat
        background-size: contain
        padding: 5% 10%
        @media screen and (max-width: $mobile)
            background: url('./images/mobile/image-hero.jpg')  no-repeat
            background-size: 100% 100%
            min-height: 100vh
            width: 100%
            padding: 10% 5%
            flex-direction: row
            flex-wrap: wrap
            position: relative

        > nav
            width: 100%
            display: flex
            align-items: center
            justify-content: space-between
            height: 60px
            margin-bottom: 10%
            @media screen and (max-width: $ipad)
                margin-bottom: 40px
            @media screen and (max-width: $mobile)
                flex-wrap: wrap
            & > img
                position: relative
                z-index: 3
            .icon__wrapper
                position: relative
                z-index: 3
                .header__icon
                    color: hsl(0, 0%, 100%)
                    width: 30px
                    height: 30px
            > ul
                list-style: none
                display: flex

                @media screen and (max-width: $mobile)
                    display: none
                    width: 100%
                    flex-direction: column
                    position: absolute
                    top: 0
                    left: 0
                    height: 100%
                    background-color: hsl(0, 0%, 0%)
                    justify-content: center

                &.show-menu
                    display: flex

                > li
                    margin-left: 40px
                    color: hsl(0, 0%, 100%)
                    cursor: pointer
                    position: relative
                    font-weight: 400
                    @media screen and (max-width: $ipad)
                        margin-left: 20px
                    @media screen and (max-width: $mobile)
                        margin-left: 5%
                        margin-bottom: 20px
                        font-size: 1.7em
                        text-transform: uppercase
                        font-family: 'Josefin Sans'
                        font-weight: 300
                    &::before
                        content: ''
                        height: 2px
                        width: 0
                        position: absolute
                        background-color: hsl(0, 0%, 100%)
                        border-radius: 50px
                        bottom: -20px
                        left: 25%
                        transition: width .3s
                    &:hover::before
                        width: 50%
                        @media screen and (max-width: $mobile)
                            width: 0
        > h1
            max-height: 50%
            display: flex
            align-items: center
            color: hsl(0, 0%, 100%)
            font-weight: 300
            letter-spacing: 5px
            min-width: 50%
            max-width: 60%
            font-size: 3.5em
            border: 1px solid hsl(0, 0%, 100%)
            padding: 40px
            font-family: 'Josefin Sans'
            @media screen and (max-width: 1125px)
                font-size: 2.7em
            @media screen and (max-width: $ipad)
                font-size: 2em
            @media screen and (max-width: $mobile)
                min-width: 100%
                max-width: 100%
                width: 100%
                font-size: 2em
    .about__wrapper
        width: 100%
        display: flex
        align-items: flex-end
        padding: 5% 10%
        position: relative
        @media screen and (max-width: $ipad)
            flex-wrap: wrap
        @media screen and (max-width: $mobile)
            padding: 10% 5%
        .about__image
            width: 60%
            @media screen and (max-width: $ipad)
                width: 100%
                margin-bottom: 40px
            img
                width: 100%
        .about__info
            position: absolute
            width: 56%
            right: 0
            z-index: 5
            background-color: hsl(0, 0%, 100%)
            padding: 60px 20% 0 60px
            @media screen and (max-width: $ipad-pro)
                padding: 40px 10% 0 60px
            @media screen and (max-width: $ipad)
                position: relative
                width: 100%
                text-align: center
                padding: 0
            > h1
                font-family: 'Josefin Sans'
                font-weight: 300
                margin-bottom: 20px
                font-size: 2.3em
            > p
                color: hsl(0, 0%, 55%)
                line-height: 28px
    .creations__wrapper
        width: 100%
        padding: 5% 10%
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        @media screen and (max-width: $mobile)
            flex-direction: column
            justify-content: center
            align-items: center
            margin-top: 60px
            padding: 10% 5%

        > h1
            margin-bottom: 60px
            font-family: 'Josefin Sans'
            font-weight: 300
            font-weight: 2.2em
        > button
            border: 1px solid hsl(0, 0%, 0%)
            color: hsl(0, 0%, 0%)
            background-color: hsl(0, 0%, 100%)
            padding: 10px 50px
            height: 100%
            cursor: pointer
            letter-spacing: 2px
            @media screen and (max-width: $mobile)
                order: 5
                margin-top: 20px
                margin-bottom: 60px

            &:hover
                color: hsl(0, 0%, 100%)
                background-color: hsl(0, 0%, 0%)
        .gallery
            width: 100%
            display: flex
            flex-wrap: wrap
            justify-content: space-between
            @media screen and (max-width: $ipad-pro)
                justify-content: space-around
            @media screen and (max-width: $ipad)
                justify-content: center
            figure
                position: relative
                cursor: pointer
                margin-bottom: 60px
                @media screen and (max-width: $ipad-pro)
                    margin-bottom: 15px
                @media screen and (max-width: $ipad)
                    margin-left: 15px
                    &:nth-child(odd)
                        margin-left: 0
                @media screen and (max-width: $mobile)
                    width: 100%
                    margin-left: 0
                    & img
                        width: 100%
                &:hover img
                    opacity: .7
                &:hover figcaption
                    color: hsl(0, 0%, 0%)
                figcaption
                    position: absolute
                    bottom: 0
                    left: 0
                    width: 100%
                    height: 100%
                    color: hsla(0, 0%, 100%,.9)
                    text-transform: uppercase
                    font-family: 'Josefin Sans'
                    font-weight: 300
                    font-size: 1.8em
                    background-color: rgba(0,0,0,.2)
                    display: flex
                    align-items: flex-end
                    padding: 0 0 30px 30px
                    @media screen and (max-width: $mobile)
                        padding: 0 0 20px 20px
    .footer
        display: flex
        align-items: center
        justify-content: space-between
        padding: 5% 10%
        background-color: hsl(0, 0%, 0%)
        @media screen and (max-width: $ipad)
            padding: 10% 5%
            justify-content: center
            flex-wrap: wrap
        nav
            @media screen and (max-width: $ipad)
                width: 100%
                display: flex
                flex-direction: column
                align-items: center
                justify-content: center
            img
                margin-bottom: 40px
            ul
                list-style: none
                display: flex
                @media screen and (max-width: $ipad)
                    flex-direction: column
                li
                    color: hsl(0, 0%, 100%)
                    margin-right: 40px
                    cursor: pointer
                    position: relative
                    @media screen and (max-width: $ipad)
                        margin-right: 0
                        margin-bottom: 30px
                    &::before
                        content: ''
                        width: 0
                        height: 2px
                        background-color: hsl(0, 0%, 100%)
                        position: absolute
                        bottom: -20px
                        left: 25%
                    &:hover::before
                        width: 50%
        .media
            display: flex
            align-items: flex-end
            flex-direction: column
            @media screen and (max-width: $ipad)
                align-items: center
                justify-content: center
                margin-top: 40px
            .media__icon
                color: hsl(0, 0%, 100%)
                margin-bottom: 20px
                > *
                    width: 24px
                    height: 24px
                    margin-right: 10px
                    cursor: pointer
                    position: relative
                    border-bottom: 2px solid transparent
                    &:hover
                        border-bottom: 2px solid #fff
            p
                color: hsl(0, 0%, 55%)
</style>
