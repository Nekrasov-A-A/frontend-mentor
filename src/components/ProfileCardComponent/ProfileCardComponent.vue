<template>
  <div class="wrapper">
    <div class="card">
      <img src="./images/image-victor.jpg" alt="photo" />
      <h1>
        Victor Crest
        <span>26</span>
      </h1>
      <p>London</p>
      <hr />
      <div class="social-info">
        <div class="social-info__items">
          <h1>80K</h1>
          <span>Followers</span>
        </div>
        <div class="social-info__items">
          <h1>803K</h1>
          <span>Likes</span>
        </div>
        <div class="social-info__items">
          <h1>1.4K</h1>
          <span>Photos</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap')

.wrapper
    display: flex
    font-family: 'Kumbh Sans'
    color: hsl(229, 23%, 23%)
    min-height: 100vh
    background: url(./images/bg-pattern-top.svg) -50% 220% no-repeat, url(./images/bg-pattern-bottom.svg) 140% -170% no-repeat, hsl(185, 75%, 39%)
    align-items: center
    justify-content: center
    font-size: 14px
    & h1
        font-size: 18px
        font-weight: 700
    & span:nth-child(1)
        color: hsl(227, 10%, 46%)
        margin-left: 5px
    & span
        color: hsl(0, 0%, 59%)
        font-weight: 400
    & p
        color: hsl(0, 0%, 59%)
        font-weight: 400
    & hr
        background-color: hsla(185, 75%, 39%, .1)
        width: 100%
    & .card
        background: url(./images/bg-pattern-card.svg) 0% 0% repeat-x, white
        border-radius: 16px
        display: flex
        flex-direction: column
        align-items: center
        overflow: hidden
        & img
            border-radius: 50%
            border: 4px solid white
            margin-bottom: 25px
            margin-top: 84px
        & h1
            margin: 0
        & .social-info
            display: flex
            & div:nth-child(3)
                margin-right: 40px
            & div
                text-align: center
                margin-left: 40px
                margin-top: 20px
                margin-bottom: 20px
                & h1
                    margin: 0 0 5px 0
</style>
