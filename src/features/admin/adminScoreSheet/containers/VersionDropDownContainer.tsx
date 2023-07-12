import { find } from 'lodash';
import VersionDropDown, { OptionType } from '../components/VersionDropDown';
import useScoreSheetForm from '../hooks/useScoreSheetForm';

const VersionDropDownContainer = () => {
  const { register, setValue, watch } = useScoreSheetForm();
  const selectedId = watch('id', '');

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

  const selectedItem = find(serverData, { id: selectedId });
  const scheduledUpdateDate = selectedItem?.date ?? '';

  const options: OptionType[] = serverData.map(data => {
    return { value: data.id, label: 'ver ' + data.version };
  });

  return <VersionDropDown options={options} register={register} setValue={setValue} scheduledUpdateDate={scheduledUpdateDate} />;
};

export default VersionDropDownContainer;
