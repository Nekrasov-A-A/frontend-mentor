<template>
  <div class="wrapper">
    <div class="info">
      <h1>
        Reliable, effecient delivery
        <span>Powered by Technology</span>
      </h1>
      <p>
        Our Artificial intelligence powered tools use millions of project data
        point to ensure that your project is successfull
      </p>
    </div>
    <div class="cards">
      <div class="cards-item">
        <h1>Supervisor</h1>
        <p>Monitors activity to identify project roadblocks</p>
        <img src="./images/icon-supervisor.svg" alt="loop" />
      </div>
      <div class="cards-wrapper">
        <div class="cards-item">
          <h1>Team Builder</h1>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img src="./images/icon-team-builder.svg" alt="loop" />
        </div>
        <div class="cards-item">
          <h1>Karma</h1>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src="./images/icon-karma.svg" alt="loop" />
        </div>
      </div>
      <div class="cards-item">
        <h1>Calculator</h1>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src="./images/icon-calculator.svg" alt="loop" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap')

$mobile: 375px

.wrapper
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    min-height: 100vh
    font-family: 'Poppins'
    background-color: hsl(0, 0%, 98%)
    & .info
        margin-bottom: 40px
        text-align: center
        display: flex
        flex-direction: column
        width: 30%
        @media screen and (max-width: $mobile)
            width: 100%
            margin: 10% 5% 40px
        & h1
            color: hsl(229, 6%, 66%)
            line-height: 40px
            font-weight: 200
            margin: 0
            & span
                color: hsl(234, 12%, 34%)
                font-weight: 700
        & p
            color: hsl(229, 6%, 66%)
            font-weight: 200
    & .cards
        display: flex
        align-items: center
        justify-content: center
        margin: 0 10%
        @media screen and (max-width: $mobile)
            margin: 0 5%
            flex-direction: column
        & > .cards-item:nth-child(1)
            border-top: 5px solid hsl(180, 62%, 55%)
        & > .cards-item:nth-child(3)
            border-top: 5px solid hsl(212, 86%, 64%)
        & .cards-item
            border-radius: 8px
            box-shadow: 1px 1px 16px 2px rgba(0,0,0,.1)
            padding: 40px
            display: flex
            flex-direction: column
            width: 300px
            @media screen and (max-width: $mobile)
                width: 80%
                margin-bottom: 20px
            & h1
                color: hsl(234, 12%, 34%)
                font-size: 1.5em
                margin: 0
            & p
                font-size: 14px
                color: hsl(229, 6%, 66%)
            & img
                height: 60px
                width: 60px
                align-self: flex-end
        & .cards-wrapper
            @media screen and (max-width: $mobile)
                display: flex
                flex-direction: column
                align-items: center
                width: 80%
                margin: 0
                & > .cards-item
                    @media screen and (max-width: $mobile)
                        width: 100%
            & > .cards-item:nth-child(1)
                border-top: 5px solid hsl(0, 78%, 62%)
                margin: 0 30px 30px 30px
                @media screen and (max-width: $mobile)
                    margin: 0 0 20px 0
            & > .cards-item:nth-child(2)
                border-top: 5px solid hsl(34, 97%, 64%)
                margin: 0 30px
                @media screen and (max-width: $mobile)
                    margin: 0 0 20px 0
</style>
