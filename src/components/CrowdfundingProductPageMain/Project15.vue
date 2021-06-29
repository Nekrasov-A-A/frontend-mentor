<template>
  <div class="wrapper">
    <PopUpSelected
      v-if="isShowPopUp"
      @closePopUp="closePopUp"
      @openGratitudePopUp="openGratitudePopUp"
      :isCheckedAverage="isCheckedAverage"
      :isCheckedVip="isCheckedVip"
    />
    <GratitudePopUp
      v-if="isSubscribe"
      @closeGratitudePopUp="closeGratitudePopUp"
    />
    <header class="header">
      <nav class="nav">
        <div class="image">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <font-awesome-icon
          icon="bars"
          :class="{ 'show-icon': isMobile }"
          class="header__icon"
          v-if="!isOpen"
          @click="isOpen = isOpen ? false : true"
        />
        <font-awesome-icon
          icon="times"
          v-else
          @click="isOpen = isOpen ? false : true"
          :class="{ 'show-icon': isMobile }"
          class="header__icon"
        />
        <ul :class="{ 'show-ul': isOpen }">
          <li>About</li>
          <li>Discover</li>
          <li>Get started</li>
        </ul>
      </nav>
    </header>
    <section class="wrapper__item">
      <section class="intro">
        <div class="image__wrap">
          <img src="./images/logo-mastercraft.svg" alt="logo-mastercraft" />
        </div>
        <div class="intro__item">
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div class="intro_tools">
          <button @click="openPopUp">Back this project</button>
          <button
            class="btn"
            :class="{ active: isActiveButton }"
            @click="toggleButton"
          >
            <div class="icon__wrapper">
              <font-awesome-icon icon="bookmark" class="icon" />
            </div>
            {{ buttonValue }}
          </button>
        </div>
      </section>
      <section class="target">
        <div class="target__info">
          <ul>
            <li>
              <h1>${{ currentSumView }}</h1>
              <p>of ${{ totalGoalView }} backed</p>
            </li>
            <li>
              <h1>{{ currentBackersView }}</h1>
              <p>total backers</p>
            </li>
            <li>
              <h1>56</h1>
              <p>days left</p>
            </li>
          </ul>
        </div>
        <div class="band">
          <div
            class="band__progress"
            :style="{ width: (currentSum / totalGoal) * 100 + '%' }"
          ></div>
        </div>
      </section>
      <section class="about">
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, hepling you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftmanship, the simplicity of design creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under the stand.
        </p>
        <div class="about__card">
          <h3>Bamboo Stand <span>Pledge $25 or more</span></h3>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you'll be added to a special
            Backer member list
          </p>
          <div class="card__item">
            <h2>101 <span>left</span></h2>
            <button @click="openPopUp(1)">Select Reward</button>
          </div>
        </div>
        <div class="about__card">
          <h3>Black Edition Stand<span>Pledge $75 or more</span></h3>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You'll be added to our Backer member list. Shipping is
            included.
          </p>
          <div class="card__item">
            <h2>64 <span>left</span></h2>
            <button @click="openPopUp(2)">Select Reward</button>
          </div>
        </div>
        <div class="about__card" :class="{ 'not-active': isDisabled }">
          <h3>Mahogany Special Edition<span>Pledge $200 or more</span></h3>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You'll be added to our Backer member list.
            Shipping is included.
          </p>
          <div class="card__item">
            <h2>0 <span>left</span></h2>
            <button :disabled="isDisabled">Out of stock</button>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import PopUpSelected from "./PopUpSelected.vue";
import GratitudePopUp from "./GratitudePopUp.vue";
export default {
  data: () => ({
    isOpen: false,
    isActiveButton: false,
    buttonValue: "Bookmark",
    isDisabled: true,
    isShowPopUp: false,
    isCheckedAverage: false,
    isCheckedVip: false,
    isSubscribe: false,
    currentSum: 89914,
    currentBackers: 5007,
    totalGoal: 100000,
  }),
  components: { PopUpSelected, GratitudePopUp },
  computed: {
    isMobile: function() {
      return this.windowWidth > 415 ? false : true;
    },
    currentSumView: function() {
      return this.addCommaToNumber(this.currentSum);
    },
    currentBackersView: function() {
      return this.addCommaToNumber(this.currentBackers);
    },
    totalGoalView: function() {
      return this.addCommaToNumber(this.totalGoal);
    },
  },
  methods: {
    toggleButton: function() {
      this.buttonValue =
        this.buttonValue === "Bookmark" ? "Bookmarked" : "Bookmark";
      this.isActiveButton = this.isActiveButton ? false : true;
    },
    addCommaToNumber: function(value) {
      if (value.toString().length <= 3) {
        return value;
      } else {
        let arr = value.toString().split("");
        arr.splice(arr.length - 3, 0, ",");
        return arr.join("");
      }
    },
    closePopUp: function() {
      this.isShowPopUp = false;
      this.isCheckedAverage = false;
      this.isCheckedVip = false;
    },
    openPopUp: function(value) {
      switch (value) {
        case 1:
          this.isCheckedAverage = true;
          break;
        case 2:
          this.isCheckedVip = true;
          break;
      }
      this.isShowPopUp = true;
    },
    closeGratitudePopUp: function() {
      this.isSubscribe = false;
    },
    openGratitudePopUp: function(value) {
      this.currentSum += +value;
      this.currentBackers++;

      this.isSubscribe = true;
      this.closePopUp();
    },
  },
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap')

$ipad: 768px
$mobile: 415px
$ipad-pro: 1024px

*
    padding: 0
    margin: 0
    box-sizing: border-box
    font-family: 'Commissioner'
.wrapper
    display: flex
    flex-wrap: wrap
    position: relative
    & .header
        background: url('./images/image-hero-desktop.jpg') no-repeat
        background-size: cover
        min-height: 40vh
        width: 100%
        padding: 60px 10% 0
        @media screen and (max-width: $mobile)
            padding: 5% 5% 0
            background: url('./images/image-hero-mobile.jpg') no-repeat

        & .nav
            display: flex
            width: 100%
            justify-content: space-between
            align-items: center
            position: relative
            & .header__icon
                display: none
                color: hsl(0, 0%, 100%)
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                cursor: pointer
                width: 30px
                height: 30px
                @media screen and (max-width: $mobile)
                    display: flex
            & .image
                cursor: pointer
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                & img
            & ul
                display: flex
                list-style: none
                width: 30%
                justify-content: space-between
                &.show-ul
                    display: flex
                    flex-direction: column
                    position: absolute
                    z-index: 10
                    top: 200%
                    left: 0
                    margin: 0
                    width: 100%
                    background-color: hsl(0, 0%, 100%)
                    border-radius: 8px
                    box-shadow: 1px 1px 2px 4px rgba(0,0,0,.1)
                    & li:nth-child(3)
                        &::after
                            content: ''
                            width: 0
                            height: 0
                        &:hover::after
                            content: ''
                            width: 0
                            height: 0
                    & li
                        color: hsla(0, 0%, 0%,.9)
                        width: 100%
                        padding: 20px
                        margin: 0
                        font-weight: 700
                        position: relative
                        &::after
                            content: ''
                            width: 100%
                            position: absolute
                            height: 1px
                            background-color: hsla(0, 0%, 0%,.3)
                            bottom: 0
                            left: 0
                        &:hover::after
                            content: ''
                            width: 100%
                            position: absolute
                            height: 1px
                            background-color: hsla(0, 0%, 0%,.3)
                            bottom: 0
                            left: 0

                @media screen and (max-width: $ipad-pro)
                    width: 40%
                @media screen and (max-width: $ipad)
                    width: 55%
                @media screen and (max-width: $mobile)
                    display: none
                & li
                    margin-left: 40px
                    color: hsl(0, 0%, 100%)
                    position: relative
                    font-weight: 500
                    &:hover
                        cursor: pointer
                    &:hover::after
                        content: ''
                        position: absolute
                        bottom: 0
                        left: 0
                        width: 100%
                        height: 1px
                        background-color: hsl(0, 0%, 100%)
    & .wrapper__item
        width: 100%
        display: flex
        flex-direction: column
        justify-content: center
        padding: 0 20%
        transform: translateY(-15vh)


        @media screen and (max-width: $ipad-pro)
          padding: 0 10%
        @media screen and (max-width: $mobile)
          padding: 0 5%
        @media screen and (max-width: $ipad)
          padding: 0 10%
        & .intro
            display: flex
            width: 100%
            position: relative
            background-color: hsl(0, 0%, 100%)
            border-radius: 8px
            box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
            padding: 60px 10% 40px
            flex-wrap: wrap
            & .image__wrap
                position: absolute
                width: 100%
                top: -8%
                left: 0
                display: flex
                justify-content: center
                & img
            & .intro__item
                width: 100%
                text-align: center
                margin-bottom: 40px
                & h1
                    color: hsl(0, 0%, 0%)
                    margin-bottom: 20px
                    cursor: default
                    @media screen and (max-width: $mobile)
                      font-size: 1.7em
                & p
                    color: hsl(0, 0%, 48%)
                    font-weight: 500
                    font-size: 18px
                    cursor: default
            & .intro_tools
                width: 100%
                display: flex
                justify-content: space-between
                align-items: center
                & button:nth-child(1)
                    padding: 18px 40px
                    background-color: hsl(176, 50%, 47%)
                    border-radius: 50px
                    border: 2px solid transparent
                    color: hsl(0, 0%, 100%)
                    font-weight: 500
                    font-size: 18px
                    transition: all .3s
                    cursor: pointer
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                    &:active
                        outline: none
                        transform: scale(0.98)
                    &:hover
                        color: hsl(176, 50%, 47%)
                        border: 2px solid hsl(176, 50%, 47%)
                        background-color: transparent
                    &:focus
                      outline: none
                    @media screen and (max-width: $mobile)
                      padding: 15px
                & button.btn
                    padding: 20px 40px 20px 90px
                    border-radius: 50px
                    font-size: 18px
                    font-weight: 500
                    border: 0
                    position: relative
                    background-color: hsla(0, 0%, 48%,.2)
                    color: hsl(0, 0%, 48%)
                    cursor: pointer
                    user-select: none
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
                    &:focus, &:active
                      outline: none
                    @media screen and (max-width: $mobile)
                      padding: 20px 0
                      width: 63.5px
                      overflow: hidden
                    &:active
                        outline: none
                    &.active
                        color: hsl(176, 50%, 47%)
                        & .icon__wrapper
                            background-color: hsl(176, 50%, 47%)
                            & .icon
                                color: hsl(0,0%,100%)
                    & .icon__wrapper
                        position: absolute
                        top: 0
                        left: 0
                        height: 100%
                        background-color: #272727
                        padding: 0 25px
                        border-radius: 50%
                        display: flex
                        align-items: center
                        justify-content: center
                        & .icon
                            color: hsla(0, 0%, 48%,.7)
        & .target
          border-radius: 8px
          box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
          margin-top: 20px
          padding: 60px
          margin-bottom: 20px
          @media screen and (max-width: $mobile)
            padding: 40px
          & .target__info
            margin-bottom: 40px
            & ul
              list-style: none
              display: flex
              @media screen and (max-width: $mobile)
                flex-direction: column
                align-items: center
                text-align: center


              & li:nth-child(3)
                @media screen and (max-width: $mobile)
                  margin-bottom: 0
              & li:nth-child(2)
                position: relative
                &::after
                  content: ''
                  width: 1px
                  height: 100%
                  position: absolute
                  top: 0
                  right: 25%
                  background-color: hsla(0, 0%, 0%,.3)
                  @media screen and (max-width: $ipad)
                    right: -6%
                  @media screen and (max-width: $mobile)
                    width: 25%
                    height: 1px
                    top: -15px
                    right: 37%
                &::before
                  content: ''
                  width: 1px
                  height: 100%
                  position: absolute
                  top: 0
                  left: -25%
                  background-color: hsla(0, 0%, 0%,.3)
                  @media screen and (max-width: $ipad)
                    left: 6.5%
                  @media screen and (max-width: $mobile)
                    width: 25%
                    height: 1px
                    top: calc(100% + 25px)
                    left: 37%
              & li
                width: 33%
                cursor: default

                @media screen and (max-width: $ipad)
                  display: flex
                  flex-direction: column
                  align-items: center
                @media screen and (max-width: $mobile)
                  width: 100%
                  margin-bottom: 40px
                & h1
                  color: hsl(0, 0%, 0%)
                  margin-bottom: 5px
                & p
                  color: hsla(0, 0%, 0%,.6)
          & .band
            width: 100%
            height: 15px
            border-radius: 50px
            background-color: hsla(0, 0%, 48%,.2)
            overflow: hidden
            > .band__progress
              background-color: hsl(176, 50%, 47%)
              height: 100%

        & .about
          border-radius: 8px
          box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
          padding: 60px
          margin-bottom: 20px
          cursor: default
          @media screen and (max-width: $mobile)
            padding: 40px 5%
          & > h3
            margin-bottom: 54px
            font-weight: 700
            font-size: 24px
            @media screen and (max-width: $mobile)
              margin-bottom: 34px
          & p
            color: hsl(0, 0%, 48%)
            font-weight: 500
            line-height: 28px
            &:nth-child(3)
              margin-top: 48px
              margin-bottom: 54px
              @media screen and (max-width: $mobile)
                margin-top: 26px
                margin-bottom: 34px
          .about__card:last-child
            margin-bottom: 0
          .about__card
            padding: 5%
            border: 1px solid hsla(0, 0%, 0%,.3)
            border-radius: 8px
            margin-bottom: 20px
            &.not-active
              opacity: .5
            & > h3
              display: flex
              justify-content: space-between
              width: 100%
              align-items: center
              @media screen and (max-width: $mobile)
                flex-direction: column
                align-items: flex-start
              & > span
                color: hsl(176, 50%, 47%)
                font-size: 16px
                font-weight: 500
                @media screen and (max-width: $mobile)
                  margin-top: 10px
            p
              margin: 20px 0
            .card__item
              display: flex
              align-items: center
              justify-content: space-between
              @media screen and (max-width: $mobile)
                flex-direction: column
                align-items: flex-start
              h2
                font-size: 2em
                display: flex
                align-items: center
                @media screen and (max-width: $mobile)
                  margin-bottom: 20px
                span
                  font-size: 16px
                  color: hsla(0, 0%, 0%,.3)
                  margin-left: 10px
                  font-weight: 500
              button
                padding: 15px 25px
                border-radius: 50px
                border: 0
                background-color: hsl(176, 50%, 47%)
                color: hsl(0, 0%, 100%)
                font-weight: 700
                cursor: pointer
                width: 25%
                @media screen and (max-width: $ipad)
                  width: 40%
                @media screen and (max-width: $mobile)
                  width: 60%
                &:active, &:focus
                  outline: none
                &:active
                  transform: scale(0.98)
                &:hover
                  background-color: hsl(176, 72%, 28%)
                &[disabled]
                  background-color: hsla(0, 0%, 0%,.3)
                  cursor: default
</style>
