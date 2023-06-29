import { ReactNode, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import ProbabilityItem from './ProbabilityItem';
import ProfileModalItem from './ProfileModalItem';
import NaverIcon from '../../../../../public/images/icons/naverIcon.svg';
import YoutubeIcon from '../../../../../public/images/icons/youtubeIcon.svg';
import MailIcon from '../../../../../public/images/icons/mailIcon.svg';
import FaceBookIcon from '../../../../../public/images/icons/faceBookIcon.svg';
import BookIcon from '../../../../../public/images/icons/bookIcon.svg';
import LinkIcon from '../../../../../public/images/icons/linkIcon.svg';

interface Props {
  data: { icon: ReactNode; iconName: string; title: string; link?: ReactNode }[];
}

const ProfileModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <ProbabilityItem img="/images/icons/probability3.svg" name="김민중 선생님" title="프로필 바로가기" onClick={openModal} />
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal} padding="0px">
          <Wrapper>
            <Container>
              <Title>김민중 선생님</Title>
              <SubTitle>Kim Min Jung</SubTitle>
              <Description>
                네이버 지식in 서비스 오픈 이래 예체능 대학 분야 1호 파워 지식인으로 선정되었고, 직접 운영하는 네이버 카페 ‘체대입시 클리닉’은 10년간 1위 자리를 지키고 있다.
                <br />
                <br />
                냉철한 판단으로 체대입시 빅데이터를 분석해 지난 17년간 수많은 학생을
                <br />
                명문 대학에 합격시켰다. 현재는 전국 36개 체대입시 학원 지점을 운영하는
                <br />
                P사 대표로도 활동하고 있다.
              </Description>
              <div>
                {props.data.map((item, index) => {
                  return <ProfileModalItem key={index} icon={item.icon} iconName={item.iconName} title={item.title} link={item.link} />;
                })}
              </div>
            </Container>
            <BackgroundImg src="/images/icons/profilePhoto.png" alt="kimminjung" />
          </Wrapper>
        </ModalLayout>
      )}
    </>
  );
};

ProfileModal.defaultProps = {
  data: [
    { icon: <NaverIcon />, iconName: '네이버 카페', title: '체대입시클리닉', link: <LinkIcon /> },
    { icon: <YoutubeIcon />, iconName: '유튜브', title: '민중쌤tv', link: <LinkIcon /> },
    { icon: <MailIcon />, iconName: '이메일', title: 'kmj_teacher@naver.com' },
    { icon: <FaceBookIcon />, iconName: '페이스북', title: '페·체·모 (페북 체대 입시생 모임)', link: <LinkIcon /> },
    { icon: <BookIcon />, iconName: '대표 저서', title: '「체대입시의 신」, 「체대학종의 비밀」' },
  ],
};

export default ProfileModal;

const Container = styled.form`
  width: fit-content;
  padding: 32px;
  width: 792px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.04em;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.grayBlack};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 32px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${props => props.theme.colors.grayBlack};
  width: 500px;
  margin-bottom: 24px;
`;

const BackgroundImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 413px;
`;
