/* eslint-disable no-template-curly-in-string */
// Dependency
import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Alert, Button, Form, Input, InputNumber } from 'antd'
import ReCAPTCHA from 'react-google-recaptcha'

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
function FormContact() {
  const [canSend, setCanSend] = useState(false)
  const [, setIsRobot] = useState(true)
  const [error, setError] = useState(false)
  const inputCaptcha = useRef(null)

  const onFinish = (values) => {
    const { name, phone, message, email } = values.user
    setCanSend(false)
    setError(false)
    axios
      .post('/api/sendMail2', {
        name,
        phone,
        message,
        email,
      })
      .then(() => {
        setCanSend(true)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        // always executed
      })
  }

  const renderSuccess = () => {
    return (
      <Alert
        message="Mensaje enviado"
        description="Su mensaje fue enviado con exito! en breve responderemos su consulta."
        type="success"
        showIcon
      />
    )
  }
  const renderError = () => {
    return (
      <Alert
        message="Error"
        description="Ocurrio un error al enviar el mensaje, vuelva intentarlo por favor."
        type="error"
        showIcon
      />
    )
  }
  const checkIfRobot = (value) => {
    if (value) {
      setIsRobot(false)
      setCanSend(true)
    }
  }

  return (
    <>
      {canSend && renderSuccess()}
      {error && renderError()}
      <Form layout="vertical" size="large" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="Nombre" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'phone']} label="Teléfono" rules={[{ type: 'number', required: true }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'message']} label="Mensaje" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" shape="round" htmlType="submit" size="large" disabled={!canSend}>
            Enviar
          </Button>
        </Form.Item>
        <Form.Item>
          <ReCAPTCHA
            ref={inputCaptcha}
            sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            onChange={checkIfRobot}
          />
        </Form.Item>
      </Form>
    </>
  )
}

FormContact.propTypes = {}

export default FormContact
