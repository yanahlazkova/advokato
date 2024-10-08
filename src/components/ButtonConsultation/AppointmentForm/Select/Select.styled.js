import { device, fontDesktop } from "../../../../styles/mixins";

import styled from "@emotion/styled";

export const LabelStyled = styled.label`
	position: relative;

	p {
		/* ${fontDesktop}; */
		color: var(--mainText);
		font-weight: 600;
		margin-bottom: 5px;

		@media screen and (${device.mobileL}) {
			/* margin-bottom: 4px;
      height: 32px; */
			font-size: 18px;
			/* line-height: calc(29 / 18); */
		}

		@media screen and (${device.desktop}) {
			/* margin-bottom: 8px;
      height: 28px; */
			font-size: 20px;
			/* line-height: calc(35 / 22); */
		}
	}

	&:last-of-type {
		@media screen and (${device.mobileL}) {
			/* margin-bottom: 4px; */
		}

		@media screen and (${device.desktop}) {
			/* margin-bottom: -4px; */
		}
	}
`;

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;

	/* ${fontDesktop}; */
	font-weight: 600;
	color: var(--mainText);
	stroke: var(--mainText);
	border: 1px solid var(--greyText);
	font-size: 16px;
	width: 250px;
	padding: 10px 10px;
	background-color: ${({ value }) =>
		value ? "var(--accentLink)" : "var(--lightBackground)"};

	svg {
		width: 14px;
		height: 14px;

		@media screen and (${device.mobileL}) {
			width: 24px;
			height: 24px;
		}
	}

	@media screen and (${device.mobileL}) {
		/* padding: 18px 28px; */
		padding: 20px 30px;
		width: 450px;
		/* height: 60px; */
		font-size: 18px;
		/* line-height: calc(26 / 16); */
	}

	@media screen and (${device.desktop}) {
		/* padding: 20px 30px;
		width: 450px; */
		/* width: 488px; */
		/* height: 76px; */
		/* line-height: calc(35 / 22); */
		font-size: 20px;
	}
`;

export const OptionsList = styled.ul`
	position: absolute;
  height: 143px;
	z-index: 999;
	top: 100%;
	background: white;
	overflow-x: hidden;
	overflow-y: auto;
 
  @media screen and (${device.mobileL}) {
    height: 150px;
  }

  @media screen and (${device.tablet}) {
    height: 150px;
  }

`

export const OptionsItem = styled.li`
	${fontDesktop};
	color: var(--mainText);
	border: 1px solid var(--greyText);
	font-size: 16px;
	width: 250px;
	padding: 10px 10px;

	&:hover,
	&:focus {
		cursor: pointer;
		transition-property: background-color;
		transition-duration: var(--animation-duration);
		transition-timing-function: var(--timing-function);
		background-color: var(--accentLink);
	}

	&.isChecked {
		background-color: var(--accentLink);
	}

	@media screen and (${device.mobileL}) {
		/* padding: 18px 28px;
    width: 440px;
    height: 60px;
    font-size: 18px;
    line-height: calc(29 / 18); */
		padding: 20px 30px;
		width: 450px;
		font-size: 20px;
	}

	@media screen and (${device.desktop}) {
		/* padding: 20px 28px;
    width: 488px;
    height: 76px;
    font-size: 22px;
    line-height: calc(35 / 22); */
	}
`;

