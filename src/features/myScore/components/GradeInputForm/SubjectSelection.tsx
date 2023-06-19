import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';

interface Props {
  type: string;
  isChoice: string[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  unRequiredFields?: [any, any, any];
  isMathRawDropout?: boolean;
  isPassAnalysis?: boolean;
}
interface ItemProps {
  selected: boolean;
  text: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleClick: () => void;
  unRequiredFields?: [any, any, any];
  isMathRawDropout?: boolean;
  isPassAnalysis?: boolean;
}

const ChoiceItems = (props: ItemProps) => {
  const Component = props.selected ? ChoiceItemSelect : ChoiceItem;

  return (
    <Component isPassAnalysis={props.isPassAnalysis || true} {...props.register(props.type, { required: !props.isMathRawDropout ? `선택과목을 선택해주세요.` : false })} onClick={props.handleClick}>
      {props.text}
    </Component>
  );
};

const SubjectSelection = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(props?.isChoice[0]);

  const handleItemClick = item => {
    setSelectedItem(item);
    if (props.isMathRawDropout) {
      props.setValue(props.type, '미응시');
    }
    props.setValue(props.type, item);
  };

  useEffect(() => {
    props.setValue(props.type, props?.isChoice[0]);
  }, []);

  useEffect(() => {
    if (props.isMathRawDropout) {
      props.setValue(props.type, '미응시');
    }
  }, [props.isMathRawDropout]);
  return (
    <Choice>
      {!props.isPassAnalysis && <ChoiceTitle>선택</ChoiceTitle>}
      <ChoiceContainer>
        {props.isChoice.map((item, index) => (
          <ChoiceItems
            unRequiredFields={props.unRequiredFields}
            type={props.type}
            text={item}
            key={item}
            selected={item === selectedItem}
            handleClick={() => handleItemClick(item)}
            register={props.register}
            setValue={props.setValue}
            isMathRawDropout={props.isMathRawDropout}
            isPassAnalysis={props.isPassAnalysis}
          />
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

const ChoiceItem = styled.div<{ isPassAnalysis: boolean }>`
  /* padding: 8px 12px; */
  padding: ${props => (props.isPassAnalysis ? '8px 19.5px' : '8px 12px')};
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: ${props => props.theme.colors.gray2};
`;

const ChoiceItemSelect = styled.div<{ isPassAnalysis: boolean }>`
  padding: ${props => (props.isPassAnalysis ? '8px 19.5px' : '8px 12px')};
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  border-radius: 16px;
  cursor: pointer;
`;
