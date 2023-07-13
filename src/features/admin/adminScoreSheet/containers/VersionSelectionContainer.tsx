import { find } from 'lodash';
import VersionDropDown, { OptionType } from '../components/VersionDropDown';
import { useFormContext } from 'react-hook-form';
import { Flex } from '@chakra-ui/react';
import UpdateDateDisplay from '../components/UpdateDateDisplay';

const VersionSelectionContainer = () => {
  const { register, setValue, watch } = useFormContext();
  const selectedId = watch('updateVersionId', '');

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

  return (
    <Flex maxH="40px" gap="24px">
      <VersionDropDown options={options} register={register} setValue={setValue} />
      <UpdateDateDisplay scheduledUpdateDate={scheduledUpdateDate} />
    </Flex>
  );
};

export default VersionSelectionContainer;
