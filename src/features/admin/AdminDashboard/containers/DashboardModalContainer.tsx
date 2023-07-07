import styled from '@emotion/styled';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import UpdateIcon from '../../../../../public/images/icons/sync.svg';
import theme from '@/theme/theme';
import { VersionUpdateModal } from '../components/modal/VersionUpdateModal';
import { UpdateConfirmModal } from '../components/modal/UpdateConfirmModal';
import { UpdateStatusItemProps } from '../components/UpdateStatusItem';
import dayjs from 'dayjs';

export interface UpdateInputs {
  version?: string;
  date?: string;
}

export const DashboardModalContainer = () => {
  const [step, setStep] = useState(0);
  const { register, handleSubmit, setValue, watch, formState } = useForm();
  const { errors } = formState;

  const selectedVersion = watch('version', '');
  const toBeUpdatedDate = watch('toBeUpdatedDate', '');
  const formattedDate = toBeUpdatedDate && dayjs(toBeUpdatedDate).format('YYYY.MM.DD HH:mm');

  const versions = ['2.3.0', '2.3.1', '2.3.2'];
  const options = useMemo(
    () =>
      versions.map(version => {
        return { value: version, label: `ver.${version}` };
      }),
    [versions],
  );
  const updateItems: UpdateStatusItemProps[] = [
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

  const onSubmit = (data => {
    console.log('제출', data);
    setStep(prev => 0);
    setValue('version', '');
  });

  const onError = () => {
    if (errors.version) console.log('버전을 입력해주세요');
  };

  const handleSubmitForm = handleSubmit(onSubmit, onError);

  return (
    <>
      <UpdateButton onClick={goNextStep}>
        <UpdateIcon width={24} height={24} />
        <UpdateButtonText>업데이트</UpdateButtonText>
      </UpdateButton>
      {step === 1 && <VersionUpdateModal onClickNextButton={goNextStep} onClickPreviousButton={goPrevStep} options={options} updateItems={updateItems} register={register} setValue={setValue} date={formattedDate} formState={formState} />}
      {step === 2 && <UpdateConfirmModal onClickPreviousButton={goPrevStep} version={selectedVersion} onSubmit={handleSubmitForm} />}
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
