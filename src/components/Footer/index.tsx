import React from 'react';
import { Link } from 'react-router-dom';

import {
  FooterDiv,
  Container,
  Content,
  Logo,
  Menu,
  MenuList,
  MenuListItem,
  MenuTitle
} from './elements';

import Config from '../../config';

const Footer = () => (
  <FooterDiv>
    <Container className='container'>
      <div className='row'>
        <Content className='col-12 col-md-4 col-lg-3 text-center text-md-left align-items-end flex-column'>
          <Link to='/' className='logo-footer'>
            <Logo src={Config.logo} alt='Logo' />
          </Link>
        </Content>
        <Content className='col-12 col-md-4 col-lg-3 text-center text-md-left'>
          <Menu>
            <MenuTitle>Getty/IO</MenuTitle>
            <MenuList>
              <MenuListItem>
                <a className='tronwallet-link' href='https://getty.io/'>Website</a>
              </MenuListItem>
            </MenuList>
          </Menu>
        </Content>
        <Content className='col-12 col-md-4 col-lg-3 text-center text-md-left'>
          <Menu>
            <MenuTitle>Social</MenuTitle>
            <MenuList>
              <MenuListItem>
                <a className='twitter-link' href='https://twitter.com/TronWalletMe'>Twitter</a>
              </MenuListItem>
              <MenuListItem>
                <a className='facebook-link' href='https://www.facebook.com/TronWallet/'>Facebook</a>
              </MenuListItem>
              <MenuListItem>
                <a className='telegram-link' href='https://t.me/TronWalletMe'>Telegram</a>
              </MenuListItem>
              <MenuListItem>
                <a className='discord-link' href='https://discordapp.com/channels/544917606331842560/544917606847610882'>Discord</a>
              </MenuListItem>
              <MenuListItem>
                <a className='medium-link' href='https://medium.com/tronwallet'>Medium</a>
              </MenuListItem>
            </MenuList>
          </Menu>
        </Content>
        <Content className='copyright col-12'>
          <p>
            Powered by
            {' '}
            <a className='getty-link' href='https://getty.io/'>Getty/IO</a>
          </p>
          <p className='pt-2'>v {process.env.REACT_APP_VERSION}</p>

        </Content>
      </div>
    </Container>
  </FooterDiv>
)

export default Footer;