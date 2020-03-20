import React, {FC} from 'react'


const Navigation: FC = () => {


  return (
    <nav>
      <div className="nav-container" id="nav-container">
        <div className="mobile-container">
          <div>
            <span className="title secondary">
              Werken in het onderwijs
            </span>
            <span className="title">
              <strong>
                De baan van het leven
              </strong>
            </span>
          </div>

          <button title="menu" aria-expanded="false" aria-label="Toggle page navigation" aria-controls="navigation-menu" id="nav-toggler">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
        <div className="nav-menu">
          <ul id="navigation-menu">
            <li><a className="nav-js" href="/#intro">De baan van het leven</a></li>
            <li><a className="nav-js" href="/#stories">Verhalen uit het onderwijs</a></li>
            <li><a className="nav-js" href="/#features">Aan de slag in het onderwijs</a></li>
            <li><a className="nav-js" href="/#partnerships">Partners</a></li>
            <li><a className="nav-js" href="/#share">Deel verhalen</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation