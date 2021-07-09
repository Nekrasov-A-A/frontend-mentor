<template>
  <div
    class="wrapper"
    :style="{
      background:
        'url(' +
        require('./images/bg-pattern-top.svg') +
        ') ' +
        topBGLeft +
        ' ' +
        topBGTop +
        ' no-repeat, url(' +
        require('./images/bg-pattern-bottom.svg') +
        ') ' +
        bottomBGRight +
        ' ' +
        bottomBGBottom +
        ' no-repeat, hsl(185, 75%, 39%)',
    }"
  >
    <div class="card">
      <img src="./images/image-victor.jpg" alt="victor" />
      <h1>Victor Crest <span>26</span></h1>
      <p>London</p>
      <hr />
      <div class="card__info">
        <div class="card__item">
          <h1>
            80K <br />
            <span>Followers</span>
          </h1>
        </div>
        <div class="card__item">
          <h1>
            803K <br />
            <span>Likes</span>
          </h1>
        </div>
        <div class="card__item">
          <h1>
            1.4K <br />
            <span>Photos</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    topBGLeft: function() {
      return (this.windowWidth / 100) * 45 - 980 + "px";
    },
    topBGTop: function() {
      return (this.windowHeight / 100) * 44 - 754 + "px";
    },
    bottomBGRight: function() {
      return (this.windowWidth / 100) * 50 + "px";
    },
    bottomBGBottom: function() {
      return (this.windowHeight / 100) * 55 + "px";
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap')

*
  font-family: 'Kumbh Sans'

.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  font-size: 18px
  @media screen and (max-width: $mobile)
      padding: 0 5%
  .card
    display: flex
    flex-direction: column
    align-items: center
    background: url('./images/bg-pattern-card.svg') center top no-repeat, #fff
    background-size: 110% 135px
    padding: 80px 0 20px 0
    min-width: 200px
    text-align: center
    border-radius: 8px
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)

    > img
      width: 100px
      height: 100px
      border-radius: 50%
      border: 5px solid #fff
      margin-bottom: 20px
    > h1
      font-size: 18px
      font-weight: 700
      color: hsl(229, 23%, 23%)
      margin-bottom: 15px
      > span
        color: hsl(227, 10%, 46%)
        font-weight: 400
        margin-left: 3px
    > p
      color: hsl(0, 0%, 59%)
      font-size: 16px
      margin-bottom: 25px
    > hr
      margin-bottom: 30px
      width: 100%
      height: 1px
      border: 0
      color: hsla(0, 0%, 59%,.4)
      background-color: hsla(0, 0%, 59%,.4)
    > .card__info
      display: grid
      grid-template: 1fr / repeat(3, 1fr)
      grid-gap: 0 50px
      padding: 0 50px
      @media screen and (max-width: $mobile)
        grid-gap: 0 20px
      .card__item
        > h1
          font-size: 18px
          font-weight: 700
          color: hsl(229, 23%, 23%)
          margin-bottom: 15px
          > span
            color: hsl(227, 10%, 46%)
            font-weight: 400
            font-size: 14px
            margin-left: 3px
            letter-spacing: 1px
</style>
