import { DefaultButton } from '@/common/components/Button';
import Markdown from '@/common/components/Markdown/Markdown';
import styled from '@emotion/styled';

interface Props {
  onCloseClick: (index: number) => void;
  index: number;
  title: string;
  markdown: string;
}
const TermsDetail: React.FC<Props> = props => {
  let index = props.index;
  return (
    <ModalWrapper>
      <ModalOutside onClick={() => props.onCloseClick(index)} />
      <Container>
        <Close src="/images/icons/close.svg" alt="close" onClick={() => props.onCloseClick(index)} />
        <Title>{props.title}</Title>
        <Context>
          <Markdown markdown={props.markdown} />
        </Context>
        <DefaultButton color="#fff" onClick={() => props.onCloseClick(index)}>
          확인
        </DefaultButton>
      </Container>
    </ModalWrapper>
  );
};

export default TermsDetail;

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  animation: fadeIn 0.4s;
`;

const ModalOutside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: 611px;
  padding: 32px;
  height: 480px;
  background-color: #fff;
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Close = styled.img`
  padding: 5.43px;
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 32px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #191e25;
  margin-bottom: 24px;
`;

const Context = styled.div`
  width: 534px;
  height: 298px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #626474;
  overflow-y: auto;
  margin-bottom: 24px;
`;
