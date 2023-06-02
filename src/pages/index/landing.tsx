import React from 'react';
import { Header1, Hero2, ApplyForm4, FeatureSection4, TextSection2, FeatureSection1, MemberSection1, FeatureSection2 } from 'code-in-design-system';
import { useRouter } from 'next/router';

interface Props {
  isMobile?: boolean;
  onClickReservation: (phone: string) => void;
}

const LandingPage = ({ isMobile, onClickReservation }: Props) => {
  const headerMenus = [{ text: '', isActive: false, href: '/' }];
  const router = useRouter();

  return (
    <div>
      <Header1
        buttons={[{ content: '사전 예약하기', size: 'sm', backgroundColor: '#6B77F8', color: 'white', onClick: () => router.push('#phoneInput') }]}
        isMobile={isMobile}
        logo="/images/logos/logo.svg"
        logoHeight={32}
        menuButtonGap={32}
        menuColor="rgb(0, 0, 0)"
        menuGap={56}
        menus={headerMenus}
        padding={{
          top: 20,
          bottom: 20,
          left: 192,
          right: 192,
          isApply: !isMobile,
        }}
        border={{
          width: 0,
        }}
      />
      <Hero2
        backgroundImage={'/images/pass/Img_Hero_BG@2x.png'}
        buttons={[
          {
            buttonType: 'solid',
            size: isMobile ? 'lg' : 'xl',
            content: '사전 예약 중',
            backgroundColor: 'var(--PASS_Primary_Color, #6b77f8)',
            color: 'var(--White, hsl(0, 0%, 100%))',
            isLoading: false,
            isDisabled: false,
            isFullWidth: false,
            // isIconApply: false,
            onClick: () => router.push('#phoneInput'),
          },
        ]}
        description={{
          content: '<c1><b1>Z-ONE</b1></c1>과 함께 입시 정보, 합격 예측을 모두 경험하세요. \n 입시에서의 성공은 자연스럽게 따라올거에요!',
          size: 'lg',
          color: 'var(--Cool_Gray_800, #21272A)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        padding={{
          top: isMobile ? 235 : 260,
          bottom: isMobile ? 235 : 260,
          left: isMobile ? 16 : 192,
          right: isMobile ? 16 : 192,
          isApply: true,
        }}
        subTitle={{
          size: 'md',
          content: "This is Hero2's SubTitle",
          color: 'rgb(0, 0, 0)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        title={{
          size: 'xl',
          content: isMobile ? '체대입시를 더 쉽고,\n명확하게' : '체대입시를 더 쉽고, 명확하게',
          color: 'var(--Cool_Gray_800, #21272A)',
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        isMobile={isMobile}
      />
      <div id="phoneInput">
        <ApplyForm4
          backgroundColor="rgb(235, 236, 255)"
          buttonProps={{
            buttonType: 'solid',
            size: 'md',
            content: '사전 예약하기',
            backgroundColor: 'var(--PASS_Primary_Color, #6b77f8)',
            color: 'rgb(255, 255, 255)',
            isLoading: false,
            isDisabled: false,
            isFullWidth: false,
            onClick: phone => onClickReservation(phone),
          }}
          descriptionProps={{
            content: '📌 연락처는 문자 메시지 발송에만 사용되며, 문자 발송 후 파기하여 저장하지 않아요.',
            size: 'sm',
            color: 'var(--Cool_Gray_500, #697077)',
            fontWeight: 'normal',
            isMobile: isMobile,
            isVisible: true,
            isFullWidth: false,
            textAlign: 'left',
          }}
          inputProps={{
            isActiveDeleteIcon: false,
            isFullWidth: true,
            placeholder: {
              color: '#A2A9B0',
              text: '연락처를 작성해주세요.',
            },
            onChange: phone => phone,
          }}
          subTitleProps={{
            size: 'sm',
            content: '연락처를 남겨주시면, 정식 오픈 시에 제일 먼저 출시 완료 문자를 보내드릴게요.',
            color: 'var(--Cool_Gray_500, #697077)',
            fontWeight: 'normal',
            isMobile: isMobile,
            isVisible: true,
            isFullWidth: false,
            textAlign: 'center',
          }}
          titleProps={{
            size: 'lg',
            content: '제일 먼저 서비스를 이용하세요!',
            highlight: {
              color: '#9EA6FF',
              height: isMobile ? 18 : 28,
              isVisible: true,
            },
            color: 'var(--Cool_Gray_800, #21272A)',
            fontWeight: 'bold',
            isMobile: isMobile,
            isVisible: true,
            isFullWidth: false,
            textAlign: 'center',
          }}
          isMobile={isMobile}
        />
      </div>
      <FeatureSection4
        backgroundImage="/images/pass/Img_Feature_01_BG@2x.png"
        titleProps={{ isVisible: false }}
        subTitleProps={{ isVisible: false }}
        badgeProps={{ isVisible: false }}
        descriptionProps={{ isVisible: false }}
        imageUrls={[]}
        featuresProps={[
          {
            badgeProps: { isVisible: false },
            subTitleProps: {
              content: 'PC, 모바일 모두 가능한 입시 정보 찾기',
              color: '#697077',
              fontWeight: 'normal',
              size: 'sm',
            },
            titleProps: {
              content: 'PC와 모바일 모두에서 \n 체육대학•학과의 정보를 \n 찾을 수 있어요',
              color: '#21272A',
              size: 'lg',
            },
            descriptionProps: { isVisible: false },
            imageUrls: ['/images/icons/Icon_PC@3x.png', '/images/icons/Icon_Mobile@3x.png'],
            thumbnail: '/images/pass/Img_Feature_01@2x.png',
            isMobile,
          },
          {
            isReverse: true,
            badgeProps: { isVisible: false },
            subTitleProps: {
              content: '한눈에 보는 체육대학 입시 정보',
              color: '#697077',
              fontWeight: 'normal',
              size: 'sm',
            },
            titleProps: {
              content: '내가 원하는 대학•학과의 \n 상세한 입시 정보를 \n <c1>한눈에</c1> 파악할 수 있어요',
              partialColors: ['#6B77F8'],
              color: '#21272A',
              size: 'lg',
            },
            descriptionProps: { isVisible: false },
            imageUrls: ['/images/icons/Icon_Search@3x.png'],
            thumbnail: '/images/pass/Img_Feature_02@2x.png',
            isMobile,
          },
          {
            badgeProps: { isVisible: false },
            subTitleProps: {
              content: '쉽게 찾는 내가 원하는 대학',
              color: '#697077',
              fontWeight: 'normal',
              size: 'sm',
            },
            titleProps: {
              content: '상세한 필터 기능을 통해 \n 내가 원하는 대학을 더 <c1>자세히</c1> \n 그리고 <c1>더 쉽게</c1> 찾을 수 있어요',
              partialColors: ['#6B77F8'],
              color: '#21272A',
              size: 'lg',
            },
            descriptionProps: { isVisible: false },
            imageUrls: ['/images/icons/Icon_Eyes@3x.png'],
            thumbnail: '/images/pass/Img_Feature_03@2x.png',
            isMobile,
          },
        ]}
        buttonsProps={[]}
        isMobile={isMobile}
      />
      <TextSection2
        backgroundColor="var(--White, hsl(0, 0%, 100%))"
        contentBackgroundColor="var(--Cool_Gray_50, #F2F4F8)"
        contentPadding={{
          top: 48,
          bottom: 48,
          left: 80,
          right: 80,
          isApply: false,
        }}
        subTitleProps={{
          size: 'sm',
          content: '체대입시 정보',
          color: 'var(--PASS_Primary_Color, #6b77f8)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        titleProps={{
          size: 'lg',
          content: isMobile ? '이제 어렵게 입시요강 \n 찾아보는 것은 <c1>stop</c1>' : '이제 어렵게 입시요강 찾아보는 것은 <c1>stop</c1>',
          color: 'var(--Cool_Gray_800, #21272A)',
          partialColors: ['#6B77F8'],
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        backgroundImage={undefined}
        features={[]}
        isMobile={isMobile}
      />
      <TextSection2
        backgroundColor="var(--PASS_Primary_Color, #6b77f8)"
        contentBackgroundColor="rgba(107, 119, 248, 0)"
        contentPadding={{
          top: 0,
          bottom: 0,
          left: 80,
          right: 80,
          isApply: true,
        }}
        subTitleProps={{
          size: 'sm',
          content: '합격 예측',
          color: 'var(--White, hsl(0, 0%, 100%))',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        titleProps={{
          size: 'lg',
          content: '애매한 합격 예측은 이제 끝이에요',
          color: 'var(--White, hsl(0, 0%, 100%))',
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        // Using default values:
        backgroundImage={undefined}
        features={[]}
        isMobile={isMobile}
      />
      <FeatureSection1
        badgeProps={{
          isVisible: false,
        }}
        imageUrl={isMobile ? '/images/pass/Img_Mo_Feature_04@2x.png' : '/images/pass/Img_Feature_04@2x.png'}
        imageUrls={['/images/icons/Theme_3D@2x.png']}
        paragraphProps={{
          content: 'Body 입력 Body 입력 무엇을 구하지 꽃이 무엇이 천고에 천자만홍이 황금시대다. 피는 대한 따뜻한 꽃 가슴이 봄바람이다.속에서 밥을 끓는 속잎나고.',
          size: 'lg',
          color: 'rgb(111, 111, 111)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'left',
        }}
        subTitleProps={{
          size: 'sm',
          content: '점수 입력은 매우 쉽게',
          color: 'var(--Cool_Gray_500, #697077)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'start',
        }}
        titleProps={{
          size: 'lg',
          content: isMobile ? '성적 입력 → 실기 기록 입력 \n → 합격 분석 \n <c1>3단계</c1>만 필요해요!' : '성적 입력 → 실기 기록 입력 → 합격 분석 \n <c1>3단계</c1>만 필요해요!',
          partialColors: ['#6B77F8'],
          color: 'var(--Cool_Gray_800, #21272A)',
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        backgroundColor="rgb(255, 255, 255)"
        backgroundImage={undefined}
        buttonsProps={[]}
        isCenter={true}
        isMobile={isMobile}
      />
      <FeatureSection4
        backgroundColor="rgba(0, 0, 0, 0)"
        badgeProps={{
          size: 'md',
          round: 'lg',
          content: 'Badge',
          backgroundColor: 'rgb(244, 244, 244)',
          color: 'rgb(111, 111, 111)',
          icon: 'activity',
          iconPosition: 'left',
          iconSize: 16,
          isVisible: false,
        }}
        descriptionProps={{
          content: 'Body 입력 Body 입력 무엇을 구하지 꽃이 무엇이 천고에 천자만홍이 황금시대다. 피는 대한 따뜻한 꽃 가슴이 봄바람이다. 속에서 밥을 끓는 속잎나고.',
          size: 'lg',
          color: 'rgb(111, 111, 111)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        featuresProps={[
          {
            imageUrls: ['/images/icons/Icon_Graph@3x.png'],
            badgeProps: { isVisible: false },
            subTitleProps: { content: '0부터 100%까지 더 명확한 합격 예측', size: 'sm', color: '#697077', fontWeight: 'normal' },
            titleProps: { content: '수능 및 모의고사 점수와 \n 내신 점수, 실기 기록을 \n 합산한 환산 점수를 바탕으로 \n <c1>0%부터 100%까지</c1> \n 명확한 합격 확률을 제공해요', partialColors: ['#6B77F8'], size: 'lg' },
            thumbnail: '/images/pass/Img_Feature_05@2x.png',
            backgroundColor: 'rgb(255, 255, 255)',
            descriptionProps: { isVisible: false },
          },
          {
            isReverse: true,
            imageUrls: ['/images/icons/Icon_Bulb@3x.png'],
            badgeProps: { isVisible: false },
            subTitleProps: { content: '지원 가능성과 합격 확률 분석을 한 번에', size: 'sm', color: '#697077', fontWeight: 'normal' },
            titleProps: { content: '안정, 적정, 소신, 우주 상향 \n 지원 불가로 분석되는 \n <c1>지원 가능성</c1>, \n 0부터 100%까지의 \n <c1>합격 확률</c1> 모두 분석해요', partialColors: ['#6B77F8'], size: 'lg' },
            thumbnail: '/images/pass/Img_Feature_06@2x.png',
            backgroundColor: 'rgb(255, 255, 255)',
            descriptionProps: { isVisible: false },
          },
        ]}
        subTitleProps={{
          size: 'sm',
          content: '체대입시 정보',
          color: 'rgb(0, 0, 0)',
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        titleProps={{
          size: 'lg',
          content: '전국 체육 대학•학과 모든 정보를 쉽게 빠르게. \n 이제 어렵게 입시요강 찾아보는 것은 stop',
          color: 'rgb(0, 0, 0)',
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        backgroundImage={''}
        buttonsProps={[]}
        isMobile={isMobile}
      />
      <MemberSection1
        backgroundColor="rgb(235, 236, 255)"
        badgeProps={{
          size: 'md',
          round: 'lg',
          content: 'Badge',
          backgroundColor: 'rgb(244, 244, 244)',
          color: 'rgb(111, 111, 111)',
          icon: 'activity',
          iconPosition: 'left',
          iconSize: 16,
          isVisible: false,
        }}
        descriptionProps={{
          content: 'Body 입력 Body 입력 무엇을 구하지 꽃이 무엇이 천고에 천자만홍이 황금시대다. 피는 대한 따뜻한 꽃 가슴이 봄바람이다. 속에서 밥을 끓는 속잎나고.',
          size: 'lg',
          color: 'rgb(111, 111, 111)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        memberListProps={[
          {
            thumbnail: '/images/pass/Img_Member@2x.png',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            isMobile: isMobile,
            isReverse: false,
            badgeListProps: [
              {
                content: '대표 컨설턴트',
                color: 'white',
                backgroundColor: '#6B77F8',
                icon: 'user-check',
                iconPosition: 'left',
                iconSize: 16,
                round: 'md',
                size: 'md',
              },
            ],
            titleProps: {
              content: '체대입시의 신,  \n <c1>김민중 선생님</c1>이 직접 예측하는 \n 체대입시',
              color: '#21272A',
              size: 'md',
              partialColors: ['#6B77F8'],
            },
            subTitleProps: {
              content: '연간 1만건-누적 15만 건의 체육대학 합격자 빅데이터 분석을 통한 자체 프로그램으로 <c1>2,000회 이상</c1>의 \n 컨설팅을 진행하는  <c1>대한민국 1타</c1> \n 체육진로 컨설턴트입니다.',
              color: '#21272A',
              size: 'sm',
              partialColors: ['#6B77F8'],
              fontWeight: 'normal',
            },
            descriptionProps: {
              content: '• 현) 대한민국 1등 체육학원 P사 대표 \n • 현) 7만 회원 체대입시클리닉 카페 운영자 \n • 현) 민중쌤tv 운영자 \n • 저) 네이버 베스트셀러 “체대입시의 신”저자 \n • 저) 체대입시 트렌드 2017-2018 저자',
              color: '#697077',
              size: 'md',
            },
          },
        ]}
        subTitleProps={{
          size: 'sm',
          content: 'Title 01 타이틀 01Title 01 타이틀 01',
          color: 'rgb(0, 0, 0)',
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        titleProps={{
          size: 'lg',
          content: 'Title 01 타이틀 01 Title 01 타이틀 01',
          color: 'rgb(0, 0, 0)',
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        backgroundImage={undefined}
        buttonsProps={[]}
        isMobile={isMobile}
      />
      <FeatureSection2
        badgeProps={{
          size: 'md',
          round: 'lg',
          content: 'Badge',
          backgroundColor: 'rgb(244, 244, 244)',
          color: 'rgb(111, 111, 111)',
          icon: 'activity',
          iconPosition: 'left',
          iconSize: 16,
          isVisible: false,
        }}
        featuresProps={[
          {
            thumbnail: '/images/pass/Img_Feature_07@2x.png',
            isMobile: isMobile,
            backgroundColor: 'rgb(255, 255, 255)',
            imageBorderRadius: 16,
            titleProps: {
              content: '나의 관심 대학',
              size: 'sm',
              color: '#21272A',
              textAlign: 'center',
            },
            descriptionProps: {
              content: '나의 관심 대학으로 설정하고 \n 업데이트 마다 바뀌는 나의 <c1>지원 가능성</c1>을 \n 빠르게 확인해요',
              size: 'md',
              color: '#21272A',
              textAlign: 'center',
              partialColors: ['#6B77F8'],
            },
          },
          {
            thumbnail: '/images/pass/Img_Feature_08@2x.png',
            isMobile: isMobile,
            backgroundColor: 'rgb(255, 255, 255)',
            imageBorderRadius: 16,
            titleProps: {
              content: ' 실시간 인기 대학·학과 ',
              size: 'sm',
              color: '#21272A',
              textAlign: 'center',
            },
            descriptionProps: {
              content: '실시간으로 학생들이 선호하는  \n 대학과 학과를 알아봐요',
              size: 'md',
              color: '#21272A',
              textAlign: 'center',
            },
          },
        ]}
        paragraphProps={{
          content: 'Body 입력 Body 입력 무엇을 구하지 꽃이 무엇이 천고에 천자만홍이 황금시대다. 피는 대한 따뜻한 꽃 가슴이 봄바람이다.속에서 밥을 끓는 속잎나고.',
          size: 'lg',
          color: 'rgb(111, 111, 111)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        subTitleProps={{
          size: 'sm',
          content: ' 알수록 더 편리한 기능',
          color: 'var(--Cool_Gray_500, #697077)',
          fontWeight: 'normal',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        titleProps={{
          size: 'lg',
          content: '이런 서비스도 있어요!',
          color: 'var(--Cool_Gray_800, #21272A)',
          fontWeight: 'bold',
          isMobile: isMobile,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
          highlight: {
            color: '#9EA6FF',
            height: isMobile ? 20 : 28,
            isVisible: true,
          },
        }}
        backgroundColor="rgba(0, 0, 0, 0)"
        backgroundImage={''}
        buttonsProps={[]}
        imageUrls={[]}
        isMobile={isMobile}
      />
    </div>
  );
};

export default LandingPage;
