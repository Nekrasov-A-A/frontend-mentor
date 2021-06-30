<template>
  <div class="wrapper">
    <div class="storage__wrapper">
      <section class="storage">
        <img src="./images/logo.svg" alt="logo" />
        <div class="storage__icon">
          <font-awesome-icon icon="file" />
          <font-awesome-icon icon="folder" />
          <font-awesome-icon icon="cloud-upload-alt" />
        </div>
      </section>
      <section class="storage__info">
        <p>You've used <span>815 GB</span> of your storage</p>
        <div class="balance">185 <span>GB left</span></div>
        <div class="range"></div>
        <div class="info__item">
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap')

$mobile: 415px
$ipad: 768px
$ipad-pro: 1024px


*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Raleway'
    user-select: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

.wrapper
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    background: url('./images/bg-desktop.png') center bottom no-repeat, hsl(229, 57%, 11%)
    background-size: 100% 50%
    @media screen and (max-width: $ipad)
        background: url('./images/bg-mobile.png')  no-repeat, hsl(229, 57%, 11%)
        background-size: cover
        padding: 5%
    .storage__wrapper
        display: flex
        align-items: flex-end
        width: 100%
        justify-content: center
        @media screen and (max-width: $ipad)
            flex-direction: column
        .storage
            display: flex
            flex-direction: column
            justify-content: center
            padding: 40px
            border-radius: 8px
            border-top-right-radius: 120px
            background-color: hsl(228, 56%, 26%)
            min-width: 350px
            width: 25%
            box-shadow: rgba(0,0,0,.1)
            @media screen and (max-width: $ipad)
                width: 100%
                margin-bottom: 20px
                min-width: 0
            img
                width: 150px
                margin-bottom: 40px
            .storage__icon
                display: flex
                > *
                    width: 50px
                    height: 50px
                    line-height: 30px
                    color: #6a7ed5
                    padding: 10px
                    background-color: hsl(229, 57%, 11%)
                    border-radius: 8px
                    margin-right: 10px
                    cursor: pointer
                    &:hover
                        color: hsl(229, 57%, 11%)
                        background-color: #6a7ed5
        .storage__info
            display: flex
            flex-direction: column
            justify-content: center
            padding: 40px
            border-radius: 8px
            background-color: hsl(228, 56%, 26%)
            box-shadow: rgba(0,0,0,.1)
            width: 40%
            margin-left: 40px
            position: relative
            @media screen and (max-width: $ipad)
                width: 100%
                padding: 40px 40px 60px
            .balance
                position: absolute
                top: -38px
                right: 40px
                padding: 20px 30px
                background-color: #fff
                color: hsl(229, 57%, 11%)
                font-weight: 700
                display: flex
                align-items: center
                font-size: 2em
                border-radius: 8px
                @media screen and (max-width: $ipad)
                    top: auto
                    bottom: -38px
                    right: 50%
                    transform: translateX(50%)
                span
                    font-size: 14px
                    margin-left: 5px
                    color: hsl(229, 7%, 55%)
                    text-transform: uppercase
                &::after
                    content: ''
                    border: 40px solid transparent
                    width: 0
                    height: 0
                    position: absolute
                    right: 0
                    bottom: -20px
                    border-bottom-color: #fff
                    transform: rotate(270deg)
                    z-index: 1
                    @media screen and (max-width: $ipad)
                        display: none

            > p
                color: hsla(243, 100%, 93%,.7)
                margin-bottom: 20px
                @media screen and (max-width: $ipad)
                    text-align: center
                span
                    color: hsl(243, 100%, 93%)
                    font-weight: 700
            .range
                width: 100%
                height: 20px
                position: relative
                background-color: #151e49
                border-radius: 50px
                margin-bottom: 10px
                &::before
                    content: ''
                    width: calc(815 / 1000 *100%)
                    height: 20px
                    border-radius: 50px
                    position: absolute
                    left: 0
                    top: 0
                    background: linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 65%))
                &::after
                    content: ''
                    width: 14px
                    height: 14px
                    border-radius: 50%
                    background-color: #fff
                    position: absolute
                    z-index: 5
                    top: 3px
                    left: calc(815 / 1000 * 100% - 17px)
                    cursor: pointer
            .info__item
                display: flex
                justify-content: space-between
                p
                    color: hsl(243, 100%, 93%)
                    font-weight: 700
</style>
