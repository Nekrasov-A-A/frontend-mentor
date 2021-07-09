<template>
  <div class="wrapper">
    <div class="cards_grid">
      <div class="card">
        <img src="./images/icon-sedans.svg" alt="sedans" />
        <h1>sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button>Learn More</button>
      </div>
      <div class="card">
        <img src="./images/icon-suvs.svg" alt="suvs" />
        <h1>suvs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button>Learn More</button>
      </div>
      <div class="card">
        <img src="./images/icon-luxury.svg" alt="luxury" />
        <h1>luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
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

@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap')

*
  font-family: 'Lexend Deca'

.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  background-color: hsl(0, 0%, 95%)
  font-size: 15px
  .cards_grid
    display: grid
    width: 60%
    grid-template: 1fr / repeat(3, 1fr)
    border-radius: 8px
    overflow: hidden
    @media screen and (max-width: $ipad-pro)
      width: 80%
    @media screen and (max-width: $ipad)
      padding: 40px 5%
      width: 100%
      grid-template: repeat(3, 1fr) / 1fr
    .card
      padding: 50px
      &:nth-child(1)
        background-color: hsl(31, 77%, 52%)
        > button
          color: hsl(31, 77%, 52%)
      &:nth-child(2)
        background-color: hsl(184, 100%, 22%)
        > button
          color: hsl(184, 100%, 22%)
      &:nth-child(3)
        background-color: hsl(179, 100%, 13%)
        > button
          color: hsl(179, 100%, 13%)
      > img
        margin-bottom: 30px
      > h1
        font-family: 'Big Shoulders Display'
        text-transform: uppercase
        margin-bottom: 30px
        color: hsl(0, 0%, 95%)
      > p
        line-height: 24px
        margin-bottom: 30px
        color: hsla(0, 0%, 100%, 0.75)
      > button
        border-radius: 50px
        padding: 15px 30px
        border: 1px solid transparent
        &:hover
          background-color: transparent
          color: hsl(0, 0%, 95%)
          border-color: hsl(0, 0%, 95%)
</style>
