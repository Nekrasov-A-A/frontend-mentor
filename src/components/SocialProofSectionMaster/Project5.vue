<template>
  <div class="wrapper">
    <div class="about">
      <div class="about__info">
        <h1>
          10,000+ of our <br />
          users love our <br />
          products.
        </h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div class="about__rate">
        <div class="rate__card">
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <p>Rated 5 Stars in Reviews</p>
        </div>
        <div class="rate__card">
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <p>Rated 5 Stars in Report Guru</p>
        </div>
        <div class="rate__card">
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <font-awesome-icon icon="star" class="icon" />
          <p>
            Rated 5 Stars in BestTech
          </p>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card__person">
          <img src="./images/image-colton.jpg" alt="colton" />
          <h3>
            Colton Smith
            <br />
            <span>Verified Buyer</span>
          </h3>
        </div>
        <p>
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </p>
      </div>
      <div class="card">
        <div class="card__person">
          <img src="./images/image-irene.jpg" alt="irene" />
          <h3>
            Irene Roberts
            <br />
            <span>Verified Buyer</span>
          </h3>
        </div>
        <p>
          "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </p>
      </div>
      <div class="card">
        <div class="card__person">
          <img src="./images/image-anne.jpg" alt="anne" />
          <h3>
            Anne Wallace
            <br />
            <span>Verified Buyer</span>
          </h3>
        </div>
        <p>
          "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap')

*
  font-family: 'Spartan'
.wrapper
  display: flex
  min-height: 100vh
  flex-direction: column
  padding: 0 10%
  align-items: center
  justify-content: center
  background: url('./images/bg-pattern-top-desktop.svg') left top no-repeat, url('./images/bg-pattern-bottom-desktop.svg') right bottom no-repeat
  @media screen and (max-width: $ipad-pro)
    padding: 0 5%
  @media screen and (max-width: $ipad)
    padding: 80px 5%
  @media screen and (max-width: $mobile)
     background: url('./images/bg-pattern-top-mobile.svg') left top no-repeat, url('./images/bg-pattern-bottom-mobile.svg') right bottom no-repeat
  .about
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 60px
    @media screen and (max-width: $ipad)
      flex-direction: column
      text-align: center
    .about__info
      width: 30%
      @media screen and (max-width: $ipad-pro)
        width: 40%
      @media screen and (max-width: $ipad)
        width: 100%
      > h1
        color: hsl(300, 43%, 22%)
        margin-bottom: 10px
        letter-spacing: -1px
        font-size: 2.5em
      > p
        line-height: 24px
        font-size: 15px
        color: #9e979f
        font-weight: 400
        @media screen and (max-width: $ipad)
          margin-bottom: 40px
    .about__rate
      width: 50%
      display: flex
      flex-direction: column
      justify-content: space-around
      @media screen and (max-width: $ipad)
        width: 100%
      .rate__card
        padding: 20px 35px
        background-color: #f7f2f8
        border-radius: 8px
        margin-bottom: 15px
        display: flex
        @media screen and (max-width: $ipad-pro)
          padding: 15px 20px
        @media screen and (max-width: $ipad)
          flex-wrap: wrap
          justify-content: center
        &:nth-child(1)
          margin-right: 100px
          @media screen and (max-width: $ipad-pro)
            margin-right: 50px
          @media screen and (max-width: $ipad)
            margin: 0 0 20px
        &:nth-child(2)
          margin-left: 50px
          margin-right: 50px
          @media screen and (max-width: $ipad-pro)
            margin: 0 25px 15px
          @media screen and (max-width: $ipad)
              margin: 0 0 20px
        &:nth-child(3)
          margin-left: 100px
          @media screen and (max-width: $ipad-pro)
            margin-left: 50px
          @media screen and (max-width: $ipad)
            margin: 0 0 20px
        .icon
          width: 18px
          height: 18px
          margin-right: 12px
          color: #e79146
          @media screen and (max-width: $ipad-pro)
            margin-right: 6px


        > p
          color: #452145
          font-weight: 600
          margin-left: 10px
          @media screen and (max-width: $ipad-pro)
            font-size: 14px
          @media screen and (max-width: $ipad)
            display: block
            width: 100%
            margin-top: 15px
  .cards
    display: grid
    grid-template: 1fr / repeat(3, 1fr)
    grid-gap: 0 40px
    @media screen and (max-width: $ipad)
      grid-template: repeat(3, 1fr) / 1fr
      grid-gap: 20px 0
    .card
      background-color: #511f50
      border-radius: 8px
      padding: 35px 30px
      &:nth-child(1)
        margin-bottom: 40px
        @media screen and (max-width: $ipad)
          margin: 0
      &:nth-child(2)
        margin: 20px 0
        @media screen and (max-width: $ipad)
          margin: 0
      &:nth-child(3)
        margin-top: 40px
        @media screen and (max-width: $ipad)
          margin: 0
      .card__person
        display: flex
        align-items: center
        margin-bottom: 25px
        > img
          width: 50px
          height: 50px
          border-radius: 50%
          margin-right: 15px
        > h3
          color: #f5e4f4
          font-size: 16px
          font-weight: 600
          > span
            color: #ad699c
            font-weight: 400
            font-size: 14px
      > p
        line-height: 24px
        color: #ffe6ff
</style>
