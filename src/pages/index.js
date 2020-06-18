import React, {useState} from "react"
import { graphql } from "gatsby"
import styles from "./homepage.module.css"
import Nav from "../components/navigation"
import Banner from "../components/banner"
import Languages from "../components/languages"
import Laptop from "../components/laptop"
import Seo from "../components/icons/seo"
import Design from "../components/icons/design"
import Responsive from "../components/icons/responsive"
import Crm from "../components/icons/crm"
import MacPreview from "../components/macpreview"
import Footer from "../components/footer"
import Img from "gatsby-image"

export default function Home({ data }) {

  //Project Hovering actions
  const [hovering, setHovering] = useState(null);
  const [projectSelect, setProjectSelect] = useState(null);
  let yOffset;

  //If hovering on project card return a different className
  let hoverClass = (i) => {
    if (i === hovering) {
      return styles.cardHover
    } else {
      return styles.cardContainer
    }
  } 

  //If hovering on any project, only the hovered project is fully opaque
  let hoverStyle = (i) => {
    if (hovering !== null && i === hovering) {
      return {opacity: "1"}
    } else if (hovering !== null && i !== hovering) {
      return {opacity: "0.8"}
    }
  }

  //graphql data for projects query
  let projects = data.allMarkdownRemark.edges;

  return (
    <div className={styles.home}>
      <Nav />
      <Banner />
      <Languages />
      <div className={styles.services}>
        <div className={styles.description}>
          <div className={styles.headlines}>
          <h2>Services</h2>
            <Seo hl="Clean SEO-friendly Code & Infrastructure" />
            <Design hl="Graphic & Web Design" />
            <Responsive hl="Responsive, Mobile-First Web Design" />
            <Crm hl="Sytems & CRM Integration" />
          </div>
        </div>
          <Laptop />
          <div style={{width: "100%"}}><a href="./about"><button>Find out how I work</button></a></div>
      </div>
      <div className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectsWrapper}>
          <div className={styles.cards}>
            {/*console.log(projects.frontmatter.featuredImage)*/}
            { //map portfolio markdown items and format into project cards
              projects.map(({ node }, i) => {
                let hi = node.frontmatter.featuredImage.childImageSharp.fluid;
                let mi = node.frontmatter.phoneImage.childImageSharp.fluid;
                let ti = node.frontmatter.tabletImage.childImageSharp.fluid;
                return (
                  <div key={i} style={hoverStyle(i)} className={hoverClass(i)} onMouseOver={() => setHovering(i)} onMouseLeave={() => setHovering(null)} onClick={() => setProjectSelect(
                    {
                      title: node.frontmatter.title,
                      tags: node.frontmatter.tags,
                      html: node.html,
                      fi: hi,
                      pi: mi,
                      ti: ti,
                      website: node.frontmatter.website,
                    })}>
                    {i === hovering ? <div className={styles.hoverTop}></div> : <div className={styles.unHoverCard}></div>}
                    <div className={styles.cardTitle}>{node.frontmatter.title}</div>
                    <MacPreview 
                      website={node.frontmatter.website} 
                      fi={hi} 
                      mi={mi} 
                      ti={ti}
                      hovering={hovering === i ? true : false}
                      height={"98%"}
                      width={"98%"}
                    />
                    <div className={styles.cardSubtitle}>
                      {node.frontmatter.subtitle}
                      <hr />
                      <div className={styles.cardPro}>{node.frontmatter.profession}</div>
                    </div>
                  </div>
                )
              })
            }
            {
              projectSelect ? 
              <div style={{top: yOffset}} className={styles.projectSelect}>
                <div className={styles.psHeader}>
                  {/*<div style={{width: "60%"}}><h2></h2></div>*/}
                  <div style={{cursor: "pointer", fontSize: "24px"}} onClick={() => setProjectSelect(false)}>|X| close</div>
                </div>
                <div className={styles.pContainer}>
                  <div className={styles.projectLeft}>
                    <MacPreview 
                      fi={projectSelect.fi} 
                      mi={projectSelect.pi} 
                      ti={projectSelect.ti}
                      width="350px"
                      height="200px"
                    />
                  </div>
                  <div className={styles.projectRight}>
                    <div dangerouslySetInnerHTML={{ __html: projectSelect.html }} /> 
                    <p><a href={projectSelect.website} target="_blank">Find Out More</a></p>
                      <hr />
                    <h3>Skill Set</h3>
                    <p>{projectSelect.tags.split(',').map(x => '#' + x.trim() + ' ')}</p>
                  </div>
                </div>
              </div>
              : <></>
            }
          </div>
        </div>
          <div><a href="./projects"><button>See more projects</button></a></div>
      </div>
      <Footer />
    </div>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            phoneImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tabletImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            website
            profession
            subtitle
            title
            tags
          }
        }
      }
    }
  }
`