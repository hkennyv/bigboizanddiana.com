import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import gang from "../../static/assets/gang.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO/>
    <h1>GANG</h1>
    <img src={gang} />
  </Layout>
)

export default NotFoundPage
