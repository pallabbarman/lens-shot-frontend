'use client';

import loginImage from '@/assets/login.svg';
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
    email: string;
    password: string;
};

const LoginPage = () => {
    const { md } = useBreakpoint();

    return (
        <div style={{ padding: md ? '0 3rem' : '3rem' }}>
            <Row
                gutter={[16, 16]}
                style={{
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Col md={{ span: 12 }}>
                    <Image
                        src={loginImage}
                        alt="login"
                        width={100}
                        height={100}
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
                            <Title level={1} style={{ textAlign: 'center' }}>
                                Login
                            </Title>
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
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
