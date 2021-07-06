<template>
  <div class="wrapper">
    <header class="header">
      <img src="./images/logo.svg" alt="logo" />
      <div class="header__info">
        <h1>
          A history of everything you copy
        </h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div class="btns__wrapper">
        <button>Download for iOS</button>
        <button>Download for Mac</button>
      </div>
    </header>
    <div class="info">
      <h3>Keep track of your snippets</h3>
      <p>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
    </div>
    <div class="skills">
      <div class="image__wrapper">
        <img src="./images/image-computer.png" alt="computer" />
      </div>
      <div class="skills__cards">
        <div class="card">
          <h4>Quick Search</h4>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        <div class="card">
          <h4>iCloud Sync</h4>
          <p>Instantly saves and syncs snippets across all your devices.</p>
        </div>
        <div class="card">
          <h4>Complete History</h4>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </div>
    <div class="info">
      <h3>Access Clipboard anywhere</h3>
      <p>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
    </div>
    <div class="info__image">
      <img src="./images/image-devices.png" alt="devices" />
    </div>
    <div class="info">
      <h3>Supercharge your workflow</h3>
      <p>
        We’ve got the tools to boost your productivity.
      </p>
    </div>
    <div class="about">
      <div class="about__grid-3">
        <div class="about__card">
          <img src="./images/icon-blacklist.svg" alt="blacklist" />
          <h3>Create blacklists</h3>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div class="about__card">
          <img src="./images/icon-text.svg" alt="blacklist" />
          <h3>Plain text snippets</h3>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div class="about__card">
          <img src="./images/icon-preview.svg" alt="blacklist" />
          <h3>Sneak preview</h3>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
      <div class="about__grid-5">
        <img src="./images/logo-google.png" alt="google" />
        <img src="./images/logo-ibm.png" alt="ibm" />
        <img src="./images/logo-microsoft.png" alt="microsoft" />
        <img src="./images/logo-hp.png" alt="HP" />
        <img src="./images/logo-vector-graphics.png" alt="vector graphics" />
      </div>
    </div>
    <div class="info">
      <h3>Clipboard for iOS and Mac OS</h3>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div class="btns__wrapper">
        <button>Download for iOS</button>
        <button>Download for Mac</button>
      </div>
    </div>
    <footer class="footer">
      <nav>
        <img src="./images/logo.svg" alt="logo" />
        <ul>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Press Kit</li>
          <li>Install Guide</li>
        </ul>
      </nav>
      <div class="icon__wrapper">
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap')

*
    font-family: 'Bai Jamjuree'
    font-size: 18px

.wrapper
  display: flex
  flex-direction: column
  overflow: hidden
  .btns__wrapper
    display: flex
    @media screen and (max-width: $mobile)
      flex-direction: column
    > button
      border: 0
      padding: 20px 35px
      font-weight: 600
      color: #e4ecff
      cursor: pointer
      border-radius: 50px
      &:active, &:focus
        outline: none
      &:hover
        opacity: .8
      &:first-child
        background-color: hsl(171, 66%, 44%)
        box-shadow: 0px 1px 10px 0px hsl(171, 66%, 44%)
        margin-right: 15px
        @media screen and (max-width: $mobile)
          margin-right: 0
          margin-bottom: 30px
      &:last-child
        background-color: hsl(233, 100%, 69%)
        box-shadow: 0px 1px 10px 0px hsl(233, 100%, 69%)
  .header
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    padding: 130px 0
    background: url('./images/bg-header-desktop.png')  no-repeat
    background-size: contain
    @media screen and (max-width: $mobile)
      background: url('./images/bg-header-mobile.png') no-repeat
      background-size: contain
    > img
      margin-bottom: 60px
    .header__info
      padding: 0 31%
      text-align: center
      margin-bottom: 50px
      @media screen and (max-width: $ipad-pro)
        padding: 0 22%
      @media screen and (max-width: $ipad)
        padding: 0 12%
      @media screen and (max-width: $mobile)
        padding: 0 5%
      > h1
        color: hsl(210, 10%, 33%)
        font-size: 2em
        margin-bottom: 25px
      > p
        color: hsl(201, 11%, 66%)
        line-height: 28px
  .info
    text-align: center
    padding: 0 31%
    margin-bottom: 80px
    display: flex
    flex-direction: column
    align-items: center
    @media screen and (max-width: $ipad-pro)
      padding: 0 22%
    @media screen and (max-width: $ipad)
      padding: 0 12%
    @media screen and (max-width: $mobile)
      padding: 0 5%
    >.btns__wrapper
      margin-top: 50px
      margin-bottom: 50px
    > h3
      font-size: 1.5em
      color: hsl(210, 10%, 33%)
      margin-bottom: 20px
      font-weight: 600
    > p
      color: hsl(201, 11%, 66%)
      line-height: 24px
      font-size: .9em
  .skills
    display: flex
    margin-bottom: 150px
    @media screen and (max-width: $mobile)
      flex-direction: column
      padding: 0 5%
    .image__wrapper
      width: calc(50% + 60px)
      @media screen and (max-width: $mobile)
        width: 100%
        margin-bottom: 50px
      > img
        width: 100%
        transform: translate(-60px, 0)
        @media screen and (max-width: $mobile)
          transform: translate(0,0)
    .skills__cards
      width: calc(50% - 60px)
      display: grid
      grid-template: repeat(3, 1fr) / 1fr
      padding: 60px 22% 70px 0
      align-items: center
      align-content: center
      @media screen and (max-width: $ipad-pro)
        padding-right: 10%
      @media screen and (max-width: $ipad)
        padding: 0 5% 0 0
      @media screen and (max-width: $mobile)
        width: 100%
        text-align: center
        grid-gap: 50px 0
      .card
        > h4
          margin-bottom: 10px
          color: hsl(210, 10%, 33%)
          font-size: 1.25em
        > p
          color: hsl(201, 11%, 66%)
          line-height: 24px
          font-size: .9em
  .info__image
    padding: 0 20%
    margin-bottom: 40px
    @media screen and (max-width: $mobile)
      padding: 0 5%
    > img
      width: 100%
  .about
    display: flex
    flex-direction: column
    padding: 0 10%
    margin-bottom: 150px
    @media screen and (max-width: $ipad)
      padding: 0 5%
    .about__grid-3
      display: grid
      grid-template: 1fr / repeat(3, 1fr)
      text-align: center
      align-content: center
      margin-bottom: 110px
      @media screen and (max-width: $mobile)
        grid-template: repeat(3, 1fr) / 1fr
        grid-gap: 50px 0
      .about__card
        > img
          margin-bottom: 40px
          height: 30px
        > h3
          color: hsl(210, 10%, 33%)
          font-size: 1.1em
          margin-bottom: 25px
        > p
          color: hsl(201, 11%, 66%)
          line-height: 24px
    .about__grid-5
      display: grid
      grid-template: 1fr / repeat(5, 1fr)
      justify-items: center
      align-items: center
      @media screen and (max-width: $ipad)
        grid-template: repeat(2, 1fr) / repeat(3, 1fr)
        grid-gap: 50px 0
      @media screen and (max-width: $mobile)
        grid-template: repeat(5, 1fr) / 1fr
        grid-gap: 50px 0
        justify-items: center
  .footer
    display: flex
    align-items: center
    justify-content: space-between
    padding: 40px 10%
    background-color: #f5f6f8
    @media screen and (max-width: $ipad)
      padding: 40px 5%
    @media screen and (max-width: $mobile)
      flex-direction: column
    > nav
      display: flex
      align-items: center
      @media screen and (max-width: $mobile)
        flex-direction: column
      > img
        height: 56px
      > ul
        list-style: none
        display: grid
        grid-template: repeat(2, 1fr) / repeat(3, 1fr)
        grid-gap: 25px 100px
        align-items: center
        margin-left: 120px
        @media screen and (max-width: $ipad-pro)
          grid-gap: 25px 50px
        @media screen and (max-width: $ipad)
          margin-left: 50px
          grid-gap: 25px
        @media screen and (max-width: $mobile)
          grid-template: repeat(5, 1fr) / 1fr
          text-align: center
          margin-left: 0
          padding: 40px 0
        > li
          color: hsl(210, 10%, 33%)
          cursor: pointer
          font-size: .85em
          &:hover
            color: hsl(171, 66%, 44%)
    .icon__wrapper
      @media screen and (max-width: $mobile)
        display: flex
        justify-content: space-around
        width: 60%

      > *
        width: 25px
        height: 25px
        margin-left: 20px
        color: hsl(210, 10%, 33%)
        cursor: pointer
        @media screen and (max-width: $mobile)
          margin-left: 0

        &:hover
            color: hsl(171, 66%, 44%)
</style>
