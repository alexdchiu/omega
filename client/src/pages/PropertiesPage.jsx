import React, {useEffect} from 'react'
import { Col,Container,Row,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import {toast} from 'react-toastify'
import Property from '../components/Property'
import { getProperties, reset } from  '../features/properties/propertySlice.js'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const PropertiesPage = () => {
  const {properties,isLoading,isError, message} = useSelector((state) => state.properties)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(getProperties())
  }, [dispatch, isError, message])

  if (isLoading) {
    return <Spinner />
  }
  
  return (
    <>
      <Title title='Our Listing of Properties' />
      <Container>
        <Row>
          <Col className='mg-top text-center'>
            <h1>Our Catalog of Properties</h1>
            <hr className='hr-text' />
          </Col>
        </Row>
        <Row>
        <Link to={`/property/create`}>
          <Button variant='secondary'>
            List a New Property
          </Button>
        </Link>
      </Row>
        {
          <>
            <Row className='mt-3'>
              {properties.map((property) => (
                <Col key={property.id} sm={12} md={6} lg={4} xl={3}>
                  <Property property={property} />
                </Col>
              ))}
            </Row>
          </>
        }
      </Container>
    </>
  )
}

export default PropertiesPage