import React, { useContext, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import {
  TextField,
  Typography,
  FilledInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Redirect } from 'react-router-dom';
import Image from '../images/login-background.jpg';
import Logo from '../images/voypost-logo.svg';
import { login } from '../../../common/firebaseAuth';
import { SignInSchema } from '../SignUpScreen/schemas';

const SignInScreen: React.FC = () => {
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  const redirectHandler = () => {
    setRedirect(true);
  };

  return (
    <>
      <Box
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            component="img"
            sx={{
              width: '50%',
              backgroundImage: `url(${Image})`,
            }}
          />
          <Box
            height="100%"
            width="50%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box margin="100px 60px 40px 60px" width="400px">
              <Box
                sx={{
                  width: '100%',
                  height: 50,
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: `url(${Logo}) no-repeat center`,
                  }}
                />
              </Box>
              <Box
                sx={{
                  height: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography fontSize="40px" fontWeight="700" textAlign="center">
                  Login
                </Typography>
              </Box>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  await login(values.email, values.password);
                  setSubmitting(false);
                }}
                validationSchema={SignInSchema}
              >
                {({
                  values,
                  touched,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                  handleSubmit,
                  errors,
                }) => (
                  <Box
                    onSubmit={handleSubmit}
                    component="form"
                    sx={{
                      height: 350,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}
                  >
                    <TextField
                      label="Email"
                      variant="filled"
                      name="email"
                      value={values.email}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{
                        width: '100%',
                        height: 55,
                      }}
                    />
                    {touched.email && errors.email ? (
                      <Typography sx={{ color: 'red' }}>
                        {errors.email}
                      </Typography>
                    ) : null}
                    <FilledInput
                      id="password-input"
                      placeholder="Password"
                      required
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={passwordVisibilityHandler}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.password && errors.password ? (
                      <Typography sx={{ color: 'red' }}>
                        {errors.password}
                      </Typography>
                    ) : null}
                    <Button
                      type="submit"
                      sx={{
                        width: '100%',
                        height: 45,
                        color: '#FFF',
                        backgroundColor: '#F50057',
                      }}
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                  </Box>
                )}
              </Formik>
              <Box
                sx={{
                  width: '100%',
                  height: 100,
                  marginTop: 10,
                }}
              >
                <Typography textAlign="center">Dont have account?</Typography>
                <Button
                  sx={{ width: '100%', height: 45, color: '#F50057' }}
                  onClick={redirectHandler}
                >
                  Register
                </Button>
                {redirect ? <Redirect to="/register" push /> : null}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignInScreen;
