import styled from "@emotion/styled";
import {
	flexBox,
	container,
	device,
	fontMobile,
	fontTablet,
	fontDesktop,
} from "../../styles/mixins";
import "../../index.css";

export const SectionStyled = styled.section`
	background-color: var(--darkBackground);
	color: var(--lightText);
`;

export const Container = styled.div`
	${container};
	display: flex;
	justify-content: space-evenly;
	

  @media screen and (${device.mobileS}) {
    padding: 28px 24px;
    ${fontMobile}
  }

	@media screen and (${device.mobileL}) {
		padding: 0;
		${fontMobile};
    max-width: 768px;
	}

	@media screen and (${device.tablet}) {
		${fontTablet};
    max-width: 1024px;
	}

	@media screen and (${device.desktop}) {
		${fontDesktop};
    max-width: 1440px;
		max-height: initial;
	}
`;

export const TextStyled = styled.div`

  @media screen and (${device.mobileS}) {
		display: flex;
		flex-direction: column;
		gap: 20px;
    
  }
	
	@media screen and (${device.mobileL}) {
		width: 352px;
		margin: 60px 38px 60px 60px;
		line-height: 25.6px;
	}

	@media screen and (${device.tablet}) {
		width: 422px;
		margin: 120px 24px 120px 80px;
		line-height: 32px;
	}

	@media screen and (${device.desktop}) {
		width: 484px;
		margin: 0;
		line-height: 35.2px;
	}

	h2 {
		display: flex;
		flex-wrap: wrap;
		font-family: var(--Raleway);
		font-weight: 400;
		line-height: calc(45 / 32);
		letter-spacing: 0em;
		text-align: left;

    @media screen and (${device.mobileS}) {
			display: block;
      font-size: 20px;
    }

		@media screen and (${device.mobileL}) {
			margin-bottom: 20px;
			font-size: 24px;
			width: 260px;
		}

		@media screen and (${device.tablet}) {
			margin-bottom: 30px;
			font-size: 28px;
			width: auto;
		}

		@media screen and (${device.desktop}) {
			margin-bottom: 52px;
			font-size: 32px;
		}
	}

	span {
		font-family: var(--Raleway);
		font-weight: 700;
		line-height: calc(42 / 56);
		letter-spacing: 0.006rem;
		text-align: left;

    @media screen and (${device.mobileS}) {
      font-size: 24px;
      margin-top: 8px;
    }

		@media screen and (${device.mobileL}) {
			font-size: 32px;
			margin-top: 13px;
		}

		@media screen and (${device.tablet}) {
			font-size: 48px;
			margin-top: 24px;
		}

		@media screen and (${device.desktop}) {
			font-size: 64px;
			margin-top: 32px;
		}
	}

	p {
		font-family: var(--PTSans);
		font-weight: 400;
		line-height: calc(35 / 22);
		letter-spacing: 0em;
		text-align: left;

		@media screen and (${device.mobileL}) {
			margin-bottom: 32px;
			font-size: 16px;
			max-width: 352px;
		}

		@media screen and (${device.tablet}) {
			margin-bottom: 22px;
			font-size: 20px;
			max-width: 422px;
		}

		@media screen and (${device.desktop}) {
			margin-bottom: 72px;
			font-size: 22px;
			max-width: 484px;
		}
	}

	button {

    @media screen and (${device.mobileS}) {
      padding: 16px 20px;
      width: 260px;
      height: 44px;
      font-size: 14px;
    }
		
		@media screen and (${device.mobileL}) {
			padding: 16px 20px;
			width: 260px;
			height: 44px;
			font-size: 14px;
		}

		@media screen and (${device.tablet}) {
			padding: 20px;
			width: 312px;
			height: 60px;
			font-size: 16px;
		}

		@media screen and (${device.desktop}) {
			padding: 20px 32px;
			width: 364px;
			height: 64px;
			font-size: 18px;
			line-height: calc(27 / 18);
		}
	}
`;

export const CompanyBox = styled.div`
	${flexBox};
	flex-direction: column;

  @media screen and (${device.mobileS}) {
    width: 100%;
  }

	@media screen and (${device.mobileL}) {
		width: 450px;
	}

	@media screen and (${device.tablet}) {
		width: 526px;
	}

	@media screen and (${device.desktop}) {
		width: 824px;
	}
`;

export const ImageBoxStyled = styled.div`

  @media screen and (${device.mobileS}) {
   display: none;
  }
	
	@media screen and (${device.mobileL}) {
		display: block;
		width: 318px;
	}

	@media screen and (${device.tablet}) {
		width: 498px;
	}

	@media screen and (${device.desktop}) {
		width: 616px;
	}
`;

export const ImageStyled = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;


export const ImageBoxMobStyled = styled.div`

  @media screen and (${device.mobileS}) {
    width: 100%;
  }
	
	@media screen and (${device.mobileL}) {
		display: none;
	}
`;