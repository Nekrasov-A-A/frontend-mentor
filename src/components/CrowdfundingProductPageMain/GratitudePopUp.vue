<template>
  <div class="gratitude__wrapper" @click.self="closeGratitudePopUp">
    <div class="gratitude__content">
      <div class="gratitude__content__icon-wrapper">
        <font-awesome-icon icon="check" class="gratitude__content__icon" />
      </div>
      <h1>Thanks for your support!</h1>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaing is
        completed.
      </p>
      <button @click="closeGratitudePopUp">Got it!</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeGratitudePopUp: function() {
      this.$emit("closeGratitudePopUp");
    },
  },
};
</script>

<style lang="sass" scoped>

$ipad: 768px
$mobile: 415px
$ipad-pro: 1024px

*
    margin: 0
    padding: 0
    box-sizing: border-box
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    user-select: none
    cursor: default
.gratitude__wrapper
    position: fixed
    width: 100%
    min-height: 100vh
    background-color: hsla(0, 0%, 0%,.1)
    z-index: 10
    display: flex
    align-items: center
    justify-content: center

    .gratitude__content
        width: 40%
        border-radius: 8px
        box-shadow: 1px 1px 4px 2px rgba(0,0,0,.1)
        padding: 50px
        background-color: #fff
        display: flex
        align-items: center
        justify-content: center
        flex-wrap: wrap
        @media screen and (max-width: $ipad)
            width: 50%
            padding: 40px 5%
        @media screen and (max-width: $mobile)
            width: 90%
            padding: 40px 5%

        .gratitude__content__icon-wrapper
            padding: 50px
            width: 0
            height: 0
            border-radius: 50%
            display: flex
            justify-content: center
            align-items: center
            background-color: hsl(176, 50%, 47%)
            margin-bottom: 60px
            .gratitude__content__icon
                width: 40px
                height: 40px
                color: #fff
        > h1
            width: 100%
            display: flex
            justify-content: center
            margin-bottom: 20px
            text-align: center
            @media screen and (max-width: $mobile)
                font-size: 1.5em

        > p
            line-height: 28px
            text-align: center
            margin-bottom: 30px
            font-weight: 500
            color: hsl(0, 0%, 48%)
        > button
            padding: 15px 30px
            border-radius: 50px
            border: 0
            background-color: hsl(176, 50%, 47%)
            color: hsl(0,0%,100%)
            font-weight: 500
            cursor: pointer
            &:hover
                background-color: hsl(176, 72%, 28%)
            &:active, &:focus
                outline: none
            &:active
                transform: scale(0.97)
</style>
