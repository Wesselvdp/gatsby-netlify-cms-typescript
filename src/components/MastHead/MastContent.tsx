import React, { FC } from 'react'

type T = {
  title: string,
  mobile?: string,
}

const MastImage: FC<T> = ({ title, mobile}) => {
console.log('title', title)
  return (
    <div className="header-content">

              {mobile &&
              <>
                <blockquote className="blockquote desktop blockquote--header">
                  {title}”
                </blockquote>
                <blockquote className="blockquote mobile blockquote--header">
                  {title}”
                </blockquote>
               </>
              }
              {!mobile &&
                 <blockquote className="blockquote blockquote--header">
                 {title}”
               </blockquote>
              }
               </div>

  )
}

export default MastImage