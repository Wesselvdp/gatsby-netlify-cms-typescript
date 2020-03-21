import React, {FC, useEffect, useState} from 'react'
import Slider from "react-slick"
import MastImage from './MastImage'
import MastContent from './MastContent'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import headers from '@data/headers.json'

type T = {
  className: string,
}
const Carousel: FC<T> = ({className, children}) => {

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: false,
  }


  const Slide = ({ title, mobile, image }: {title: string, mobile: string, image: string}) => {
    return (
      <div className="slide">
          <MastImage className="slide" imageSlug={image} />
          <MastContent title={title} mobile={mobile} />
      </div>
    )
  }
  return (
    <Slider {...settings} className={className}>
      {headers.map(({title, mobile, image}, index) => <Slide key={index} title={title} mobile={mobile} image={image} />)}
    </Slider>
  )
}

//   return (
//     <Slider  {...settings} className="carousel">
//       {images.map((el, i) => (
//         <div key={i} className="">
//           {/* <div className="overlay"></div> */}
//           <div className="background-header background-header--story  background-header--xl"
//             style={{backgroundImage: `url('/assets/images/verhalen/16x9_07_Corona.jpg')`}}>
//           </div>
//             {/* <MastImage imageSlug="07_conrad" /> */}
//           <div className="header-content">
//             {/* {{#if mobile}}
//             <blockquote className="blockquote desktop blockquote--header">
//               {{breaklines title}}”
//             </blockquote>
//             <blockquote className="blockquote mobile blockquote--header">
//               {{title}}”
//             </blockquote>
//             {{else}}
//             <blockquote className="blockquote blockquote--header">
//               {{breaklines title}}”
//             </blockquote>
//             {{/if}} */}
//           </div>
//       </div>
//       )

//       )}
//     </Slider>
//   )

// }

export default Carousel
