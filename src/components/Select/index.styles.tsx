import Select from 'react-select';
import styled from '@emotion/styled';

export const StyledSelectLarge = styled(Select)`
  &.react-select-large {
    &-container {
      font-size: 16px;
      font-weight: 600;
      color: ${props => props.theme.colors.grayBlack};
      .react-select-large__control {
        height: 56px;
        border-radius: 16px;
        color: ${props => props.theme.colors.gray4};
        border: 1px solid ${props => props.theme.colors.gray4};
        box-shadow: 0 0 0 1px ${props => props.theme.colors.gray4};
        .react-select-large__value-container {
          padding: 0;
          margin: 0;
          padding-left: 24px;
        }
      }
      .react-select-large__control--menu-is-open {
        border-radius: 16px 16px 0 0;
      }

      .react-select-large__indicators {
        padding-right: 16px;
        .react-select__indicator-separator {
          display: none;
        }
      }
      .react-select-large__menu {
        border-radius: 0 0 16px 16px;
        margin: 0;
        &-list {
          padding: 0;
          .react-select-large__option {
            padding: 18px 24px;
            height: 56px;
            &--is-selected {
              background-color: #f8f8fc;
              color: ${props => props.theme.colors.grayBlack};
              font-weight: 700;
            }
            &--is-focused {
              /* background-color: #f8f8fc; */
              /* color: #353644; */
              /* font-weight: 700; */
            }
            &:last-child {
              border-radius: 0 0 16px 16px;
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

export const StyledSelectMedium = styled(Select)<{ width }>`
  &.react-select-middle {
    &-container {
      font-size: 14px;
      font-weight: 600;
      color: ${props => props.theme.colors.grayBlack};
      line-height: 16px;
      .react-select-middle__control {
        width: ${props => (props.width ? props.width : '315px')};
        height: 44px;
        border-radius: 16px;
        color: ${props => props.theme.colors.gray4};
        border: 1px solid ${props => props.theme.colors.gray4};
        box-shadow: none;
        .react-select-middle__value-container {
          padding: 0;
          margin: 0;
          padding-left: 24px;
        }
      }
      .react-select-middle__control--menu-is-open {
        border-radius: 16px 16px 0 0;
      }

      .react-select-middle__indicators {
        padding-right: 16px;
        .react-select-middle__indicator-separator {
          display: none;
        }
      }
      .react-select-middle__menu {
        border-radius: 0 0 16px 16px;
        margin: 0;
        &-list {
          padding: 0;
          .react-select-middle__option {
            padding: 18px 24px;
            height: 56px;
            &--is-selected {
              background-color: #f8f8fc;
              color: ${props => props.theme.colors.grayBlack};
              font-weight: 700;
            }
            &--is-focused {
              /* background-color: #f8f8fc; */
              /* color: #353644; */
              /* font-weight: 700; */
            }
            &:last-child {
              border-radius: 0 0 16px 16px;
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

export const StyledSelectSmall = styled(Select)`
  &.react-select-small {
    &-container {
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: ${props => props.theme.colors.grayBlack};
      .react-select-small__control {
        height: 28px;
        border-radius: 8px;
        color: ${props => props.theme.colors.gray4};
        border: none;
        .react-select-small__value-container {
          padding: 0;
          margin: 0;
          padding-left: 12px;
          letter-spacing: -0.02em;
          .react-select-small__input-container {
            padding: 0;
            margin: 0;
            height: 16px;
            color: ${props => props.theme.colors.gray1};
          }
        }
      }
      .react-select-small__control--menu-is-open {
        border-radius: 8px 8px 0 0;
      }
      .react-select-small__control--is-focused {
        box-shadow: none;
      }
      .react-select-small__indicators {
        margin: auto 0;
        height: 28px;
        padding-right: 12px;
        .react-select-small__indicator-separator {
          display: none;
        }
        .react-select-small__indicator {
          padding: 4px;
          color: ${props => props.theme.colors.gray1};
        }
      }
      .react-select-small__menu {
        border-radius: 0 0 8px 8px;
        margin: 0;
        &-list {
          padding: 0;
          .react-select-small__option {
            padding: 4px 12px;
            height: 28px;
            &--is-selected {
              background-color: #f8f8fc;
              color: ${props => props.theme.colors.grayBlack};
              font-weight: 700;
            }
            &--is-focused {
              /* background-color: #f8f8fc; */
              /* color: #353644; */
              /* font-weight: 700; */
            }
            &:last-child {
              border-radius: 0 0 8px 8px;
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
