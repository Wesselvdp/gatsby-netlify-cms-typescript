<template>
  <div :class="['story-wrapper', { transform: transition }]">
    <!-- <div :class="{'shifter': transition} " /> -->
    <div
      :key="story.id"
      :class="classes"
      :style="
        `background-image:url(/assets/images/verhalen/16x9_${image}.jpg);`
      "
    >
      <div class="story-content">
        <blockquote>{{ story.title }}”</blockquote>
        <div class="person">
          <strong>{{ story.author }}</strong
          ><br />
          {{ story.function }}
        </div>
        <a
          :href="story.url"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          tabindex="0"
          :title="`Lees het artikel van ${story.author}`"
          class="button"
        >
          <span class="button__text">Lees verder</span>
          <svg class="icon" width="26px" height="16px" viewBox="0 0 68 51">
            <use xlink:href="#svg-arrow" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story',

  props: {
    storyData: {
      type: Object,
      default: null,
    },

    halfsize: {
      type: Boolean,
      default: false,
    },
    quartersize: {
      type: Boolean,
      default: false,
    },
    fullsize: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      story: {},
      transition: false,
    }
  },

  computed: {
    classes() {
      return `story ${this.halfsize ? 'halfsize' : ''} ${
        this.quartersize ? 'quartersize' : ''
      } ${this.fullsize ? 'fullsize' : ''}`
    },
  },

  watch: {
    storyData(newVal) {
      this.transition = true
      this.image = newVal.image

      setTimeout(() => {
        this.story = newVal
      }, 150)

      setTimeout(() => {
        this.transition = false
      }, 300)
    },
  },

  created() {
    this.story = this.storyData
    this.image = this.storyData.image
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$desktop: 769px;
$border-radius: 8px;
$title-font: 'Alfa Slab One', cursive;

// Colors
$main-font: #000;
$header-heading: #fff;
$main-color: #01689b;
$dark-color: #154273;
$card-font-color: #fff;
$row-bg: #f3f3f3;
$feature-dark: #cce0f1;
$feature-light: #e5f0f9;

// Screens
$page-container: 1920px;
$mobile-container: 860px;

$desktop-page: '(min-width: 769px) and (max-width: 1920px)';
// $desktop-large: "(min-width: 769px) and (max-width: 1440px)";
$desktop-medium: '(min-width: 769px) and (max-width: 1440px)';
$desktop-small: '(min-width: 769px) and (max-width: 1366px)';
$tablet: '(min-width: 769px) and (max-width: 1024px)';
$desktop: 769px;
$desktop-large: 1200px;
$mobile: 768px;
$mobile-large: 480px;
$mobile-medium: 360px;
$mobile-small: '(max-width: 320px)';

// Fonts
$title-font: 'Alfa Slab One', cursive;
$h2-size-dt: 62px;
$h3-size-dt: 48px;

// Paddings
$wrap-padding: 96px;

// Shadows
$mobile-heading-shadow: 2px 3px 3px rgba(0, 0, 0, 0.47);
$card-shadow: 6px 10px 38px 0 rgba(0, 0, 0, 0.47);

// Borders
$border-radius: 8px;

// Mobile padding
$padding: 15px;
@keyframes storyChange {
  0% {
    right: 100%;
    left: 0;
  }
  50% {
    right: 0;
    left: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}

.transform {
  .story-content {
    transform: translateY(5px);
    opacity: 0;
  }
}

.shifter {
  // position: absolute;
  // left: 0;
  // top: 0;
  // height: 100%;
  // background-color: #0b2164;
  // // background-color: #01689b;
  // animation-name: storyChange;
  // animation-duration: 1.2s;
  // transition: all 0.3s ease;
  // animation-timing-function: linear;
  // z-index: 1;
  opacity: 0;
}

.stories {
  display: flex;
  min-height: 800px;
  width: 100%;
  flex-flow: row wrap;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 600px) {
    min-height: initial;
    flex-flow: column;
  }
}

.story-wrapper {
  position: relative;
  width: 100%;
  flex: 1;
  background-color: $main-color;
}

.story {
  background-size: cover;
  display: flex;
  position: relative;
  flex-flow: column wrap;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 33px;
  position: relative;
  flex: 1;
  transition: all 0.3s ease;
  color: #fff;

  &::after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(
      to top right,
      #0b2164 -0%,
      transparent 58%
    );
  }

  @media (max-width: 600px) {
    min-height: 45vh;
    // flex-flow: column;
  }

  blockquote {
    @media (max-width: $desktop) {
      font-size: 1.8rem !important;
    }
  }

  &__col {
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    // &:first-of-type {
    //   @media (max-width: 600px) {
    //     border-bottom: 3px solid #fff;
    //   }
    // }

    @media screen and (min-width: $desktop) {
      width: 50%;
    }

    &--small {
      display: flex;
      flex: 1;
    }

    &.column {
      @media screen and (min-width: $desktop) {
        width: 50%;
        flex-flow: column;
      }
    }
  }
  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: -1;
  }

  &-content {
    width: 100%;
    transition: all 0.3s ease;
    // padding: 25px;
    position: relative;
    z-index: 1;
    // @media screen and (min-width: $desktop) {
    //   margin: 33px;
    // }
  }

  &.full {
    // width: 100%;
    // height: 100%;
    // border-radius: $border-radius 0 0 $border-radius;

    blockquote {
      font-size: 3rem;
      max-width: 330px;

      &::before {
        left: -1.25rem;
      }
    }
  }

  &.half {
    // width: 100%;
    // height: 50%;
    // border-radius: 0 $border-radius 0 0;

    blockquote {
      font-size: 2rem;
      max-width: 240px;

      &::before {
        left: -1rem;
      }
    }
  }

  &.quarter {
    blockquote {
      font-size: 1.75rem;

      &::before {
        left: -0.5em;
      }
    }
  }

  .person {
    width: 100%;
    margin: 20px 0 10px;
  }
}
blockquote,
.blockquote {
  font-family: $title-font;
  text-shadow: 0px 0px 24px rgba(0, 0, 0, 0.45);
  position: relative;
  margin: 0;
  line-height: 1.3;
  width: 100%;

  // &--header {
  //   line-height: 1;
  // }

  &::before {
    content: '“';
    position: absolute;
    left: -0.5em;
  }
}
body .pagination {
  display: block;
  text-align: center;
  margin: 1.25rem 0;

  &__item {
    border: none;
    display: inline-block;
    margin: 8px 3px;
    width: initial;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: initial;
    opacity: 1;
    height: initial;
    padding: 12px 6px;
    margin: 0;
    border-radius: 0;

    .inner {
      width: 12px;
      height: 12px;
      display: block;
      border: 1px solid #01689b;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    &.white {
      .inner {
        border: 1px solid #fff;
      }
      &:hover {
        .inner {
          background-color: #fff;
        }
      }

      &.active {
        .inner {
          background-color: #fff;
        }
      }
    }

    &:hover {
      .inner {
        background-color: #01689b;
      }
    }

    &.active {
      .inner {
        background-color: #01689b;
        width: 24px;
      }
    }
  }
}
</style>
