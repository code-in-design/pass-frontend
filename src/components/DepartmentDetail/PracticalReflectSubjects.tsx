import React from 'react';
import { PracticalType } from '../PracticalIcon';
import PracticalTag from '../Tag/PracticalTag';
import { ExerciseWrapper, MenuTitle, ShowTable, Wrapper } from './index.styles';
import Info from '../../../public/images/icons/info.svg';

interface PracticalReflectSubjectsProps {
  data: PracticalType[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PracticalReflectSubjects = (props: PracticalReflectSubjectsProps) => {
  return (
    <>
      <MenuTitle>
        <Wrapper>
          실기 반영 종목
          <ShowTable onClick={() => props.setIsModalOpen(true)}>
            <Info />
            배점표 보기
          </ShowTable>
        </Wrapper>
      </MenuTitle>
      <ExerciseWrapper>
        {props.data?.map((item: PracticalType, index) => {
          return <PracticalTag key={index} type={item} />;
        })}
      </ExerciseWrapper>
    </>
  );
};

export default PracticalReflectSubjects;
