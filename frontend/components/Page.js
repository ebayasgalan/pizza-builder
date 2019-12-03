import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  primary: '#D4976A',
  light: '#FFCEAA',
  dark: '#804215',
  textColor: '#393939',
  maxWidth: '1000px',
  bs: '0 10px 22px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 12px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.textColor}
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledPage>
            <Meta />
            <Header />
            {this.props.children}
          </StyledPage>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
