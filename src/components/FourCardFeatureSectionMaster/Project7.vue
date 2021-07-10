<template>
  <div class="wrapper">
    <div class="intro">
      <h1>
        Reliable, efficient delivery
        <br />
        <span>Powered by Technology</span>
      </h1>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
    <div class="grid__cards">
      <div class="card">
        <h3>Supervisor</h3>
        <p>Monitors activity to identify project roadblocks</p>
        <img src="./images/icon-supervisor.svg" alt="supervisor" />
      </div>
      <div class="card">
        <h3>Team Builder</h3>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
        <img src="./images/icon-team-builder.svg" alt="team-builder" />
      </div>

      <div class="card">
        <h3>Karma</h3>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src="./images/icon-karma.svg" alt="karma" />
      </div>

      <div class="card">
        <h3>Calculator</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src="./images/icon-calculator.svg" alt="calculator" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap')

*
  font-family: 'Poppins'

.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  font-size: 15px
  background-color: #fafafa
  flex-wrap: wrap
  padding: 80px 0
  .intro
    text-align: center
    margin-bottom: 50px
    > h1
      color: #3e3e48
      font-weight: 200
      line-height: 40px
      margin-bottom: 10px
      > span
        color: #4f5062
        font-weight: 700
    > p
      color: #bababc
      line-height: 24px
      padding: 0 20%
      @media screen and (max-width: $mobile)
        padding: 0 5%
  .grid__cards
    display: grid
    grid-template-areas: '. b .' 'a b d' 'a c d' '. c .'
    grid-template-rows: repeat(4, 1fr)
    grid-template-columns: repeat(3, 1fr)
    width: 80%
    grid-gap: 30px
    @media screen and (max-width: $ipad-pro)
      width: 90%
    @media screen and (max-width: $ipad)
      grid-template: repeat(2, 1fr) / repeat(2, 1fr)
      grid-template-areas: 'a b' 'c d'
    @media screen and (max-width: $mobile)
      grid-template: repeat(4, 1fr) / 1fr
      grid-template-areas: 'a' 'b' 'c' 'd'
    .card
      border-radius: 8px
      background-color: #fff
      box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
      padding: 30px
      display: flex
      flex-direction: column
      border-top: 5px solid red
      > h3
        color: #454452
        margin-bottom: 15px
      > p
        color: #d0cfd4
        margin-bottom: 20px
        line-height: 24px
      > img
        width: 66px
        height: 66px
        align-self: flex-end
      &:nth-child(1)
        grid-area: a
        border-color: #40d5d3
      &:nth-child(2)
        grid-area: b
        border-color: #ea5551
      &:nth-child(3)
        grid-area: c
        border-color: #fcae4a
      &:nth-child(4)
        grid-area: d
        border-color: #559cec
</style>
