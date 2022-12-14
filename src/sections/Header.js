import * as React from 'react';
import { styled } from '@mui/system';
import { AppBar } from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Portfolio from './Portfolio';
import Appointment from './Appointment';
import About from './About';
import Home from './Home';

const blue = {
  50: '#001125',
  100: '#001125',
  200: '#001125',
  300: '#001125',
  400: '#001125',
  500: '#001125',
  600: '#001125',
  700: '#001125',
  800: '#001125',
  900: '#001125',
};

const gold = {
  50: '#fdf9f0',
  100: '#fff5df',
  200: '#ffeabb',
  300: '#eec88b',
  400: '#ecc484',
  500: '#a8845b',
  600: '#8a6741',
  700: '#8c6943',
  800: '#8c6943',
  900: '#fff1d2',

};

const Tab = styled(TabUnstyled)`
  font-family: Alumni Sans, sans-serif;
  color: #ffebbe;
  cursor: pointer;
  font-size: .85rem;
  font-weight: bold;
  background-color: #001125;
  width: 100%;
  padding: 12px;
  margin: 16px 16px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #001125;
  }

  &:focus {
    color: #fff;
    background-color: #001125;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #001125;
    color: ${gold[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.5rem;
  background-color: #001125;
`;

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 800px;
  background-color: #001125;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  position: static;
  box-shadow: 0px .5px .5px ${theme.palette.mode === 'dark' ? gold[900] : gold[200]};
  `,
);



export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#001125' }}>
      <TabsUnstyled defaultValue={0} sx={{ backgroundColor: '#001125' }}>
        <TabsList centered sx={{ backgroundColor: '#001125' }} >
          <Tab sx={{ backgroundColor: '#001125' }} >Home</Tab>
          <Tab>About Sheana Helton</Tab>
          <Tab>Portfolio</Tab>
          <Tab>Request Appointment</Tab>
        </TabsList>
        <TabPanel sx={{ backgroundColor: '#001125' }} value={0}> <Home /> </TabPanel>
        <TabPanel value={1}> <About /> </TabPanel>
        <TabPanel value={2}> <Portfolio /> </TabPanel>
        <TabPanel value={3}> <Appointment /> </TabPanel>
      </TabsUnstyled>
    </AppBar>
  );
}
