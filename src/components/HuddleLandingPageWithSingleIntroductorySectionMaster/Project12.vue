<template>
  <div class="wrapper">
    <img src="./images/logo.svg" alt="logo" />
    <section class="main">
      <div class="main__image">
        <img src="./images/illustration-mockups.svg" alt="mockups" />
      </div>
      <div class="main__info">
        <h1>
          Build The Community <br />
          Your Fans Will Love
        </h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Register</button>
      </div>
    </section>
    <section class="social">
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap')

*
    font-family: 'Poppins'

.wrapper
  display: flex
  padding: 0 5%
  flex-wrap: wrap
  align-items: center
  min-height: 100vh
  background: url('./images/bg-desktop.svg') no-repeat, hsl(257, 40%, 49%)
  background-size: contain
  @media screen and (min-width: 1440px)
    background-size: cover
  @media screen and (max-width: $ipad)
    padding: 60px 5%
  > img
    @media screen and (max-width: $ipad)
      margin-bottom: 100px
  .main
    display: flex
    flex-wrap: wrap
    width: 100%
    align-items: center
    @media screen and (max-width: $ipad)
      text-align: center
    .main__image
      width: 50%
      @media screen and (max-width: $ipad)
        width: 100%
        margin-bottom: 100px
      > img
        width: 100%
    .main__info
      width: 50%
      padding-left: 60px
      @media screen and (max-width: $ipad)
        width: 100%
        padding-left: 0
        margin-bottom: 100px
      > h1
        color: #fffeff
        line-height: 48px
        margin-bottom: 15px
      > p
        font-family: 'Open Sans'
        line-height: 24px
        color: #fff5ff
        margin-bottom: 20px
      > button
        padding: 20px 60px
        background-color: #ffffff
        color: #6451ab
        border-radius: 50px
        &:hover
          background-color: #e980e7
          color: #ffffff
  .social
    width: 100%
    display: flex
    align-items: center
    justify-content: flex-end
    @media screen and (max-width: $ipad)
      justify-content: center
    > *
      width: 40px
      height: 40px
      padding: 8px
      border: 1px solid #fff
      border-radius: 50%
      color: #fff
      cursor: pointer
      margin-left: 20px
      &:first-child
        margin-left: 0
      &:hover
        color: #e980e7
        border-color: #e980e7
</style>
