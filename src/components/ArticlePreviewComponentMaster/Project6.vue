<template>
  <div class="wrapper">
    <div class="card">
      <div class="card__image">
        <img src="./images/drawers.jpg" alt="drawers" />
      </div>
      <div class="card__info">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div class="info__person">
          <img src="./images/avatar-michelle.jpg" alt="avatar" />
          <h3>
            Michelle Appleton
            <br />
            <span>28 Jun 2020</span>
          </h3>
          <button
            @click="isShow = isShow ? false : true"
            :class="{ open: isShow }"
          >
            <font-awesome-icon icon="share" />
          </button>
          <div class="share" v-if="isShow">
            <h3>share</h3>
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              class="icon"
            />
            <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
            <font-awesome-icon :icon="['fab', 'pinterest']" class="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isShow: false,
  }),
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap')

*
  font-family: 'Manrope'

.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  font-size: 13px
  background: hsl(210, 46%, 95%)
  @media screen and (max-width: $mobile)
    padding: 70px 5%
  .card
    width: 60%
    display: flex
    @media screen and (max-width: $ipad-pro)
      width: 80%
    @media screen and (max-width: $ipad)
      width: 90%
    @media screen and (max-width: $mobile)
      width: 100%
      flex-direction: column
    .card__image
      width: 40%
      border-top-left-radius: 16px
      border-bottom-left-radius: 16px
      overflow: hidden
      @media screen and (max-width: $mobile)
        width: 100%
        border-bottom-left-radius: 0
        border-top-right-radius: 16px
      > img
        width: 100%
        height: 100%
    .card__info
      width: 60%
      background-color: #fff
      padding: 30px 40px
      border-top-right-radius: 16px
      border-bottom-right-radius: 16px
      @media screen and (max-width: $mobile)
        width: 100%
        border-top-right-radius: 0
        border-bottom-left-radius: 16px
      > h1
        color: #4d5466
        margin-bottom: 20px
        line-height: 40px
      > p
        color: #a5b1bf
        line-height: 24px
        font-weight: 500
        margin-bottom: 30px
      .info__person
        display: flex
        align-items: center
        position: relative
        > img
          width: 40px
          height: 40px
          border-radius: 50%
          margin-right: 15px
        > h3
          color: #4e555f
          line-height: 20px
          > span
            color: #b3b8bc
            font-size: 13px
        > button
          position: absolute
          right: 0
          bottom: 0
          padding: 10px
          border-radius: 50%
          background-color: #eef3f9
          z-index: 3
          &.open
            background-color: #708195
            > *
              color: #fffeff
          > *
            width: 20px
            height: 20px
            color: #718198
        .share
          position: absolute
          padding: 15px 35px
          background-color: #49556b
          border-radius: 16px
          display: flex
          align-items: center
          top: -200%
          right: -96px
          z-index: 2
          @media screen and (max-width: $ipad)
            top: -30px
            bottom: -30px
            right: -40px
            left: -40px
            border-radius: 0
            border-bottom-right-radius: 16px
          @media screen and (max-width: $mobile)
            border-bottom-left-radius: 16px
          > .icon
            color: #fffeff
            width: 20px
            height: 20px
            margin-left: 10px
            cursor: pointer
          > h3
            text-transform: uppercase
            color: #8e9db2
            font-size: 1.3em
            letter-spacing: 4px
            font-weight: 500
          &::before
            content: ''
            width: 0
            height: 0
            position: absolute
            border: 15px solid transparent
            border-top-color: #49556b
            bottom: -28px
            left: 44%
            @media screen and (max-width: $ipad)
              border-top-color: transparent
</style>
