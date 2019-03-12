import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import ContactList from '../components/ContactList'
import styled from '@emotion/styled'

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CardWrapper = styled.div`
  width: calc(50% - 15px);
  margin-bottom: 30px;

  &:first-child {
    margin-right: 30px;
  }

  @media (max-width: 600px) {
    width: 100%;

    &:first-child {
      margin-right: 0;
    }
  }
`

export default class Contact extends Component {
  componentDidMount() {
    //This is to handle login or fetch info
  }

  render() {
    return (
      <ContactWrapper>
        <CardWrapper>
          <ContactForm />
        </CardWrapper>

        <CardWrapper>
          <Map />
        </CardWrapper>

        <CardWrapper>
          <ContactList />
        </CardWrapper>
      </ContactWrapper>
    )
  }
}