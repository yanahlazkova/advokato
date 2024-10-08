import styled from '@emotion/styled';
import { device } from '../../../styles/mixins';

export const LiStyled = styled.li`
  color: var(--greyText);
  border-bottom: 1px solid #ffffff;
	width: 100%;


  &.active {
    color: var(--lightText);
  }

  &:hover,
  &:focus {
    cursor: pointer;
    transition: color var(--animation-duration) var(--timing-function);
    color: var(--lightText);
  }

  @media screen and (${device.mobileL}) {
    padding-top: 12px;
    padding-bottom: 12px;
    max-width: 300px;
    min-height: 52px;
  }

  @media screen and (${device.tablet}) {
    padding-top: 16px;
    padding-bottom: 16px;
    max-width: 420px;
    height: 60px;
  }

  @media screen and (${device.desktop}) {
    padding-top: 17px;
    padding-bottom: 11px;
    max-width: 548px;
    height: 64px;
  }
`;

export const SpecializationStyled = styled.p`
  display: flex;
  align-items: center;
  font-family: var(--Raleway);
  font-weight: 400;
	line-height: 140%;
  word-spacing: -0.05ch;
  letter-spacing: 0em;
	margin-bottom: 12px;

  @media screen and (${device.mobileL}) {
    /* height: 28px; */
    font-size: 20px;
    line-height: calc(28 / 20);
    margin-bottom: 0;
  }

  @media screen and (${device.tablet}) {
    font-size: 22px;
    line-height: calc(31 / 22);
  }

  @media screen and (${device.desktop}) {
    height: 36px;
    font-size: 32px;
    line-height: calc(45 / 32);
  }
`;
