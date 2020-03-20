import React, {FC} from 'react'

type MastProps = {
  imageSlugs: string,
  quote: string
}

const MastHead: FC<MastProps> = ({imageSlugs, quote}) => {
  const imageSlug = '07_Conrad'

  return (
    <div className="fullscreen" style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
          {/* Mobile */}
      <div className="background-header background-header--story  background-header--mobile"
        style={{backgroundImage: `url('/assets/images/verhalen/9x16_${imageSlug}.jpg')`}}>
      </div>

      {/* Normal */}
      <div className="background-header background-header--story  background-header--desktop"
           style={{backgroundImage: `url('/assets/images/verhalen/1366x768_${imageSlug}.jpg')`}}>
      </div>

      {/* XL */}
      <div className="background-header background-header--story  background-header--xl"
        style={{backgroundImage: `url('/assets/images/verhalen/16x9_${imageSlug}.jpg')`}}>
      </div>

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
  )
}

export default MastHead