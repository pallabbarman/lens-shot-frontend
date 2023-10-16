'use client';

import registerImage from '@/assets/regi.svg';
import { Button, Col, Form, Grid, Input, Row, Typography } from 'antd';
import Image from 'next/image';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
};

type FieldType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    contactNo: string;
};

const RegisterPage = () => {
    const { md } = useBreakpoint();

    return (
        <div style={{ padding: md ? '0 3rem' : '3rem' }}>
            <Row
                gutter={[md ? 32 : 16, 16]}
                style={{
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Col md={{ span: 12 }}>
                    <Image
                        src={registerImage}
                        alt="register"
                        width={300}
                        height={300}
                        layout="responsive"
                    />
                </Col>
                <Col md={{ span: 12 }}>
                    <Form
                        name="login"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                        size="large"
                    >
                        <Form.Item>
                            <Title
                                level={1}
                                style={{ textAlign: 'center', marginBottom: 0 }}
                            >
                                Registration
                            </Title>
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="First Name"
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your first name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Last Name"
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your last name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Contact No"
                            name="contactNo"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your contact no!',
                                },
                            ]}
                            style={{ padding: 0 }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Signup
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default RegisterPage;
