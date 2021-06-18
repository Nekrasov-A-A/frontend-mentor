<template>
  <div class="wrapper">
    <header class="header">
      <nav class="nav">
        <img src="./images/logo.svg" alt="logo" />
        <font-awesome-icon
          icon="bars"
          class="icon-menu"
          @click="isShowMenu = isShowMenu ? false : true"
        />
        <ul :class="{ show: isShowMenu }">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <button>CONTACT</button>
        </ul>
      </nav>
      <h1>WE ARE CREATIVES</h1>
      <img
        src="./images/icon-arrow-down.svg"
        alt="icon arrow"
        class="icon-arrow"
      />
    </header>
    <section class="info">
      <div class="card">
        <div class="card__text">
          <h1>Transform your brand</h1>
          <p>
            We are full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visual that do
            most of the marketing for you
          </p>
          <button>LEARN MORE</button>
        </div>
        <div class="card__img"></div>
      </div>
      <div class="card">
        <div class="card__text">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital place
          </p>
          <button>LEARN MORE</button>
        </div>
        <div class="card__img"></div>
      </div>
    </section>
    <section class="skills">
      <div class="item">
        <h1>Graphic Design</h1>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential client's attention.
        </p>
      </div>
      <div class="item">
        <h1>Photography</h1>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
    <section class="testimonials">
      <h1>CLIENT TESTIMONIALS</h1>
      <div class="testimonials__wrapper">
        <div class="testimonial">
          <img src="./images/image-emily.jpg" alt="Emily photo" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit
          </p>
          <h2>Emily R.<br /><span>Marketing Director</span></h2>
        </div>
        <div class="testimonial">
          <img src="./images/image-thomas.jpg" alt="Thomas photo" />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satysfying and enjoyable experience.
          </p>
          <h2>Thomas S.<br /><span>Chief Operating Officer</span></h2>
        </div>
        <div class="testimonial">
          <img src="./images/image-jennie.jpg" alt="Jennie photo" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. <br />
            Highly recommended!
          </p>
          <h2>Jennie F.<br /><span>Business owner</span></h2>
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="gallery__item"></div>
      <div class="gallery__item"></div>
      <div class="gallery__item"></div>
      <div class="gallery__item"></div>
    </section>
    <footer class="footer">
      <img src="./images/logo-footer.svg" alt="logo" />
      <nav class="nav">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </nav>
      <div class="social">
        <div class="wrap__icon">
          <font-awesome-icon :icon="['fab', 'facebook-square']" class="icon" />
        </div>
        <div class="wrap__icon">
          <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
        </div>
        <div class="wrap__icon">
          <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
        </div>
        <div class="wrap__icon">
          <font-awesome-icon :icon="['fab', 'pinterest-square']" class="icon" />
        </div>
      </div>
    </footer>
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

@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,600;1,600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,600;1,600&family=Fraunces:ital,wght@0,700;0,900;1,700;1,900&display=swap')

$mobile: 375px

*
    box-sizing: border-box
    margin: 0
    padding: 0
    font-family: 'Fraunces'
.wrapper
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    & .header
        background: url('./images/desktop/image-header.jpg')
        background-size: cover
        height: 100vh
        width: 100%
        display: flex
        flex-direction: column
        align-items: center
        @media screen and (max-width: $mobile)
            background: url('./images/mobile/image-header.jpg') 50% 50%
            background-size: 100%
            height:  80vh
            text-align: center
        & .icon-menu
            display: none
            @media screen and (max-width: $mobile)
                display: block
                margin-right: 5%
                color: hsla(0, 0%, 100%,.55)
                height: 50px
                width: 30px
        & .nav
            display: flex
            width: 100%
            height: 120px
            justify-content: space-between
            align-items: center
            position: relative
            margin-bottom: 100px
            @media screen and (max-width: $mobile)
                margin-bottom: 40px
            & img
                margin-left: 40px
                height: 25%
                @media screen and (max-width: $mobile)
                    margin-left: 5%
            & ul
                list-style: none
                display: flex
                align-items: center
                position: relative
                &:before
                    content: ''
                    position: absolute
                    width: 0px
                    height: 0px
                    top: -10%
                    right: 0
                    border: 40px solid transparent
                    border-top-color: #fff
                    transform: rotate(90deg)
                    display: none
                    @media screen and (max-width: $mobile)
                        display: block
                @media screen and (max-width: $mobile)
                    display: none
                    position: absolute
                    top: 100%
                    left: 0
                    flex-direction: column
                    background-color: hsl(0, 0%, 100%)
                    width: 90%
                    margin: 0 5%
                    padding: 10% 0
                    height: 280px
                    justify-content: space-between
                &.show
                    @media screen and (max-width: $mobile)
                        display: flex

                & li
                    font-family: 'Barlow'
                    color: hsla(0, 0%, 100%,.9)
                    margin-right: 40px
                    @media screen and (max-width: $mobile)
                        margin-right: 0
                        color: hsl(213, 9%, 39%)
                        font-weight: 600
                & button
                    margin-right: 40px
                    border-radius: 50px
                    border: 0
                    background-color: hsla(0, 0%, 100%,.9)
                    color: hsl(167, 40%, 24%)
                    padding: 20px 30px
                    box-shadow: 1px 1px 2px 4px rgba(0,0,0,.1)
                    @media screen and (max-width: $mobile)
                        margin-right: 0
                        background-color: hsl(51, 100%, 49%)
                    &:hover
                        background-color: transparent
                        opacity: .9
                        color: hsl(0, 0%, 100%)
                        @media screen and (max-width: $mobile)
                            background-color: hsl(51, 100%, 49%)
                            color: hsl(167, 40%, 24%)
                            opacity: 1
                    &:active
                        transform: scale(0.98)
        & h1
            color: hsl(0, 0%, 100%)
            letter-spacing: 4px
            font-size: 64px
            margin-bottom: 5%
            @media screen and (max-width: $mobile)
                font-size: 42px
                margin-bottom: 20px
    & .info
        display: flex
        flex-wrap: wrap
        min-height: 82.5vw
        width: 100%
        @media screen and (max-width: $mobile)
            height: 100%
        & .card
            display: flex
            width: 100%
            align-items: center
            justify-content: center
            @media screen and (max-width: $mobile)
                flex-direction: column
            & .card__text
                width: 50%
                @media screen and (max-width: $mobile)
                    width: 100%
                    text-align: center
                & h1
                    color: #252e3f
                    margin-bottom: 30px
                & p
                    color: #b3b3bf
                    font-family: 'Barlow'
                    margin-bottom: 30px
                    line-height: 24px
                & button
                    color: #2d3444
                    border: 0
                    background-color: transparent
                    padding: 0 4px
        & .card:nth-child(1)
            & .card__text
                padding-left: 10%
                padding-right: 5%
                @media screen and (max-width: $mobile)
                    padding: 30px 5% 50px
            & .card__img
                background: url('./images/desktop/image-transform.jpg')  no-repeat
                background-size: contain
                width: 50%
                height: 100%
                @media screen and (max-width: $mobile)
                    order: -1
                    background: url('./images/mobile/image-transform.jpg')  no-repeat
                    background-size: cover
                    width: 100%
                    height: 300px
                    transform: translateY(-20px)

            & button
                border-bottom: 8px solid #f6ecae
                border-radius: 4px
                &:hover
                    border-color: hsl(51, 100%, 49%)
        & .card:nth-child(2)
            & .card__text
                padding-left: 5%
                padding-right: 10%
                @media screen and (max-width: $mobile)
                    padding: 50px 5%
            & .card__img
                background: url('./images/desktop/image-stand-out.jpg')  no-repeat
                background-size: contain
                width: 50%
                height: 100%
                order: -1
                @media screen and (max-width: $mobile)
                    order: -1
                    background: url('./images/mobile/image-stand-out.jpg')  no-repeat
                    background-size: cover
                    width: 100%
                    height: 300px
            & button
                border-bottom: 8px solid #fad9d4
                border-radius: 4px
                &:hover
                    border-color: hsl(7, 99%, 70%)
    & .skills
        display: flex
        @media screen and (max-width: $mobile)
            flex-direction: column
        & .item
            width: 50%
            height: 80vh
            display: flex
            flex-direction: column
            justify-content: flex-end
            align-items: center
            text-align: center
            padding: 0 10%
            @media screen and (max-width: $mobile)
                width: 100%
                height: 90vh
            & h1
                margin-bottom: 30px
                @media screen and (max-width: $mobile)
                    margin-top: 60px
            & p
                font-family: 'Barlow'
                margin-bottom: 50px
                line-height: 24px
        & .item:nth-child(1)
            background: url('./images/desktop/image-graphic-design.jpg') no-repeat
            background-size: cover
            @media screen and (max-width: $mobile)
                background: url('./images/desktop/image-graphic-design.jpg') 50% 0% no-repeat
            & h1
                color: #205247

            & p
                color: #346e60
        & .item:nth-child(2)
            background: url('./images/desktop/image-photography.jpg') no-repeat
            background-size: cover
            @media screen and (max-width: $mobile)
                background: url('./images/desktop/image-photography.jpg') 50% 0% no-repeat
            & h1
                color: #1f556d
            & p
                color: #29729b
    & .testimonials
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        min-height: 80vh
        @media screen and (max-width: $mobile)
            text-align: center
            padding: 10% 0
        & h1
            color: #a8a8a8
            letter-spacing: 3px
            font-size: 28px
            margin-bottom: 40px
            @media screen and (max-width: $mobile)
                font-size: 20px
        & .testimonials__wrapper
            display: flex
            justify-content: space-around
            @media screen and (max-width: $mobile)
                flex-direction: column
            & .testimonial
                display: flex
                flex-direction: column
                align-items: center
                justify-content: center
                text-align: center
                width: 20%
                @media screen and (max-width: $mobile)
                    width: 100%
                    padding: 10% 5%
                & img
                    width: 60px
                    height: 60px
                    border-radius: 50%
                    margin-bottom: 40px
                & p
                    line-height: 24px
                    color: #5f6062
                    font-family: 'Barlow'
                    margin-bottom: 40px
                & h2
                    color: #232b38
                    & span
                        color: #a9a9a9
                        font-family: 'Barlow'
                        font-size: 16px
    & .gallery
        display: flex
        min-height: 40vh
        width: 100%
        @media screen and (max-width: $mobile)
            flex-wrap: wrap
            height: 100%
        & .gallery__item
            width: 25%
            height: 62.6vh
            @media screen and (max-width: $mobile)
                width: 50%
                height: 34.8vh
        & .gallery__item:nth-child(1)
            background: url('./images/desktop/image-gallery-milkbottles.jpg')
            background-size: contain
        & .gallery__item:nth-child(2)
            background: url('./images/desktop/image-gallery-orange.jpg')
            background-size: contain
        & .gallery__item:nth-child(3)
            background: url('./images/desktop/image-gallery-cone.jpg')
            background-size: contain
        & .gallery__item:nth-child(4)
            background: url('./images/desktop/image-gallery-sugarcubes.jpg')
            background-size: contain
    & .footer
        display: flex
        flex-direction: column
        background-color: #90d4c5
        align-items: center
        width: 100%
        padding: 50px
        & img
            fill: darkgreen
            width: 200px
            margin-bottom: 60px
        & .nav
            width: 20%
            margin-bottom: 80px
            @media screen and (max-width: $mobile)
                width: 80%
            & ul
                display: flex
                list-style: none
                justify-content: space-around
                & li
                    font-family: 'Barlow'
                    color: #418878
                    cursor: pointer
                    &:hover
                        color: #fff
        & .social
            display: flex
            justify-content: space-between
            width: 10%
            @media screen and (max-width: $mobile)
                width: 50%
            & .wrap__icon
                & .icon
                    color: #2d7464
                    width: 25px
                    height: 25px
                    &:hover
                        color: #fff
</style>
