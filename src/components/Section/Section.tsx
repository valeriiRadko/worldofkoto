import React from "react"
import { Element } from "react-scroll"

import { ScrollElement as Section } from "../types"
import styles from "./Section.module.scss"

interface ScrollElementProps {
  name: Section
  children: React.ReactNode
  container?: boolean
}

function Section({ children, name, container = false }: ScrollElementProps) {
  return (
    <section className={container ? styles.root : undefined}>
      <Element name={name}>{children}</Element>
    </section>
  )
}
export default Section
