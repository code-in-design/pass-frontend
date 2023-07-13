import { useFormContext } from 'react-hook-form';
import VersionToApplyTestScoreSheet, { OptionType } from '../components/VersionToApplyTestScoreSheet';

const VersionToApplyTestScoreSheetContainer = () => {
  const { register, setValue, watch } = useFormContext();
  register('isApplyPreviousVersion');

  const serverData = [
    {
      id: 1,
      version: '2.3.5',
      date: '2023.01.02 11:00',
      comment: '2.3.5 버전 업데이트입니다.',
    },
    {
      id: 2,
      version: '2.3.6',
      date: '2023.01.03 11:00',
      comment: '2.3.6 버전 업데이트입니다.',
    },
  ];

  const options: OptionType[] = serverData.map(data => {
    return { value: data.id, label: 'ver ' + data.version };
  });

  return <VersionToApplyTestScoreSheet options={options} register={register} setValue={setValue} watch={watch}/>;
};

export default VersionToApplyTestScoreSheetContainer;
