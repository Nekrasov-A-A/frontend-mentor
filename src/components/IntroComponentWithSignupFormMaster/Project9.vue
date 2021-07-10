<template>
  <div class="wrapper">
    <div class="box">
      <div class="box__info">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers thinking
          is invaluable
        </p>
      </div>
      <div class="box__form">
        <div class="item">
          Try it free 7 days <span>then 20$/mo.thereafter</span>
        </div>
        <form @submit.prevent="onSubmit" novalidate="true">
          <input
            type="text"
            v-model="firstName"
            placeholder="First Name"
            @focus="fistNameError = []"
            :class="{ active: fistNameError.length }"
          />
          <p v-if="fistNameError.length">{{ fistNameError[0] }}</p>
          <input
            type="text"
            v-model="lastName"
            placeholder="Last Name"
            @focus="lastNameError = []"
            :class="{ active: lastNameError.length }"
          />
          <p v-if="lastNameError.length">{{ lastNameError[0] }}</p>
          <input
            type="email"
            v-model="email"
            placeholder="Email Address"
            @focus="emailError = []"
            :class="{ active: emailError.length }"
          />
          <p v-if="emailError.length">{{ emailError[0] }}</p>
          <input
            type="password"
            v-model.trim="password"
            placeholder="Password"
            @focus="passwordError = []"
            :class="{ active: passwordError.length }"
          />
          <p v-if="passwordError.length">{{ passwordError[0] }}</p>
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <span
            >By clicking the button, you are agreeing to our
            <a
              href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5"
              target="_blank"
              >Terms and Services</a
            ></span
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    fistNameError: [],
    lastNameError: [],
    emailError: [],
    passwordError: [],
  }),
  methods: {
    onSubmit: function() {
      if (!this.firstName) {
        this.fistNameError.push("Can't be empty");
      } else if (this.checkText(this.firstName)) {
        this.fistNameError.push("Don't use a number, please");
      }
      if (!this.lastName) {
        this.lastNameError.push("Can't be empty");
      } else if (this.checkText(this.lastName)) {
        this.lastNameError.push("Don't use a number, please");
      }
      if (!this.email) {
        this.emailError.push("Can't be empty");
      } else if (!this.validEmail(this.email)) {
        this.emailError.push("Please give me valid email");
      }
      if (!this.password) {
        this.passwordError.push("Can't be empty");
      } else if (this.validPassword()) {
        this.passwordError.push("Only a number");
      }
    },
    checkText: function(value) {
      return /[0-9]/gi.test(value);
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword: function() {
      return /[a-b]/gi.test(this.password);
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap')



*
    box-sizing: border-box
.wrapper
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    font-family: 'Poppins'
    background: url('./images/bg-intro-desktop.png'), hsl(0, 100%, 74%)
    & .box
        margin: 0 10%
        display: flex
        justify-content: space-between
        align-items: center
        @media screen and (max-width: $ipad)
            flex-direction: column
            margin: 20% 5%
            text-align: center
        & .box__info
            width: 40%
            @media screen and (max-width: $ipad)
                width: 100%
                margin-bottom: 40px

            & h1
                color: hsla(255, 100%, 100%,.9)
                font-size: 46px
                font-weight: 700
            & p
                color: hsla(255, 100%, 100%,.8)
                line-height: 26px
        & .box__form
            width: 50%
            @media screen and (max-width: $ipad)
                width: 100%
            & .item
                color: hsl(255, 100%, 100%)
                text-align: center
                font-weight: 700
                margin-bottom: 20px
                background-color: hsl(248, 32%, 49%)
                padding: 20px
                border-radius: 8px
                & span
                    color: hsl(246, 25%, 77%)
                    font-weight: 400
            & form
                background-color: #fff
                border-radius: 8px
                padding: 40px
                @media screen and (max-width: $ipad)
                    padding: 20px
                & span
                    display: block
                    font-size: 12px
                    color: hsl(246, 25%, 77%)
                    text-align: center
                    & a
                        color: hsla(0, 100%, 74%, .85)
                        text-decoration: none
                        font-weight: 700
                & input
                    border-radius: 4px
                    width: 100%
                    padding: 15px 25px
                    margin-top: 15px
                    outline: none
                    border: 1px solid rgba(0,0,0,.3)
                    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                    &:nth-child(1)
                        margin-top: 0
                    &.active
                        border: 1px solid hsl(0, 100%, 74%)
                    &:focus
                        color: rgba(0,0,0, 1)
                        font-weight: 500
                        border: 1px solid rgba(0,0,0,1)
                & p
                    color: hsl(0, 100%, 74%)
                    font-weight: 400
                    font-size: 12px
                    line-height: 10px
                    text-align: right
                    margin-top: 5px
                & button
                    width: 100%
                    background-color: hsl(154, 59%, 51%)
                    border-radius: 8px
                    border: 1px solid hsl(154, 59%, 51%)
                    color: hsla(255, 100%, 100%, .7)
                    font-weight: 600
                    padding: 15px 0
                    margin-top: 15px
                    margin-bottom: 15px
                    transition: all .3s
                    &:hover
                        background-color: transparent
                        color: hsl(154, 59%, 51%)
                    &:active
                        transform: scale(0.98)
</style>
