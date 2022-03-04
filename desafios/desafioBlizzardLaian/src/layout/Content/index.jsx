import React from 'react'
import ContentCards from '../../components/ContentCards'
import ContentHeader from '../../components/ContentHeader'
import './styles.css'

const Content = () => {
  return (
    <div className="content container">
      <ContentHeader />
      <ContentCards />
    </div>
  )
}

export default Content
