import React, { FC } from 'react'

interface Story {
  id: number
  title: string
  author: string
  function: string
  slug: string
  image: string
}

interface StoryProps {
  story: Story
  size: 'full' | 'quarter' | 'half'
}

const StoryComponent: FC<StoryProps> = ({ story, size }) => {
  return (
    <div className="story-wrapper">
      <div
        key="story.id"
        className={`story ${size}`}
        style={{
          backgroundImage: `url(/assets/images/verhalen/16x9_${story.image}.jpg)`,
        }}
      >
        <div className="story-content">
          <blockquote>{story.title}”</blockquote>
          <div className="person">
            <strong>{story.author}</strong>
            <br />
            {story.function}
          </div>
          <a
            href={story.slug}
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            title={`Lees het artikel van ${story.author}`}
            className="button"
          >
            <span className="button__text">Lees verder</span>
            <svg
              className="icon"
              width="26px"
              height="16px"
              viewBox="0 0 68 51"
            >
              <use xlinkHref="#svg-arrow" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default StoryComponent
