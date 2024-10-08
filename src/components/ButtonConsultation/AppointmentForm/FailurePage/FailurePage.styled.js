import {
  device,
  flexBox,
  fontSectionTitle,
  secondaryButton,
} from '../../../../styles/mixins';

import styled from '@emotion/styled';

export const DivStyled = styled.div`
  ${flexBox};
  flex-direction: column;
  padding: 25px;

  h2 {
    ${fontSectionTitle};
    /* text-align: center; */
    color: var(--mainText);
    
    @media screen and (${device.mobileS}) {
      margin-bottom: 10px;
      font-size: 24px;
    }

    @media screen and (${device.mobileL}) {
      margin-bottom: 20px;
      /* height: 40px;
      min-width: 136px; */

      font-size: 28px;
      /* line-height: calc(39 / 28); */
    }

    @media screen and (${device.desktop}) {
      margin-bottom: 20px;
      /* height: 48px; */
      /* min-width: 180px; */

      font-size: 32px;
      /* line-height: calc(56 / 40); */
    }
  }

  p {
    font-family: var(--PTSans);
    font-weight: 400;
    /* letter-spacing: 0em; */
    color: var(--mainText);

    @media screen and (${device.mobileL}) {
      /* height: 32px; */
      font-size: 20px;
      /* line-height: 28.8px; */
    }

    @media screen and (${device.desktop}) {
      /* height: 28px; */
      font-size: 22px;
      /* line-height: 35.2px; */
    }
  }

  p:first-of-type {
    margin-bottom: 12px;
  }

  p:last-of-type {
    @media screen and (${device.mobileL}) {
      margin-bottom: 24px;
    }

    @media screen and (${device.desktop}) {
      margin-bottom: 28px;
    }
  }

  button {
    ${secondaryButton};
    border: 1px solid var(--darkBackground);

    /* &:hover,
    &:focus {
      border: 1px solid var(--darkBackground);
    } */

    @media screen and (${device.mobileL}) {
      width: 288px;
      height: 52px;
    }
  }
`;
