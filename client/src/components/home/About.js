import React from 'react'
import { Col, Row } from 'antd'


const items = [
  {
    key: '1',
    icon: <i className='fas fa-search-location'></i>,
    title: 'Simplified Search',
    content: 'It is a long established fact that a reader will be distracted by the readable content.'
  },
  {
    key: '2',
    icon: <i className='fas fa-database'></i>,
    title: 'Lots of Properties',
    content: 'It is a long established fact that a reader will be distracted by the readable content.'
  },
  {
    key: '3',
    icon: <i className='fas fa-globe-americas'></i>,
    title: 'Proudly Asian',
    content: 'It is a long established fact that a reader will be distracted by the readable content.'
  },
]

function About() {
  return (
    <div id='about' className='block about-section'>
      <div className="fluid-container">
        <div className="title-section">
          <h2>About Us</h2>
          <p>You will find us very interesting!</p>
        </div>
        <div className='content-section'>
          <p>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{span: 8}} key={item.key}>
                <div className='content'>
                  <div className='icon'>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default About