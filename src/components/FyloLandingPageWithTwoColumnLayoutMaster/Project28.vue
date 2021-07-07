<template>
  <div class="wrapper">
    <header class="header">
      <img src="./images/logo.svg" alt="logo" />
      <ul>
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
      </ul>
    </header>
    <section class="intro">
      <div class="intro__info">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <ValidationProvider
          v-slot="{ errors, invalid, dirty }"
          rules="email|required"
          class="form__control"
        >
          <label>
            <input
              type="email"
              v-model="email"
              :class="{ 'has-error': dirty && invalid }"
              placeholder="Email..."
            />
            <button>Get Started</button>
          </label>
          <span>{{ errors[0] }} </span>
        </ValidationProvider>
      </div>
      <img src="./images/illustration-1.svg" alt="illustration" />
    </section>
    <section class="about">
      <div class="about__info">
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <span
          >See how Fylo works
          <font-awesome-icon icon="angle-right" />
        </span>
        <div class="info__card">
          <font-awesome-icon icon="quote-left" />
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div class="card__user">
            <img src="./images/avatar-testimonial.jpg" alt="avatar" />
            <h3>
              Kyle Burton <br />
              <span>Founder & CEO, Huddle</span>
            </h3>
          </div>
        </div>
      </div>
      <img src="./images/illustration-2.svg" alt="illustration" />
    </section>
    <section class="started">
      <div class="started__info">
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <ValidationProvider
        v-slot="{ errors, invalid, dirty }"
        rules="email|required"
        class="form__control"
      >
        <label>
          <input
            type="email"
            v-model="email"
            :class="{ 'has-error': dirty && invalid }"
            placeholder="Email..."
          />
          <button>Get Started For Free</button>
        </label>
        <span>{{ errors[0] }} </span>
      </ValidationProvider>
    </section>
    <footer class="footer">
      <img src="./images/footer-logo.svg" alt="footer-logo" />
      <nav>
        <ul>
          <li>
            <font-awesome-icon icon="phone-alt" />
            +1-543-123-4567
          </li>
          <li>
            <font-awesome-icon icon="envelope" />
            example@huddle.com
          </li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <ul>
          <li>
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  data: () => ({
    email: "",
  }),
  components: { ValidationProvider },
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700&display=swap')

*
    font-family: 'Open Sans'
h1, h2
    font-family: 'Raleway'
    color: hsl(243, 87%, 12%)
p
    line-height: 24px
    color: hsl(243, 87%, 12%)
.wrapper
    display: flex
    flex-wrap: wrap
    .header
        display: flex
        justify-content: space-between
        padding: 60px 5%
        width: 100%
        align-items: center

        > img
            @media screen and (max-width: $mobile)
                height: 20px
        > ul
            display: flex
            > li
                margin-left: 60px
                font-family: 'Raleway'
                @media screen and (max-width: $mobile)
                    margin-left: 20px
                    font-size: 14px
    .intro
        display: flex
        padding: 0 5% 200px
        align-items: center
        background: url('./images/bg-curve-desktop.svg') center bottom no-repeat
        background-size: contain
        @media screen and (max-width: $ipad)
            flex-wrap: wrap
            background: url('./images/bg-curve-mobile.svg') center bottom no-repeat
            background-size: contain
        > img
            width: 50%
            @media screen and (max-width: $ipad)
                width: 100%
                order: -1
                margin-bottom: 40px
        > .intro__info
            width: 50%
            padding-right: 10%
            @media screen and (max-width: $ipad-pro)
                padding-right: 0
            @media screen and (max-width: $ipad)
                width: 100%
                padding: 0
                text-align: center
            > h1
                line-height: 44px
                margin-bottom: 15px
            > p
                margin-bottom: 15px
            > .form__control
                width: 100%
                position: relative
                > label
                    width: 100%
                    > input
                        margin-right: 15px
                        padding: 14px 20px
                        border-radius: 4px
                        border: 1px solid hsl(0, 0%, 75%)
                        width: calc(100% - 250px)
                        &:active, &:focus
                            outline: none
                        @media screen and (max-width: $ipad)
                            width: 100%
                            margin-bottom: 40px
                        &.has-error
                            border-color: red
                    > button
                        background-color: hsl(224, 93%, 58%)
                        color: #f5ffff
                        padding: 15px 60px
                        border-radius: 4px
                        @media screen and (max-width: $ipad)
                            width: 100%
                        &:hover
                            opacity: .87
                > span
                    position: absolute
                    top: 40px
                    left: 20px
                    color: red
    .about
        width: 100%
        display: flex
        padding: 60px 5% 80px
        background-color: #f9f8fe
        align-items: center
        @media screen and (max-width: $ipad)
            flex-wrap: wrap
        > img
            width: 50%
            @media screen and (max-width: $ipad)
                width: 100%
                order: -1
                margin-bottom: 40px
        .about__info
            padding-right: 5%
            @media screen and (max-width: $ipad)
                padding-right: 0
                text-align: center

            > h1
                margin-bottom: 20px

            > p
                display: block
                margin-bottom: 15px
                padding-right: 20%
                @media screen and (max-width: $ipad)
                    padding-right: 0
                    text-align: left
            > span
                color: hsl(170, 45%, 43%)
                padding-bottom: 5px
                border-bottom: 1px solid hsl(170, 45%, 43%)
                cursor: pointer
                @media screen and (max-width: $ipad)
                    display: inline-block
                    margin-top: 20px


                &:hover
                    opacity: .87
                > *
                    width: 20px
                    height: 20px
                    padding: 5px
                    background-color: hsl(170, 45%, 43%)
                    border-radius: 50%
                    transform: translate(0, 2px)
                    margin-left: 5px
                    color: #fff

            .info__card
                padding: 30px
                background-color: #fff
                margin-top: 40px
                border-radius: 8px
                box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                width: 60%
                @media screen and (max-width: $ipad)
                    width: 80%
                    margin: 40px 10% 0
                    text-align: left
                > p
                    margin: 20px 0
                .card__user
                    display: flex
                    align-items: center
                    > img
                        width: 40px
                        height: 40px
                        border-radius: 50%
                        margin-right: 10px
                    > h3
                        letter-spacing: 1px
                        font-size: 16px
                        > span
                            font-size: .8em
                            letter-spacing: normal
                            color: hsl(238, 22%, 44%)
    .started
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        padding: 100px 5% 70px
        width: 100%
        background-color: hsl(238, 22%, 44%)
        .started__info
            width: 40%
            @media screen and (max-width: $ipad)
                width: 100%
                text-align: center
            > h1, > p
                color: #fff
            > p
                opacity: .8
            > h1
                margin-bottom: 20px
        > .form__control
            width: 40%
            position: relative
            @media screen and (max-width: $ipad)
                width: 100%
                padding: 30px 5% 0
            > label
                display: flex
                flex-wrap: wrap
                width: 100%
                > input
                    width: 100%
                    margin-bottom: 30px
                    padding: 14px 20px
                    border: 1px solid hsl(0, 0%, 75%)
                    border-radius: 8px
                    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                    &:active, &:focus
                        outline: none
                    &.has-error
                        border-color: red
                > button
                    padding: 15px 60px
                    border-radius: 4px
                    color: #fff
                    background-color: hsl(224, 93%, 58%)
                    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                    &:hover
                        opacity: .7
                    @media screen and (max-width: $ipad)
                        width: 100%
            > span
                position: absolute
                top: 52px
                left: 15px
                color: red
    .footer
        width: 100%
        background-color: hsl(243, 87%, 12%)
        padding: 100px 10% 60px 5%
        @media screen and (max-width: $ipad)
            padding-bottom: 0
        > img
            margin-bottom: 30px
        > nav
            display: flex
            justify-content: space-between
            @media screen and (max-width: $ipad)
                flex-direction: column
                align-items: flex-start
            > ul
                color: #fff
                opacity: .8
                @media screen and (max-width: $ipad)
                    margin-bottom: 20px
                &:nth-child(2), &:nth-child(3)
                    > li
                        cursor: pointer
                        &:hover
                            color: hsl(238, 22%, 44%)
                &:last-child
                    display: flex
                    @media screen and (max-width: $ipad)
                        align-self: center
                    > li
                        > *
                            width: 30px
                            height: 30px
                            padding: 6px
                            border: 1px solid #fff
                            border-radius: 50%
                            cursor: pointer
                            margin-left: 5px
                            &:hover
                                border-color: hsl(224, 93%, 58%)
                                color: hsl(224, 93%, 58%)
                > li
                    margin-bottom: 20px
                    > *
                        margin-right: 10px
</style>
