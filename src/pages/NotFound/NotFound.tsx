// src/pages/NotFound.tsx
import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        height: '100%',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate('/');
            }}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
