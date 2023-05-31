import styled from '@emotion/styled';

interface Props {
  img: string;
  text: string;
  onClick: () => void;
}

const ServiceListItem = (props: Props) => {
  return (
    <MenuListItem onClick={props.onClick}>
      <MenuImg src={props.img} alt={props.text} />
      <MenuTitle>{props.text}</MenuTitle>
    </MenuListItem>
  );
};

export default ServiceListItem;

const MenuListItem = styled.li`
  min-width: 239.5px;
  width: 100%;
  height: 54px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  padding: 16px 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MenuImg = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 12px;
`;

const MenuTitle = styled.span`
  font-weight: 600;
  line-height: 20px;
`;
