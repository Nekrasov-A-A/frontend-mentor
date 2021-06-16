<template>
  <div class="wrapper">
    <div class="card">
      <div class="card__info">
        <h1>10,000+ of our users love our products.</h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div class="card__rating">
        <div class="item">
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <h2>Rated 5 stars in Reviews</h2>
        </div>
        <div class="item">
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <h2>Rated 5 stars in Report Guru</h2>
        </div>
        <div class="item">
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <img src="./images/icon-star.svg" alt="star icon" />
          <h2>Rated 5 stars in BestTech</h2>
        </div>
      </div>
      <div class="card__testimonials">
        <div class="item">
          <div class="header">
            <img src="./images/image-colton.jpg" alt="photo" />
            <h2>
              Colton Smith <br />
              <span>Verified buyer</span>
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            cum dolore explicabo doloribus id quis placeat iure quam velit atque
            vero nesciunt
          </p>
        </div>
        <div class="item">
          <div class="header">
            <img src="./images/image-irene.jpg" alt="photo" />
            <h2>
              Irene Roberts <br />
              <span>Verified buyer</span>
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            cum dolore explicabo doloribus id quis placeat iure quam velit atque
            vero nesciunt
          </p>
        </div>
        <div class="item">
          <div class="header">
            <img src="./images/image-anne.jpg" alt="photo" />
            <h2>
              Anne Wallace <br />
              <span>Verified buyer</span>
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            cum dolore explicabo doloribus id quis placeat iure quam velit atque
            vero nesciunt
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap')

$mobile: 375px

.wrapper
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    background: url('./images/bg-pattern-top-desktop.svg') 5% 0% no-repeat, url('./images/bg-pattern-bottom-desktop.svg') 100% 100% no-repeat
    font-family: 'Spartan'
    @media screen and (max-width: $mobile)
        background: url('./images/bg-pattern-top-mobile.svg') 5% 0% no-repeat, url('./images/bg-pattern-bottom-mobile.svg') 100% 100% no-repeat
    & .card
        display: flex
        margin: 0 10%
        justify-content: space-between
        flex-wrap: wrap
        @media screen and (max-width: $mobile)
            margin: 0 5%
            width: 90%
        & .card__info
            text-align: left
            width: 35%
            @media screen and (max-width: $mobile)
                text-align: center
                width: 100%
            & p
                color: hsl(303, 10%, 53%)
                font-weight: 500
                font-size: 14px
            & h1
                color: hsl(300, 43%, 22%)
                font-weight: 700
                font-size: 2.7em
                margin: 0
                @media screen and (max-width: $mobile)
                    padding: 80px 30px 5px 30px
        & .card__rating

            & .item
                padding: 8px 30px
                background-color: hsl(300, 24%, 96%)
                border-radius: 8px
                display: flex
                align-items: center
                margin-top: 20px
                width: 430px
                @media screen and (max-width: $mobile)
                    flex-wrap: wrap
                    justify-content: center
                    text-align: center
                    padding: 8px 0
                    width: 100%
                &:nth-child(2)
                    margin-left: 40px
                    @media screen and (max-width: $mobile)
                        margin-left: 0
                &:nth-child(3)
                    margin-left: 80px
                    @media screen and (max-width: $mobile)
                        margin-left: 0
                & img
                    margin-left: 5px
                    height: 100%
                & h2
                    font-size: 14px
                    margin-left: 40px
                    margin-right: 40px
                    color: hsl(300, 43%, 22%)
                    font-weight: 700
                    @media screen and (max-width: $mobile)
                        width: 100%
                        margin-right: 0
                        margin-left: 0
        & .card__testimonials
            margin-top: 60px
            display: flex
            width: 100%
            @media screen and (max-width: $mobile)
                flex-direction: column
                margin-top: 40px
            & .item
                background-color: hsl(300, 43%, 22%)
                border-radius: 8px
                width: 30%
                max-height: 80%
                padding: 40px
                box-sizing: border-box
                @media screen and (max-width: $mobile)
                    width: 100%
                    padding: 20px
                &:nth-child(2)
                    margin-left: 40px
                    margin-top: 20px
                    @media screen and (max-width: $mobile)
                        margin-left: 0
                &:nth-child(3)
                    margin-left: 40px
                    margin-top: 40px
                    @media screen and (max-width: $mobile)
                        margin-left: 0
                        margin-top: 20px
                & .header
                    display: flex
                    margin-bottom: 20px
                    & img
                        border-radius: 50%
                        height: 50px
                        margin-right: 20px
                    & h2
                        font-size: 12px
                        color: hsla(300, 24%, 96%,.75)
                        font-weight: 700
                        & span
                            color: hsla(333, 80%, 67%, .5)
                            line-height: 22px
                & p
                    color: hsla(0, 0%, 100%, .8)
                    font-weight: 500
                    font-size: 13px
                    line-height: 22px
</style>
