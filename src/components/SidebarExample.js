import React, { Components } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react';

 export default class SidebarExample extends React.Component {
  state = { visible:false}
  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    
    return (
      <div>
        <Button onClick={this.handleButtonClick}>Chọn học phần</Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
            
              Học phần 1
            </Menu.Item>
            <Menu.Item as='a'>
             
              Học phần 2
            </Menu.Item>
            <Menu.Item as='a'>
            
              Học phần 3
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Danh sách học phần</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
