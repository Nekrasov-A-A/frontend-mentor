<template>
  <div class="wrapper">
    <div class="card">
      <img src="./images/illustration-box-desktop.svg" alt="box" />
      <div class="card__image">
        <img
          :src="
            isIpad
              ? require('./images/illustration-woman-online-mobile.svg')
              : require('./images/illustration-woman-online-desktop.svg')
          "
          alt="woman"
        />
      </div>
      <div class="card__FAQ">
        <h1>FAQ</h1>
        <label>
          <input type="radio" v-model="checked" value="one" />
          <h3>
            How many team members can I invite?
            <font-awesome-icon icon="angle-down" />
          </h3>
          <p v-if="checked === 'one'">
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </p>
          <hr />
        </label>
        <label>
          <input type="radio" v-model="checked" value="two" />
          <h3>
            What is the maximum file upload size?
            <font-awesome-icon icon="angle-down" />
          </h3>
          <p v-if="checked === 'two'">
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </p>
          <hr />
        </label>
        <label>
          <input type="radio" v-model="checked" value="three" />
          <h3>
            How do I reset my password?
            <font-awesome-icon icon="angle-down" />
          </h3>
          <p v-if="checked === 'three'">
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </p>
          <hr />
        </label>
        <label>
          <input type="radio" v-model="checked" value="four" />
          <h3>
            Can I cancel my subscription?
            <font-awesome-icon icon="angle-down" />
          </h3>
          <p v-if="checked === 'four'">
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </p>
          <hr />
        </label>
        <label>
          <input type="radio" v-model="checked" value="five" />
          <h3>
            Do you provide additional support?
            <font-awesome-icon icon="angle-down" />
          </h3>
          <p v-if="checked === 'five'">
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </p>
          <hr />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: "two",
  }),
  computed: {
    isIpad: function() {
      return this.windowWidth > 768 ? false : true;
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap')

*
  font-family: 'Kumbh Sans'
p
  font-size: 14px
  line-height: 24px
  color: #a1a0a5
.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  background-image: linear-gradient(90deg, hsl(273, 75%, 66%), hsl(240, 73%, 65%))
  @media screen and (max-width: $ipad)
    padding: 30% 5% 80px
  .card
    width: 70%
    background-color: #fff
    border-radius: 16px
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
    display: flex
    position: relative
    @media screen and (max-width: $ipad-pro)
      width: 80%
    @media screen and (max-width: $ipad)
      width: 100%
      flex-direction: column
      padding: 0 5%
    > img
      position: absolute
      left: -90px
      top: 60%
      transform: translate(0, -50%)
      z-index: 2
      @media screen and (max-width: $ipad-pro)
        top: 55%
      @media screen and (max-width: $ipad)
        display: none
    .card__image
      width: 45%
      overflow: hidden
      display: flex
      align-items: center
      background: url('./images/bg-pattern-desktop.svg') right center no-repeat
      background-size: 200% 200%
      @media screen and (max-width: $ipad-pro)
        background-size: 190% 180%
      @media screen and (max-width: $ipad)
        width: 100%
        background: url('./images/bg-pattern-mobile.svg') center bottom no-repeat
        background-size: 80% 120%
        overflow: visible
        position: relative
        padding-top: 30%
        margin-bottom: 30px

      > img
        width: 100%
        transform: translate(-15%, 0)
        @media screen and (max-width: $ipad)
          position: absolute
          left: 20%
          top: -110%
          width: 80%
    .card__FAQ
      width: 55%
      padding: 60px 0
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      @media screen and (max-width: $ipad)
        width: 100%
        padding: 0 0 20px
      > h1
        margin-bottom: 40px
        color: hsl(238, 29%, 16%)
        display: block
        width: 70%
        text-align: left
        @media screen and (max-width: $ipad)
          text-align: center
          width: 100%
      > label
        display: flex
        flex-direction: column
        cursor: pointer
        margin-bottom: 15px
        width: 70%
        > input
          display: none
        > h3
          display: flex
          justify-content: space-between
          color: #5c5a65
          font-weight: 400
          font-size: 16px
          margin-bottom: 15px
          &:hover
            color: hsl(14, 88%, 65%)
          > *
           margin-right: 15px
           color: hsl(14, 88%, 65%)
        > p
          margin-bottom: 15px
        > hr
        > input:checked + h3
          font-weight: 700
          color: #262533
          > *
           transform: rotate(180deg)
</style>
