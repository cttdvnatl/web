import React, { Component } from 'react'
import './styles.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { Menu, Icon, Drawer } from 'antd';
// import Button from 'react-bootstrap/Button'

const breakpoint = 600

class MainMenu extends Component {
    constructor() {
        super()

        this.state = {
            isOpenDrawer: false
        }

        this.onShowDrawer = this.onShowDrawer.bind(this)
        this.onCloseDrawer = this.onCloseDrawer.bind(this)
    }

    onShowDrawer = () => {
        this.setState({ isOpenDrawer: true })
    }

    onCloseDrawer = () => {
        this.setState({ isOpenDrawer: false })
    }

    buildMenu = (isMobile) => (
        <Menu mode={`${isMobile ? 'inline' : 'horizontal'}`}>
            <Menu.Item>HOME</Menu.Item>
            <Menu.SubMenu title={
                <span>PAGE
                    {!isMobile && (
                        <span className="down-icon">
                            <Icon type="down" style={{ width: '10px', height: '10px'}} />
                        </span>    
                    )}
                </span>
            }>
                <Menu.Item >PAGE 1</Menu.Item>
                <Menu.Item>PAGE 2</Menu.Item>
                <Menu.Item>PAGE 3</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={<span>MEGAMENU</span>}>
                <Menu.Item>MEGAMENU 1</Menu.Item>
                <Menu.Item>MEGAMENU 2</Menu.Item>
                <Menu.Item>MEGAMENU 3</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>
                <Link to="/About">ABOUT</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/Contact">CONTACT</Link>
            </Menu.Item>
        </Menu>
    )

    render() {
        return (
            <div>
                <MediaQuery minWidth={breakpoint + 1}>
                    {this.buildMenu(false)}
                </MediaQuery>
                <MediaQuery maxWidth={breakpoint}>
                    <div className="drawer-handle" onClick={this.onShowDrawer}>
                        <i className="fas fa-bars" />
                    </div>
                    <Drawer
                        placement='left'
                        closable={false}
                        onClose={this.onCloseDrawer}
                        visible={this.state.isOpenDrawer}
                    >
                        {this.buildMenu(true)}
                    </Drawer>
                </MediaQuery>
            </div>
        )
    }
    
}

export default MainMenu


// TODO leave this comments for a demo to the team to decide which UI lib we should use: antd, react-strap, react-bootstrap
// <DropdownButton
//     alignRight
//     title="Dropdown right"
//     id="dropdown-menu-align-right"
//     bsPrefix="dropdown-item"
// >
//     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//     <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
//     <Dropdown.Divider />
//     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
// </DropdownButton>

