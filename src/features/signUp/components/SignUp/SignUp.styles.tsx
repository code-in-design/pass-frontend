import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  width: 432px;
`;
export const Form = styled.div`
  height: 296px;
  border-radius: 16px;
  padding: 32px 24px;
  border: 1px solid #e4e6f0;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const HeaderCheckbox = styled.input`
  width: 15px;
  height: 15px;
  color: #353644;
  border: 1px solid #353644;
  padding: 2.5px;
  margin-right: 4px;
  margin-bottom: 2.5px;
`;
export const HeaderLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #353644;
  margin-right: 8px;
`;
export const HeaderOption = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #626474;
`;
export const Divider = styled.hr`
  color: #e4e6f0;
  margin: 24px 0;
`;
export const Body = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const BodyCheckbox = styled.input`
  width: 14.17px;
  height: 14.17px;
  color: #626474;
  border: 1px solid #626474;
  padding: 2.5px;
  margin-right: 4px;
  margin-bottom: 2.5px;
`;
export const BodyLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #626474;
  margin-right: 8px;
`;
export const BodyOption = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.color || '#9395A6'};
`;
export const BodyArrowRight = styled.img`
  padding: 5.35px 7.02px;
  margin-left: auto;
`;
export const NextButton = styled.button`
  margin-top: 110px;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  background-color: #6b77f8;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
