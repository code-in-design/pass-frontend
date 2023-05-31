import styled from '@emotion/styled';
import { useState } from 'react';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';

interface Props {
  type: string;
  isChoice: string[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}
interface ItemProps {
  selected: boolean;
  text: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleClick: () => void;
}

const ChoiceItems = (props: ItemProps) => {
  return props.selected ? (
    <ChoiceItemSelect {...props.register(props.type, { required: '국어,수학과목의 타입을 선택해주세요.' })} onClick={props.handleClick}>
      {props.text}
    </ChoiceItemSelect>
  ) : (
    <ChoiceItem {...props.register(props.type, { required: '국어,수학과목의 타입을 선택해주세요.' })} onClick={props.handleClick}>
      {props.text}
    </ChoiceItem>
  );
};

const SubjectSelection = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = item => {
    setSelectedItem(item);
    props.setValue(props.type, item);
  };

  return (
    <Choice>
      <ChoiceTitle>선택</ChoiceTitle>
      <ChoiceContainer>
        {props.isChoice.map((item, index) => (
          <ChoiceItems type={props.type} text={item} key={item} selected={item === selectedItem} handleClick={() => handleItemClick(item)} register={props.register} setValue={props.setValue} />
        ))}
      </ChoiceContainer>
    </Choice>
  );
};

export default SubjectSelection;

const Choice = styled.div`
  display: flex;
  align-items: center;
`;
const ChoiceTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #45bfd9;
  margin-right: 10px;
`;
const ChoiceContainer = styled.div`
  display: flex;
  height: 36px;
  border-radius: 57px;
  background-color: #f3f4fa;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #9395a6;
  padding: 2px;
`;

const ChoiceItem = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: #9395a6;
`;

const ChoiceItemSelect = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  background-color: #60c8de;
  border-radius: 16px;
  cursor: pointer;
`;
