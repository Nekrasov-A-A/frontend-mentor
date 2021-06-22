<template>
  <div class="pop-up__wrapper" @click.self="closePopUp">
    <div class="pop-up__content">
      <font-awesome-icon
        icon="times"
        class="content__icon"
        @click="closePopUp"
      />
      <h1>Back this project</h1>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div class="content__card " :class="{ 'selected-card': isCheckedBasic }">
        <div class="card__header">
          <h3 :class="{ selected: isCheckedBasic }" @click="isChecked(0)">
            Pledge with no reward <span></span>
          </h3>
          <h2 :style="{ visibility: 'hidden' }">101 <span>left</span></h2>
        </div>
        <p>
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
        <div class="card__pledge basic" v-if="isCheckedBasic">
          <div class="card__pledge__tools ">
            <button @click="openGratitudePopUp">Continue</button>
          </div>
        </div>
      </div>
      <div class="content__card" :class="{ 'selected-card': isCheckedAverage }">
        <div class="card__header">
          <h3 :class="{ selected: isCheckedAverage }" @click="isChecked(1)">
            Bamboo Stand <span>Pledge $25 or more</span>
          </h3>
          <h2>101 <span>left</span></h2>
        </div>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <div class="card__pledge" v-if="isCheckedAverage">
          <p>Enter your pledge</p>
          <div class="card__pledge__tools">
            <label><input type="number" value="25"/></label>
            <button @click="openGratitudePopUp">Continue</button>
          </div>
        </div>
      </div>
      <div class="content__card" :class="{ 'selected-card': isCheckedVip }">
        <div class="card__header">
          <h3 :class="{ selected: isCheckedVip }" @click="isChecked(2)">
            Black Edition Stand <span>Pledge $75 or more</span>
          </h3>
          <h2>64 <span>left</span></h2>
        </div>
        <p>
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <div class="card__pledge" v-if="isCheckedVip">
          <p>Enter your pledge</p>
          <div class="card__pledge__tools">
            <label><input type="number" value="75"/></label>
            <button @click="openGratitudePopUp">Continue</button>
          </div>
        </div>
      </div>
      <div class="content__card content-blur">
        <div class="card__header">
          <h3>Mahogany Special Edition<span>Pledge $200 or more</span></h3>
          <h2>0 <span>left</span></h2>
        </div>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isCheckedAverage", "isCheckedVip"],
  data: () => ({
    isSelected: false,
    isCheckedBasic: false,
  }),
  methods: {
    isChecked: function(number) {
      switch (number) {
        case 0:
          this.isCheckedBasic = this.isCheckedBasic ? false : true;
          this.isCheckedAverage = false;
          this.isCheckedVip = false;
          break;
        case 1:
          this.isCheckedAverage = this.isCheckedAverage ? false : true;
          this.isCheckedBasic = false;
          this.isCheckedVip = false;
          break;
        case 2:
          this.isCheckedVip = this.isCheckedVip ? false : true;
          this.isCheckedAverage = false;
          this.isCheckedBasic = false;
          break;
        default:
      }
    },
    closePopUp: function() {
      this.$emit("closePopUp");
    },
    openGratitudePopUp: function() {
            this.$emit('openGratitudePopUp')
        }
  },
};
</script>

<style lang="sass" scoped>

$ipad: 768px
$mobile: 415px
$ipad-pro: 1024px

*
    box-sizing: border-box
    margin: 0
    padding: 0
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

.pop-up__wrapper
    min-height: 100vh
    width: 100%
    position: fixed
    background-color: hsla(0, 0%, 0%,.1)
    z-index: 10
    display: flex
    align-items: center
    justify-content: center

    .pop-up__content
        width: 60%
        height: 90vh
        background-color: #fff
        box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
        border-radius: 8px
        position: relative
        padding: 60px
        cursor: default
        overflow: auto
        -ms-overflow-style: none
        scrollbar-width: none
        &::-webkit-scrollbar
          width: 0
          height: 0
        @media screen and (max-width: $mobile)
          width: 90%
          padding: 40px 5%
        .content__icon
            position: absolute
            top: 40px
            right: 40px
            width: 30px
            height: 30px
            color: hsl(0, 0%, 48%)
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
            cursor: pointer
            @media screen and (max-width: $mobile)
              right: 5%
              

        > h1
            margin-bottom: 20px
            @media screen and (max-width: $mobile)
              font-size: 1.7em
        > p
            margin-bottom: 30px
            font-weight: 500
            color: hsl(0, 0%, 48%)
            @media screen and (max-width: $mobile)
              line-height: 28px


        .content__card
            padding: 30px 20px
            border: 1px solid hsla(0, 0%, 48%,.7)
            border-radius: 8px
            display: flex
            flex-direction: column
            margin-bottom: 20px
            overflow: hidden
            &.content-blur
              opacity: 0.5
              user-select: none
              > .card__header
                h3
                  cursor: default
                  &:hover
                    color: black
                    &::before
                      border: 1px solid hsla(0, 0%, 0%,.3)
                    > span
                      color: hsla(176, 50%, 47%,.7)
            &.selected-card
                border: 1px solid hsl(176, 50%, 47%)
            .card__header
                display: flex
                justify-content: space-between
                width: 100%
                height: 30px
                align-items: center
                position: relative
                margin-bottom: 15px
                @media screen and (max-width: $mobile)
                  height: 46px
                > h3
                    cursor: pointer
                    position: relative
                    display: flex
                    align-items: center
                    user-select: none
                    @media screen and (max-width: $mobile)
                      flex-wrap: wrap
                      margin-left: 52px
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                      height: 100%
                    &::before
                        content: ''
                        width: 30px
                        height: 30px
                        border-radius: 50%
                        background-color: transparent
                        border: 1px solid hsla(0, 0%, 0%,.3)
                        margin-right: 20px
                        display: flex
                        justify-content: center
                        @media screen and (max-width: $mobile)
                          position: absolute
                          top: 6px
                          left: -50px
                    &:hover
                        color: hsl(176, 50%, 47%)

                        & > span
                           color: hsl(176, 50%, 47%)

                        &::before
                            border: 1px solid hsl(176, 50%, 47%)
                    &.selected
                        &::before
                            content: '●'
                            font-size: 44px
                            color: hsl(176, 50%, 47%)
                            text-align: center
                            line-height: 20px

                    > span
                        margin-left: 20px
                        color: hsla(176, 50%, 47%,.7)
                        font-weight: 500
                        @media screen and (max-width: $mobile)
                          margin-left: 0
                          margin-top: 5px
                > h2
                    cursor: default
                    @media screen and (max-width: $mobile)
                      display: none
                    > span
                        margin-left: 10px
                        font-size: 1rem
                        color: hsl(0, 0%, 48%)
                        font-weight: 500
            > p
                margin-left: 52px
                line-height: 28px
                color: hsla(0, 0%, 48%,.7)
                font-weight: 500
                @media screen and (max-width: $mobile)
                  margin-left: 0

            .card__pledge
                display: flex
                align-items: center
                justify-content: space-between
                padding: 30px 0 0 0
                margin-top: 20px
                position: relative
                @media screen and (max-width: $mobile)
                  flex-wrap: wrap
                  justify-content: center
                &.basic
                  justify-content: flex-end
                  @media screen and (max-width: $mobile)
                    justify-content: center
                &::before
                    content: ''
                    width: 150%
                    height: 1px
                    background-color: hsla(0, 0%, 0%,.3)
                    position: absolute
                    top: 0
                    left: -10%
                > p
                    color: hsla(0, 0%, 48%,.7)
                    font-weight: 500
                    @media screen and (max-width: $mobile)
                      margin-bottom: 20px
                .card__pledge__tools
                  & > label
                      position: relative
                      margin-right: 20px
                      cursor: pointer
                      &::before
                          content: '$'
                          position: absolute
                          top: 0
                          left: 20%
                          color: hsla(0, 0%, 48%,.7)
                          font-weight: 500
                      input[type="number"]::-webkit-outer-spin-button,
                      input[type="number"]::-webkit-inner-spin-button
                          -webkit-appearance: none
                      input[type='number'],
                      input[type="number"]:hover,
                      input[type="number"]:focus
                          appearance: none
                          -moz-appearance: textfield
                      > input
                          border: 1px solid hsla(0, 0%, 0%,.3)
                          border-radius: 50px
                          padding: 15px 30px
                          width: 100px
                          text-align: center
                          cursor: pointer
                          caret-color: hsl(176, 50%, 47%)
                          &:hover
                              border: 1px solid  hsl(176, 50%, 47%)
                          &[value]
                              color: hsl(0, 0%, 0%)
                              font-weight: 700
                          &:active, &:focus
                              outline: none
                              border: 1px solid  hsl(176, 50%, 47%)
                  & button
                      width: 110px
                      padding: 16px 0
                      border-radius: 50px
                      text-align: center
                      border: 0
                      background-color: hsl(176, 50%, 47%)
                      color: hsl(0,0%,100%)
                      font-weight: 500
                      cursor: pointer
                      &:hover
                          background-color: hsl(176, 72%, 28%)
</style>
