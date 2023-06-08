import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';

interface Props {
  type: string;
  isChoice: string[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  unRequiredFields?: [any, any, any];
}
interface ItemProps {
  selected: boolean;
  text: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleClick: () => void;
  unRequiredFields?: [any, any, any];
}

const ChoiceItems = (props: ItemProps) => {
  const [unRequiredField, setUnRequiredField] = useState<string[]>([]);
  const Component = props.selected ? ChoiceItemSelect : ChoiceItem;
  const mathDropout = props.unRequiredFields?.[2];

  useEffect(() => {
    const updatedUnRequiredField: string[] = ['naesinGrade'];
    if (mathDropout) {
      updatedUnRequiredField.push('mathOptionalSubject');
    }
    setUnRequiredField(updatedUnRequiredField);
  }, [mathDropout]);

  return (
    <Component {...props.register(props.type, { required: !unRequiredField.includes(props.type) ? `선택과목을 선택해주세요.` : false })} onClick={props.handleClick}>
      {props.text}
    </Component>
  );
};

const SubjectSelection = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(props?.isChoice[0]);

  const handleItemClick = item => {
    setSelectedItem(item);
    props.setValue(props.type, item);
  };

  useEffect(() => {
    props.setValue(props.type, props?.isChoice[0]);
  }, []);

  return (
    <Choice>
      <ChoiceTitle>선택</ChoiceTitle>
      <ChoiceContainer>
        {props.isChoice.map((item, index) => (
          <ChoiceItems unRequiredFields={props.unRequiredFields} type={props.type} text={item} key={item} selected={item === selectedItem} handleClick={() => handleItemClick(item)} register={props.register} setValue={props.setValue} />
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
  background-color: ${props => props.theme.colors.gray5};
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.gray2};
  padding: 2px;
`;

const ChoiceItem = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: ${props => props.theme.colors.gray2};
`;

const ChoiceItemSelect = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  border-radius: 16px;
  cursor: pointer;
`;
