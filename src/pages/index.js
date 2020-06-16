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

export default function Home({ data }) {

  //Project Hovering actions
  const [hovering, setHovering] = useState(null);
  const [projectSelect, setProjectSelect] = useState(null);

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
      </div>
      <div className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectsWrapper}>
          <div className={styles.cards}>
            {/*console.log(projects)*/}
            { //map portfolio markdown items and format into project cards
              projects.map(({ node }, i) => {
                return (
                  <div key={i} style={hoverStyle(i)} className={hoverClass(i)} onMouseOver={() => setHovering(i)} onMouseLeave={() => setHovering(null)} onClick={() => setProjectSelect(node.frontmatter.title)}>
                    {i === hovering ? <div className={styles.hoverTop}></div> : <></>}
                    <div className={styles.cardTitle}>{node.frontmatter.title}</div>
                    <MacPreview website={node.frontmatter.website} fi={node} hovering={hovering === i ? true : false} />
                    <div className={styles.cardSubtitle}>
                      {node.frontmatter.subtitle}
                      <hr />
                      <div className={styles.cardPro}>{node.frontmatter.profession}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {
              projectSelect ? 
              <div className={styles.projectSelect}>
                <h2>{projectSelect}</h2>
                <div style={{cursor: "pointer"}} onClick={() => setProjectSelect(false)}>|X| close</div>
              </div>
              : <></>
          }
        </div>
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
          frontmatter {
            website
            profession
            subtitle
            title
          }
        }
      }
    }
  }
`