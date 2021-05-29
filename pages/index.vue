<template>
  <div class="container p-4">
    <div class="w-full  max-w-screen-lg">
      <Logo />
      <h1 class="text-4xl font-bold mb-3 md:mb-4 mt-8">
        <span class="text-base uppercase block">[Unofficial]</span>
        Nuxt 3 Release Date Countdown
      </h1>

      <p class="mb-3 text-xl">
        Nuxt 3 Public Beta could be released within the next:
        <span class="text-3xl font-bold block text-nuxt-lightgreen">{{ betaDaysRemaining }} {{ betaDaysRemaining === 1 ? 'Day' : 'Days' }}</span>
      </p>

      <div class="temperature px-3 md:px-6 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 grid grid-cols-2 h-12 md:h-14 rounded-4xl overflow-hidden">
        <div class="flex items-center justify-start leading-4 text-white font-bold text-sm md:text-base">Low Chance<br/>of Release</div>
        <div class="flex items-center justify-end leading-4 text-white font-bold text-sm md:text-base">High Chance<br/>of Release</div>
      </div>
      <div style="--count: 124;" class="temperature-gauge grid h-12 md:h-14 -mt-12 md:-mt-14">
        <div :style="`--start: ${124 - betaDaysRemaining};`">
          <div class="w-0.5 sm:w-1" />
        </div>
      </div>

      <p class="mt-3 text-sm">
        Nuxt 3 Beta is estimated to be released sometime in Q2 2021
      </p>

      <p class="mb-3 text-xl mt-10">
        Nuxt 3 RC/Stable could be released within the next:
        <span class="text-3xl font-bold block text-nuxt-lightgreen">{{ stableDaysRemaining }} {{ stableDaysRemaining === 1 ? 'Day' : 'Days' }}</span>
      </p>

      <div class="temperature px-3 md:px-6 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 grid grid-cols-2 h-12 md:h-14 rounded-4xl overflow-hidden">
        <div class="flex items-center justify-start leading-4 text-white font-bold text-sm md:text-base">Low Chance<br/>of Release</div>
        <div class="flex items-center justify-end leading-4 text-white font-bold text-sm md:text-base">High Chance<br/>of Release</div>
      </div>
      <div style="--count: 308;" class="temperature-gauge grid h-12 md:h-14 -mt-12 md:-mt-14">
        <div :style="`--start: ${308 - stableDaysRemaining};`">
          <div class="w-0.5 sm:w-1" />
        </div>
      </div>

      <p class="mt-3 text-sm">
        Nuxt 3 RC/Stable is estimated to be released sometime in 2021
      </p>

      <p class="mt-6 text-sm">
        Release dates are based on slides by <a href="https://twitter.com/Atinux" rel="nofollow noreferrer" taget="_blank" class="text-nuxt-lightgreen underline">Sébastien Chopin</a> and <a href="https://twitter.com/_pi0_" rel="nofollow noreferrer" taget="_blank" class="text-nuxt-lightgreen underline">Pooya Parsa</a> from February 2021 and could be subject to change:
        <a href="https://nuxt.slides.com/atinux/nuxt-3-in-action" rel="nofollow noreferrer" taget="_blank" class="ml-2 text-nuxt-lightgreen underline">Nuxt 3 in Action Slideshow</a>
        <a href="https://docs.google.com/presentation/d/1cWxCe9IZVRzM2W4OqvA4PtBr9_GLcF3n7VJEUoBLjg8/" rel="nofollow noreferrer" taget="_blank" class="ml-2 text-nuxt-lightgreen underline">State of Nuxt {2,3}</a>
      </p>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
const BetaDate = '2021-06-30'
const StableDate = '2021-12-31'

export default {
  head: {
    title: 'Unofficial Nuxt 3 Release Count Down'
  },
  data () {
    return {
      betaDaysRemaining: dayjs(BetaDate).diff(dayjs(), 'day') || 0,
      stableDaysRemaining: dayjs(StableDate).diff(dayjs(), 'day') || 0
    }
  }
}
</script>

<style lang="postcss">
.container {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.temperature-gauge {
  grid-template-columns: repeat(var(--count), minmax(0, 1fr));
}

.temperature-gauge > div {
  grid-column-start: var(--start);
}

.temperature-gauge > div > div {
  height: 100%;
  margin: 0 auto;

  @apply bg-light-surface dark:bg-dark-surface;
}
</style>
