import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import UpdateForm, { OptionType } from '../components/UpdateForm';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

const UpdateManagementContainer = () => {
  const { register, handleSubmit, setValue, watch, formState } = useForm();
  const version = watch('version', '');
  const serverData = [
    {
      version: '2.3.5',
      date: '2023.01.02 11:00',
    },
    {
      version: '2.3.6',
      date: '2023.01.03 11:00',
    },
  ];

  const updateDate = _.find(serverData, { version: version })?.date || '';

  const options: OptionType[] = serverData.map(data => {
    return { value: data.version, label: 'ver ' + data.version };
  });

  const onSubmit = data => {
    console.log('제출', data);
    alert('저장되었습니다.');
  };

  const onError = error => {
    if (error?.version) alert(error.version.message);
  };

  return <UpdateForm date={updateDate} options={options} register={register} setValue={setValue} handleSubmit={handleSubmit(onSubmit, onError)} />;
};

export default UpdateManagementContainer;
