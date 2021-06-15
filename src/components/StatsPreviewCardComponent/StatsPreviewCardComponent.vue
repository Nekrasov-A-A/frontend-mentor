<template>
  <div class="wrapper">
    <div class="content__wrapper">
      <div class="content__text">
        <h1>
          Get <span class="purple__text">insights</span> that help your business
          grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency
        </p>
        <div class="wrapper__count">
          <div>
            <h1>10k+</h1>
            <span>COMPANIES</span>
          </div>
          <div>
            <h1>314</h1>
            <span>TEMPLATES</span>
          </div>
          <div>
            <h1>12M+</h1>
            <span>QUERIES</span>
          </div>
        </div>
      </div>
      <div class="content__img">
        <img src="./images/image-header-desktop.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap')
$header-color: hsl(0, 0%, 100%)
$p-color: hsla(0, 0%, 100%, 0.6)
$mobile-screen: 375px
.wrapper
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    background-color: hsl(233, 47%, 7%)
    font-family: 'Inter'
    .content__wrapper
      background-color:  hsl(244, 38%, 16%)
      display: flex
      margin: 0 10%
      border-radius: 8px
      overflow: hidden
      box-shadow: 1px 1px 16px 2px rgba(255,255,255,.1)
      @media screen and (max-width: $mobile-screen)
        flex-direction: column-reverse
        margin: 0 5%
    .content__text
      text-align: left
      padding: 70px 180px 70px 70px
      @media screen and (max-width: $mobile-screen)
        padding: 7%
        text-align: center
      & h1
        color: $header-color
        margin: 0 0 32px 0
        @media screen and (max-width: $mobile-screen)
          margin: 0 0 15px 0
        & .purple__text
          color: hsl(277, 64%, 61%)
      & p
        color: $p-color
        margin: 0 0 60px 0
        @media screen and (max-width: $mobile-screen)
          margin: 0 0 32px 0
    .content__img
      position: relative
      &:after
        content: ''
        position: absolute
        height: 100%
        width: 100%
        top:0
        left:0
        background-color: hsla(277, 64%, 61%, .45)
      & img
        height: 100%
        @media screen and (max-width: $mobile-screen)
          width: 100%
    .wrapper__count
      display: flex
      justify-content: space-between
      @media screen and (max-width: $mobile-screen)
        flex-direction: column
        & *
          margin-bottom: 10px
        &:nth-last-child
          margin-bottom: 0
      & h1
        margin: 5px 0
      & span
        color: $p-color
        font-family: 'Lexend Deca'
</style>
