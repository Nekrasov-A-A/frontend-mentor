<template>
  <div class="wrapper">
    <div class="card">
      <img src="./images/illustration-box-desktop.svg" alt="box image" />
      <div class="card__img">
        <div class="card__img-bg">
          <img
            src="./images/illustration-woman-online-mobile.svg"
            alt="image-mobile"
            class="image-mobile"
          />
          <img
            src="./images/illustration-woman-online-desktop.svg"
            alt="woman image"
            class="image-desktop"
          />
        </div>
      </div>
      <div class="card__content">
        <h1>FAQ</h1>
        <div class="card__content__question">
          <details>
            <summary open="false"
              >How many team members can I invite?
              <img src="./images/icon-arrow-down.svg" alt="icon"
            /></summary>
            <p>Answer</p>
          </details>
          <hr />
        </div>
        <div class="card__content__question">
          <details>
            <summary open="false"
              >How many team members can I invite?
              <img src="./images/icon-arrow-down.svg" alt="icon"
            /></summary>
            <p>Answer</p>
          </details>
          <hr />
        </div>
        <div class="card__content__question">
          <details>
            <summary open="false"
              >How many team members can I invite?
              <img src="./images/icon-arrow-down.svg" alt="icon"
            /></summary>
            <p>Answer</p>
          </details>
          <hr />
        </div>
        <div class="card__content__question">
          <details>
            <summary open="false"
              >How many team members can I invite?
              <img src="./images/icon-arrow-down.svg" alt="icon"
            /></summary>
            <p>Answer</p>
          </details>
          <hr />
        </div>
        <div class="card__content__question">
          <details>
            <summary open="false"
              >How many team members can I invite?
              <img src="./images/icon-arrow-down.svg" alt="icon"
            /></summary>
            <p>Answer</p>
          </details>
          <hr />
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

$mobile: 375px

.wrapper
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    background-image: linear-gradient(360deg,  hsl(240, 73%, 65%), hsl(273, 75%, 66%))
    font-family: 'Kumbh Sans'
    font-size: 14px
    box-sizing: border-box
    & hr
        margin-top: 15px
    & .card
        background-color: #fff
        border-radius: 16px
        display: flex
        box-shadow: 1px 1px 16px 8px rbga(0,0,0,.2)
        user-select: none
        position: relative
        width: 60%
        @media screen and (max-width: $mobile)
            width: 90%
            margin: 0 5%
            flex-direction: column
        & > img
            position: absolute
            left: -13%
            top: 40%
            z-index: 999
            @media screen and (max-width: $mobile)
                display: none
        & .card__img
            width: 50%
            @media screen and (max-width: $mobile)
                width: 100%
            & .card__img-bg
                background-image: url('./images/bg-pattern-desktop.svg')
                background-position: 115% 65%
                background-repeat: no-repeat
                height: 100%
                width: 100%
                overflow: hidden
                position: relative
                @media screen and (max-width: $mobile)
                    overflow: visible
                    background-image: url('./images/bg-pattern-mobile.svg')
                    background-position: 35% 0%
                    height: 110px
                & .image-mobile
                    display: none
                    @media screen and (max-width: $mobile)
                        display: block
                        transform: translateY(-55%)
                & .image-desktop
                    position: absolute
                    bottom: 14%
                    left: -20%
                    @media screen and (max-width: $mobile)
                        display: none
        & .card__content
            padding: 70px
            @media screen and (max-width: $mobile)
                padding: 20px
                text-align: center
            & h1
                margin-top: 0
            & .card__content__question
                margin-bottom: 20px
                &:nth-child(6)
                    margin-bottom: 0

details > summary
  list-style: none
  cursor: pointer
  font-weight: 700
  opacity: .4
  &:hover
    color: hsl(14, 88%, 65%)
    opacity: 1
  & img
    margin-left: 25px
    @media screen and (max-width: $mobile)
        margin-left: 5px
details > summary::-webkit-details-marker
  display: none
details[open] > summary
    opacity: 1
    &:hover
        color: black
    & img
        transform: rotate(180deg)
</style>
