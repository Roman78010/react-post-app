import React from 'react'

import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'black'};
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({liked, allPosts}) => {
  return (
    // <div className='app-header d-flex'>
    //   <h1>Ivan Petrychenko</h1>
    //   <h2>5 записей, из них понравилось 0</h2>
    // </div>
    // <Header as='a'>
    //   <h1>Ivan Petrychenko</h1>
    //   <h2>5 записей, из них понравилось 0</h2>
    // </Header>
    <Header>
      <h1>Ivan Petrychenko</h1>
      <h2>{allPosts} записей, из них понравилось {liked}</h2>
    </Header>
  )
}

export default AppHeader;
