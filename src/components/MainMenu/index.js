import React, { Component } from 'react'
import './styles.css'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { Menu, Drawer } from 'antd';

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
        <Menu mode={`${isMobile ? 'inline' : 'horizontal'}`} className="menu">
            <Menu.Item>
                <Link to="/Home">HOME</Link>
            </Menu.Item>
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
            <div className="menu-container">
                <MediaQuery minWidth={breakpoint + 1}>
                    {this.buildMenu(false)}
                </MediaQuery>

                <MediaQuery maxWidth={breakpoint}>
                    <div className="drawer-handle" onClick={this.onShowDrawer}>
                        <i className="fas fa-bars"/>
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