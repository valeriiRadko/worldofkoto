import React, { useCallback } from "react"
import Image from "next/legacy/image"
import Link from "next/link"
import { scroller } from "react-scroll"

import styles from "../../styles/components/navbar/index.module.css"
import { MenuItem, ScrollElement } from "../types"

export interface NavBarProps {
  items: MenuItem[]
}

function NavBar({ items }: NavBarProps) {
  const scroll = useCallback((element: ScrollElement) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -120,
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src="/logo.svg"
          alt="Art"
          layout="fill"
          className={styles.image}
        />
      </div>
      <ul className={styles.linkcontainer}>
        {items.map((item) => (
          <nav key={item.label}>
            <li>
              <button
                className={styles.button}
                onClick={() => scroll(item.scrollElement)}
              >
                {item.label}
              </button>
            </li>
          </nav>
        ))}
        <Link replace href="/" target="_blank" className={styles.link}>
          Whitepaper
        </Link>
      </ul>
    </div>
  )
}

export default NavBar
