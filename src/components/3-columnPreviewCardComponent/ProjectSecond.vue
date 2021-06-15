<template>
  <div class="wrapper">
    <div class="box">
      <div class="box__item">
        <img src="./images/icon-sedans.svg" alt="icon" />
        <h1>SEDANS</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next round trip
        </p>
        <button>Learn More</button>
      </div>
      <div class="box__item">
        <img src="./images/icon-suvs.svg" alt="icon" />
        <h1>SUVS</h1>
        <p>
          Take an SUV for its spacious interior, power and versatility. Perfect
          for your next family location and off-road adventures.
        </p>
        <button>Learn More</button>
      </div>
      <div class="box__item">
        <img src="./images/icon-luxury.svg" alt="icon" />
        <h1>LUXURY</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style
        </p>
        <button>Learn More</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap')

$mobile-screen: 375px

.wrapper
    display: flex
    align-items: center
    justify-content: center
    margin: 0 20%
    min-height: 100vh
    @media screen and (max-width: $mobile-screen)
      margin: 0 5%
    & .box
        border-radius: 16px
        display: flex
        box-shadow: 1px 1px 16px 6px rgba(0,0,0,.2)
        overflow: hidden
        color: hsl(0, 0%, 95%)
        font-family: 'Lexend Deca'
        @media screen and (max-width: $mobile-screen)
          flex-direction: column
        & .box__item
            text-align: left
            padding: 50px
            &:nth-child(1)
              background-color: hsl(31, 77%, 52%)
            &:nth-child(2)
              background-color: hsl(184, 100%, 22%)
            &:nth-child(3)
              background-color: hsl(179, 100%, 13%)
            & p
              color: hsla(0, 0%, 100%, 0.75)
              font-size: 15px
              margin-bottom: 75px
            & h1
              font-family: 'Big Shoulders Display'
            &:nth-child(1) button
              color: hsl(31, 77%, 52%)
            &:nth-child(2) button
              color: hsl(184, 100%, 22%)
            &:nth-child(3) button
              color: hsl(179, 100%, 13%)
            & button
              padding: 10px 25px
              border-radius: 50px
              font-size: 15px
              border: 2px solid hsl(0, 0%, 95%)
              &:hover
                color: hsl(0, 0%, 95%)
                background-color: transparent
</style>
