import styled from '@emotion/styled';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import UpdateIcon from '../../../../../public/images/icons/sync.svg';
import theme from '@/theme/theme';
import ModalLayout from '@/components/Modal/ModalLayout';
import { VersionUpdateModal } from '../components/VersionUpdateModal';
import { ConfirmModal } from '../components/ConfirmModal';
import { UpdateItemProps } from '../components/UpdateItem';

export interface UpdateInputs {
  version: string;
  date?: string;
}

export const DashboardModalContainer = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateInputs>();

  const versions = ['2.3.0', '2.3.1', '2.3.2'];
  const options = useMemo(
    () =>
      versions.map(version => {
        return { value: version, label: `ver.${version}` };
      }),
    [versions],
  );
  const updateItems: UpdateItemProps[] = [
    {
      iconType: 'comment',
      name: '업데이트 코멘트',
      status: '작성 완료',
      isActive: true,
    },
    {
      iconType: 'attachment',
      name: '3학년 예상 점수표',
      status: '업로드 완료',
      isActive: true,
    },
    {
      iconType: 'attachment',
      name: '2학년 예상 점수표',
      status: '미완료',
      isActive: false,
    },
    {
      iconType: 'attachment',
      name: '1학년 예상 점수표',
      status: '미완료',
      isActive: false,
    },
  ];

  const goPrevStep = useCallback(() => {
    setStep(prev => prev - 1);
  }, []);

  const goNextStep = async () => {
    setStep(prev => prev + 1);
  };

  const resetStep = async () => {
    setStep(prev => 0);
  };

  return (
    <>
      <UpdateButton onClick={goNextStep}>
        <UpdateIcon />
        <UpdateButtonText>업데이트</UpdateButtonText>
      </UpdateButton>
      {step === 1 && <VersionUpdateModal onNext={goNextStep} onPrev={goPrevStep} options={options} updateItems={updateItems} register={register} />}
      {step === 2 && <ConfirmModal onPrev={goPrevStep} onReset={resetStep} />}
    </>
  );
};

const UpdateButton = styled.button`
  display: flex;
  width: 224px;
  padding: 16px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid ${theme.colors.gray4};
`;

const UpdateButtonText = styled.span`
  color: ${theme.colors.gray2};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
`;
