<template>
  <div class="wrapper">
    <div class="card">
      <div class="card__img">
        <img src="./images/drawers.jpg" alt="image" />
      </div>
      <div class="card__info">
        <h2>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p>
          Ever been in room and felt like something was missing? Perhaps it felt
          slightly bare and uninviting. I've got some simple tips to help you
          make any room feel complete.
        </p>
        <div class="testimonial__wrap">
          <div class="testimonial">
            <img src="./images/avatar-michelle.jpg" alt="photo" />
            <h3>
              Michelle Appleton <br />
              <span>28 Jun 2020</span>
            </h3>
          </div>
          <div class="links" :class="{ active: isActive }">
            <p>SHARE</p>
            <a href="https://ru-ru.facebook.com/" target="_blank">
              <img src="./images/icon-facebook.svg" alt="icon" />
            </a>
            <a href="https://www.pinterest.ru/" target="_blank">
              <img src="./images/icon-pinterest.svg" alt="icon" />
            </a>
            <a href="https://twitter.com/?lang=ru" target="_blank">
              <img src="./images/icon-twitter.svg" alt="icon"
            /></a>
          </div>
          <img
            src="./images/icon-share.svg"
            alt="icon"
            @click="isActive = isActive ? false : true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap')

$mobile: 375px

.wrapper
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    font-family: 'Manrope'
    background-color: hsl(210, 46%, 95%)
    & .card
        display: flex
        box-shadow: 1px 1px 16px 8px rbga(0,0,0,.2)
        border-radius: 8px
        overflow: hidden
        margin: 0 20%
        @media screen and (max-width: $mobile)
            flex-direction: column
            margin: 10% 5%
        & .card__img
            width: 40%
            @media screen and (max-width: $mobile)
                width: 100%
            & img
                width: 100%
                height: 100%
        & .card__info
            width: 50%
            background-color: #fff
            padding: 40px
            transform: translateX(-6%)
            border-radius: 0 8px 8px 0
            @media screen and (max-width: $mobile)
                width: 100%
            & h2
                margin: 0
                font-size: 20px
                line-height: 24px
                color: hsl(217, 19%, 35%)
                width: 90%
            & p
                color: hsl(214, 17%, 51%)
                font-size: 14px
                line-height: 20px
                width: 90%
            & .testimonial__wrap
                display: flex
                justify-content: space-between
                align-items: center
                position: relative
                & > img
                    width: 15px
                    height: 15px
                    cursor: pointer
                    background-color: hsl(210, 46%, 95%)
                    padding: 10px
                    border-radius: 50%
                    border: 2px solid hsl(210, 46%, 95%)
                    @media screen and (max-width: $mobile)
                        margin-right: 40px
                        position: absolute
                        bottom: 0
                        right: 0
                        z-index: 999
                    &:hover
                        background-color: transparent
                        @media screen and (max-width: $mobile)
                            background-color: #fff
                & .links
                    display: none
                    position: absolute
                    right: -17%
                    bottom: 120%
                    background-color: hsl(214, 17%, 51%)
                    align-items: center
                    padding: 0 25px
                    border-radius: 16px
                    @media screen and (max-width: $mobile)
                       right: 0%
                       bottom: -80%
                       height: 125px
                       width: 90%
                       border-radius: 0 0 8px 8px
                    &.active
                        display: flex
                    &:after
                        content: ''
                        width: 20px
                        height: 20px
                        background-color: hsl(214, 17%, 51%)
                        position: absolute
                        bottom: -15%
                        left: 46.5%
                        transform:  rotate(45deg)
                        z-index: -999
                        @media screen and (max-width: $mobile)
                            display: none
                    & p
                        color: hsl(212, 23%, 69%)
                        letter-spacing: 3px
                        @media screen and (max-width: $mobile)
                            width: 80px

                    & img
                        width: 20px
                        height: 20px
                        margin-left: 10px
                        cursor: pointer
                & .testimonial
                    display: flex
                    align-items: center
                    & img
                        height: 50px
                        border-radius: 50%
                        margin-right: 20px
                    & h3
                        margin: 0
                        font-size: 14px
                        color: hsl(217, 19%, 35%)
                        & span
                            font-size: 12px
                            color: hsl(214, 17%, 51%)
                            font-weight: 500
</style>
