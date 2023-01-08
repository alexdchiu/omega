import React from 'react'
import { Button,Card,List } from 'antd'
import { ChromeOutlined,HomeOutlined,TeamOutlined } from '@ant-design/icons'

const data = [
  {
    title: 'Buy a property',
    content: [
      {
        icon: <HomeOutlined />,
        description: 'Find your next piece of property with an immersive photo experience and the most listings.',
      }
    ]
  },
  {
    title: 'Sell a property',
    content: [
      {
        icon: <ChromeOutlined />,
        description: 'Sell your property with the best real estate application.',
      }
    ]
  },
  {
    title: 'Rent a property',
    content: [
      {
        icon: <TeamOutlined />,
        description: "It's never been easier to rent a property with a platform you can trust.",
      }
    ]
  },
]

function Options() {
  return (
    <div id='options' className='block options-block grey-bg'>
      <div className='fluid-container'>
        <div className='title-section'>
          <h2>Choose an option that fits your needs</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lorem mauris, quis bibendum justo vehicula vitae. Nullam aliquam nulla ultricies, finibus augue in, vestibulum augue. Quisque id dolor egestas ipsum venenatis egestas vel a ante. Fusce ut velit a massa maximus ornare imperdiet nec ante. Ut vel neque sit amet orci malesuada ornare eget in lacus. Duis lacinia porttitor nisl, in laoreet neque semper et. Mauris aliquet nulla quis nisl eleifend, in sagittis eros condimentum. Aenean tincidunt, erat ut tincidunt ultrices, neque purus sollicitudin odio, nec ultrices mi ex vestibulum felis. Aenean tempor mollis porta. Nam id leo scelerisque, imperdiet dui id, scelerisque ante. Donec id tempor enim. Ut feugiat eu erat vel imperdiet
          </p>
        </div>
        <List grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3
        }}
        dataSource={data}
        renderItem={(item)=>(
          <List.Item>
            <Card title={item.title}>
              <p className='large'>
                {item.content[0].icon}
              </p>
              <p>
                {item.content[0].description}
              </p>
              <Button type='primary' size='large'>
                <i className='fab fa-telegram-plane'></i>
                {' '}
                Get Started
              </Button>
            </Card>
          </List.Item>
        )}
        >
        </List>
      </div>
    </div>
  )
}

export default Options