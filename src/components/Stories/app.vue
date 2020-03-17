<template>
  <div id="app">
    <div
      class="stories">
      <div class="story__col full">
        <Story
          v-if="stories[0]"
          :key="keys[0].index"
          :story-data="stories[0]"
          :fullsize="true" />
      </div>

      <div class="story__col column">
        <Story
          :key="keys[1].index"
          :halfsize="true"
          :fullsize="stories.length === 2"
          :story-data="stories[1]" />
        
        <template
          v-if="stories.length > 2">
          <div class="story__col--small">
            <!-- 3rd -->
            <Story
              :key="keys[2].index"
              :halfsize="stories.length === 3"
              :quartersize="stories.length > 3"
              :story-data="stories[2]" />

            <!-- 4th -->
            <Story
              v-if="stories.length > 3"
              :key="keys[3].index"
              :story-data="stories[3]"
              :quartersize="true" />
          </div>
        </template>
      </div>
    </div>
    <div
      v-if="pagination > 1"
      class="pagination">
      <button
        title="Eerste pagina"
        class="pagination__nav"
        @click="loadPage(0, pagination)">
        <<
      </button>
      <button
        title="Vorige"
        class="pagination__nav"
        @click="loadPrev()">
        <
      </button>
      <button
        v-for="page in paginationVisible"
        :key="page"
        :aria-selected="page === currentPageNumber ? 'true' : 'false'"
        :title="`Pagina nummer ${page}`"
        :class="['pagination__item', {'active--number' : page === currentPageNumber}]"
        @click="loadPage(page, pagination)">
        {{ page }}
      </button>
      <button
        title="Volgende"
        class="pagination__nav"
        @click="loadNext()">
        >
      </button>
      <button
        title="Laatste pagina"
        class="pagination__nav"
        @click="loadLast()">
        >>
      </button>
    </div>
  </div>
</template>

<script>
import Story from '@/components/Story.vue'

const {stories: allStories} = require('../../data/stories.json');

export default {
  name: "App",
  components: {
    Story,
  },
  data() {
    return {
      offset: 0,
      currentPageNumber: 0,
      allStories,
      first: true,
      amount: 0,
      keys: [
        {index: 0},
        {index: 1},
        {index: 2},
        {index: 3},
      ],
      stories: [],
      window: {
        width: 0,
      },
    }
  },

  computed: {
    storiesHidden() {
      return this.allStories.filter(e => !this.stories.includes(e));
    },

    paginationVisible() {
      const newBegin= this.currentPageNumber - 1;
      let begin = newBegin;
      if (newBegin <= 1) begin = 1;
      // if (newBegin + 2 === this.pagination) begin = this.currentPageNumber + 1;
      // console.log(`newBegin is ${newBegin}`)
      // console.log(`begin is ${begin}`)
      // let begin = this.currentPageNumber - 1 < 1 ? 1 : this.currentPageNumber - 1;

      // if (begin + 2 <= this.pagination) begin = this.currentPageNumber
      // const end = begin + 2 <= this.pagination ? begin + 2 : this.pagination

      // check for end of the line
      // 3 pages
      // const end = this.storiesLeft <= 0 ? null : begin + 2;
      // 2 pages
      const end = this.storiesLeft <= 0 ? null : begin + 1;

      // if end show last 3 pages,
      // 3 pages
      // 2 pages
      // console.log('pagination', this.pagination)
      // console.log('end', end)
      let arr;
      
     if (this.pagination < 3) {
        arr = end === null ? [ begin, begin + 1] : [begin , end ];
      } else {
        arr = end === null ? [begin - 1, begin, begin + 1] : [begin, begin + 1, end + 1 ];
      }
 
      // console.log(arr, 'arr')
      // console.log(this.currentPageNumber)
      return arr

    },

    pagination() {
      // return 
      const n = Math.ceil(this.allStories.length / this.stories.length);
      return n
    },

    storiesLeft() {
      return this.allStories.length - (this.offset + this.stories.length);
    },
  },

  watch: {
    currentPageNumber(newVal, oldVal) {
      if(newVal < 1) this.currentPageNumber = 1;
    },
  },


  created() {
    // window.addEventListener('resize', this.handleResize)
    this.handleResize();
    this.loadPage(1);
    window.addEventListener("orientationchange", () => {
        this.handleResize();
    });
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  
  },

  methods: {
    handleResize() {
      const width = window.innerWidth;
      let n = 3;
      // if (width < 1200) n = 3;
      if (width < 600) n = 2;
      if (width > (2*window.innerHeight)) n = 2;
      this.amount = n     
      this.loadPage(1)
    },

    loadLast() {
      if (this.storiesLeft === 0) return;
      this.loadPage(this.pagination, this.pagination)
    },

    // change(index) {
    //   // console.log('changing')
    //   // console.log(keys)
    //   // this.stories[index] = this.allStories[2];
    //   // console.log(keys)
    // },

    // changeSingle(index) {
    //   const randomStory = this.storiesHidden[Math.floor(Math.random() * this.storiesHidden.length)];
    //   console.log(randomStory.id);
    //   this.stories[index] = randomStory;
    //   // console.log(index)
    //   this.keys[index].index = this.keys[index].index + 5;
    //   console.log(this.keys[index].index)
    // },

    loadNext() {
      // nothing more to load
      if (this.currentPageNumber === this.pagination) return;

      this.loadPage(this.currentPageNumber + 1, this.pagination)
    },

    loadPrev() {
      if (this.currentPageNumber - 1 < 0) return;
      this.loadPage(this.currentPageNumber - 1, this.pagination)
    },

    loadPage(pageNumber, currentPagination) {
      // console.log('current pagenumber', this.currentPageNumber)
      
      if (pageNumber === this.currentPageNumber) return;


      const nLeft = this.allStories.length - ((pageNumber - 1) * this.stories.length)
      let newOffset = (pageNumber - 1) * this.stories.length;
      if(newOffset < 0) newOffset = 0;

      // We dont want to overreach in the stories array, if there are less left than the amount in view, only change by that amount.
      if(nLeft < this.stories.length && pageNumber > this.currentPageNumber) {
        newOffset += (nLeft - this.stories.length);
      }

      this.currentPageNumber = pageNumber;
      this.offset = newOffset;
      this.stories = this.allStories.slice(newOffset, newOffset + this.amount)
    },
  },
}
</script>

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

// Wessel
@mixin phone-only {
  @media (max-width: 599px) {
    @content;
  }
}
@mixin tablet-portrait-up {
  @media (min-width: 600px) {
    @content;
  }
}
@mixin tablet-landscape-up {
  @media (min-width: 900px) {
    @content;
  }
}
@mixin desktop-up {
  @media (min-width: 1200px) {
    @content;
  }
}
@mixin big-desktop-up {
  @media (min-width: 1800px) {
    @content;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.stories {
  display: flex;
  height: 728px;
  width: 100%;
  flex-flow: row wrap;
  border-radius: $border-radius;
  overflow: hidden;
  @media (max-width: 600px) {
    flex-flow: column;
  }
}

.story {
  height: 100%;
  background-size: cover;
  display: flex;
  position: relative;
  flex-flow: column wrap;
  justify-content: flex-end;
  width: 100%;
  color: #fff;

  blockquote {
    @media (max-width: $desktop) {
      font-size: 1.8rem !important;
    }
  }

  &__col {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    @media screen and (min-width: $desktop) {
      width: 50%;
    }

    &--small {
      display: flex;
      flex: 1;
    }
  }
  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: -1;
  }

  &__content {
    width: 100%;
    padding: 25px;
    @media screen and (min-width: $desktop) {
      margin: 33px;
    }
  }

  &.fullsize {
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

  &.halfsize {
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

  &.quartersize {
    // width: 50%;
    // height: 50%;

    &:last-child {
      border-radius: 0 0 $border-radius 0;
    }

    blockquote {
      font-size: 1.75rem;

      &::before {
        left: -0.5em;
      }
    }
  }

  blockquote {
    font-family: $title-font;
    text-shadow: 0px 0px 24px rgba(0, 0, 0, 0.45);
    position: relative;
    margin: 0;
    line-height: 1.3;
    width: 100%;

    &::before {
      content: '“';
      position: absolute;
    }
  }

  .person {
    width: 100%;
    margin: 20px 0 10px;
  }
}
.pagination {
  display: block;
  text-align: center;

  &__nav {
    cursor: pointer;
  }

  &__item {
    width: 12px;
    height: 12px;
    border: 1px solid #01689b;
    display: inline-block;
    margin: 8px 3px;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
    cursor: pointer;

    &::after {
     content: '';
     position: absolute;
     left: 3px;
     right: 3px;
     bottom: 3px;
     height: 1px;
     opacity: 0;
     background-color: #01689b;
     transition: all 0.3s ease;
    }

    &:hover {
      color: #01689b;

      &::after {
        opacity: 1;
        bottom: 5px;
      }
    }

    &.active {
      // background-color: #01689b;
      width: 24px;
      pointer-events: none;

      &--number {
        color: #01689b;
         &::after {
        opacity: 1;
        bottom: 5px;
        }
      }
    }
  }
}
</style>
