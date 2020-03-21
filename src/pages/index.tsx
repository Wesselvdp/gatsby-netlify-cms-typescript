import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'gatsby'
import MastHead from '@components/MastHead/'
import Layout from '@components/layout'
import SEO from '@components/seo'
import StoriesComponent from '@components/Stories'
import partners from '@data/partners.json'


type PageProps = {
  data: {
    allSanityCity: {
      cities: [
        {
          slug: {
            current: string
          }
          name: string
        }
      ]
    }
  }
}

const IndexPage = ({ data }: PageProps) => {
  const sloganRef = useRef<HTMLHeadingElement>(null);
  const [mastHeight, setMastHeight] = useState(300);
  useEffect(() => {
    const sloganHeight = sloganRef && sloganRef.current ? sloganRef.current.offsetHeight : 0

    const height = window.innerHeight - sloganHeight - 124
    setMastHeight(height)
  }, [sloganRef])
  return (
    <Layout>
      <>
        <SEO title="Home" />
        <MastHead height={mastHeight} />
        <section  id="intro" className="padding">
          <h2 ref={sloganRef} className="slogan">
            <span className="werken">Werken in het onderwijs.</span> De baan van
            het leven.
          </h2>
          <p className="subtitle">
            Onderwijs is het enige vak ter wereld waar letterlijk alle aspecten
            van het leven voorbijkomen. Samen met je collega’s leg je de basis
            voor de levens van jonge mensen. En dat is net zo mooi,
            confronterend, dankbaar, spannend, simpel en soms ingewikkeld, als
            het leven zelf.
          </p>
        </section>

        <section id="video">
          <div className="video">
            <div className="video-wrapper">
              <iframe
                title="Campagne video"
                src="https://www.youtube.com/embed/videoseries?list=PLYi8A-PLqxwrtBNuISVr4ZmYIHXOO4xje;disablekb=1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <div className="subline padding">
            <p>
              Deze video is tot stand gekomen met hulp van OBS De Corantijn,
              Brede School Roelof Venema, Het Minkema College en het Hout- en
              Meubileringscollege.
            </p>
          </div>
        </section>

        <section id="stories">
          <h2 className="padding">
            Verhalen uit <span className="het_onderwijs">het onderwijs</span>
          </h2>
          <div className="no-padding">
            <StoriesComponent />
          </div>
        </section>

        <section id="features">
          <div className="features">
            <div id="share" className="feature light right">
              <div className="feature-col">
                <div className="feature-content">
                  <h2 className="feature-title">Deel jouw verhaal</h2>
                  <p>
                    Wil jij ook laten zien hoe mooi, confronterend, dankbaar,
                    spannend, simpel en ingewikkeld werken in het onderwijs is?
                    Deel dan jouw verhaal uit het onderwijs via social media met
                    #debaanvanhetleven. Ook kun je de verhalen, video’s, foto’s
                    en teksten gebruiken uit de online toolkit.
                  </p>
                  <a
                    title="naar toolkit"
                    href="https://campagnetoolkits.nl/debaanvanhetleven"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button dark"
                  >
                    <span className="button__text">Naar toolkit</span>

                    <svg
                      className="icon"
                      width="26px"
                      height="16px"
                      viewBox="0 0 68 51"
                    >
                      {/* <use xLink:href="#svg-arrow" /> */}
                    </svg>
                  </a>
                </div>
              </div>

              <div
                className="feature-col img img--schilderen"
                title="Meisje aan het schilderen"
                style={{ backgroundImage: `url('/assets/images/twerken.jpg'` }}
              ></div>
            </div>

            <div className="feature light left">
              <div className="feature-col">
                <div className="feature-content">
                  <h2>
                    Werken in{' '}
                    <span className="het_onderwijs">het onderwijs?</span>
                  </h2>
                  <p>
                    Overweeg jij een carrière in het onderwijs? Dan wil je
                    natuurlijk weten wat je te wachten staat. Op de website{' '}
                    <a
                      href="https://onderwijsloket.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="ga naar onderwijsloket.com"
                    >
                      onderwijsloket.com
                    </a>{' '}
                    vind je alle informatie die je nodig hebt om de stap te
                    zetten naar werken in het in het onderwijs. Ook kun je daar
                    terecht voor persoonlijk advies.
                  </p>
                  <a
                    title="Lees verder over werken in het onderwijs"
                    href="https://onderwijsloket.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button dark"
                  >
                    <span className="button__text">Lees verder</span>
                    <svg
                      className="icon"
                      width="26px"
                      height="16px"
                      viewBox="0 0 68 51"
                    >
                      {/* <use xlink:href="#svg-arrow" /> */}
                    </svg>
                  </a>
                </div>
              </div>

              <div
                title="lachende vrouw in wit shirt"
                className="feature-col img img--werkenin"
              >
                <div
                  className="img__inner"
                  style={{
                    backgroundImage: `url('/assets/images/werken_in_woman.jpg')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section id="partnerships">
          <div className="padding">
            <h2>Partners</h2>
            <p className="subtitle">
              Dit is een gezamenlijk initiatief van sectororganisaties,
              vakbonden, de vier grote gemeenten en het Ministerie van
              Onderwijs, Cultuur en Wetenschap.
            </p>

            <div className="partners">
              {partners.partners.map((partner: any, index: number) => (
                <div key={index} className="partner">
                  {partner.url && (
                    <a
                      title="ga naar de website van {{title}}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="partner__anchor"
                      href={partner.url}
                    ></a>
                  )}
                  <div className="partner__background">
                    <img
                      className="partner__logo"
                      style={partner.style}
                      alt={`logo van ${partner.title}`}
                      src={`/assets/images/partners/${partner.image}`}
                    />
                  </div>
                  <span>{partner.title}</span>
                </div>
              ))}

              <div className="partner">
                <a
                  title="ga naar de website van het Ministerie van Onderwijs Cultuur en Wetenschap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner__anchor"
                  href="https://www.rijksoverheid.nl/ministeries/ministerie-van-onderwijs-cultuur-en-wetenschap"
                ></a>
                <div className="partner__background partner__background--ocw">
                  <img
                    className="partner__logo"
                    alt="logo van het Ministerie van OCW"
                    src="/assets/images/partners/ocw-logo-black.svg"
                  />
                </div>
                <span>Ministerie van OCW</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="padding">
            <span className="slogan h2">
              <span className="werken">Werken in het onderwijs.</span> De baan
              van het leven.
            </span>
          </div>
        </section>
      </>
    </Layout>
  )
}

export default IndexPage
