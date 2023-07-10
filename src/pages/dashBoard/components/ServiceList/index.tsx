import styled from '@emotion/styled';
import FinalSelectionUniversity from '../../../../features/universities/components/FinalSelectionUniversity';
import RecommendationModal from '@/features/recommendations/components/RecommendationModal';
import MembershipModal from '@/components/Modal/MembershipModal/MembershipModal';
import PrivacyModal from './PrivacyModal';
import { useForm } from 'react-hook-form';
import Badge from '../../../../../public/images/icons/badge.svg';
import { useState } from 'react';
import ServiceListItem from './ServiceListItem';

const ServiceList = props => {
  const { register } = useForm();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <Title>서비스 바로가기</Title>
        <MenuList>
          <FinalSelectionUniversity register={register} />
          <ServiceListItem icon={<Badge />} text="멤버십 안내" onClick={() => setOpenModal(true)} />
          <PrivacyModal />
          <RecommendationModal />
        </MenuList>
      </Container>
      {openModal && <MembershipModal onClose={setOpenModal} />}
    </>
  );
};

export default ServiceList;

const Container = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.grayBlack};
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
