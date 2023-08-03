import React from 'react';
import { Alert, Space, Spin } from 'antd';


type Spin = {
    spinning?: boolean;
}

const Spincomp: React.FC<Spin> = ({ spinning }) => {
    return (
        <div className="custom-spin-container">

            <Spin tip="Loading..." size="large" spinning={spinning}>
                <div className="content" />
            </Spin>

        </div>
    )
}

export default Spincomp