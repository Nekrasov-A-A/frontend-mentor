<template>
  <div class="wrapper">
    <div class="card">
      <div class="logo">
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div class="info">
        <h1>
          <span>WE'RE</span>
          COMING SOON
        </h1>
        <p>
          Hello fellow shappers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form @submit.prevent="onSubmit" novalidate="true">
          <input
            type="email"
            placeholder="Email Address"
            v-model="emailValue"
            ref="input"
            :class="{ active: errors.length }"
          />
          <button type="submit">
            <img src="./images/icon-arrow.svg" alt="arrow-icon" />
          </button>
          <img
            v-if="errors.length"
            src="./images/icon-error.svg"
            alt="icon-error"
          />
        </form>
        <p v-if="errors.length">{{ errors[0] }}</p>
      </div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    emailValue: "",
    errors: [],
  }),
  methods: {
    onSubmit: function() {
      this.errors = [];
      if (!this.emailValue) {
        this.errors.push("This field can't be empty");
        this.$refs.input.focus();
      } else if (!this.validEmail(this.emailValue)) {
        this.errors.push("Pleace provide a valid email");
        this.$refs.input.focus();
      } else {
        this.emailValue = "";
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap')

$mobile: 375px

.wrapper
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    font-family: 'Josefin Sans'
    overflow: hidden
    & .card
        display: flex
        width: 100%
        position: relative
        @media screen and (max-width: $mobile)
            flex-direction: column
            text-align: center
        & .image
            background-image: url('./images/hero-desktop.jpg')
            height: 100vh
            width: 95%
            @media screen and (max-width: $mobile)
                background-image: url('./images/hero-mobile.jpg')
                background-repeat: no-repeat
                width: 100%
                height: 250px
        & .logo
            position: absolute
            top: 13%
            left: 15%
            @media screen and (max-width: $mobile)
                position: static
                padding: 10% 5%
                align-self: start
        & .info
            display: flex
            flex-direction: column
            background: url('./images/bg-pattern-desktop.svg'),  linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))
            padding: 15% 15% 5%
            @media screen and (max-width: $mobile)
                order: 2
                padding: 20% 5%

            & h1
                font-size: 64px
                letter-spacing: 8px
                color: hsl(0, 6%, 24%)
                margin: 0
                line-height: 64px
                & span
                    font-weight: 300
                    color: hsl(0, 36%, 70%)
            & p
                 color: hsl(0, 36%, 70%)
                 line-height: 26px
                 &:nth-child(4)
                    color: hsl(0, 93%, 68%)
            & form
                position: relative
                display: flex
                margin-top: 20px
                & > img
                    width: 30px
                    height: 30px
                    position: absolute
                    top: 20%
                    right: 25%
                & > button
                    padding: 16px 45px
                    border-radius: 50px
                    background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))
                    border: 0
                    position: absolute
                    right: 0
                    top: -7.5%
                    outline: none
                    z-index: 5
                    &:hover
                        background: linear-gradient(135deg, hsl(0, 80%, 86%),white)
                        box-shadow: 1px 1px 8px 1px rgba(0,0,0,.2)
                    &:active
                        transform: scale(1.03)
                & > input
                    border: 1px solid hsla(0, 36%, 70%, .5)
                    border-radius: 50px
                    padding: 15px 20px
                    background-color: transparent
                    outline: none
                    color: hsl(0, 36%, 70%)
                    display: flex
                    align-items: center
                    width: 100%
                    &::placeholder
                        color: hsla(0, 36%, 70%, .5)
                        font-weight: 400
                    &.active
                        border: 1px solid hsl(0, 93%, 68%)
</style>
