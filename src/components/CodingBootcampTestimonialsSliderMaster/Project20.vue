<template>
  <div class="wrapper">
    <div class="slider__text">
      <p>{{ testimonials[currentSlide].text }}</p>
      <h3>
        {{ testimonials[currentSlide].fullname }}
        <span>{{ testimonials[currentSlide].status }}</span>
      </h3>
    </div>
    <div class="image__wrapper">
      <figure>
        <img :src="require(`${testimonials[currentSlide].img}`)" alt="photo" />
        <figcaption>
          <div class="slider-control">
            <font-awesome-icon icon="angle-left" @click="currentSlide = 0" />
            <font-awesome-icon icon="angle-right" @click="currentSlide = 1" />
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    testimonials: [
      {
        img: "./images/image-tanya.jpg",
        text:
          "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ",
        fullname: "Tanya Sinclair",
        status: "UX Engineer",
      },
      {
        img: "./images/image-john.jpg",
        text:
          "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ",
        fullname: "John Tarkpor",
        status: "Junior Front-end Developer",
      },
    ],
    currentSlide: 0,
  }),
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap')

$mobile: 415px
$ipad: 768px
$ipad-pro: 1024px


*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Inter'
    user-select: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

.wrapper
    display: flex
    align-items: center
    justify-content: flex-start
    padding: 5% 10%
    width: 100%
    min-height: 100vh
    background: url("./images/pattern-curve.svg") left bottom no-repeat
    position: relative
    @media screen and (max-width: $ipad-pro)
        flex-direction: column
        padding: 5%
    @media screen and (max-width: $ipad)
        padding: 10% 5%
    @media screen and (max-width: $mobile)
        background-size: contain
    .slider__text
        background: url('./images/pattern-quotes.svg') 20% top no-repeat
        width: 60%
        padding-top: 70px
        position: relative
        z-index: 2
        @media screen and (max-width: $ipad-pro)
            width: 100%
            text-align: center
            background-position: center top
        @media screen and (max-width: $mobile)
            padding-top: 40px
        p
            margin-bottom: 40px
            font-size: 2em
            font-weight: 300
            @media screen and (max-width: $mobile)
                font-size: 1.5em
        h3
            color: hsl(240, 38%, 20%)
            font-size: 16px
            span
                color: hsl(240, 18%, 77%)
                font-size: 16px
                font-weight: 300
                @media screen and (max-width: $mobile)
                    margin-top: 5px
            @media screen and (max-width: $mobile)
                display: flex
                flex-direction: column
    .image__wrapper
        width: 50%
        height: calc(100vh - 10%)
        position: absolute
        right: 0
        top: 50%
        transform: translateY(-50%)
        background: url('./images/pattern-bg.svg') no-repeat
        background-size: contain
        display: flex
        align-items: center
        justify-content: flex-start
        @media screen and (max-width: $ipad-pro)
            position: relative
            right: auto
            top: auto
            width: 100%
            height: 100%
            justify-content: center
            order: -5
            transform: translateY(0%)
            padding: 50px
            margin-bottom: 60px
        @media screen and (max-width: $mobile)
            margin-bottom: 20px

        figure
            position: relative

            img
                margin-left: 10%
                border-radius: 8px
                max-width: 100%
                @media screen and (max-width: $ipad-pro)
                    margin-left: 0
            .slider-control
                position: absolute
                bottom: -20px
                left: 25%
                background-color: #fff
                border-radius: 50px
                padding: 10px
                width: 80px
                box-sizing: content-box
                display: flex
                align-items: center
                justify-content: space-between
                box-shadow: 0px 2px 10px 2px rgba(0,0,0,.1)
                @media screen and (max-width: $ipad-pro)
                    left: 50%
                    transform: translateX(-50%)
                > *

                    width: 30px
                    height: 30px
                    cursor: pointer
                    color: hsl(240, 18%, 77%)
                    &:hover
                        color: black
</style>
