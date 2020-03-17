import React, { useState, useEffect } from 'react'
import useWindowSize from '@hooks/useWindowSize'
import StoryComponent from './Story'
import allStories from '@utils/data/stories.json'

// {
//   "id": 4,
//   "title": "Soms is het goed om je hele leven om te gooien.",
//   "author": "Stephan van Ginneken",
//   "function": "Conciërge KSE Etten-Leur",
//   "url": "/verhalen/stephan-van-ginneken",
//   "image": "02_Stephan"
// },

interface Story {
  id: number
  title: string
  author: string
  function: string
  slug: string
  image: string
}

// const pagination = Math.ceil(allStories.length / this.stories.length)
// const storiesLeft = allStories.length - (this.offset + this.stories.length)

const StoriesComponent = () => {
  const [width, height] = useWindowSize()
  const [stories, setStories] = useState<Story[]>([])
  const [offset, setOffset] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pagination, setPagination] = useState<number[]>([])

  const storiesLeft = allStories.length - (offset + stories.length)

  // Next
  const loadNext = (): void => {
    const newOffset =
      storiesLeft < stories.length
        ? offset + storiesLeft
        : offset + stories.length
    setOffset(newOffset)
  }
  // Prev
  const loadPrev = (): void => {
    const newOffset = offset - stories.length < 1 ? 0 : offset - stories.length
    setOffset(newOffset)
  }
  // page
  // const loadPage = (n: number) => {
  //   setOffset
  // }

  // Set stories on load and window width change
  useEffect(() => {
    const n = width < 600 || width > 2 * window.innerHeight ? 2 : 3
    const paginationLength = Math.ceil(allStories.length / n)
    setStories(allStories.slice(offset, offset + n))
    setCurrentPage(offset / n + 1)

    setPagination([...Array(paginationLength).keys()])
    console.log('currentpage', currentPage)
  }, [width, offset])

  return (
    <div>
      <span>{width}</span>;
      <div className="stories">
        <div className="story__col full">
          {stories[0] && <StoryComponent size="full" story={stories[0]} />}
        </div>

        <div className="story__col column">
          {stories[1] && (
            <StoryComponent
              size={stories.length === 2 ? 'full' : 'half'}
              story={stories[1]}
            />
          )}

          {/* <template v-if="stories.length > 2"> */}
          {stories.length > 2 && (
            <div className="story__col--small">
              {/* <!-- 3rd --> */}
              {stories[2] && (
                <StoryComponent
                  size={stories.length === 3 ? 'half' : 'quarter'}
                  story={stories[2]}
                />
              )}

              {/* <!-- 4th --> */}
              {stories[3] && (
                <StoryComponent size="quarter" story={stories[3]} />
              )}
            </div>
          )}
          {/* </template> */}
        </div>
      </div>
      <div className="pagination">
        <button
          title="Eerste pagina"
          className="pagination__nav"
          onClick={() => loadPrev()}
        >
          {'<<'}
        </button>
        {pagination.map((n: number) => (
          <button
            key={n}
            // ariaSelected={"page === currentPageNumber ? 'true' : 'false'"
            title={`Pagina nummer ${n}`}
            className={
              'pagination__item' +
              (n + 1 === currentPage ? 'active--number' : '')
            }
            onClick={() => loadPage(n)}
          >
            {n + 1}
          </button>
        ))}
        <button
          title="Laatste pagina"
          className="pagination__nav"
          onClick={() => loadNext()}
        >
          {'>>'}
        </button>
      </div>
    </div>
  )
}

export default StoriesComponent
