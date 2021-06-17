<template>
  <div class="wrapper">
    <div class="image__box">
      <div class="logo">
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div class="image">
        <img src="./images/illustration-mockups.svg" alt="image" />
      </div>
    </div>
    <div class="info__box">
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build cummunities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button>Register</button>
    </div>
    <div class="social">
      <div class="wrap__icon">
        <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon" />
      </div>
      <div class="wrap__icon">
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
      </div>
      <div class="wrap__icon">
        <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap')

$mobile: 375px

*
    box-sizing: border-box
    margin: 0
    padding: 0
    font-family: 'Poppins'

.wrapper
    display: flex
    min-height: 100vh
    background: url('./images/bg-desktop.svg'), hsl(257, 40%, 49%)
    padding: 5%
    position: relative
    @media screen and (max-width: $mobile)
        flex-direction: column
    & .image__box
        display: flex
        flex-direction: column
        justify-content: space-between
        & .logo
            & img
                width: 200px
                @media screen and (max-width: $mobile)
                    margin-bottom: 60px
        & .image
            & img
                width: 100%
    & .info__box
        width: 40%
        padding: 60px
        display: flex
        flex-direction: column
        justify-content: center
        margin-bottom: 100px
        @media screen and (max-width: $mobile)
            width: 100%
            text-align: center
            padding: 0
            align-items: center
        & h1
            color: rgba(255,255,255,.95)
            font-weight: 600
            line-height: 50px
            margin-bottom: 20px
            font-size: 36px
            @media screen and (max-width: $mobile)
                font-size: 24px
                margin-top: 40px
        & p
            color: rgba(255,255,255,.85)
            font-size: 15px
            line-height: 24px
            margin-bottom: 20px
        & button
            padding: 15px
            width: 200px
            border-radius: 50px
            border: 0
            color: hsl(257, 40%, 49%)
            transition: all .3s
            &:hover
                background-color: hsl(300, 69%, 71%)
                color: rgba(255,255,255,.85)
    & .social
        display: flex
        position: absolute
        bottom: 5%
        right: 10%
        @media screen and (max-width: $mobile)
            right: 28%
        & .wrap__icon
            padding: 6px 8px
            border: 1px solid #fff
            border-radius: 50%
            margin-left: 10px
            &:hover
                border: 1px solid hsl(300, 69%, 71%)
                & .icon
                    color: hsl(300, 69%, 71%)
            & .icon
                width: 25px
                height: 25px
                color: #fff
</style>
