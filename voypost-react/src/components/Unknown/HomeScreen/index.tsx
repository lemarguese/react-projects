import { Box, Typography, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useUser } from 'reactfire';
import { Redirect } from 'react-router-dom';
import Sidebar from './images/sidebar.svg';
import { logout } from '../../../common/firebaseAuth';
import { UIContext } from '../UIContext';

const HomeScreen: React.FC = () => {
  const { setAlert } = useContext(UIContext);
  const { data: user } = useUser();

  const [redirect, setRedirect] = useState(false);
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  const [userCredentials, setUserCredentials] = useState('');

  useEffect(() => {
    setAlert({
      show: true,
      severity: 'success',
      message: 'Welcome on board 🚀',
    });

    let credential = '';
    user?.displayName?.split(' ').forEach((el) => {
      credential += el[0].toUpperCase();
    });
    setUserCredentials(credential);
  }, [user?.displayName, setAlert]);

  const redirectHandler = () => {
    setRedirect(true);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="100%" height="100vh">
        <Box
          sx={{
            width: '100%',
            height: 60,
            backgroundColor: '#F50057',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                background: `url(${Sidebar}) no-repeat center`,
                width: 30,
                height: 30,
                marginLeft: '20px',
              }}
            />
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '20px',
                marginLeft: '20px',
              }}
            >
              Voypost
            </Typography>
          </Box>
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: '#c4c4c4',
              borderRadius: '50%',
              marginRight: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={modalHandler}
          >
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '22px',
              }}
            >
              {userCredentials || 'U'}
            </Typography>
          </Box>
          {modal ? (
            <Button
              sx={{
                width: 100,
                height: 40,
                backgroundColor: '#FFF',
                boxShadow: '0 0 10px #c4c4c4',
                position: 'absolute',
                top: 60,
                right: 5,
              }}
              onClick={logout}
            >
              Logout
            </Button>
          ) : null}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <Button
            sx={{
              backgroundColor: '#F50057',
              color: '#FFF',
              width: '140px',
              height: '40px',
            }}
            onClick={redirectHandler}
          >
            Explore flats
          </Button>
          {redirect ? <Redirect to="/flats" /> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
