<template>
  <div class="wrapper">
    <header class="header">
      <img src="./images/logo.svg" alt="logo" />
      <button>Try It Free</button>
    </header>
    <section class="intro">
      <div class="intro__info">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button class="btn">Get Started For Free</button>
      </div>
      <img src="./images/screen-mockups.svg" alt="mockups" />
      <div class="intro__counter">
        <div class="counter__card">
          <img src="./images/icon-communities.svg" alt="communities" />
          <h1>
            1.4k+
            <br />
            <span>
              Communities Formed
            </span>
          </h1>
        </div>
        <div class="counter__card">
          <img src="./images/icon-messages.svg" alt="messages" />
          <h1>
            2.7m+
            <br />
            <span>
              Messages Sent
            </span>
          </h1>
        </div>
      </div>
    </section>
    <section class="cards">
      <div class="card">
        <div class="card__info">
          <h1>Grow Together</h1>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <img src="./images/illustration-grow-together.svg" alt="illustration" />
      </div>
      <div class="card">
        <div class="card__info">
          <h1>Flowing Conversations</h1>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
        <img
          src="./images/illustration-flowing-conversation.svg"
          alt="illustration"
        />
      </div>
      <div class="card">
        <div class="card__info">
          <h1>Your Users</h1>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <img src="./images/illustration-your-users.svg" alt="illustration" />
      </div>
      <div class="card">
        <h1>Ready To Build Your Community?</h1>
        <button class="btn">Get Started For Free</button>
      </div>
    </section>
    <footer class="footer">
      <div class="footer__fix"></div>
      <div class="footer__card">
        <img src="./images/footer-logo.svg" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
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
        <div class="icons">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
          <font-awesome-icon :icon="['fab', 'instagram']" />
          <font-awesome-icon :icon="['fab', 'twitter-square']" />
        </div>
      </div>
      <div class="footer__card">
        <h1>Newsletter</h1>
        <p>
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
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
            <button>Subscribe</button>
          </label>
          <span>{{ errors[0] }} </span>
        </ValidationProvider>
      </div>
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

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap')

*
    font-family: 'Poppins'
p
    font-family: 'Open Sans'
    line-height: 24px
.wrapper
    display: flex
    flex-wrap: wrap
    width: 100%
    .btn
        padding: 15px 60px
        background-color: hsl(322, 100%, 66%)
        color: #fff
        border-radius: 50px
        box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
        &:hover
            opacity: .7
    .header
        width: 100%
        padding: 70px 5% 100px
        display: flex
        align-items: center
        justify-content: space-between
        > img
            height: 30px
            @media screen and (max-width: $mobile)
                height: 20px
        > button
            padding: 15px 40px
            border-radius: 50px
            border: 1px solid hsl(322, 100%, 66%)
            background-color: transparent
            color: hsl(322, 100%, 66%)
            box-shadow: 1px 1px 4px 2px hsla(322, 100%, 66%,.1)
            &:hover
                opacity: .7
    .intro
        padding: 0 15% 200px
        display: flex
        flex-wrap: wrap
        justify-content: center
        background: url('./images/bg-section-top-desktop-1.svg') center bottom no-repeat
        background-size: contain
        transform: translate(0, 2px)
        @media screen and (max-width: $mobile)
            padding: 0 5% 100px
            background: url('./images/bg-section-top-mobile-1.svg') center bottom no-repeat
            background-size: contain
        .intro__info
            width: 100%
            text-align: center
            margin-bottom: 60px
            > h1
                margin-bottom: 20px
            > p
                padding: 0 25%
                margin-bottom: 20px
                @media screen and (max-width: $ipad-pro)
                    padding: 0 10%
                @media screen and (max-width: $mobile)
                    padding: 0
        > img
            width: 100%
        .intro__counter
            display: flex
            justify-content: space-between
            width: 100%
            @media screen and (max-width: $mobile)
                flex-direction: column
                align-items: center
            .counter__card
                display: flex
                flex-direction: column
                padding: 30px
                text-align: center
                > img
                    height: 30px
                    width: 30px
                    margin-bottom: 25px
                    margin-left: 5px
                > h1
                    font-size: 4em
                    font-weight: 700
                    line-height: 40px
                    > span
                        font-size: 18px
                        font-weight: 400
                        opacity: .6
    .cards

        width: 100%
        .card
            padding: 0 10% 0
            display: flex
            align-items: center
            @media screen and (max-width: $mobile)
                padding: 0 5%
                flex-wrap: wrap
                text-align: center
            &:nth-child(1)
                background: #f6fbff
                transform: translate(0, 1px)
            &:nth-child(2)
                background: url('./images/bg-section-bottom-desktop-1.svg') center top no-repeat, url('./images/bg-section-top-desktop-2.svg') center bottom no-repeat,
                background-size: contain
                padding: 250px 5%
                @media screen and (max-width: $mobile)
                    background: url('./images/bg-section-bottom-mobile-1.svg') center top no-repeat, url('./images/bg-section-top-mobile-2.svg') center bottom no-repeat,
                    background-size: contain
                    padding: 110px 5% 180px
                > img
                    order: -1
                > .card__info
                    padding-right: 0
                    padding-left: 15%
                    @media screen and (max-width: $mobile)
                        padding-left: 0
            &:nth-child(3)
                background: #f6fbff
                transform: translate(0, -1px)
            &:nth-child(4)
                display: flex
                flex-direction: column
                padding: 200px 0 250px
                background: url('./images/bg-section-bottom-desktop-2.svg') center top no-repeat, url('./images/bg-footer-top-desktop.svg') center bottom no-repeat
                background-size: contain
                transform: translate(0, -1px)
                @media screen and (max-width: $mobile)
                    padding: 130px 0
                    background: url('./images/bg-section-bottom-mobile-2.svg') center top no-repeat, url('./images/bg-footer-top-mobile.svg') center bottom no-repeat
                    background-size: contain
                > h1
                    margin-bottom: 40px
            .card__info
                padding-right: 15%
                @media screen and (max-width: $mobile)
                    padding-right: 0
                > h1
                    margin-bottom: 20px
            > img
                width: 40%
                @media screen and (max-width: $mobile)
                    order: -1
                    width: 100%
                    margin-bottom: 40px
    .footer
        background-color: hsl(192, 100%, 9%)
        transform: translate(0, -2px)
        padding: 80px 10%
        width: 100%
        position: relative
        display: flex
        justify-content: space-between
        @media screen and (max-width: $mobile)
            flex-direction: column
        .footer__fix
            position: absolute
            height: 30px
            left: 0
            right: 0
            background-color: hsl(192, 100%, 9%)
            bottom: -3px
        .footer__card
            width: 25%
            color: #fff
            @media screen and (max-width: $mobile)
                width: 100%
            .icons
                display: flex
                margin-top: 60px
                > *
                    width: 30px
                    height: 30px
                    color: #fff
                    margin-right: 15px
                    cursor: pointer
                    &:hover
                        color: #05c3ff
            > img
                margin-bottom: 20px
            > p
                margin-bottom: 20px
            > ul
                > li
                    margin-bottom: 15px
                    > *
                        margin-right: 10px
            &:nth-child(3)
                width: 45%
                @media screen and (max-width: $mobile)
                    order: -1
                    width: 100%
                    margin-bottom: 40px
                > h1
                    text-transform: uppercase
                    font-size: 1.2em
                    margin-bottom: 20px
                > p
                    margin-bottom: 40px
                    padding-right: 30%
                    @media screen and (max-width: $mobile)
                        padding-right: 0
                .form__control
                    display: flex
                    width: 100%
                    position: relative
                    > label
                        display: flex
                        justify-content: space-between
                        width: 100%
                        @media screen and (max-width: $mobile)
                            flex-wrap: wrap
                            justify-content: flex-end
                        > input
                            border: 2px solid transparent
                            padding: 13px 15px
                            border-radius: 8px
                            width: calc(100% - 230px)
                            box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                            outline: none
                            @media screen and (max-width: $mobile)
                                width: 100%
                                margin-bottom: 30px
                            &.has-error
                                border-color: hsl(0, 100%, 63%)
                        > button
                            padding: 15px 60px
                            border-radius: 8px
                            background-color: hsl(322, 100%, 66%)
                            color: #fff
                            box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                            &:hover
                                background-color: hsl(321, 100%, 78%)
                    > span
                        position: absolute
                        top: 52px
                        left: 15px
                        color: hsl(0, 100%, 63%)
</style>
