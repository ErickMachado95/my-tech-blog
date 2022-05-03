import React from 'react'
import NavBar from './navbar'
import * as styles from '../sass/layout.module.sass'


interface LayoutProps { 
  children : React.ReactNode, 
  pageTitle: string,
  alternateBackground?: string 
  imageClass?: string
}

const Layout: React.FC<LayoutProps> = ({children,pageTitle,alternateBackground,imageClass}) => { 


  let divClass = `${styles.container}`;

  if(imageClass)
    divClass += ` ${imageClass}`

  return ( 
  <div 
    className={styles.container} 
    style={{backgroundColor: alternateBackground || ''}}
  >
    <title>{pageTitle}</title>
    <header className={styles.header}>
      <NavBar/>
    </header>
    <main className={styles.main}>
      {children}
    </main>
  </div>
  )

}

export default Layout