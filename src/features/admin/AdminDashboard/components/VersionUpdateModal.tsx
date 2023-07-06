import ModalLayout from '@/components/Modal/ModalLayout';
import Select from '@/components/Select';
import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { VersionBadge } from './VersionBadge';
import { UpdateItem, UpdateItemProps } from './UpdateItem';
import { UseFormRegister } from 'react-hook-form';
import { UpdateInputs } from '../containers/DashboardModalContainer';
import CalenderIcon from '../../../../../public/images/icons/calendarMonth.svg';

interface SelectProps {
  label: string;
  value: string;
}

interface VersionUpdateModalProps {
  onNext?: () => void;
  onPrev?: () => void;
  options: SelectProps[];
  updateItems?: UpdateItemProps[];
  register: UseFormRegister<UpdateInputs>;
}

export const VersionUpdateModal = (props: VersionUpdateModalProps) => {
  const { onNext, onPrev, options, updateItems, register } = props;

  return (
    <ModalLayout onClose={onPrev} isCloseButton={false}>
      <Container>
        <TitleSection>
          <Title>버전 업데이트</Title>
          <VersionBadge text="user ver. 2.3.2" />
        </TitleSection>
        <Section>
          <SectionTitle>버전 선택</SectionTitle>
          <SelectWrapper>
            <Select size="md" width="100%" options={options} placeholder="업데이트할 버전을 선택해주세요" name="AnalysisSortng" setValue={() => {}} />
          </SelectWrapper>
        </Section>
        <Section>
          <SectionTitle>업데이트 예정일</SectionTitle>
          <CalendarWrapper>
            <Label htmlFor="calendar">
              <Date>2023.01.02 11:00</Date>
              <CalenderIcon />
            </Label>
            <Calendar id="calendar" type="datetime-local" />
          </CalendarWrapper>
        </Section>
        <Section>
          <SectionTitle>업데이트 요소 상태</SectionTitle>
          <UpdateItemBox>
            {updateItems?.map((item, index) => {
              console.log(item.name);
              return <UpdateItem key={index} iconType={item.iconType} name={item.name} status={item.status} isActive={item.isActive} />;
            })}
          </UpdateItemBox>
        </Section>
        <ButtonSection>
          <Button fontColor={theme.colors.gray1} backgroundColor={theme.colors.gray4} onClick={onPrev}>
            취소
          </Button>
          <Button fontColor={theme.colors.white} backgroundColor={theme.colors.blue} onClick={onNext}>
            업데이트하기
          </Button>
        </ButtonSection>
      </Container>
    </ModalLayout>
  );
};

interface ButtonProps {
  fontColor: string;
  backgroundColor: string;
}

const Container = styled.div`
  display: flex;
  width: 365px;
  flex-direction: column;
  gap: 24px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const Title = styled.span`
  color: ${theme.colors.black};
  font-family: Pretendard Bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`;

const SectionTitle = styled.span`
  color: ${theme.colors.black};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const UpdateItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  height: 44px;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 16px;
  color: ${({ fontColor }) => fontColor};
  background: ${({ backgroundColor }) => backgroundColor};
  font-family: Pretendard Bold;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const Calendar = styled.input`
    flex: 1;
  }
`;

const CalendarWrapper = styled.div`
  display: flex;
  input[type='datetime-local'] {
    &::-webkit-calendar-picker-indicator,
    &::-webkit-inner-spin-button {
      width: 100%;
      height: 48px;
      opacity: 0;
    }
    appearance: none;
  }
  position: relative;
`;

const Label = styled.label`
  display: flex;
  height: 48px;
  width: 100%;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${theme.colors.gray4};
  background: #fff;
  position: absolute;
  pointer-events: none;
`;

const Date = styled.span`
  color: ${theme.colors.grayBlack};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const SelectWrapper = styled.div``;
