import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Item01 from './listItemComponents/item01/Index';

import Grid from '../components/Grid';

const theme = {
  spacing: {
    padding: '5px 0',
  },
  itemSpacing: {
    margin: '0px 0'
  }
};

class Index extends React.Component {

  render() {

    return (
      <div>
        <Grid col={1}>
          <Item01/>
        </Grid>
      </div>
    );
  }
}
const App = () => {
  return <ThemeProvider theme={theme}>
    <Index />
  </ThemeProvider>
}
export default App;
