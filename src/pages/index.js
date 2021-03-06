import React from "react"

import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionBlock from "../components/section"

import { rhythm } from "../utils/typography"
import "../styles/global.scss"

import Popup from "reactjs-popup"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

import Intro from "../components/intro"
import Button from "../components/button"
import Menu from "../components/menuabout"

import MailForm from "../components/mailForm"

import TextLoop from "react-text-loop"

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.openForm = this.openForm.bind(this)
  }

  openForm() {
    this.typeformEmbed.typeform.open()
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Main Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <header>
          <Menu
            title="Title"
            link="/"
            menu={[`app`, `vision`, `about`, `contact`]}
          />
        </header>

        <Intro />

        <SectionBlock id="app">
          <h2>
          Introducing the WeTennis app <span>🚀</span>
          </h2>
          <h3>#TheATPForEverydayPlayers</h3>
          <p
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(31),
            }}
          >
            WeTennis is community and performance based platform for amateur tennis players. No matter your age or ability, our app is designed to make you feel more like
            <div />
            <TextLoop className={"typingNames"} interval={1000} fade>
              <span>Roger Federer</span>
              <span>Serena Williams</span>
              <span>Novak Djokovic</span>
              <span>Naomi Osaka</span>
              <span>Rafa Nadal</span>
              <span>Maria Sharapova</span>
              <span>Juan Martín del Potro</span>
              <span>Petra Kvitová</span>
              <span>Andy Murray</span>
              <span>Simona Halep</span>
            </TextLoop>{" "}
            and connect with your local tennis community to feel more like a pro.
          </p>

          <Popup
            trigger={
              <button className="btn"> join our community </button>
            }
            position="right center"
          >
            <div style={{marginTop: 0}}>
              <form method="POST" action="https://arpi.com/email/">
                <MailForm />
              </form>
            </div>
          </Popup>

          <Button title="learn more about us" link="/our-mission" />
        </SectionBlock>

        <SectionBlock id="vision">
          <div class="blue-line-2" />
          <div class="yellow-line-2" />

          <AliceCarousel
            mouseDragEnabled
            autoPlayInterval={4000}
            duration={700}
            autoPlay={true}
            buttonsDisabled={true}
            stopAutoPlayOnHover={false}
          >
            <div class="container">
              <div class="half slide-text">
                <h2>STAY CONNECTED</h2>
                <p
                  style={{
                    maxWidth: rhythm(14),
                  }}
                >
                   follow players to stay updated on their tennis activity and news about their on-court stats
                </p>
              </div>
              <div class="half phone-box">
                <Image
                  fluid={data.stay.childImageSharp.fluid}
                  alt="Fell like Pro"
                />
              </div>
            </div>
            

            <div class="container">
              <div class="half slide-text">
                <h2>Display & compare match stats</h2>
                <p
                  style={{
                    maxWidth: 400,
                  }}
                >
                  track stats like your match wins, deciding set record and more and compare them with your friends in a head to head format 
                </p>
              </div>
              <div class="half phone-box">
                <Image
                  fluid={data.compare.childImageSharp.fluid}
                  alt="Fell like Pro"
                />
              </div>
            </div>

            <div class="container">
              <div class="half slide-text">
                <h2
                  style={{
                    maxWidth: rhythm(22),
                  }}
                >
                   Discover your local community
                </h2>
                <p
                  style={{
                    maxWidth: 360,
                  }}
                >
                  find nearby players, courts and groups for pick up games
                </p>
              </div>
              <div class="half phone-box">
                <Image
                  fluid={data.discover.childImageSharp.fluid}
                  alt="Fell like Pro"
                />
              </div>
            </div>

            <div class="container">
              <div class="half slide-text">
                <h2>COMPETE IN LEADERBOARDS</h2>
                <p
                  style={{
                    maxWidth: 445,
                  }}
                >
                  create custom groups with attached leaderboard to gain and loss points just like the pros. 
                </p>
              </div>
              <div class="half phone-box">
                <Image
                  fluid={data.compete.childImageSharp.fluid}
                  alt="Fell like Pro"
                />
              </div>
            </div>

            {/* <div class="container">
              <div class="half slide-text">
                <h2>
                  DISPLAY<div /> STATS
                </h2>
                <p
                  style={{
                    maxWidth: 460,
                  }}
                >
                  see you track record and match stats<div /> like win/loss
                  ratio, tiebreak ratio and more
                </p>
              </div>
              <div class="half phone-box">
                <Image
                  fluid={data.display.childImageSharp.fluid}
                  alt="Fell like Pro"
                />
              </div>
            </div> */}
          </AliceCarousel>
        </SectionBlock>

        <SectionBlock id="contact">
          <h2>
            get in touch <span>👋</span>
          </h2>
          <h3>#GotQuestions</h3>
          <p
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(16),
            }}
          >
            to access our press kit, partner with us or to just ask us a question, drop us an email at{" "}
            <a href="mailto:info@wetennis.app">info@wetennis.app</a>
          </p>
        </SectionBlock>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    phone: file(absolutePath: { regex: "/phone_feel_like_pro.png/" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    stay: file(absolutePath: { regex: "/stay.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discover: file(absolutePath: { regex: "/discover.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    compare: file(absolutePath: { regex: "/compare.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    compete: file(absolutePath: { regex: "/compete.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    display: file(absolutePath: { regex: "/display.png/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
