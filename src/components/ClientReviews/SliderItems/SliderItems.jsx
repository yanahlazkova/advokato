import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import {
	CardHeader,
	CardRecvisits,
	ClientCardWrapper,
	ClientName,
	ClientReview,
	ClientRole,
	ImageWrapper,
} from "../ClientReviews.styled";
import "@splidejs/splide/css";
import { options } from "../ClientsData/SliderSettings";
import { useWindowDimensions } from "../../../hooks/index.js";

export const SliderItems = React.forwardRef(({ data }, ref) => {
	const [openReview, setOpenReview] = useState(null);
	const [closeReview, setCloseReview] = useState(false);
	const {width} = useWindowDimensions()
	const [reviewLength, setReviewLength] = useState(345)

	useEffect(() => {
		if (width < 768) {
			setReviewLength(547);
		} else if (width < 1024) {
			setReviewLength(450);
		} else if (width < 1440) {
			setReviewLength(650);
		} else {
			setReviewLength(345);
		}
	}, [width]);

	useEffect(() => {
		let timer = null;
		if (closeReview === true) {
			timer = setTimeout(() => {
				setOpenReview(null);
			}, 3000);
		}
		return () => clearTimeout(timer);
	}, [openReview, closeReview]);


	return (
		<Splide
			aria-label="Слайдер відгуків клієнтів"
			ref={ref}
			options={options}

		>
			{data?.map(elem => {

				return (
					<SplideSlide key={elem.id} >
						<ClientCardWrapper
							heightText={openReview === elem.id}
							onMouseLeave={() => setCloseReview(true)}
						>
							<CardHeader>
								<ImageWrapper>
									<img
										src={elem.photo_path}
										width={80}
										height={80}
										alt={elem.name}
									/>
								</ImageWrapper>
								<CardRecvisits>
									<ClientName>{elem.name}</ClientName>
									<ClientRole>{elem.position}</ClientRole>
								</CardRecvisits>
							</CardHeader>
							<ClientReview>
								{openReview === elem.id
									? elem.description
									: elem.description.slice(0, reviewLength)
								}
								{elem.description?.length > reviewLength ? (
									<button
										onClick={() => {
											if (openReview !== elem.id) {
												setOpenReview(elem.id);
												setCloseReview(false);
											} else {
												setOpenReview(null);
											}
										}}
									>
										&nbsp;
										{openReview !== elem.id ? "..." + " Далі" : "Згорнути"}
									</button>
								) : null}
							</ClientReview>
						</ClientCardWrapper>
					</SplideSlide>
				);
			})}
		</Splide>
	);
});
