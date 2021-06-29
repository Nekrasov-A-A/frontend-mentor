<template>
  <div class="wrapper">
    <div class="card">
      <header class="card__header">
        <img src="./images/image-daniel.jpg" alt="Daniel Avatar" />
        <h3>Daniel Clifford<span>Verified Graduate</span></h3>
      </header>
      <h1>
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny’s worth.
      </h1>
      <p>
        “ I was an EMT for many years before I joined the bootcamp. I’ve been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I’ve successfully switched careers, working as a Software
        Engineer at a VR startup. ”
      </p>
    </div>
    <div class="card">
      <header class="card__header">
        <img src="./images/image-jonathan.jpg" alt="Jonathan Avatar" />
        <h3>Jonathan Walters<span>Verified Graduate</span></h3>
      </header>
      <h1>
        The team was very supportive and kept me motivated
      </h1>
      <p>
        “ I started as a total newbie with virtually no coding skills. I now
        work as a mobile engineer for a big company. This was one of the best
        investments I’ve made in myself. ”
      </p>
    </div>
    <div class="card">
      <header class="card__header">
        <img src="./images/image-jeanette.jpg" alt="Jeanette Avatar" />
        <h3>Jeanette Harmon<span>Verified Graduate</span></h3>
      </header>
      <h1>
        An overall wonderful and rewarding experience
      </h1>
      <p>
        “ Thank you for the wonderful experience! I now have a job I really
        enjoy, and make a good living while doing something I love. ”
      </p>
    </div>
    <div class="card">
      <header class="card__header">
        <img src="./images/image-patrick.jpg" alt="Patrick Avatar" />
        <h3>Patrick Abrams<span>Verified Graduate</span></h3>
      </header>
      <h1>
        Awesome teaching support from TAs who did the bootcamp themselves.
        Getting guidance from them and learning from their experiences was easy.
      </h1>
      <p>
        “ The staff seem genuinely concerned about my progress which I find
        really refreshing. The program gave me the confidence necessary to be
        able to go out in the world and present myself as a capable junior
        developer. The standard is above the rest. You will get the personal
        attention you need from an incredible community of smart and amazing
        people. ”
      </p>
    </div>
    <div class="card">
      <header class="card__header">
        <img src="./images/image-kira.jpg" alt="Kira Avatar" />
        <h3>Kira Whittle<span>Verified Graduate</span></h3>
      </header>
      <h1>
        Such a life-changing experience. Highly recommended!
      </h1>
      <p>
        “ Before joining the bootcamp, I’ve never written a line of code. I
        needed some structure from professionals who can help me learn
        programming step by step. I was encouraged to enroll by a former student
        of theirs who can only say wonderful things about the program. The
        entire curriculum and staff did not disappoint. They were very hands-on
        and I never had to wait long for assistance. The agile team project, in
        particular, was outstanding. It took my learning to the next level in a
        way that no tutorial could ever have. In fact, I’ve often referred to it
        during interviews as an example of my developent experience. It
        certainly helped me land a job as a full-stack developer after receiving
        multiple offers. 100% recommend! ”
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap')

$mobile: 415px
$ipad: 768px
$ipad-pro: 1024px


*
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Barlow Semi Condensed'
    user-select: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
.wrapper
    display: grid
    grid-template: "a a b c" "e f f c"
    grid-template-rows: repeat(2,1fr)
    grid-template-columns: repeat(4, 1fr )
    grid-gap: 20px
    background-color: hsl(210, 46%, 95%)
    padding: 40px 5%
    min-height: 100vh
    @media screen and (max-width: $ipad)
        grid-template: "a" "b" "e" "f" "c"
    .card
        padding: 20px
        border-radius: 8px
        .card__header
            display: flex
            align-items: center
            margin-bottom: 20px
            img
                border-radius: 50%
            h3
                display: flex
                flex-direction: column
                margin-left: 15px
                font-weight: 500
                color: hsl(0, 0%, 100%)
                span
                    font-size: 14px
                    color: hsl(0, 0%, 81%)
        h1
            margin-bottom: 20px
            color: hsl(0, 0%, 100%)
            font-size: 1.5em
        p
            line-height: 20px
            color: hsl(0, 0%, 81%)
            font-weight: 500
        &:nth-child(1)
            grid-area: a
            background: url('./images/bg-pattern-quotation.svg') 80% 0% no-repeat, hsl(263, 55%, 52%)
        &:nth-child(2)
            grid-area: b
            background-color: hsl(217, 19%, 35%)
        &:nth-child(3)
            grid-area: e
            background-color: #fff
            .card__header
                h3
                    color: hsl(0, 0%, 0%)
            h1
                color: #5a5e69
        &:nth-child(4)
            grid-area: f
            background-color: hsl(219, 29%, 14%)
        &:nth-child(5)
            grid-area: c
            background-color: #fff
            .card__header
                h3
                    color: hsl(0, 0%, 0%)
            h1
                color: #5a5e69
</style>
