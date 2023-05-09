import styled from '@emotion/styled';

interface Props {
  img: string;
  text: string;
}

const ServiceListItem: React.FC<Props> = props => {
  return (
    <MenuListItem>
      <MenuImg src={`/images/icons/${props.img}.svg`} />
      <MenuTitle>{props.text}</MenuTitle>
    </MenuListItem>
  );
};

export default ServiceListItem;

const MenuListItem = styled.li`
  width: 239.5px;
  height: 54px;
  background-color: #fff;
  border: 1px solid #fff;
  padding: 16px 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
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
  letter-spacing: -0.02em;
`;
