import React from 'react'
import { Button,Collapse } from 'antd'

const {Panel} = Collapse

function Faqs() {
  return (
    <div id='faq' className='block faq-block'>
      <div className='fluid-container'>
        <div className='title-section'>
          <h2>Frequently Asked Questions</h2>
          <p>What are the most frequently asked questions regarding a property?</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header='How do I find the right property?'>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </Panel>
          <Panel header='How do I know I can trust your agents?'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus lacus leo, ut cursus nibh pharetra nec. Nullam ut leo in nisl ullamcorper ultrices. Vestibulum eu tortor blandit, malesuada arcu ac, ultrices justo. Quisque venenatis justo ac tellus consectetur, sed sagittis metus accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fringilla consectetur neque et condimentum. Sed dictum auctor augue et placerat. Praesent vulputate urna quam, vel vestibulum lectus posuere at. Proin eleifend erat turpis. Fusce interdum justo ultricies ultrices consectetur. Suspendisse nec pellentesque nulla.
            </p>
          </Panel>
          <Panel header='Who are your major clients?'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pretium urna. Fusce lacinia luctus risus non commodo. Cras ultrices risus vitae quam malesuada eleifend. Vestibulum a justo massa. Proin metus ante, convallis id tincidunt quis, pellentesque sit amet lorem. Cras eros velit, facilisis sit amet felis vel, auctor laoreet nibh. Integer fermentum ultricies pharetra. Integer auctor nec sem eu elementum. Vestibulum ultrices lacinia ipsum, a interdum risus cursus ac. Pellentesque a lectus vehicula, accumsan lorem at, pharetra leo. Aenean porta rutrum mi, ac mollis quam pellentesque quis. Cras suscipit purus a iaculis congue. Phasellus et posuere dolor. Suspendisse porta sit amet massa nec ullamcorper. Fusce finibus, enim vitae convallis scelerisque, leo augue commodo magna, sed sollicitudin ligula lectus sed lectus.
            </p>
          </Panel>
          <Panel header='How do I get in touch?'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim nulla ut odio convallis commodo. Praesent tempus fringilla leo in imperdiet. Donec a ipsum augue. Praesent ac ligula feugiat, ultricies quam tempus, tincidunt leo. In auctor, libero sed pretium ornare, metus sem rutrum orci, sit amet volutpat ante arcu quis tellus. Integer ac luctus ipsum. Morbi vitae sapien eu mi dictum laoreet et quis turpis. Phasellus aliquet nunc id nulla egestas, id finibus purus tristique. Nunc vel dolor tempus neque maximus condimentum. Aenean ac eros eros. Curabitur vehicula magna nec purus hendrerit maximus. Vestibulum nec ultrices odio. Sed nec nisi a nisi iaculis consequat at sed lectus. Sed pulvinar sit amet lacus in imperdiet.
            </p>
          </Panel>
          <Panel header='Do I need to create an account?'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia nulla aliquet libero ultricies pulvinar. Quisque a purus pretium, feugiat leo ut, dignissim libero. Sed commodo dolor nunc, commodo feugiat justo tincidunt ut. In tincidunt pharetra pretium. Ut nec purus non est euismod vulputate vestibulum non tellus. Donec sed risus id urna eleifend sagittis. Proin ut interdum arcu, vel varius orci. Praesent maximus vestibulum mi hendrerit venenatis. Suspendisse accumsan sit amet erat id porta. Sed dignissim quam pretium turpis ultrices aliquam. Vestibulum lobortis odio tellus, vel fermentum magna tristique in. Etiam id finibus tellus. Aliquam tempus massa et mauris auctor cursus. Etiam fringilla auctor dictum.
            </p>
          </Panel>
        </Collapse>
        <div className='quick-support'>
          <h3>Want expedited support?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet justo metus. Maecenas ut purus molestie, facilisis massa et, mattis libero. In hac habitasse platea dictumst. Nullam dictum velit a blandit suscipit. Sed euismod maximus magna eu euismod. Etiam rhoncus aliquam arcu non finibus. Cras ac sem tincidunt, ultrices mi ac, semper mi.
          </p>
          <Button type='primary' size='large'>
            <i className='fas fa-envelope'></i> Email your question!
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Faqs