import React, {FC} from 'react'
import Navigation from './Navigation'
import MastImage from './MastImage'
import Carousel from './Carousel'
type MastProps = {
  imageSlugs?: string,
  quote?: string
  height: number
}

const MastHead: FC<MastProps> = ({imageSlugs, quote, height}) => {
  const imageSlug = '07_Conrad'

  return (
    <div className="masthead" >
      <div className="fullscreen"  style={{position: 'relative', alignItems: 'center', height: `${height}px`}}>
        {/* <MastImage imageSlug="07_conrad" /> */}
        <div style={{overflow: 'hidden'}}>
          <Carousel />
        </div>

        {/* OPTIONAL */}
        {/* <div className="overlay"></div> */}

        {/* <div className="header-content header-content--article">
        </div> */}
      </div>
      <Navigation />
    </div>
  )
}

export default MastHead