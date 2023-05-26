import React, { CSSProperties } from 'react';
import { BarLoader } from 'react-spinners';
import styled from '@emotion/styled';

interface Props {
  color: string;
}

export default function BarLoaderSpinner(props: Props) {
  return (
    <Wrapper>
      <BarLoader cssOverride={override} color={props.color} width="30%" />;
    </Wrapper>
  );
}

const override: CSSProperties = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;
