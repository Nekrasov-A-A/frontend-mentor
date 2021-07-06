<template>
  <div class="wrapper">
    <header class="header">
      <nav>
        <img src="./images/logo.svg" alt="logo" />
        <button>try it free</button>
      </nav>
      <div class="header__info">
        <div class="info__text">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Get Started For Free</button>
        </div>
        <div class="info__image">
          <img src="./images/illustration-mockups.svg" alt="mockups" />
        </div>
      </div>
    </header>
    <div class="grid__cards">
      <div class="card">
        <div class="card__info">
          <h1>Grow Together</h1>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <img src="./images/illustration-grow-together.svg" alt="img" />
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
        <img src="./images/illustration-flowing-conversation.svg" alt="img" />
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
        <img src="./images/illustration-your-users.svg" alt="img" />
      </div>
    </div>

    <footer class="footer">
      <div class="footer__card">
        <h1>Ready To Build Your Community?</h1>
        <button>Get Started For Free</button>
      </div>
      <img src="./images/logo-footer.svg" alt="logo" />
      <div class="footer__info">
        <ul>
          <li>
            <font-awesome-icon icon="map-marker-alt" />
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
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
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
      </div>
      <div class="footer__copyright">
        © Copyright 2018 Huddle. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap')

*
    font-family: 'Open Sans'

.wrapper
    display: flex
    flex-wrap: wrap
    font-size: 18px
    .header
        display: flex
        flex-direction: column
        padding: 40px 5% 50px
        width: 100%
        background: url('./images/bg-hero-desktop.svg') no-repeat, hsl(193, 100%, 96%)
        background-size: contain
        @media screen and (max-width: $ipad)
            padding: 30px 30px
        > nav
            display: flex
            justify-content: space-between
            align-items: center
            width: 100%
            margin-bottom: 65px
            > img
                height: 30px
                @media screen and (max-width: $mobile)
                    height: 15px
            > button
                text-transform: capitalize
                padding: 15px 60px
                border: 0
                background-color: #fff
                border-radius: 50px
                color: hsl(192, 100%, 9%)
                font-weight: 700
                box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                cursor: pointer
                @media screen and (max-width: $mobile)
                    padding: 10px 40px
                    font-size: 16px
                &:active, &:focus
                    outline: none
                &:hover
                    opacity: .7
                    color: hsl(208, 11%, 55%)
                    box-shadow: 1px 1px 4px 2px hsla(208, 11%, 55%,.1)
        .header__info
            display: flex
            width: 100%
            align-items: center
            @media screen and (max-width: $ipad)
                flex-direction: column
                padding: 0 5%
            .info__image
                width: 55%
                @media screen and (max-width: $ipad)
                    width: 100%
                img
                    width: 100%
            .info__text
                width: 45%
                padding-right: 60px
                @media screen and (max-width: $ipad)
                    width: 100%
                    padding-right: 0
                    margin-bottom: 110px
                    display: flex
                    flex-direction: column
                    align-items: center
                    text-align: center
                > h1
                    color: hsl(192, 100%, 9%)
                    font-family: 'Poppins'
                    font-weight: 600
                    line-height: 46px
                    margin-bottom: 30px
                > p
                    line-height: 24px
                    color: hsl(192, 100%, 9%)
                    font-size: 16px
                    font-weight: 400
                    margin-bottom: 30px
                > button
                    border: 0
                    color: #fff
                    background-color: hsl(322, 100%, 66%)
                    border-radius: 50px
                    padding: 20px 70px
                    cursor: pointer
                    box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                    &:hover
                        opacity: .87
    .grid__cards
        display: grid
        padding: 150px 5%
        width: 100%
        grid-template: repeat(3, 1fr) / 1fr
        grid-gap: 35px 0
        margin-bottom: 150px
        @media screen and (max-width: $mobile)
            padding: 50px 5%
            margin-bottom: 250px
        .card
            display: flex
            border-radius: 8px
            box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
            width: 100%
            padding: 50px 30px 50px 120px
            justify-content: space-between
            align-items: center
            @media screen and (max-width: $ipad)
                padding: 30px 5%
            @media screen and (max-width: $mobile)
                flex-direction: column

            > img
                width: 30%
                @media screen and (max-width: $mobile)
                    order: -1
                    width: 100%
                    margin-bottom: 40px
            .card__info
                width: 50%
                @media screen and (max-width: $mobile)
                    width: 100%
                    text-align: center
                > h1
                    color: hsl(192, 100%, 9%)
                    font-size: 1.8em
                    margin-bottom: 20px
                > p
                    color: hsl(208, 11%, 55%)
                    font-size: 16px
                    line-height: 24px
            &:nth-child(2)
                > img
                    order: -1
    .footer
        display: flex
        flex-wrap: wrap
        background-color: hsl(192, 100%, 9%)
        padding: 200px 5% 50px
        width: 100%
        position: relative
        justify-content: flex-start
        @media screen and (max-width: $mobile)
            padding: 150px 5% 50px
        .footer__card
            background-color: #fff
            border-radius: 8px
            box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
            padding: 100px 5% 70px
            width: 60%
            text-align: center
            display: flex
            flex-direction: column
            align-items: center
            position: absolute
            top: 0
            left: 50%
            transform: translate(-50%, -60%)
            @media screen and (max-width: $ipad)
                width: 80%
            @media screen and (max-width: $mobile)
                width: 90%
                border-radius: 20px
                padding: 50px 5%
            > h1
                margin-bottom: 50px
                @media screen and (max-width: $mobile)
                    font-size: 1.2em
                    margin-bottom: 40px
            > button
                padding: 30px 0
                border-radius: 50px
                color: #fff
                background-color: hsl(322, 100%, 66%)
                border: 0
                width: 60%
                box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
                @media screen and (max-width: $mobile)
                    width: 80%
                    padding: 20px 0
                &:hover
                    opacity: .87
        > img
            margin-bottom: 30px
            width: 180px
            height: 40px
        .footer__info
            width: 100%
            display: grid
            grid-template: 1fr / repeat(4, 1fr)
            font-size: 14px
            justify-items: center
            @media screen and (max-width: $ipad-pro)
                grid-gap: 0 40px
            @media screen and (max-width: $ipad)
                grid-template: repeat(4, 1fr) / 1fr
                grid-gap: 0
                height: 65%

            > ul
                color: #bed0d4
                width: 25%
                @media screen and (max-width: $ipad-pro)
                    width: 100%
                &:first-child
                    justify-self: start
                    width: 100%
                    > li
                        > *
                            margin-right: 10px
                &:nth-child(2), &:nth-child(3)
                    > li
                        cursor: pointer
                        &:hover
                            text-decoration: underline
                &:last-child
                    display: flex
                    @media screen and (max-width: $ipad)
                        width: 100%
                        justify-content: center
                        margin-top: 20px
                        margin-bottom: 20px
                    > *
                     margin-right: 10px
                     cursor: pointer
                     height: 20px
                     width: 20px
                     padding: 15px
                     display: flex
                     align-items: center
                     justify-content: center
                     border: 1px solid #bed0d4
                     border-radius: 50%
                     &:hover
                        border-color: hsl(322, 100%, 66%)
                        color: hsl(322, 100%, 66%)

                > li
                    margin-bottom: 30px
        .footer__copyright
            font-size: 14px
            color: #bed0d4
            width: 100%
            display: flex
            justify-content: flex-end
            @media screen and (max-width: $ipad)
                justify-content: center
</style>
