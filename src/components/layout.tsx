import styled from "styled-components"
import React from "react"

import Footer from "@components/Footer"
import Header from "@components/Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
