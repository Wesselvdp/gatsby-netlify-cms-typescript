import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h5>Service</h5>
            <ul>
              <li>
                <a
                  href="https://www.rijksoverheid.nl/contact"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://www.campagnetoolkits.nl/debaanvanhetleven"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Toolkit
                </a>
              </li>
              <li>
                <a
                  href="https://www.leraar.nl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Leraar.nl
                </a>
              </li>
              <li>
                <a
                  href="https://www.aanpaklerarentekort.nl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Aanpak Lerarentekort{" "}
                </a>
              </li>
              <li>
                <a
                  href="mailto:debaanvanhetleven@coopr.nl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Persverzoeken{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>Over deze site</h5>
            <ul>
              <li>
                <a
                  href="https://www.rijksoverheid.nl/copyright"
                  target="_blank"
                >
                  Copyright
                </a>
              </li>
              <li>
                <a
                  href="https://www.rijksoverheid.nl/ministeries/ministerie-van-onderwijs-cultuur-en-wetenschap/privacy"
                  target="_blank"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a href="/toegankelijkheid" target="_blank">
                  Toegankelijkheid
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <svg fill="red" style="display: none" width="68px" height="51px" viewBox="0 0 68 51" version="1.1"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="svg-arrow" style="transform: rotate(-45deg) translate(-2px, 2px)" stroke="none" stroke-width="1"
        fill="none" fill-rule="evenodd">
        <g fill="currentColor" transform="" fill-rule="nonzero">
          <path
            d="M36.2,5.2 C35,4 35,2.1 36.2,0.9 C37.4,-0.3 39.3,-0.3 40.5,0.9 L58.7,19 C59.3,19.6 59.6,20.3 59.6,21.2 C59.6,22.1 59.3,22.8 58.7,23.4 L40.5,41.6 C39.3,42.8 37.4,42.8 36.2,41.6 C35,40.4 35,38.5 36.2,37.3 L49.2,24.3 L3,24.3 C1.3,24.3 0,22.9 0,21.2 C0,19.5 1.3,18.2 3,18.2 L49.2,18.2 L36.2,5.2 Z"
            id="Path"></path>
        </g>
      </g>
    </svg> */}
      </footer>
    </>
  )
}
export default Footer
