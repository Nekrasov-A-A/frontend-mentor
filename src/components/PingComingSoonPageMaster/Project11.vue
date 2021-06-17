<template>
  <div class="wrapper">
    <header class="header">
      <img src="./images/logo.svg" alt="logo" />
      <h1>We are launching <span>soon!</span></h1>
      <p>Subscribe and get notified</p>
    </header>
    <section class="form">
      <form @submit.prevent="onSubmit" novalidate="true">
        <input
          type="email"
          v-model="email"
          placeholder="Your Email Address..."
          @focus="emailError = []"
          :class="{ active: emailError.length }"
        />
        <p v-if="emailError.length">{{ emailError[0] }}</p>
        <button type="submit">Notify Me</button>
      </form>
    </section>
    <section class="img">
      <img src="./images/illustration-dashboard.png" alt="image" />
    </section>
    <section class="social">
      <div class="wrap__icon">
        <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon" />
      </div>
      <div class="wrap__icon">
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
      </div>
      <div class="wrap__icon">
        <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
      </div>
    </section>
    <footer class="footer">
      <p>© Copyright Ping All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    emailError: [],
  }),
  methods: {
    onSubmit: function() {
      if (!this.email) {
        this.emailError.push("Can't be empty");
      } else if (!this.validEmail(this.email)) {
        this.emailError.push("Please give me valid email");
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


@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;600;700&display=swap')

$mobile: 375px

*
    box-sizing: border-box
    font-family: 'Libre Franklin'

.wrapper
    display: flex
    flex-direction: column
    margin: 0 34%
    align-items: center
    justify-content: center
    min-height: 100vh
    text-align: center
    @media screen and (max-width: $mobile)
      margin: 10% 10%
    & .header
        margin-bottom: 20px
        & img
            margin-bottom: 40px
            @media screen and (max-width: $mobile)
              width: 60px
        & h1
            color: hsl(0, 0%, 59%)
            font-weight: 300
            margin: 0
            letter-spacing: 1px
            @media screen and (max-width: $mobile)
              font-size: 1.3em
            & span
                color: hsl(209, 33%, 12%)
                font-weight: 700
                letter-spacing: 0
        & p
            color: black
            font-weight: 300
            font-size: 14px
            line-height: 12px
            @media screen and (max-width: $mobile)
              font-size: 13px
    & .form
        text-align: left
        width: 100%
        margin-bottom: 60px
        & form
            display: flex
            flex-wrap: wrap
            justify-content: center
            position: relative
            & input
                padding: 15px 20px
                border: 1px solid hsl(223, 100%, 88%)
                border-radius: 50px
                font-size: 14px
                outline: none
                width: 60%
                @media screen and (max-width: $mobile)
                  width: 100%
                  padding: 10px
                &::placeholder
                    color: rgba(0,0,0,.3)
                    font-size: 12px
                &.active
                    border: 1px solid hsl(354, 100%, 66%)
            & p
                color: hsl(354, 100%, 66%)
                margin: 0
                font-size: 12px
                position: absolute
                left: 13.5%
                top: 110%
                @media screen and (max-width: $mobile)
                  position: static
                  margin: 5px 0 10px 0
            & button
                border-radius: 50px
                border: 0
                padding: 0 45px
                margin-left: 20px
                color: rgba(255,255,255,1)
                background-color: hsl(223, 87%, 63%)
                font-weight: 300
                font-size: 15px
                box-shadow: -1px 1px 4px 2px rgba(0,0,0,.2)
                @media screen and (max-width: $mobile)
                  width: 100%
                  margin-left: 0
                  padding: 10px
                  margin-top: 10px
                &:hover
                    background-color: hsla(223, 87%, 63%,.85)
                &:active
                    transform: scale(1.03)
    & .img
        width: 100%
        margin-bottom: 40px
        & img
            width: 100%
    & .footer
        & p
            font-size: 10px
            color: hsl(0, 0%, 59%)
    & .social
        display: flex
        margin-bottom: 10px
        & .wrap__icon
          padding: 3px 4px
          border: 1px solid hsla(223, 87%, 63%,.3)
          border-radius: 50%
          margin-left: 10px
          &:hover
            background-color: hsl(223, 87%, 63%)
            & .icon
              color: #fff
          & .icon
              width: 15px
              height: 15px
              color: hsl(223, 87%, 63%)
</style>
