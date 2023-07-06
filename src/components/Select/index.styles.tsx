import Select from 'react-select';
import styled from '@emotion/styled';

export const StyledSelect = styled(Select)<{ arrowSize; border; height; isNoBorder: boolean; padding; font; menuPadding }>`
  &.react-select {
    &-container {
      width: 100%;
      font-weight: 600;
      font-size: ${props => props.font};
      line-height: 16px;
      color: ${props => props.theme.colors.grayBlack};
      .react-select__control {
        min-height: 24px;
        height: ${props => `${props.height}px`};
        border-radius: ${props => props.border};
        color: ${props => props.theme.colors.gray2};
        border: ${props => (props.isNoBorder ? 'none' : '1px solid #e4e6f0')};
        .react-select__value-container {
          padding: 0;
          margin: 0;
          padding-left: ${props => props.padding};
          .react-select__placeholder {
            margin-left: 0;
            margin-right: 0;
            color: inherit;
          }
          .react-select__input-container {
            margin: 0;
            padding-bottom: 0;
            padding-top: 0;
          }
          .react-select__single-value {
            margin-left: 0;
            margin-right: 0;
          }
        }
      }
      .react-select__control--is-focused {
        box-shadow: none;
      }
      .react-select__control--menu-is-open {
        border-radius: ${props => `${props.border} ${props.border} 0 0`};
      }

      .react-select__indicators {
        padding-right: ${props => props.padding};
        .react-select__indicator {
          padding: 0;
          > svg {
            width: ${props => props.arrowSize};
            height: ${props => props.arrowSize};
          }
        }
        .react-select__indicator-separator {
          display: none;
        }
      }
      .react-select__menu {
        border-radius: ${props => `0 0 ${props.border} ${props.border}`};
        margin: 0;
        color: ${props => props.theme.colors.gray1};
        &-list {
          padding: 0;
          .react-select__option {
            padding: ${props => props.menuPadding};
            cursor: pointer;
            &--is-selected {
              background-color: #f8f8fc;
              font-weight: 700;
              color: ${props => props.theme.colors.grayBlack};
            }
            &--is-focused {
            }
            &:last-child {
              border-radius: ${props => `0 0 ${props.border} ${props.border}`};
            }
          }
        }
      }
    }

    &__value-container {
      color: ${props => props.theme.colors.grayBlack};
      font-weight: 700;
    }
  }
`;
