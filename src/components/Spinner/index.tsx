import { Row, Spin } from 'antd';

const Spinner = () => {
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Spin size="large" />
        </Row>
    );
};

export default Spinner;
