<template>
  <div class="wrapper" :class="{ light: !isDarkMode }">
    <header class="header">
      <h1>
        Social Media Dashboard
        <span>Total Followers: 23,004</span>
      </h1>
      <div class="toggle__theme">
        Dark Mode
        <button @click="isDarkMode = isDarkMode ? false : true"></button>
      </div>
    </header>
    <section class="media__activity">
      <div class="activity__card">
        <h3>
          <font-awesome-icon :icon="['fab', 'facebook-square']" class="icon" />
          @nathanf
        </h3>
        <h1>
          1987
          <span>
            Followers
          </span>
        </h1>
        <h4>
          <font-awesome-icon icon="sort-up" />
          12 today
        </h4>
      </div>
      <div class="activity__card">
        <h3>
          <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
          @nathanf
        </h3>
        <h1>
          1044
          <span>
            Followers
          </span>
        </h1>
        <h4>
          <font-awesome-icon icon="sort-up" />
          99 today
        </h4>
      </div>
      <div class="activity__card">
        <h3>
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            :mask="['fa', 'square-full']"
            class="icon"
          />
          @realnathanf
        </h3>
        <h1>
          11k
          <span>
            Followers
          </span>
        </h1>
        <h4>
          <font-awesome-icon icon="sort-up" />
          1099 today
        </h4>
      </div>
      <div class="activity__card">
        <h3>
          <font-awesome-icon :icon="['fab', 'youtube']" class="icon" />
          Nathan F
        </h3>
        <h1>
          8239
          <span>
            Subscribers
          </span>
        </h1>
        <h4>
          <font-awesome-icon icon="sort-down" />
          144 Today
        </h4>
      </div>
    </section>
    <section class="overview">
      <h1>Overview - Today</h1>
      <div class="overview__wrapper">
        <div class="overview__card">
          <p>
            Page Views
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              class="icon"
            />
          </p>
          <h1>
            87
            <span>
              <font-awesome-icon icon="sort-up" />
              3%
            </span>
          </h1>
        </div>
        <div class="overview__card">
          <p>
            Likes
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              class="icon"
            />
          </p>
          <h1>
            52
            <span>
              <font-awesome-icon icon="sort-down" />
              2%
            </span>
          </h1>
        </div>
        <div class="overview__card">
          <p>
            Likes
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              :mask="['fa', 'square-full']"
              class="icon"
            />
          </p>
          <h1>
            5462
            <span><font-awesome-icon icon="sort-up" /> 2257%</span>
          </h1>
        </div>
        <div class="overview__card">
          <p>
            Profile Views
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              :mask="['fa', 'square-full']"
              class="icon"
            />
          </p>
          <h1>
            52k
            <span><font-awesome-icon icon="sort-up" /> 1375%</span>
          </h1>
        </div>
        <div class="overview__card">
          <p>
            Retweets
            <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
          </p>
          <h1>
            117
            <span><font-awesome-icon icon="sort-up" /> 303%</span>
          </h1>
        </div>
        <div class="overview__card">
          <p>
            Likes
            <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
          </p>
          <h1>
            507
            <span><font-awesome-icon icon="sort-up" /> 553%</span>
          </h1>
        </div>
        <div class="overview__card">
          <p>
            Likes
            <font-awesome-icon :icon="['fab', 'youtube']" class="icon" />
          </p>
          <h1>
            107
            <span><font-awesome-icon icon="sort-down" /> 19%</span>
          </h1>
        </div>
        <div class="overview__card">
          <p>
            Total Views
            <font-awesome-icon :icon="['fab', 'youtube']" class="icon" />
          </p>
          <h1>
            1407
            <span><font-awesome-icon icon="sort-down" /> 12%</span>
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDarkMode: true,
  }),
};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap')

$mobile: 426px
$ipad: 768px
$ipad-pro: 1024px


*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Inter'
    user-select: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

.wrapper
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-start
    min-height: 100vh
    background-color: hsl(230, 17%, 14%)
    position: relative

    &.light
        background-color: hsl(0, 0%, 100%)
        .header
            background-color: hsl(225, 100%, 98%)
            > h1
                color: hsl(230, 17%, 14%)
                > span
                    color: hsl(228, 12%, 44%)
            .toggle__theme
                color: hsl(228, 12%, 44%)
                > button
                    background: hsl(230, 22%, 74%)
                    &:hover
                        background-image: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))
                    &::before
                        background-color: hsl(227, 47%, 96%)
                        left: auto
                        right: 4px
        .overview
            h1
                color: hsl(230, 17%, 14%)
            .overview__wrapper
                .overview__card
                    background-color: hsl(227, 47%, 96%)
                    &:hover
                        background-color: #e1e3f0
                    &:hover .fa-instagram
                        color: #e1e3f0
                    .fa-instagram
                        color: hsl(227, 47%, 96%)
                    .fa-youtube
                        color: white
                    > p
                        color: hsl(228, 12%, 44%)
                    > h1
                        color: hsl(230, 17%, 14%)

        .media__activity
            .activity__card
                background-color: hsl(227, 47%, 96%)
                &:hover
                    background-color: #e1e3f0
                &:hover .fa-instagram
                    color: #e1e3f0
                > h1
                    color: hsl(230, 17%, 14%)
                    > span
                        color: hsl(228, 12%, 44%)
                > h3
                    color: hsl(228, 12%, 44%)
                .fa-instagram
                    color: hsl(227, 47%, 96%)
                .fa-youtube
                    color: white

    .icon
        font-size: 26px
        &.fa-instagram
            color: hsl(228, 28%, 20%)
            background: linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))
        &.fa-twitter
            color: hsl(203, 89%, 53%)
        &.fa-facebook-square
            color: hsl(208, 92%, 53%)
        &.fa-youtube
            color: hsl(228, 28%, 20%)
            background: hsl(348, 97%, 39%)
            border-radius: 50%
            padding: 4px


    .header
        width: 100%
        background-color: hsl(232, 19%, 15%)
        display: flex
        align-items: flex-start
        justify-content: space-between
        padding: 40px 10% 160px
        @media screen and (max-width: $mobile)
            flex-direction: column
            padding: 40px 5% 160px
            border-bottom-right-radius: 40px
            border-bottom-left-radius: 40px
        > h1
            color: hsl(0, 0%, 100%)
            display: flex
            flex-direction: column
            @media screen and (max-width: $mobile)
                margin-bottom: 20px
            > span
                color: hsl(228, 34%, 66%)
                font-size: .5em
                margin-top: 5px
        .toggle__theme
            color: hsl(228, 34%, 66%)
            display: flex
            align-items: center
            font-weight: 700
            @media screen and (max-width: $mobile)
                justify-content: space-between
                width: 100%
                padding-top: 20px
                border-top: 1px solid #37394e
            > button
                padding: 12px 26px
                background-image: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))
                margin-left: 10px
                border-radius: 50px
                border: 0
                cursor: pointer
                position: relative
                &:active, &:focus
                    outline: none
                &::before
                    content: ''
                    width: 20px
                    height: 20px
                    background-color: hsl(228, 28%, 20%)
                    border-radius: 50%
                    position: absolute
                    top: 2px
                    left: 2px
    .media__activity
        display: grid
        width: 100%
        padding: 0 10%
        grid-template: repeat(1,1fr) / repeat(4, 1fr)
        grid-gap: 0 40px
        position: relative
        top: -120px
        left: 0
        @media screen and (max-width: $ipad-pro)
            grid-template: repeat(2, 1fr) / repeat(2, 1fr)
            grid-gap: 20px 30px
        @media screen and (max-width: $mobile)
            grid-template: repeat(4, 1fr) / repeat(1, 1fr)
            grid-gap: 20px 0px
            padding: 0 5%
        .activity__card
            padding: 30px 0
            background-color: hsl(228, 28%, 20%)
            display: flex
            flex-direction: column
            align-items: center
            border-radius: 4px
            cursor: pointer
            &:hover
                background-color: #333a56
            &:hover .fa-instagram
                color: #333a56


            > h3
                margin-bottom: 30px
                color: hsl(228, 34%, 66%)
                font-size: .8em
                display: flex
                align-items: center
                > *
                    margin-right: 5px
            > h1
                display: flex
                flex-direction: column
                align-items: center
                margin-bottom: 30px
                color: hsl(0, 0%, 100%)
                font-size: 3em
                > span
                    font-size: .3em
                    letter-spacing: 2px
                    text-transform: uppercase
                    font-weight: 400
                    color: hsl(228, 34%, 66%)
                    margin-top: 5px
            > h4
                color: hsl(163, 72%, 41%)
                text-transform: capitalize
                font-size: .8em
                > *
                    transform: translateY(4px)
                    margin-right: 2px
            &:nth-child(1)
                border-top: 4px solid hsl(208, 92%, 53%)
            &:nth-child(2)
                border-top: 4px solid hsl(203, 89%, 53%)
            &:nth-child(3)
                border-top: 4px solid hsl(37, 97%, 70%)
                border-image: linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%) )
                border-image-slice: 1
            &:nth-child(4)
                border-top: 4px solid hsl(348, 97%, 39%)
                > h4
                    color: hsl(356, 69%, 56%)
                    > *
                        transform: translate(0, -2px)
    .overview
        display: flex
        flex-direction: column
        width: 100%
        padding: 0 10%
        position: relative
        top: -80px
        left: 0
        @media screen and (max-width: $mobile)
            padding: 0 5%
        > h1
            color: hsl(0, 0%, 100%)
            margin-bottom: 20px
            font-weight: 700
        .overview__wrapper
            display: grid
            grid-template: repeat(2, 2fr) / repeat(4,1fr)
            grid-gap: 20px 30px
            width: 100%
            @media screen and (max-width: $ipad-pro)
                grid-template: repeat(4, 1fr) / repeat(2, 1fr)
            @media screen and (max-width: $mobile)
                grid-template: repeat(8, 1fr) / repeat(1, 1fr)
            .overview__card
                display: flex
                flex-direction: column
                padding: 25px 30px
                background-color: hsl(228, 28%, 20%)
                border-radius: 4px
                cursor: pointer
                &:hover
                    background-color: #333a56
                &:hover .fa-instagram
                    color: #333a56
                p
                    display: flex
                    justify-content: space-between
                    align-items: center
                    color: hsla(228, 34%, 66%,.8)
                    font-weight: 700
                    margin-bottom: 20px
                h1
                    color: hsl(0, 0%, 100%)
                    display: flex
                    justify-content: space-between
                    align-items: flex-end
                    > span
                        color: hsl(163, 72%, 41%)
                        font-size: .4em
                        > *
                            transform: translate(0, 4px)
                &:nth-child(2), &:nth-child(7), &:nth-child(8)
                    > h1
                        > span
                            color: hsl(356, 69%, 56%)
                            > *
                                transform: translate(0, -3px)
</style>
