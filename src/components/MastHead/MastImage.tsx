import React, {FC} from 'react'

type T = {
  imageSlug: string
}

const MastImage: FC<T> = ({imageSlug}) => {

  return (
    <>
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
    </>
  )
}

export default MastImage