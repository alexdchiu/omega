import React, {useEffect} from 'react'
import { Col,Container,Row,Card,Table } from 'react-bootstrap'
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
  const property = properties.filter(property => property.slug===pathname)[0]
  console.log(property)
  
  return (
    <>
      <Title title={property.title} />
      <Container>
        <Row>
          <Col className='mg-top text-center'>
            <h1>Test</h1>
            <h2>{property.title}</h2>
            <hr className='hr-text' />
          </Col>
        </Row>
      </Container>
      <Card style={{width:'80%', margin:'0 auto'}} className='d-flex justify-content-center' >
        <Card.Img src={property.cover_photo} width='400' height='700' className='justify-content-center' />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      
      </Card>
      
    </>
  )
}

export default PropertyDetailPage