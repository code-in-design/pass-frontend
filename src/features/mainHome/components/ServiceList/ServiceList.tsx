import styled from '@emotion/styled';
import ServiceListItem from './ServiceListItem';
import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import FinalUnivModal from '../FinalUnivModal/FinalUnivModal';

const ThumbUpModal = dynamic(import('./ServiceModal/ThumbUpModal'), { ssr: false });
const MembershipModal = dynamic(import('./ServiceModal/Membership/MembershipModal'), { ssr: false });

interface Props {
  list: { img: string; text: string }[];
}

const ServiceList = (props: Props) => {
  const [currentMenu, setCurrentMenu] = useState('');

  const openModal = useCallback(
    (text: string) => {
      setCurrentMenu(text);
    },
    [currentMenu],
  );

  const closeModal = useCallback(() => {
    setCurrentMenu('');
  }, [currentMenu]);

  return (
    <>
      <Container>
        <Title>서비스 바로가기</Title>
        <MenuList>
          {props.list.map(item => (
            <ServiceListItem key={`goService-${item.img}`} img={item.img} text={item.text} onClickService={openModal} />
          ))}
        </MenuList>
      </Container>
      {props.list[0].text === currentMenu && <FinalUnivModal onClickClose={closeModal} />}
      {props.list[1].text === currentMenu && <MembershipModal onClickClose={closeModal} />}
      {props.list[3].text === currentMenu && <ThumbUpModal onClickClose={closeModal} />}
    </>
  );
};

export default ServiceList;

ServiceList.defaultProps = {
  list: [
    {
      img: '/images/icons/help.svg',
      text: '서비스 소개',
    },
    {
      img: '/images/icons/badge.svg',
      text: '멤버십 안내',
    },
    {
      img: '/images/icons/panelSettings.svg',
      text: '개인정보 보호 안내',
    },
    {
      img: '/images/icons/thumbUp.svg',
      text: '추천하기 / 받기',
    },
  ],
};

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
  min-width: 492px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  column-gap: 13px;
`;
