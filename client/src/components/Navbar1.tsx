import React from 'react';
import styled from 'styled-components';
import PinterestIcon from '@mui/icons-material/Pinterest';
// import { CenterFocusStrong } from '@mui/icons-material';
// import { height, padding, style } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FaceIcon from '@mui/icons-material/Face';
import TextSmsIcon from '@mui/icons-material/Textsms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// var Header = React.createClass({
// render: 
function Header() {
  return (  
      <Wrapper>
          <LogoWrapper>
              <IconButton>
                  <PinterestIcon />
              </IconButton>
          </LogoWrapper>
          <HomePageButton>
              <a href="/">Homepage</a>
          </HomePageButton>
          <FollowingButton>
            <a href="/">Following</a>
          </FollowingButton>

          
           <SearchWrapper>
              <SearchBarWrapper>
              <IconButton>
                  <SearchIcon />
              </IconButton>
              <form>
                  <input type = 'text' />
                  <button type = 'submit'></button>
              </form>
              </SearchBarWrapper> 
              </SearchWrapper>


              {/* <IconsWrapper> */}
                  <IconButton>
                      <NotificationsIcon />
                  </IconButton>
                  <IconButton>
                      <TextSmsIcon /> 
                  </IconButton>
                  <IconButton>
                      <FaceIcon />
                      </IconButton> 
                      <IconButton>
                          <KeyboardArrowDownIcon />
                          </IconButton>
                {/* </IconsWrapper> */}
                </Wrapper>
  );
}
// });

export default Header

//style the wrapper

const Wrapper = styled.div`
display:flex;
align-items: Center;
height: 56px;
padding: 12px 4px 4px 16px;
background-color: white;
color: black;
`


const LogoWrapper = styled.div`
 .MuiSvgIcon-root {
     color: #0023e6;
     font-size: 32px;
     cursor: pointer;
 }

`

const HomeButtons = styled.div`
display: flex;
height:48px;
min-width: 123px;
align-items: center;
justify-content: center;
border-radius:24px;
`

const HomePageButton = styled(HomeButtons)`
background-color: rgb(17, 17, 17);

a{
    text-decoration: none;
    color:white;
    font-weight: 700;
}
`

const FollowingButton = styled(HomeButtons)`
background-color: white;

a{
    text-decoration:none
    color: black;
    font-weight: 700;
}

;hover{
    background-color: #e1e1e1;
}
`
const SearchWrapper = styled.div`
    flex: 1;
`
const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input:focus {
        outline: none;
    }
`
// const IconsWrapper= styled.div`