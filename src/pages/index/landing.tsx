import React from 'react';
import { Header1, Hero2, ApplyForm4, FeatureSection4, TextSection2, FeatureSection1, MemberSection1, FeatureSection2 } from 'code-in-design-system';
import { useSetReservationsMutation } from './apis/reservationApi';

interface Props {
  isMobile?: boolean;
}

const LandingPage = ({ isMobile }: Props) => {
  const headerMenus = [{ text: '', isActive: false, href: '/' }];
  const [setReservation] = useSetReservationsMutation();

  const onClickReservation = (phone: string) => {
    setReservation(phone);
  };
  const goToPhoneInput = () => {
    const element = document.getElementById('#phoneInput');
    if (element) element.scrollIntoView();
  };

  return (
    <div>
      <Header1
        buttons={[{ content: '사전 예약하기', size: 'sm', backgroundColor: '#6B77F8', color: 'white', onClick: () => goToPhoneInput() }]}
        isMobile={isMobile}
        logo="https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/ICnbSuqlzVLElQSZQ55OUjyJMaE.png?Expires=1685663700&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=cQIZ5wcyGqUkRXtuPxiw57fbZcb6eie3h3j5zc2s~mffozKhS7QXahHLz3fPLFdmMPbBfuHeor9cpj5Omr6ugKW8v7Xc1gYEClw57OpohSDB3rOUwauHf~gJCDsnw7BFud4Dw4nt1M5V29igXcAxQa21mvwGV9VqoptLclnnOxGmOYLQb160zDklBjRth-RdZsbkQmij~f698puy~I3oEyhkL5HO2hoLwSOaKUYUX46czv2IjJYnNDvsxIm6F0uDsemCwrbSDodHJyPQhS7nUh6TsOi4kWbkyfGM8gFzvIIyaTdgIiot1uk3XDhDLD7rmVHA73sx9Y2bHJ5y8qO6-Q__"
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
        backgroundImage={
          'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/3n7PtFky2znmKqPiYhSMzsQPJ0I.png?Expires=1685623346&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=HXwo97~IzV~QGZuN~etf8tP1oL3w9JKVB~qyrM0npCFvepgfwweWrSw0VhL80GE45wnfb-JFuiHGRhDaAZgTzGIzof0KXozsMgCSsAGNL3-iUKt5MaoVu9MaQupZ4WzdfzOLWKowJFYuoWvMDS-pWhBG9PWG60i7~DrcNkAD72mYsABDo3HFyNDzCGUDebp2oaFvolRGNxf~5Rne3psDnmyzfpPwGFcui8Q14MtaMqp0ZKsheJtS5Td8~wVMTNlnRzYSZJHzYCmg5VQURlm9z2OQ~R3WS9kc3ojwBPuBn-KTuy2iV3BkZVwwtNRnUTWO2uYETLHiTqzf7WhjVBrPXQ__'
        }
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
            isIconApply: false,
            onClick: () => goToPhoneInput(),
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
        backgroundImage="https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/V1PiBQkOPJaImp3J1NsNbjwZA.png?Expires=1685663700&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=JY3D0n4cZ4PG4ZRElmVmRlk99nY66WIC87YmjXgmeJ~duXp-n3HBy2wYi3qvs0Px2y~0u~nYGhpBbQxyjNAXUXThba~TwMVSuM5IT0zNLmKDL3qZO0n~GWMMyYNE7VqYxN03KkJhj3u9rA3TKK3w22oUNI4k7Bf7PlTFYVX8MB0rCAguE5Xz~zFf6KGbFYOVf583hBYDBb~nJszFCo44b5ZDVAb3AQl8cry~91gWz2pF5q6Apdlgpibz~hbMC2cCA~Ftv643JAqREV0fxDMeYwuRJ4i1nXKFVexv9ZdPdkU~knwJANewwY2QZwhgo0f5Ixs-iBbb1MhM8pAeYHDewA__"
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
            thumbnail:
              'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/xQ0QSueiC3H3iWpGIfLIwQA8.png?Expires=1685663701&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=G1DQLaOcZcM5pNS8OWVAbm4y3kynD2NU3yBraE~GBX9DQARd7CImlVGlKQI9-9vyH7uD99JSps6JOwjUs9pTqsN8P6Dazyoc4gRyVIuNOFl6axgtefEv~pZyz~Q9cITmMMgpJPQ0uIjyeeNaqzeXmqC6bm9BZ1jqp76MHxPDQ5BbHRWmhLVb3G2boz0ix5eh4JpF4h447nKlUV~kB3FDo4RjH9tmpyUazvQGdaG2Bz3Tx9wXwRVeyBOSV5MTJDw5zP9lLi8zAkooKPtu3btlGKnWuav5D8LEkWQPdi-YyQ6oVCA5k07huEhyQmHb-o~G-JlFcQXl0kEIQYCBVB6IOw__',
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
            thumbnail:
              'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/S9GH06tJj5NhAUjS7mYVe2A8gsE.png?Expires=1685615057&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=G44Pq0DJQPCUB4a89UWBuIR3KG45lqa-3R~8UT~b4dm8X56V1alAAlS-EyAWwDWteQad~ruH9STqe4BxKjeS2E40Uqy68FeD6KVUWjfWmQ7iZcj5RfG0YF0leX0CyXV9NoWFGDkktXwqyx3MhJzOe5-P3jBwx5pWe3ju2-bQUvaFxtEAgN~ej1aQx8hZjo9NKftlVKVSTClmhyD4Sj-ZO6~vItEzG2EJn4CN2NDRTQ7V3p9-rjGuDKj2DO33QEfRSOsh30vUWRyjN2OoU9ob2n93WOMjDXAE8wpDVu2MHs7mxhUpbqxl3mDQN8ixY4CfAL~Ua6OYrulEuDttpyVYeg__',
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
            thumbnail:
              'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/JFNdUIU1gx9M8mXXPpV77ASjqY.png?Expires=1685663701&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=gq28B7xfh6tm0ivm14gC9PBTmQAuTZvBUCxSi95h53CFstrp7MzuMYmdgEfZ5ItLNMKvhVvBsGinZLHg92ahhVyReaGJ~BGrZ7cZ78BW2cX5OvflFqXFTJLYltC-8CQL-0I3-fl8l3XCyMB5FpGpJy894JETJB53PvcZ2LqbpEk-FUTybwHyKroyG9RO9hVAX7iITfyUgXleEPm0qlw48UL3FMzpjkUrGV3USmY4Puex8j~V3~AB1K0LK~WttaanoYpbRocNRhqInQ-QYB25fhRV3q8r0rdFk7fNyojTp09F2YL5mBvmhlkawsSyZ53Ql3NIvTgoxrGBjCzi0QvoMA__',
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
        imageUrl={
          isMobile
            ? '/images/pass/Img_Mo_Feature_04@2x.png'
            : 'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/4096/cWf6CXZCLGkppA8o2UCBZWEeTg8.png?Expires=1685615082&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=cUmHwkO9QMrLvYiBBKqCOkLjwsGwjyjXnkBCpKI9cGQQ~Vezmu842XenUsuzRSMk5UVNVQW-4UxkrjGMWV25DL3nkqs-177bF6OuphRsp0yRbK09KdZac84WZhSTn1vwbgXB7uUHeVAtilughDT6DzxqlSUc8T-31IDwuoPOLDCy5sr9eaWWIurF-LWxo6Ljuv0r5rOQwV7wnwGvNpzFLZviApYdJcabsLNiMQowt67d25cqwmFLXB-HbTyVn3bFDB9XjPsiCwwf4~kwQ89qHhhc0xQP2HHL~kKR85JmTL1dYp21j3W51K1EIawc~rimfdqlrc0fG4Q28ghmGj1leA__'
        }
        imageUrls={[
          'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/9EasB2dmZgKJMCxNWEOvUbYzB0I.png?Expires=1685663700&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=F1MnK0ZseDrc1wboDDVp8NyY2rEnRljE6Ux0K05qToLjShhupQZwL6646EwxvzhqeaqorHQbSfg4R9gfQ~sGHj-GPBSf1MozIu9iUgM4w8313YD1ku3O0oxe23PR0VoFIqPVBvWaZ5-zOsXvFShc6cRpKiCEOjyYiziEOdur2Pz2U6efZOqzk1UXXLnT5lQu1UrSEfgOBY7QhBNQNWB0SNdDuqdtoQno3w1N8MHP8AhWs23WnfOH6tYrsq1UDBDdOsdCzvr-Nax6bzj7Yhlx9cfm0iVN-n9kqquvKJPvjhC9NivyA~zHDlw6c3Wwkl1seoDEmJV4M7MsRUPja~qNYQ__',
        ]}
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
            thumbnail:
              'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/wv6mp3rlM6UBUYS0XuIs5xZgvwc.png?Expires=1685663701&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=gBxTO1vVLPk76QluDqwXsruw50O0x~YHbE6S1V4VPy6gGlXGZ7NDO0wpAOzzq-MzQ0bXPZxeaLk0R4CfK1G1KdoXt245Zq6YX-6gefzgFhQrBEiymoXX3P1ijIp7jeS6UWbAHUEWztHWMJn7cUu9rk7y5Eox0DQ6WAnkkB~m~oQMa~tz25d0NgspEpnaeByw1SvQVEwo715-ZQrUI0BM6FnuqDfZlydUEqglwhp~fZHoQq3SLlNfRHYKGehvVqsKm3KEohyfY2UQ-XbpDtW3yn0LMrrtGj5Ei6RK6a7eZytH4oLfDnCbir90CXLSHCgTEsmSjRjAWtfoeXmoQlEDzg__',
            backgroundColor: 'rgb(255, 255, 255)',
            descriptionProps: { isVisible: false },
          },
          {
            isReverse: true,
            imageUrls: ['/images/icons/Icon_Bulb@3x.png'],
            badgeProps: { isVisible: false },
            subTitleProps: { content: '지원 가능성과 합격 확률 분석을 한 번에', size: 'sm', color: '#697077', fontWeight: 'normal' },
            titleProps: { content: '안정, 적정, 소신, 우주 상향 \n 지원 불가로 분석되는 \n <c1>지원 가능성</c1>, \n 0부터 100%까지의 \n <c1>합격 확률</c1> 모두 분석해요', partialColors: ['#6B77F8'], size: 'lg' },
            thumbnail:
              'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/Yz2NcGrILcXFj3egspzt7WcY8Y.png?Expires=1685615110&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=T~uH3~VlSZfdiU6zptC3VmzAvj3EoxKpAGvcU4Mbq2GW7MyXkLtsrb8w990ZEJE2jTKG1dTdh95ZhzT03Udl0kym5vLpdHghJ90bHyV0P-wYzsBCjzoLQDB3pP7il24oy1i5qo9d37nD6JtVDlU1DO~oMj6Kt9lcHkli2wO0wMrPo84wsZ613exSy1JuVevE3Tse4GMEJVdolX6SoxQ1zmUhTvX-Wz5ba4Q81pFiFSvFTfOPlB6eWeWcY28ArkY55XrMoffiGh8owZTP~qiphbe-ysaE2Yk2LGVFpVkL2UD7OXeHJxO0ns39Xe1bexRORDpIuDZhab3nEQ5U3Egbqg__',
            backgroundColor: 'rgb(255, 255, 255)',
            descriptionProps: { isVisible: false },
          },
        ]}
        imageUrls={[
          'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/BsyRMeB4057Gf4j9OwHacMQREc.png?Expires=1685663700&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=bsGzgE9rixnyC-HKPO-sjn08hQ2UDEVv2BaT3Oay5S6gcMrucxf5W1YRLkk2rIHx3hCH9XUuRCkrr91dA2AQHiquw7koInGChSUU8HSL5H8~~w4x4marVy2LEbE5lvju-1r5LtQq6rrht~5Fmk5BWq7jMNoiCL8G8cWOzYVhnSYQG~w33YwLAiH4aL6l6AMkVF-OZ8isYxHi1Q1lNbwGJbXixW7wgaRvEozsiRCa49oftpabcX7yWg~FiJQSJY4sPZDY~CeeSdywQl5pEBOR9S6C1uXO64~EDJ5wY2fsdoQTSCpgasIEiRZ3qZyrg8aFN9RaRn7QG-GxhfytzLRFSg__',
          'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/4096/efjU0Kup5jvVIZF6SrSmVICQSjw.jpg?Expires=1685663700&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=eX8FFp-9lkWdvPD87B7~7vjEluLVx48bfQTRbFuznSMPl3mhBKGc7UEs0NzQcuCVT4jihW~iK7xU7HZPVCf650PCvXozVBo7MoGo10uG4gkaodzWZ24wCkt39ZvWQg9aeYG7GUHGztMTVgv-r1tuV5YvI5g2VloG0j6lFYIDy3ia9qnDxYvW-tPvm3fI4edTuRdwLoJcMV1qZQQp~qIU3tGMbYVivGTTzInGkhRYtx4CXLmJAh3Yhsm-uQkuAOueQsMXtmOyNaF1XHjkt-7Mm6L7nJRlzHxUKakaO26DLDO3MI95-N5CKM12wGnSsmrsWZDGUe6PGY77LSepe6ykDA__',
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
            thumbnail:
              'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/sjQVHJrbZ0n5fv1X5e0b629gB8Q.png?Expires=1685625597&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=I7NQxZe~d9ro3fF7Pjwz1npG0pGAGYlrC6e83LX4gW~6yVimP5CP2Lyoh6HECj~jKnIPPokvGiMNa1T60EiOE21aMWFhVHq7f6NlOh1J~pN8dA3xgJhpLPWJrMbxYKjvWA8xjy-P3DZsOxnyPr3ekdfAB336LhIbAL~XOAz43hDeWY38R6LfDbww5YNuGqRlTgZb02vvm5vsyVk-M6ZfUF3S1qaDNjnEcCWBn1JZylt1odmR70xfRQY31wOY8qO7d80Sct1SrijhrA7TxuDwfY0IBOmZ7SMzaa-2gwQoMJP1y7de5MKFRZgoEjewgbB-vZbCOMueUIuU8Pzq1g7pkg__',
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
            thumbnail:
              'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/NRsmL6l5YVXA9ACoKXatRpgPM.png?Expires=1685663701&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=dfjscZH~f2WaMVaV4911dhx1cbGPiK98DHona1Qt5ah1Im7bryruNs66wN21ziwJTmEYlTPCkMsLsxPksQB5veTnteupv4EPNs5oBE1g3kpWjoX52aSrF0yC0GKEmZD5OJo34DYfTdhBYD5wS223IzGTLYhdu4FF5~iMtAZ2EKgn0aNMiyuwQw6anhpku27gbdeT3sO8~oj0UJBsTyHv6cxK37BT3rvKpuPHoacqyeaLpyY~sD6cTLA0zpqu~sNM0DQ-Vkfo~FTSN4Gt4~wsbr-fvXWtdpSM7zI8u3o7U1lyG3OOCYEAmqiDyJ4OI51quJIScVuBGUUGilWEqi3EeA__',
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
            thumbnail:
              'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/RLTOKO1oJeyG5E2ZHRUouu4O0g.png?Expires=1685663700&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=HGgJKac2FGJCQz7b3kEtGCoboOrczkAzTDcjgq48ImsVxQEptIP-UKLeHdGgk6wtBIeQDywpkR4vhXAWU01Xw7hp91FLD3AKXUgXX5oNViu1Y3Rq92cqbSf89TmFsfsOK7OxyP8EJbr9LZY9xHu0CqhZUZj~0DpA2PTlYv0SC2ECAgVZZ5wNSmFXR19WVgWs50OWPBrPc7cj4tX~L-n~TUlSmCb2-eRTDI3qd~AJ6kS3qz-Hc~5afz3zzujiHA~ocNNDOhbO-vCUBp3bTVv05W4vOM1BImZbL83rF4eGns~K~bPSyyNdHRGimEqBQepm3auPfkmhbk20Q82ih7HrnA__',
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
