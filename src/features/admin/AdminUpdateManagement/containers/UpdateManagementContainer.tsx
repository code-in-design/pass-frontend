import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import UpdateForm, { OptionType } from '../components/UpdateForm';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

const UpdateManagementContainer = () => {
  const { register, handleSubmit, setValue, watch, formState } = useForm();
  const id = watch('id', '');
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

  const selectedItem = _.find(serverData, { id: id });
  const scheduledUpdateDate = selectedItem?.date || '';
  const comment = selectedItem?.comment || '';

  const options: OptionType[] = serverData.map(data => {
    return { value: data.id, label: 'ver ' + data.version };
  });

  const onSubmit = data => {
    console.log('제출', data);
    alert('저장되었습니다.');
  };

  const onError = error => {
    if (error?.version) alert(error.version.message);
  };

  return <UpdateForm date={scheduledUpdateDate} comment={comment} options={options} register={register} setValue={setValue} handleSubmit={handleSubmit(onSubmit, onError)} formState={formState}/>;
};

export default UpdateManagementContainer;
