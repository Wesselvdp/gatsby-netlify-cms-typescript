import React, { useState, useEffect } from 'react'
import { useMachine } from '@xstate/react'
import { assign } from 'xstate'
import useWindowSize from '@hooks/useWindowSize'
import { paginationMachine } from '../../machines/paginationMachine'
import StoryComponent from './Story'
import allStories from '@utils/data/stories.json'

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
  const [stories, setStories] = useState<Story[] | {}[]>([{}])
  const [offset, setOffset] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pagination, setPagination] = useState<number[]>([])
  const [paginationVisible, setPaginationVisible] = useState<number[]>([])
  const storiesLeft = allStories.length - (offset + stories.length)
  const storiesPassed = offset + stories.length

  const awayFromOffset = (offset: number) => {
    return allStories.length - offset
  }
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
  const loadPage = (n: number) => {
    console.log(`going to page ${n}`)
    // console.log(awayFromOffset(stories.length * n) < stories.length)
    const newOffset =
      awayFromOffset(stories.length * n) < stories.length
        ? offset + storiesLeft
        : stories.length * n

    setOffset(newOffset)
  }

  useEffect(() => {
    let arr
    const startArray = [currentPage, currentPage + 1, currentPage + 2]
    const normalArray = [currentPage - 1, currentPage, currentPage + 1]
    const endArray = [currentPage - 2, currentPage - 1, currentPage]

    if (currentPage === 1) {
      arr = startArray
    } else if (currentPage === pagination.length) {
      arr = endArray
    } else {
      arr = normalArray
    }
    console.log('arr is', arr)
    setPaginationVisible(arr)
  }, [currentPage, stories])

  // Set stories on load and window width change
  useEffect(() => {
    const n = width < 600 || width > 2 * window.innerHeight ? 2 : 3
    const pagination = [...Array(Math.ceil(allStories.length / n))]
    setStories(allStories.slice(offset, offset + n))
    setPagination(pagination)
    setCurrentPage(Math.floor(offset / n + 1))
  }, [width, offset])

  // const [paginationState, sendToPagination] = useMachine(
  //   paginationMachine({
  //     pages: ,
  //     length: 4,
  //   })
  // )

  useEffect(() => {
    console.log('stories', stories)
  }, [stories])

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
        {paginationVisible.map((n: number) => (
          <button
            key={n}
            // ariaSelected={"page === currentPageNumber ? 'true' : 'false'"
            title={`Pagina nummer ${n}`}
            className={
              'pagination__item' + (n === currentPage ? ' active--number' : '')
            }
            onClick={() => loadPage(n - 1)}
          >
            {n}
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
