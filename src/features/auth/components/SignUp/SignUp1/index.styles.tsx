import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  width: 432px;
`;
export const Form = styled.div`
  height: 296px;
  border-radius: 16px;
  padding: 32px 24px;
  border: 1px solid ${props => props.theme.colors.gray4};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderCheckbox = styled.input`
  width: 15px;
  height: 15px;
  color: ${props => props.theme.colors.grayBlack};
  border: 1px solid ${props => props.theme.colors.grayBlack};
  padding: 2.5px;
  margin-right: 4px;
  margin-bottom: 2.5px;
`;
export const HeaderLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => props.theme.colors.grayBlack};
  margin-right: 8px;
`;
export const HeaderOption = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.gray1};
`;
export const Divider = styled.hr`
  color: ${props => props.theme.colors.gray4};
  margin: 24px 0;
`;
export const Body = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const BodyCheckbox = styled.input`
  width: 14.17px;
  height: 14.17px;
  color: ${props => props.theme.colors.gray1};
  border: 1px solid ${props => props.theme.colors.gray1};
  padding: 2.5px;
  margin-right: 4px;
  margin-bottom: 2.5px;
`;
export const BodyLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => props.theme.colors.gray1};
  margin-right: 8px;
`;
export const BodyOption = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.color || props.theme.colors.gray2};
`;
export const BodyArrowRight = styled.img`
  padding: 5.35px 7.02px;
  margin-left: auto;
  cursor: pointer;
`;
export const NextButton = styled.button`
  margin-top: 110px;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
