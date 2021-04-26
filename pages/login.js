import { FastField, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import LoadingButton from '../components/LoadingButton';
import InputField from '../helpers/custom-field/InputField';
import emailImage from '../public/images/email.png';
import passwordImage from '../public/images/password.png';
import Link from 'next/link'
import Layout from '../components/Layout';
import userApi from '../lib/user';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { message } from 'antd';
import { actionGetCart } from '../store/actions/cartAction';
import { useDispatch } from 'react-redux';
const LoginPage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const initialValues = {
    email: '',
    password: ''
  }
  useEffect(() => {
    const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : null
    if (token) {
      router.push('/')
    }
  }, [])
  const onSubmit = (values) => {
    setLoading(true)
    userApi.login(values).then(res => {
      setLoading(false)
      const { token, result } = res.data
      Cookies.set('user', JSON.stringify(result))
      Cookies.set('token', JSON.stringify(token))
      router.push('/')
      message.success('Đăng nhập thành công')
      const action = actionGetCart()
      dispatch(action)
    })
      .catch((error) => {
        message.error(error.response.data.message)
        setLoading(false)
      })

  }
  const validationSchema = yup.object().shape({
    email: yup.string()
      .required('Vui lòng nhập email')
      .email('Email không hợp lệ'),
    password: yup.string()
      .required('Vui lòng nhập password')
      .min(6, "Mật khẩu phải chứa ít nhất 6 kí tự")
      .max(24, 'Mật khẩu tối thiếu 24 kí tự')
  })
  return (
    <Layout title="Login Page">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formikProps => {
          return (
            <div className="login">
              <Form className="login-form" >
                <FastField
                  type='email'
                  component={InputField}
                  placeholder="Email"
                  name='email'
                  src={emailImage}
                />
                <FastField
                  type='password'
                  component={InputField}
                  placeholder="Password"
                  name='password'
                  src={passwordImage}
                />
                <div className="login-form__group login-form__group--button">
                  {
                    loading ? <LoadingButton /> : <button type="submit" >Đăng nhập</button>
                  }
                </div>
                <div className="login-form__recommend">
                  <span>Bạn chưa có tài khoản ? <Link href="/register">Đăng ký</Link></span>
                </div>
              </Form>
            </div>
          )
        }}
      </Formik>
    </Layout>
  )


}

export default LoginPage








