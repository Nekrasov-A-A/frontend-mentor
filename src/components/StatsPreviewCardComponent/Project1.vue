<template>
  <div class="wrapper">
    <div class="card">
      <div class="card__info">
        <h1>Get <span>insights</span> that help your business grow.</h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div class="card__info__grid">
          <div class="grid__card">
            <h1>10k+ <br /><span>companies</span></h1>
          </div>
          <div class="grid__card">
            <h1>314 <br /><span>templates</span></h1>
          </div>
          <div class="grid__card">
            <h1>12M+ <br /><span>queries</span></h1>
          </div>
        </div>
      </div>
      <div class="card__image">
        <div class="card__image__fill"></div>
        <img
          :src="
            isMobile
              ? require('./images/image-header-mobile.jpg')
              : require('./images/image-header-desktop.jpg')
          "
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile: function() {
      return this.windowWidth > 768 ? false : true;
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap')

*
  font-family: 'Inter'


.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  background-color: hsl(233, 47%, 7%)
  font-size: 15px
  @media screen and (max-width: $ipad)
    padding: 60px 5%
  .card
    width: 80%
    border-radius: 8px
    display: flex
    overflow: hidden
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
    @media screen and (max-width: $ipad-pro)
      width: 90%
    @media screen and (max-width: $ipad)
      width: 100%
      flex-direction: column
    .card__image
      width: 50%
      position: relative
      @media screen and (max-width: $ipad)
        order: -1
        width: 100%
      > img
        width: 100%
        @media screen and (max-width: $ipad-pro)
          height: 100%
      .card__image__fill
        position: absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        background-color: hsla(277, 64%, 61%,.65)
    .card__info
      width: 50%
      padding: 60px 10% 60px 60px
      background-color: hsl(244, 38%, 16%)
      display: flex
      flex-direction: column
      justify-content: center
      @media screen and (max-width: $ipad-pro)
        padding-right: 5%
      @media screen and (max-width: $ipad)
        width: 100%
        text-align: center
        padding: 60px 5%
      > h1
        color: hsl(0, 0%, 100%)
        line-height: 40px
        margin-bottom: 20px
        > span
          color: hsl(277, 64%, 61%)
      > p
        line-height: 24px
        color: hsla(0, 0%, 100%, 0.75)
        margin-bottom: 60px
      .card__info__grid
        display: grid
        grid-template: 1fr / repeat(3, 1fr)
        @media screen and (max-width: $mobile)
          grid-template: repeat(3, 1fr) / 1fr
          grid-gap: 30px 0
        .grid__card
          > h1
            color: hsl(0, 0%, 100%)
            line-height: 28px
            > span
              color: hsla(0, 0%, 100%, 0.6)
              text-transform: uppercase
              font-family: 'Lexend Deca'
              font-weight: 400
              font-size: 15px
</style>
