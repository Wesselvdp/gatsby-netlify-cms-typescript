import styled from "styled-components"
import React from "react"

import Footer from "@components/Footer"
import Header from "@components/Header"



const Layout = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
