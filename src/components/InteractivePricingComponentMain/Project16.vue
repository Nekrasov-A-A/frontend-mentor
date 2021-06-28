<template>
  <div class="wrapper">
    <header class="header">
      <h1>Simple, traffic-based, pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
    </header>
    <section class="card__wrapper">
      <header class="card__header">
        <h2>{{ trialData[+rangeValue].pageviews }} PAGEVIEWS</h2>
        <h1>
          {{ "$" + (isMonthly ? monthlyViews : yearlyViews) }}
          <span>{{ "/ " + (isMonthly ? "month" : "year") }}</span>
        </h1>
        <label :value="rangeValue">
          <div class="circle">
            <font-awesome-icon icon="caret-left" class="icon" />
            <font-awesome-icon icon="caret-right" class="icon" />
          </div>
          <input type="range" min="0" max="4" step="1" v-model="rangeValue" />
        </label>
        <div class="card__tools">
          Monthly Billing
          <div
            class="tools__toggle"
            :class="{ active: !isMonthly }"
            @click="isMonthly = isMonthly ? false : true"
          ></div>
          Yearly Billing
          <span>{{ discount + "%" }} </span>
        </div>
      </header>
      <footer class="card__description">
        <ul>
          <li>
            <font-awesome-icon icon="check" class="li__icon" />
            Unlimited websites
          </li>
          <li>
            <font-awesome-icon icon="check" class="li__icon" />100% data
            ownership
          </li>
          <li>
            <font-awesome-icon icon="check" class="li__icon" />Email reports
          </li>
        </ul>
        <button>Start my trial</button>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMonthly: true,
    discount: 25,
    rangeValue: "2",
    trialData: [
      { pageviews: "10K", payment: "8" },
      { pageviews: "50K", payment: "12" },
      { pageviews: "100K", payment: "16" },
      { pageviews: "500K", payment: "24" },
      { pageviews: "1M", payment: "36" },
    ],
  }),
  computed: {
    monthlyViews: function() {
      return this.trialData[+this.rangeValue].payment + ".00";
    },
    yearlyViews: function() {
      return ((+this.trialData[+this.rangeValue].payment * 12) / 4) * 3 + ".00";
    },
  },
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap')

$mobile: 415px
$ipad: 768px
$ipad-pro: 1024px


*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Manrope'
    user-select: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

.wrapper
    display: flex
    justify-content: center
    align-items: flex-start
    flex-wrap: wrap
    min-height: 100vh
    background: url("./images/bg-pattern.svg") no-repeat, hsl(230, 100%, 99%)
    background-size: contain
    padding: 5% 30%
    @media screen and (max-width: $ipad-pro)
        background-size: 200% 60%
        padding: 15% 10%
    @media screen and (max-width: $ipad)
        padding: 15% 5%
    @media screen and (max-width: $mobile)
        background-size: 200% 45%
        padding: 15% 5%
    .header
        padding: 10% 5%
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        background: url('./images/pattern-circles.svg') no-repeat
        background-position: center center
        text-align: center
        @media screen and (max-width: $ipad-pro)
            padding:  5%
        @media screen and (max-width: $ipad)
            padding: 5%
        @media screen and (max-width: $mobile)
            padding: 15% 5%
        & > h1
            margin-bottom: 15px
            color: #333855
            @media screen and (max-width: $mobile)
                font-size: 1.3em
        & > p
            color: hsl(225, 20%, 60%)
            line-height: 28px
            @media screen and (max-width: $mobile)
                padding: 0 10%
    .card__wrapper
        background-color: #fff
        border-radius: 8px
        box-shadow: 1px 1px 2px 4px rgba(0,0,0,.1)
        display: flex
        width: 100%
        flex-wrap: wrap
        padding: 5%
        overflow: hidden
        @media screen and (max-width: $mobile)
            padding: 40px 5%
        .card__header
            display: flex
            align-items: center
            justify-content: space-between
            flex-wrap: wrap
            width: 100%
            margin-bottom: 40px
            @media screen and (max-width: $mobile)
                text-align: center
                justify-content: center
            & > h2
                color: hsl(225, 20%, 60%)
                font-weight: 800
                font-size: 1.1em
                letter-spacing: 2px
            & > h1
                font-size: 2em
                font-weight: 800
                display: flex
                align-items: center
                color: hsl(227, 35%, 25%)
                @media screen and (max-width: $mobile)
                    order: 3
                    margin-bottom: 40px
                    margin-top: 20px
                > span
                    font-size: 16px
                    margin-left: 5px
                    color: hsl(225, 20%, 60%)
            & > label
                width: 100%
                height: 10px
                margin-bottom: 40px
                background: hsl(224, 65%, 95%)
                border-radius: 50px
                position: relative
                margin-top: 40px
                &::before
                    content: ''
                    width: 0
                    height: 10px
                    border-radius: 50px
                    background: #a1f4ec
                    position: absolute
                    top: 0
                    left: 0
                &[value='1']
                    & .circle
                        left: calc(25% - 12px)
                    &::before
                        width: 25%
                &[value='2']
                    & .circle
                        left: calc(50% - 24px)
                    &::before
                        width: 50%
                &[value='3']
                    & .circle
                        left: calc(75% - 36px)
                    &::before
                        width: 75%
                &[value='4']
                    & .circle
                        left: calc(100% - 48px)
                    &::before
                        width: 100%

                & .circle
                    width: 50px
                    height: 50px
                    position: absolute
                    background-color: #19d3c8
                    top: -200%
                    left: 0
                    border-radius: 50%
                    display: flex
                    align-items: center
                    justify-content: space-around
                    & > .icon
                        color: #fff
                        width: 25px
                        height: 25px

                & > input
                    -webkit-appearance: none
                    width: 100%
                    background: transparent
                    border-radius: 50px
                    position: absolute
                    left: 0
                    &::-webkit-slider-thumb
                        -webkit-appearance: none
                    &:focus
                        outline: none
                    &::-ms-track
                        width: 100%
                        cursor: pointer
                        background: transparent
                        border-color: transparent
                        color: transparent
                    &::-webkit-slider-thumb
                        -webkit-appearance: none
                        height: 50px
                        width: 50px
                        border-radius: 50%
                        background: transparent
                        cursor: grab
                        margin-top: -20px
                        box-shadow: 0px 16px 26px -4px rgba(25,211,200,.5)
                    &::-moz-range-thumb
                        border: 0
                        height: 50px
                        width: 50px
                        border-radius: 50%
                        background: #19d3c8
                        cursor: grab
                        box-shadow: 0px 16px 26px -4px rgba(25,211,200,.5)
                        transform: translateY(-5.5px)
                    &::-ms-thumb
                        border: 0
                        height: 50px
                        width: 50px
                        border-radius: 50%
                        background: #19d3c8
                        cursor: grab
                        box-shadow: 0px 16px 26px -4px rgba(25,211,200,.5)
                    &::-webkit-slider-runnable-track
                        height: 10px
                        width: 100%
                        cursor: pointer
                        border-radius: 50px
                        border: 0
            & > .card__tools
                display: flex
                justify-content: flex-end
                align-items: center
                padding: 0 20px
                width: 100%
                color: hsl(225, 20%, 60%)
                font-weight: 600
                @media screen and (max-width: $mobile)
                    padding: 0
                    font-size: .7em
                    order: 4
                & > .tools__toggle
                    cursor: pointer
                    width: 50px
                    padding: 15px 30px
                    background-color: hsl(223, 50%, 87%)
                    border-radius: 50px
                    position: relative
                    margin: 5px 20px 0
                    display: flex
                    align-items: center
                    transition: all 0.3s
                    @media screen and (max-width: $mobile)
                        margin: 3.5px 10px 0
                    &:hover
                        background-color: hsl(174, 77%, 80%)
                    &::before
                        content: ''
                        width: 20px
                        height: 20px
                        background-color: #fff
                        left: 5%
                        position: absolute
                        border-radius: 50%
                        animation: toggleBack .5s forwards
                    &.active
                        &::before
                            animation: toggle .5s forwards

                & > span
                    padding:  5px
                    background-color: hsl(14, 92%, 95%)
                    border-radius: 50px
                    font-size: 14px
                    color: hsl(15, 100%, 70%)
                    margin-left: 10px
                    font-weight: 600
                    @media screen and (max-width: $mobile)
                        margin-left: 5px
                        font-size: 12px
                    &::after
                        content: 'discount'
                        @media screen and (max-width: $mobile)
                            content: ''
                    &::before
                        content: ''
                        @media screen and (max-width: $mobile)
                            content: '-'
        & .card__description
            display: flex
            justify-content: space-between
            align-items: center
            width: 100%
            padding: 40px 0 0 0
            position: relative
            @media screen and (max-width: $mobile)
                flex-direction: column
                text-align: center
            &::before
                width: 120%
                content: ''
                height: 1px
                position: absolute
                background-color: rgba(0,0,0,.2)
                top: 0
                left: -10%
            & > ul
                display: flex
                flex-direction: column
                justify-content: center
                list-style: none
                @media screen and (max-width: $mobile)
                    margin-bottom: 40px
                > li
                    margin-bottom: 15px
                    color: hsl(225, 20%, 60%)
                    font-weight: 600
                    font-size: 15px
                    &:last-child
                        margin-bottom: 0
                    > .li__icon
                        margin-right: 15px
                        color: #3fb5a5
            & > button
                background-color: #293356
                padding: 15px 40px
                border: 0
                border-radius: 50px
                color: hsla(0, 0%, 100%,.7)
                font-weight: 800
                cursor: pointer
                &:hover
                    color: hsl(0, 0%, 100%)
                &:active, &:focus
                    outline: none
                &:active
                    transform: scale(0.98)


@keyframes toggle
    0%
        left: 5%
    100%
        left: 60%
@keyframes toggleBack
    0%
        left:60%
    100%
        left: 5%
</style>
