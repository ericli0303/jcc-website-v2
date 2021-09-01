import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import IconButton from "@material-ui/core/IconButton";
import Gallery from "react-photo-gallery";

const Section = styled.section`
	margin: 0 auto;
	padding: 3em 5em;
`;

const Wrapper = styled(Section)`
	min-height: 100vh;
`;

const TitleText = styled.p`
	color: #fff;
	font-size: 3em;
	font-weight: 600;
	margin-left: 1em;

	@media (max-width: 600px) {
		font-size: 2em;
	}
`;

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const StyledIcon = styled(KeyboardBackspaceIcon)`
	transform: scale(2);

	@media (max-width: 600px) {
		transform: scale(1.2);
	}

	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

const StyledIconButton = styled(IconButton)`
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const GalleryPage = () => {
	const history = useHistory();
	const { title } = history.location.state;
	/**
	 * photoInfo info schema
	 * PhotoInfo: array {
	 * 	src: string (image source link),
	 * 	width: int, (dimension)
	 * 	height: int (dimension)
	 * }
	 *
	 * example in useState
	 */
	const [photoInfo, setPhotoInfo] = useState(
		[...Array(9)].fill({
			src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			width: 4,
			height: 3,
		})
	);

	useEffect(() => {
		// TODO: get photos info with the given photo album ID from firebase
	}, [photoInfo]);

	return (
		<Wrapper>
			<Container>
				<StyledIconButton onClick={() => history.push("/photo")}>
					<StyledIcon fontSize={"large"} color={"secondary"} />
				</StyledIconButton>
				<TitleText>{title}</TitleText>
			</Container>
			<Gallery photos={photoInfo} />
		</Wrapper>
	);
};

export default GalleryPage;
