<template>
  <div class="wrapper">
    <div class="wrapper__bg">
      <header class="header">
        <img src="./images/logo.svg" alt="logo" />
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </header>
      <section class="intro">
        <img src="./images/illustration-intro.png" alt="img" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button>
          Get Started
        </button>
      </section>
      <section class="features">
        <div class="features__card">
          <img src="./images/icon-access-anywhere.svg" alt="access anywhere" />
          <h3>Access your files, anywhere</h3>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div class="features__card">
          <img src="./images/icon-security.svg" alt="security" />
          <h3>Security you can trust</h3>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div class="features__card">
          <img src="./images/icon-collaboration.svg" alt="collaboration" />
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div class="features__card">
          <img src="./images/icon-any-file.svg" alt="files" />
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </section>
      <section class="about">
        <img
          src="./images/illustration-stay-productive.png"
          alt="illustration-stay-productive"
        />
        <div class="about__info">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <button>
            See how Fylo works
            <font-awesome-icon icon="angle-right" />
          </button>
        </div>
      </section>
      <section class="testimonials">
        <div class="testimonials__card">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <img src="./images/profile-1.jpg" alt="profile" />
          <h3>
            Satish Patel <br />
            <span>Founder & CEO, Huddle</span>
          </h3>
        </div>
        <div class="testimonials__card">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <img src="./images/profile-2.jpg" alt="profile" />
          <h3>
            Bruce McKenzie <br />
            <span>Founder & CEO, Huddle</span>
          </h3>
        </div>
        <div class="testimonials__card">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <img src="./images/profile-3.jpg" alt="profile" />
          <h3>
            Iva Boyd <br />
            <span>Founder & CEO, Huddle</span>
          </h3>
        </div>
      </section>
      <footer class="footer">
        <div class="footer__card">
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <ValidationProvider
            v-slot="{ errors, invalid }"
            rules="email|required"
            class="form__control"
          >
            <label>
              <input
                type="email"
                v-model="email"
                :class="{ 'has-error': invalid }"
              />
              <button>Get Started For Free</button>
            </label>
            <span>{{ errors[0] }} </span>
          </ValidationProvider>
        </div>
        <div class="footer__image">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <ul class="grid">
          <li>
            <font-awesome-icon icon="map-marker-alt" class="map" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
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
        <ul class="icons">
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
      </footer>
    </div>
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

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap')

*
    font-family: 'Open Sans'
h1, h3
    font-family: 'Raleway'
    color:  hsl(0, 0%, 100%)
p
    line-height: 24px
    color:  hsla(0, 0%, 100%,.8)
.wrapper
    display: flex
    flex-wrap: wrap
    width: 100%
    font-size: 14px
    .wrapper__bg
        background: hsl(218, 28%, 13%)
        width: 100%
        .header
            display: flex
            justify-content: space-between
            padding: 70px 5%
            width: 100%
            align-items: center
            background-color: hsl(217, 28%, 15%)
            > img
              @media screen and (max-width: $mobile)
                height: 30px
            > ul
                display: flex
                > li
                    margin-left: 50px
                    color: hsla(0, 0%, 100%,.7)
                    cursor: pointer
                    @media screen and (max-width: $mobile)
                      margin-left: 15px
                    &:hover
                        color: hsl(0, 0%, 100%)
                        text-decoration: underline
        .intro
            width: 100%
            padding: 0 30% 150px
            display: flex
            flex-direction: column
            align-items: center
            text-align: center
            background:  url('./images/bg-curvy-desktop.svg') center bottom no-repeat, hsl(217, 28%, 15%)
            background-size: contain
            @media screen and (max-width: $mobile)
              padding: 0 5% 150px
              background:  url('./images/bg-curvy-mobile.svg') center bottom no-repeat, hsl(217, 28%, 15%)
              background-size: contain
            > img
                width: 100%
                margin-bottom: 20px
            > h1
                color: hsl(0, 0%, 100%)
                line-height: 40px
                margin-bottom: 20px
            > p
                color: hsla(0, 0%, 100%,.8)
                line-height: 24px
                padding: 0 15%
                margin-bottom: 30px
                @media screen and (max-width: $mobile)
                  padding: 0
            > button
                padding: 16px 90px
                color: hsl(0, 0%, 100%)
                font-weight: 700
                background: linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%))
                border-radius: 50px
                box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                &:hover
                    opacity: .87
                &:active
                    transform: scale(0.98)
        .features
            display: grid
            grid-template: repeat(2, 1fr) / repeat(2, 1fr)
            grid-gap: 100px 150px
            padding: 0 15%
            text-align: center
            margin-bottom: 120px
            @media screen and (max-width: $mobile)
              grid-template: repeat(4, 1fr) / 1fr
            .features__card
                > img
                    margin-bottom: 20px
                > h3
                    color:  hsl(0, 0%, 100%)
                    margin-bottom: 10px
        .about
            display: flex
            padding: 0 5%
            align-items: center
            margin-bottom: 120px
            @media screen and (max-width: $mobile)
              flex-direction: column
            > img
                width: 50%
                @media screen and (max-width: $mobile)
                  width: 100%
                  margin-bottom: 40px
            .about__info
                display: flex
                flex-direction: column
                justify-content: center
                padding-left: 60px
                width: 50%
                @media screen and (max-width: $mobile)
                  width: 100%
                  padding-left: 0
                > h1
                    padding-right: 50%
                    line-height: 40px
                    margin-bottom: 10px
                    @media screen and (max-width: $mobile)
                      padding: 0
                > p
                    display: block
                    margin-bottom: 10px
                > button
                    background-color: transparent
                    color: hsla(176, 68%, 64%,.8)
                    padding: 0 0 8px 0
                    border-bottom: 1px solid hsla(176, 68%, 64%,.8)
                    width: 153px
                    margin-top: 10px
                    display: flex
                    align-items: center
                    &:hover
                        color: hsl(0, 0%, 100%)
                        border-color: hsl(0, 0%, 100%)
                        & > *
                            color: hsla(176, 68%, 64%,.8)
                            background-color: hsl(0, 0%, 100%)

                    > *
                        margin-left: 10px
                        color: hsl(0, 0%, 100%)
                        padding: 2px
                        width: 15px
                        height: 15px
                        background-color: hsla(176, 68%, 64%,.8)
                        border-radius: 50%
                        margin-top: 2px
        .testimonials
            display: grid
            grid-template: 1fr / repeat(3, 1fr)
            padding: 40px 5% 350px
            grid-gap: 0 35px
            background: url('./images/bg-quotes.png') 4.5% 3px no-repeat
            @media screen and (max-width: $ipad)
              grid-template: repeat(3, 1fr) / 1fr
              grid-gap: 35px 0
            .testimonials__card
                display: flex
                flex-wrap: wrap
                align-items: center
                padding: 40px 20px 25px
                box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                background-color: hsl(219, 30%, 18%)
                border-radius: 8px
                > p
                    margin-bottom: 40px
                > img
                    width: 40px
                    height: 40px
                    border-radius: 50%
                    margin-right: 10px
                > h3
                    font-size: 1em
                    letter-spacing: 1px
                    > span
                        font-size: 12px
                        color: hsla(0, 0%, 100%,.6)
        .footer
            position: relative
            padding: 150px 0 100px 5%
            background-color: hsl(216, 53%, 9%)
            display: flex
            flex-wrap: wrap
            justify-content: space-between
            @media screen and (max-width: $ipad)
              flex-direction: column
              padding: 200px 5% 0
            .footer__card
                padding: 40px 70px 30px
                background-color: hsl(217, 28%, 15%)
                border-radius: 8px
                box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                width: 60%
                position: absolute
                top: 0
                left: 20%
                text-align: center
                transform: translate(0, -60%)
                @media screen and (max-width: $ipad-pro)
                  width: 70%
                  left: 15%
                @media screen and (max-width: $ipad)
                  width: 90%
                  left: 5%
                @media screen and (max-width: $mobile)
                  padding: 40px 5% 30px
                > h1
                    margin-bottom: 30px
                > p
                    margin-bottom: 30px
                    padding: 0 5%
                .form__control
                    position: relative
                    width: 100%
                    height: 100%
                    > span
                        position: absolute
                        bottom: -35px
                        left: 30px
                        color: red
                        @media screen and (max-width: $mobile)
                          bottom: 50%
                    > label
                      width: 100%
                      > input
                          margin-right: 30px
                          padding: 14px 30px
                          border-radius: 50px
                          width: 60%
                          border: 0
                          box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                          &:active, &:focus
                              outline: none
                          @media screen and (max-width: $ipad)
                            width: 50%
                          @media screen and (max-width: $mobile)
                            width: 100%
                            margin-bottom: 40px
                      > button
                          padding: 15px 30px
                          background: linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%))
                          border-radius: 50px
                          color: hsl(0, 0%, 100%)
                          font-weight: 700
                          box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                          @media screen and (max-width: $mobile)
                            width: 100%
                          &:hover
                              opacity: .87
            > .footer__image
              margin-bottom: 30px
              width: 100%
            > ul
              display: flex
              flex-direction: column
              color: hsla(0, 0%, 100%,.8)
              margin-right: 5%
              @media screen and (max-width: $ipad)
                margin-bottom: 40px
              > li
                margin-bottom: 30px
                cursor: pointer
                &:hover
                  color: hsl(0, 0%, 100%)
            > ul.grid
              display: grid
              grid-template: 'a b' 'a c'
              width: 50%
              grid-gap: 0 90px
              color: hsla(0, 0%, 100%,.8)
              height: 100%
              margin-right: 10%
              @media screen and (max-width: $ipad)
                grid-template: 'a' 'b' 'c'
                width: 100%
              > li
                display: flex
                align-items: center
                cursor: default
                &:hover
                  color: hsla(0, 0%, 100%,.8)
                &:first-child
                  align-self: flex-start
                > *
                  margin-right: 10px
                  &.map
                    align-self: flex-start

                &:nth-child(1)
                  grid-area: a
                &:nth-child(2)
                  grid-area: b
                &:nth-child(3)
                  grid-area: c
            > ul.icons
              display: flex
              flex-direction: row
              @media screen and (max-width: $ipad)
                justify-content: center
              > *
                padding: 5px
                border: 1px solid hsl(0, 0%, 100%)
                border-radius: 50%
                color: hsl(0, 0%, 100%)
                width: 25px
                height: 25px
                display: flex
                align-items: center
                justify-content: center
                margin-right: 10px
                cursor: pointer
                &:hover
                  color: hsl(176, 68%, 64%)
                  border-color: hsl(176, 68%, 64%)
</style>
