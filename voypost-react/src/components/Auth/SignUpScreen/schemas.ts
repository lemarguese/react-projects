import * as Yup from 'yup';

const InfoSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required'),
  password: Yup.string().min(12, 'Too short!').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords are not the same!')
    .required('Confirm password'),
  fullName: Yup.string()
    .required('Fullname is required')
    .test('is-fullname', 'Please enter first and last name', (e) => {
      const nameArr = e?.split(' ');
      let ok = true;
      if (nameArr === undefined || nameArr.length < 2) {
        return false;
      }
      for (let i = 0; i < nameArr.length; i += 1) {
        const firstLetter = nameArr[i].charAt(0).toUpperCase();
        if (nameArr[i][0] !== firstLetter) {
          ok = false;
        }
      }
      return ok;
    }),
});

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export { InfoSchema, SignInSchema };
