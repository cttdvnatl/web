import React,{Component} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

class CustomDropDown extends Component {

    state = {
        isDropDownOpened: false
    };

    onMouseOver = () =>{
       this.setState({isDropDownOpened: true});
    }

    onMouseLeave = () =>{
        this.setState({isDropDownOpened: false}); 
    }

    toggle = () => {
        this.setState(prevState =>({
            isDropDownOpened: !prevState.isDropDownOpened,
        }));
    }

    render() {
        return (
            <Dropdown className="d-inline-block" isOpen={this.state.isDropDownOpened} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} toggle={this.toggle}>
                 <DropdownToggle caret>Pages</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="/contact">Contact</DropdownItem>
                        <DropdownItem href="/contact">Contact</DropdownItem>
                    </DropdownMenu>
            </Dropdown>
        );

    }

};

export default CustomDropDown;