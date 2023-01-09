import React, {useEffect} from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import {toast} from 'react-toastify'
import Property from '../components/Property'
// import { getProperties, reset } from  '../features/properties/propertySlice.js'
import Title from '../components/Title'


const PropertyDetailPage = () => {
  const {properties} = useSelector((state) => state.properties)

  const pathname = window.location.pathname.split("/")[2]
  
  console.log(properties)
  const property = properties.filter(property => property.slug===pathname)
  console.log(property)
  
  return (
    <>
      <Title title='Our Listing of Properties' />
      <Container>
        <Row>
          <Col className='mg-top text-center'>
            <h1>Test</h1>
            <h2>{property[0].title}</h2>
            <hr className='hr-text' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PropertyDetailPage