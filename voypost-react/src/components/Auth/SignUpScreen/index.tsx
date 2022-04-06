import React, { useContext, useState } from 'react';
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
import { InfoSchema } from './schemas';
import { register } from '../../../common/firebaseAuth';

const SignUpScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const passwordVisibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  const repeatPasswordVisibilityHandler = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const redirectHandler = () => {
    setRedirect(true);
  };

  const inputStyle = {
    width: '100%',
    height: 55,
    marginBottom: '10px',
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
                  Register
                </Typography>
              </Box>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  fullName: '',
                  confirmPassword: '',
                }}
                validationSchema={InfoSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  await register(
                    values.email,
                    values.password,
                    values.fullName,
                  );
                  setSubmitting(false);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                      height: 380,
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
                      sx={inputStyle}
                    />
                    {touched.email && errors.email ? (
                      <Typography sx={{ color: 'red' }}>
                        {errors.email}
                      </Typography>
                    ) : null}
                    <TextField
                      label="Full Name"
                      variant="filled"
                      name="fullName"
                      value={values.fullName}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={inputStyle}
                    />
                    {touched.fullName && errors.fullName ? (
                      <Typography sx={{ color: 'red' }}>
                        {errors.fullName}
                      </Typography>
                    ) : null}
                    <FilledInput
                      id="password-input"
                      placeholder="Password"
                      required
                      value={values.password}
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      sx={{ marginBottom: '10px' }}
                    />
                    {touched.password && errors.password ? (
                      <Typography sx={{ color: 'red' }}>
                        {errors.password}
                      </Typography>
                    ) : null}
                    <FilledInput
                      id="password-repeat-input"
                      placeholder="Repeat password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      type={showRepeatPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={repeatPasswordVisibilityHandler}
                            edge="end"
                          >
                            {showRepeatPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      sx={{ marginBottom: '10px' }}
                    />
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <Typography sx={{ color: 'red' }}>
                        {errors.confirmPassword}
                      </Typography>
                    ) : null}
                    <Button
                      type="submit"
                      sx={{
                        width: '100%',
                        height: 45,
                        color: '#FFF',
                        backgroundColor: '#F50057',
                        marginTop: '50px',
                      }}
                      disabled={isSubmitting}
                    >
                      Register
                    </Button>
                  </Box>
                )}
              </Formik>
              <Box
                sx={{
                  width: '100%',
                  height: 100,
                  marginTop: '50px',
                }}
              >
                <Typography textAlign="center">
                  Already have an account?
                </Typography>
                <Button
                  sx={{ width: '100%', height: 45, color: '#F50057' }}
                  onClick={redirectHandler}
                >
                  Login
                </Button>
                {redirect ? <Redirect to="/login" push /> : null}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignUpScreen;
