import React from 'react'
import {Helmet} from 'react-helmet'

const Title = ({title, description, keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Title.defaultProps={
  title: 'Welcome to the Real Estate Application',
  description: 'We sell the best properties online.',
  keywords: 'land, real estate, best value'
}

export default Title