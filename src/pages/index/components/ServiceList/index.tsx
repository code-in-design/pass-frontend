import styled from '@emotion/styled';
import FinalSelectionUniversity from '../../../../features/universities/components/FinalSelectionUniversity';
import MembershipModal from '@/features/membership/components/MembershipModal';
import RecommendationModal from '@/features/recommendations/components/RecommendationModal';
import PrivacyModal from './PrivacyModal';
import { useForm } from 'react-hook-form';

interface Props {}

const ServiceList = (props: Props) => {
  const { register } = useForm();

  return (
    <>
      <Container>
        <Title>서비스 바로가기</Title>
        <MenuList>
          <FinalSelectionUniversity register={register} />
          <MembershipModal />
          <PrivacyModal />
          <RecommendationModal />
        </MenuList>
      </Container>
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
  min-width: 492px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  column-gap: 13px;
`;
