import styled from '@emotion/styled';
import ServiceListItem from './ServiceListItem';
import { useCallback, useState } from 'react';
import ThumbUpModal from './thumbUpModal';

const menuList = [
  {
    img: 'help',
    text: '서비스 소개',
  },
  {
    img: 'badge',
    text: '멤버십 안내',
  },
  {
    img: 'panelSettings',
    text: '개인정보 보호 안내',
  },
  {
    img: 'thumbUp',
    text: '추천하기 / 받기',
  },
];

const ServiceList: React.FC = () => {
  const [service, setService] = useState('');

  const openModal = useCallback(
    (text: string) => {
      setService(text);
    },
    [service],
  );

  const closeModal = useCallback(() => {
    setService('');
    console.log('service:', service);
  }, [service]);

  return (
    <>
      <Container>
        <Title>서비스 바로가기</Title>
        <MenuList>
          {menuList.map(item => (
            <ServiceListItem key={`goService-${item.img}`} img={item.img} text={item.text} onClickService={openModal} />
          ))}
        </MenuList>
      </Container>
      {menuList[3].text === service && <ThumbUpModal onClickClose={closeModal} />}
    </>
  );
};

export default ServiceList;

const Container = styled.div`
  font-size: 16px;
  color: #353644;
  margin-top: 32px;
`;

const Title = styled.div`
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
`;

const MenuList = styled.ul`
  width: 492px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  column-gap: 13px;
`;
