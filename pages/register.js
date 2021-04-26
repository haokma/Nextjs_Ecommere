import { FastField, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as yup from 'yup';
import LoadingButton from '../components/LoadingButton';
import InputField from '../helpers/custom-field/InputField';
import emailImage from '../public/images/email.png';
import passwordImage from '../public/images/password.png';
import userImage from '../public/images/user.svg';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import userAPi from '../lib/user';
import { message } from 'antd';

const RegisterPage = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : null
    if (token) {
      router.push('/')
    }
  }, [])
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const validationSchema = yup.object().shape({
    firstName: yup.string()
      .required('Vui lòng nhập họ '),
    lastName: yup.string()
      .required('Vui lòng nhập tên '),
    email: yup.string()
      .required('Vui lòng nhập email')
      .email('Email không hợp lệ'),
    password: yup.string()
      .required('Vui lòng nhập mật khẩu')
      .min(8, "Mật khẩu phải chứa ít nhất 8 kí tự")
      .max(24, 'Mật khẩu tối thiếu 24 kí tự'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Mật khảu không trùng khơp')
  })

  return (
    <Layout title="Register Page">
      < Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setLoading(true)
          userAPi.signup(values).then(() => {
            router.push('/login')
            message.success('Đăng kí tài khoản thành công !')
            setLoading(false)
          })
            .catch((error) => {
              message.error(error.response.data.message)
              setLoading(false)
            })
        }}
      >
        {formikProps => {
          return (
            <div className="login">
              <Form className="login-form">
                <FastField
                  type='text'
                  component={InputField}
                  name="firstName"
                  placeholder="First Name"
                  src={userImage}
                />
                <FastField
                  type='text'
                  component={InputField}
                  name="lastName"
                  placeholder="Last Name"
                  src={userImage}
                />
                <FastField
                  type='email'
                  component={InputField}
                  name="email"
                  placeholder="Email"
                  src={emailImage}
                />
                <FastField
                  type='password'
                  component={InputField}
                  name="password"
                  placeholder="Password"
                  src={passwordImage}
                />
                <FastField
                  type='password'
                  component={InputField}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  src={passwordImage}
                />
                <div className="login-form__group login-form__group--button">
                  {
                    loading ? <LoadingButton /> : <button type="submit">Đăng ký</button>
                  }

                </div>
                <div className="login-form__recommend">
                  <span>Bạn đã có tài khoản ? <Link href="/login">Đăng nhập</Link></span>
                </div>
              </Form>
            </div>
          )
        }}
      </Formik >
    </Layout>
  )

}

export default RegisterPage
