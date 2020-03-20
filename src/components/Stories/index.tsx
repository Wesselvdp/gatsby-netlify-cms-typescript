import React, { useState, useEffect } from 'react'
import useWindowSize from '@hooks/useWindowSize'
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

const StoriesComponent = () => {
  const [width, height] = useWindowSize()
  const [stories, setStories] = useState<Story[] | {}[]>([{}])
  const [amount, setAmount] = useState<number>(3)
  const [offset, setOffset] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pagination, setPagination] = useState<number>(0)
  const [paginationVisible, setPaginationVisible] = useState<number[]>([])
  const storiesLeft = allStories.length - (offset + stories.length)

  // Next
  const loadNext = (): void => {
    if (currentPage === pagination) return
    loadPage(currentPage + 1)
  }

  // Prev
  const loadPrev = (): void => {
    if (currentPage - 1 < 0) return
    loadPage(currentPage - 1)
    // const newOffset = offset - stories.length < 1 ? 0 : offset - stories.length
    // setOffset(newOffset)
  }

  // page
  const loadPage = (pageNumber: number) => {
    const nLeft = allStories.length - (pageNumber - 1) * stories.length
    let newOffset = (pageNumber - 1) * stories.length
    if (newOffset < 0) newOffset = 0

    // We dont want to overreach in the stories array, if there are less left than the amount in view, only change by that amount.
    if (nLeft < stories.length && pageNumber > currentPage) {
      newOffset += nLeft - stories.length
    }
    setCurrentPage(pageNumber)
    setOffset(newOffset)
    setStories(allStories.slice(newOffset, newOffset + amount))
  }

  useEffect(() => {
    loadPage(1)
  }, [amount])

  // Set stories on load and window width change
  useEffect(() => {
    const n = width < 600 || width > 2 * window.innerHeight ? 2 : 3
    setAmount(n)
  }, [width])

  // Pagination
  useEffect(() => {
    setPagination(Math.ceil(allStories.length / stories.length))
  }, [stories])

  // Pagination Visible
  useEffect(() => {
    const newBegin = currentPage - 1
    let begin = newBegin
    if (newBegin <= 1) begin = 1

    const end = storiesLeft <= 0 ? null : begin + 1

    const arr =
      end === null ? [begin - 1, begin, begin + 1] : [begin, begin + 1, end + 1]
    setPaginationVisible(arr)
  }, [currentPage])

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
        {paginationVisible.map((page: number) => (
          <button
            key={page}
            // ariaSelected={"page === currentPageNumber ? 'true' : 'false'"
            title={`Pagina nummer ${page}`}
            className={
              'pagination__item' +
              (page === currentPage ? ' active--number' : '')
            }
            onClick={() => loadPage(page)}
          >
            {page}
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
