import React, {FC} from 'react'

type T = {
  imageSlug: string,
  className: string,
}

const MastImage: FC<T> = ({imageSlug, className}) => {
  return (
    <>
        <div className={`background-header background-header--story  background-header--mobile ${className}`}
          style={{backgroundImage: `url('/assets/images/9x16_${imageSlug}.jpg')`}}>
        </div>

        {/* Normal */}
        <div className="background-header background-header--story  background-header--desktop"
            style={{backgroundImage: `url('/assets/images/1366x768_${imageSlug}.jpg')`}}>
        </div>

        {/* XL */}
        <div className="background-header background-header--story  background-header--xl"
          style={{backgroundImage: `url('/assets/images/16x9_${imageSlug}.jpg')`}}>
        </div>
    </>
  )
}

export default MastImage