<template>
  <div class="wrapper">
    <h1>our pricing</h1>
    <div class="toggle__price">
      Annually
      <button
        :class="{ toggle: !isMonthly }"
        @click="isMonthly = isMonthly ? false : true"
      ></button>
      Monthly
    </div>
    <div class="cards" id="naxuishel">
      <label v-for="(item, index) in dataCards" :key="index">
        <input
          type="radio"
          v-model="checked"
          :value="item.name"
          :style="{ display: 'none' }"
        />
        <div class="card">
          <h3>{{ item.name }}</h3>
          <h1>
            <span>$</span
            >{{ isMonthly ? item.monthlyPrice : item.annuallyPrice }}
          </h1>
          <ul>
            <li v-for="(info, index) in item.additionalInfo" :key="index">
              {{ info }}
            </li>
          </ul>
          <button>Learn more</button>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dataCards: [
      {
        name: "Basic",
        monthlyPrice: "19.99",
        annuallyPrice: "199.99",
        additionalInfo: [
          "500 GB Storage",
          "2 Users Allowed",
          "Send up to 3 GB",
        ],
      },
      {
        name: "Professional",
        monthlyPrice: "24.99",
        annuallyPrice: "249.99",
        additionalInfo: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
      },
      {
        name: "Master",
        monthlyPrice: "39.99",
        annuallyPrice: "399.99",
        additionalInfo: [
          "2 TB Storage",
          "10 Users Allowed",
          "Send up to 20 GB",
        ],
      },
    ],
    isMonthly: true,
    checked: "Professional",
  }),
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap')



*
    font-family: 'Montserrat'


.wrapper
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    min-height: 100vh
    background: url('./images/bg-top.svg') right top no-repeat, url('./images/bg-bottom.svg') left bottom no-repeat, hsl(240, 78%, 98%)
    @media screen and (max-width: $ipad)
      padding: 60px 0
      background: url('./images/bg-top.svg') 200px -34px no-repeat
    > h1
        text-transform: capitalize
        color: hsl(233, 13%, 49%)
        margin-bottom: 40px
    .toggle__price
        display: flex
        align-items: center
        font-size: 15px
        color: hsl(234, 14%, 74%)
        margin-bottom: 60px
        > button
            border: 0
            padding: 15px 30px
            background-color: hsl(237, 63%, 64%)
            border-radius: 50px
            margin: 0 20px
            cursor: pointer
            position: relative
            &:active, &:focus
                outline: none
            &:hover
                opacity: .7
            &::before
                content: ''
                position: absolute
                height: 24px
                width: 24px
                background-color: #fff
                border-radius: 50%
                top: 3px
                left: calc(100% - 24px - 3px)
            &.toggle::before
                left: 3px
    > .cards
      display: grid
      grid-template: repeat(1, 1fr) / repeat(3, 1fr)
      width: 100%
      padding: 0 15%
      align-items: center
      grid-gap: 0 1px
      @media screen and (max-width: $ipad-pro)
        padding: 0 5%
      @media screen and (max-width: $ipad)
        grid-template: repeat(3, 1fr) / repeat(1, 1fr)
        grid-gap: 30px 0
      > label
        .card
          background-color: #fff
          border-radius: 8px
          display: flex
          flex-direction: column
          align-items: center
          padding: 30px
          color: hsl(232, 13%, 33%)
          cursor: pointer
          box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
          > *
            cursor: default
          > h3
            margin-bottom: 15px
          > h1
            font-size: 3em
            display: flex
            align-items: center
            margin-bottom: 30px
            > span
              font-size: .6em
              margin-right: 8px
          > ul
            list-style: none
            display: flex
            flex-direction: column
            margin-bottom: 30px
            width: 100%
            > li
              padding: 20px 0
              text-align: center
              width: 100%
              &:nth-child(1), &:nth-child(3)
                border-top: 1px solid #dbdbdb
                border-bottom: 1px solid #dbdbdb
          > button
            cursor: pointer
            border: 1px solid transparent
            padding: 15px 0
            letter-spacing: 2px
            width: 100%
            color: #fff
            font-size: .8em
            border-radius: 8px
            text-transform: uppercase
            background: linear-gradient(90deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))no-repeat
            &:hover
              color: hsl(237, 63%, 64%)
              background: transparent
              border-color: hsl(237, 63%, 64%)
        input:checked + .card
          background: linear-gradient(90deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))
          padding: 50px 30px
          color: #fff
          box-shadow: 1px 1px 4px 2px hsla(237, 63%, 64%,.1)
          & > button
            background: #fff
            color: hsl(237, 63%, 64%)
            &:hover
              border-color: #fff
              color: #fff
              background: transparent
</style>
