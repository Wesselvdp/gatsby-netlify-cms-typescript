import React, {FC} from 'react'
import Navigation from './Navigation'
import MastImage from './MastImage'
import Carousel from './Carousel'
type MastProps = {
  imageSlugs: string,
  quote: string
}

const MastHead: FC<MastProps> = ({imageSlugs, quote}) => {
  const imageSlug = '07_Conrad'

  return (
    <div className="masthead">
      <div className="fullscreen" style={{position: 'relative', alignItems: 'center'}}>
        {/* <MastImage imageSlug="07_conrad" /> */}
        <Carousel />

        {/* OPTIONAL */}
        {/* <div className="overlay"></div> */}

        <div className="header-content header-content--article">
          {/* Mobile only */}
          <blockquote className="blockquote desktop blockquote--header">
            {/* quotes with breaklines */}

          </blockquote>

          {/* normal */}
          <blockquote className="blockquote blockquote--header">
            {/* maybe insert breaklines */}
            {quote}”
          </blockquote>
        </div>
      </div>
      <Navigation />
    </div>
  )
}

export default MastHead