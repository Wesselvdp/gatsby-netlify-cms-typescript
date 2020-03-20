import React, {FC, useEffect, useState} from 'react'
import Slider from "react-slick"
// import BackgroundImage from "gatsby-background-image"
import MastImage from './MastImage'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Carousel: FC = ({className, children}) => {
  const [autoplay, setAutoplay] = useState(true)
  // const [uniqueID, setID] = useState(delay ? 1 : 2)
  useEffect(() => {
    setTimeout(() => {
      setAutoplay(true)
    }, 500)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay,
    slidesToScroll: 1,
  }

const images = [1, 2, 3]


  const Slide = (i) => {
    return (
      <div key={i} className="swiper-slide">
        <div className="slide">
          {/* <div className="overlay"></div> */}

            <MastImage imageSlug="07_conrad" />
          <div className="header-content">
            {/* {{#if mobile}}
            <blockquote className="blockquote desktop blockquote--header">
              {{breaklines title}}”
            </blockquote>
            <blockquote className="blockquote mobile blockquote--header">
              {{title}}”
            </blockquote>
            {{else}}
            <blockquote className="blockquote blockquote--header">
              {{breaklines title}}”
            </blockquote>
            {{/if}} */}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Slider  {...settings} className="header-slider">
      {images.map((el, i) => Slide(i))}
    </Slider>
  )

}

export default Carousel
