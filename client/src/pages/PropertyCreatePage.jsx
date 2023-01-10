import React, { useEffect, useState } from 'react'
import { Button,Col,Container,Row,Form } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import Title from '../components/Title'
import { createProperty,reset } from '../features/properties/propertySlice'


const PropertyCreatePage = () => {
  const [title, setTitle] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [price, setPrice] = useState(0)
  const [property_number, setPropertyNumber] = useState('')
  const [street_address, setStreetAddress] = useState('')
  const [plot_area, setPlotArea] = useState('')
  const [total_floors, setTotalFloors] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')
  
  const {user} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {propertyCreated} = useSelector((state) => state.properties)

  useEffect(() => {

    if (propertyCreated) {
      navigate('/properties')
      toast.success(
        'Your property has been successfully listed.'
      )
    }
  
    dispatch(reset())
  }, [propertyCreated, navigate, dispatch])


  const submitHandler = (e) => {
    e.preventDefault()
    let propertyData;

    if (!title) {
      toast.error('Property need a title.')
    } else {
      propertyData = {
        title, 
        country, 
        city, 
        price, 
      }
      let data = {
        propertyData: propertyData,
        token: user.access
      }
      dispatch(createProperty(data))
    }

  }

  return (
    <>
      <Title title='Create a New Listing' />
      {user ? 
      <Container>
        <Row>
          <Col className='mg-top text-center'>
            <section>
              <h1>
                Create a New Listing
              </h1>
              <hr className='hr-text' />
            </section>
          </Col>
        </Row>
        {/* {isLoading && <Spinner /> } */}
        <Row className='mt-3'>
          <Col className='justify-content-center'>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='title' placeholder='Enter Property Title' value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>

              <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control type='country' placeholder='Enter Country' value={country} onChange={(e) => setCountry(e.target.value)} />
              </Form.Group>

              <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control type='city' placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} />
              </Form.Group>

              <Form.Group controlId='price'>
                <Form.Label>Price</Form.Label>
                <Form.Control type='price' placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>
{/* 
              <Form.Group controlId='property_number'>
                <Form.Label>Address Number</Form.Label>
                <Form.Control type='property_number' placeholder='Enter Address Number' value={property_number} onChange={(e) => setPropertyNumber(e.target.value)} />
              </Form.Group>

              <Form.Group controlId='street_address'>
                <Form.Label>Street</Form.Label>
                <Form.Control type='street_address' placeholder='Enter Street' value={street_address} onChange={(e) => setStreetAddress(e.target.value)} />
              </Form.Group>

              <Form.Group controlId='plot_area'>
                <Form.Label>Plot Area</Form.Label>
                <Form.Control type='plot_area' placeholder='Enter Plot Area (in acres)' value={plot_area} onChange={(e) => setPlotArea(e.target.value)} />
              </Form.Group> */}

              {/* <Form.Group controlId='total_floors'>
                <Form.Label>Number of Floors</Form.Label>
                <Form.Control type='total_floors' placeholder='Enter Number of Floors' value={total_floors} onChange={(e) => setTotalFloors(e.target.value)} />
              </Form.Group> */}

              <Button type='submit' variant='primary' className='mt-3' onClick={submitHandler}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    :
      <Container>
        <Row>
          <Col className='mg-top text-center'>
            <section>
              <h2>
              Please Login to List a New Property
              </h2>
              <h3>
                <Link to='/login' >
                  <Button variant='primary'>
                    Login Here
                  </Button>
                </Link>
              </h3>
              <hr className='hr-text' />
            </section>
          </Col>
        </Row>
      </Container>
      }
    </>
  )
}

export default PropertyCreatePage