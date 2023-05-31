import React from 'react';
import { Header1, Hero2, Button, Icon, GlobalStyle } from 'code-in-design-system';

interface Props {
  isMobile?: boolean;
}

const LandingPage = ({ isMobile }: Props) => {
  const headerMenus = [{ text: '', isActive: false, href: '/' }];

  console.log(123, GlobalStyle);
  return (
    <div>
      <Header1
        buttons={[<Button content="사전 예약하기" size="sm" backgroundColor="#6B77F8" color="white" icon={null} />]}
        isMobile={false}
        logo="https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/ICnbSuqlzVLElQSZQ55OUjyJMaE.png?Expires=1685581209&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=dRMr3q30J6q62dhxO~tY7Cx8sFsa7x4Uv8JNABMOLVpF9OF4r8z9UlTnyqGtoJvd3XGuvWxyr1jth9aUs69Z5eDox4l~2tQPIvAHjtxI6gEx6dN7bMXiPfu3Vreo0XlorKJx1XShwDwEzC39Vtd5fLh5jtvYhbZDzO-Lf9YveY7szMOeAA2LbQqkwhD7DUtmey0WfTuev-CRUFAjG3rpihBbIklHL~wht90csdj-2K1nhhXwpfmc0HlFZ6NoSIlrJUH-4RhIxNCfWbzO8rHGTDuq4ElW4Sjy~Px4YzOiJq~bMQC6xPB3uTaGm50ANV1wqaqDoS4SGcT4N~5~ecdBEQ__"
        logoHeight={32}
        menuButtonGap={32}
        menuColor="rgb(0, 0, 0)"
        menuGap={56}
        menus={headerMenus}
        headerBackground="https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/jvWhMZF1uanHdmTckyawWbuCmxA.png?Expires=1685533881&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=eMUjbz0H6mgr-GCYNIJcnUrDwi9Sl6dbRkTG6SQK9fYgH9h76YA3pawPoOY5-lFVA5TOAuiCOiwWEM4ckjWkBVNlRuZt~0gGVWvIUPswp1jVkM-KddI5joKn~zb0GdJ6m3GMUpurHMed9kUufkpEcyfkdCk2wNvGcfRsWGPj3oh5LwzZ1srAChJyLMKZPbCTvu8RBP091RZbqnAAcmTM5QVbCoNEePrAutPxrmsqhKr1Z9NJjVaxytvEPh7pImACnqkJRF6Ef8w~YKKpUCiE1K5OobLaqCno6bwCLGbXzqVSfrXwHUhR6iNS5o9yFRmLquu7GHqGQhBVCfGYiLz0aw__"
      />
      <Hero2
        backgroundImage={
          'https://framerusercontent.com/projects/uDktL1PkKHe4L9UELhcL/assets/jvWhMZF1uanHdmTckyawWbuCmxA.png?Expires=1685533881&Key-Pair-Id=APKAIDY47RVYVKGA6NJQ&Signature=eMUjbz0H6mgr-GCYNIJcnUrDwi9Sl6dbRkTG6SQK9fYgH9h76YA3pawPoOY5-lFVA5TOAuiCOiwWEM4ckjWkBVNlRuZt~0gGVWvIUPswp1jVkM-KddI5joKn~zb0GdJ6m3GMUpurHMed9kUufkpEcyfkdCk2wNvGcfRsWGPj3oh5LwzZ1srAChJyLMKZPbCTvu8RBP091RZbqnAAcmTM5QVbCoNEePrAutPxrmsqhKr1Z9NJjVaxytvEPh7pImACnqkJRF6Ef8w~YKKpUCiE1K5OobLaqCno6bwCLGbXzqVSfrXwHUhR6iNS5o9yFRmLquu7GHqGQhBVCfGYiLz0aw__'
        }
        buttons={[
          {
            buttonType: 'solid',
            size: 'xl',
            content: '사전 예약 중',
            backgroundColor: 'var(--PASS_Primary_Color, #6b77f8)',
            color: 'var(--White, hsl(0, 0%, 100%))',
            isLoading: false,
            isDisabled: false,
            isFullWidth: false,
            icon: null,
          },
        ]}
        description={{
          content: '<c1><b1>Z-ONE</b1></c1>과 함께 입시 정보, 합격 예측을 모두 경험하세요. \n 입시에서의 성공은 자연스럽게 따라올거에요!',
          size: 'lg',
          color: 'var(--Cool_Gray_800, #21272A)',
          fontWeight: 'normal',
          isMobile: false,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        padding={{
          top: 56,
          bottom: 56,
          left: 192,
          right: 192,
        }}
        subTitle={{
          size: 'md',
          content: "This is Hero2's SubTitle",
          color: 'rgb(0, 0, 0)',
          fontWeight: 'normal',
          isMobile: false,
          isVisible: false,
          isFullWidth: false,
          textAlign: 'center',
        }}
        title={{
          size: 'xl',
          content: '체대입시를 더 쉽고, 명확하게',
          color: 'var(--Cool_Gray_800, #21272A)',
          fontWeight: 'bold',
          isMobile: false,
          isVisible: true,
          isFullWidth: false,
          textAlign: 'center',
        }}
        isMobile={false}
      />
    </div>
  );
};

export default LandingPage;
