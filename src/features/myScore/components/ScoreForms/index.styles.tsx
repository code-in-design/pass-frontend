import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  /* height: 592px; */
  display: flex;
  justify-content: space-between;
  gap: 0 24px;
`;

export const Left = styled.div`
  min-width: 619px;
  width: 100%;
`;

export const Right = styled.div`
  min-width: 397px;
  width: 100%;
`;

export const FlexWrapper = styled.div<{ alignItems: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #636474;
  margin-bottom: 12px;
  min-width: 105px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 4px;
  margin-top: 12px;
  :last-of-type {
    margin-top: 4px;
    margin-bottom: 0;
  }
`;

export const Circle = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${props => props.theme.colors.green};
  border-radius: 50%;
  margin-right: 4px;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  :last-of-type {
    margin-top: 8px;
  }
`;

export const SubjectTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 12px;
  margin-right: 14px;
  min-width: 41px;
`;

export const Bottom = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Informations = styled.div``;

export const Information = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 16px;
  padding: 8px 16px;
  background-color: rgba(107, 119, 248, 0.1);
  :first-of-type {
    margin-bottom: 8px;
  }
`;

export const InfoIconWrapper = styled.div`
  color: ${props => props.theme.colors.blue};
  margin-right: 4px;
  width: 20px;
  height: 20px;
`;

export const InfoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.theme.colors.blue};
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 210px;
  height: 56px;
  border-radius: 16px;
  padding: 18px 10px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  :first-of-type {
    color: ${props => props.theme.colors.gray2};
    background-color: ${props => props.theme.colors.gray4};
    margin-right: 12px;
  }
`;

export const ScoreInput = styled.input<{ placeholderAlign?: string }>`
  text-align: ${props => (props.placeholderAlign ? props.placeholderAlign : 'right')};
  outline: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  color: ${props => props.theme.colors.grayBlack};
  ::placeholder {
    color: ${props => props.theme.colors.gray3};
    text-align: ${props => (props.placeholderAlign ? props.placeholderAlign : 'right')};
  }
`;
