<template>
  <div class="wrapper">
    <div class="grid-wrap">
      <div class="info">
        <h1>Join our community</h1>
        <h3>30-day, hassle-free money back guarantee</h3>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honind their
          skills.
        </p>
      </div>
      <div class="sub">
        <h3>Monthly Subscription</h3>
        <h1>$29 <span>per month</span></h1>
        <p>Full access for less than 1$ a day</p>
        <button>Sign up</button>
      </div>
      <div class="about">
        <h1>Why Us</h1>
        <p>
          Tutorials by industry experts <br />
          Peer & expert code review <br />
          Coding exercises <br />
          Access to our GitHub repos <br />
          Community forum <br />
          Flashcard decks <br />
          New videos every week
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap')

$mobile: 375px

*
    box-sizing: border-box
    font-family: 'Karla'

.wrapper
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    background-color: hsl(204, 43%, 93%)

    & .grid-wrap
        width: 40%
        display: flex
        flex-wrap: wrap
        @media screen and (max-width: $mobile)
            width: 100%
            margin: 20% 5%
        & .info
            background-color: #fff
            padding: 40px
            & h1
                color: hsl(179, 62%, 43%)
                margin: 0
                font-size: 24px
                letter-spacing: -1px
            & h3
                color: hsla(71, 73%, 54%,.9)
                margin: 0
                margin-top: 20px
                font-size: 18px
            & p
                color: hsl(218, 22%, 67%)
                font-size: 14px
                line-height: 24px
        & .sub
            padding: 40px
            background-color: hsl(179, 62%, 43%)
            color: white
            width: 50%
            @media screen and (max-width: $mobile)
                width: 100%
            & p
                font-size: 14px
                color: rgba(255,255,255,.8)
            & h3
                color: rgba(255,255,255,.9)
            & h1
                display: flex
                align-items: center
                & span
                    color: rgba(255,255,255,.5)
                    font-size: 14px
                    margin-left: 15px
            & button
                border: 1px solid hsl(71, 73%, 54%)
                padding: 15px 0
                width: 100%
                border-radius: 8px
                background-color: hsl(71, 73%, 54%)
                color: rgba(255,255,255,.9)
                font-weight: 700
                transition: all .3s
                margin-top: 20px
                &:hover
                    background-color: transparent
                &:active
                    transform: scale(0.97)
        & .about
            background-image: linear-gradient(90deg, hsla(179, 62%, 43%,.75), hsl(179, 62%, 43%))
            padding: 40px
            width: 50%
            @media screen and (max-width: $mobile)
                width: 100%
            & h1
                color: rgba(255,255,255,.8)
                font-size: 20px
            & p
                color: hsl(204, 43%, 93%)
                line-height: 22px
</style>
