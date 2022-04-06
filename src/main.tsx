import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Home';

import { createGlobalStyle } from 'styled-components';
import { colors } from './Global/colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }

* {
  scrollbar-width: auto;
  scrollbar-color:  ${colors.main};
}


*::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

*::-webkit-scrollbar-track {
  background:  transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: ${colors.main};
  border-radius: 20px;
}
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
