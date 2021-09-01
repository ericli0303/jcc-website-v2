import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const AlbumCover = styled.div`
	background-color: #888;
	border-radius: 20px;
	min-height: 300px;
	min-width: 200px;

	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

const TitleText = styled.div`
	color: #fff;
	font-size: 25px;
	font-weight: 600;
	margin-top: 20px;
`;

const AlbumCard = ({ id, title, coverImageSrc }) => {
	const history = useHistory();
	console.log(coverImageSrc);
	/**
	 * TODO: use cover image source as cover picture
	 */
	return (
		<Container>
			<AlbumCover
				onClick={() =>
					history.push({
						pathname: `/photo/album/${id}`,
						state: { title: title },
					})
				}
			/>
			<TitleText>{title}</TitleText>
		</Container>
	);
};

export default AlbumCard;
