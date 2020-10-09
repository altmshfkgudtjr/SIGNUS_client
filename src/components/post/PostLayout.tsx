import React from 'react'
import styled from 'styled-components'
import { Helmet, HelmetProvider } from "react-helmet-async"
// components
import BoardInfo from '../board/BoardInfo'
import BoardInfoMobile from '../board/BoardInfoMobile'
import PostTextWrapper from '../post/PostTextWrapper'
import PostImageWrapper from '../post/PostImageWrapper'
// lib
import media from '../../lib/styles/media'

type PostLayoutProps = {
	newsfeed: React.ReactNode
};

const PostLayout = ({newsfeed}: PostLayoutProps) => {
	const pathname = (window.location.pathname.split('/')[2] || window.location.pathname.split('/')[1]);
	let pagename = '', pagetitle = '';

	if (pathname === '') {
		pagename = 'Top News';
		pagetitle = '';
	} else if (pathname === 'best') {
		pagename = '인기';
		pagetitle = ` - ${pagename}`;
	} else if (pathname === 'university') {
		pagename = '대학';
		pagetitle = ` - ${pagename}`;
	} else if (pathname === 'award') {
		pagename = '공모전&행사';
		pagetitle = ` - ${pagename}`;
	} else if (pathname === 'group') {
		pagename = '동아리&모임';
		pagetitle = ` - ${pagename}`;
	} else if (pathname === 'job') {
		pagename = '진로&구인';
		pagetitle = ` - ${pagename}`;
	}

	return (
		<Container>
			<HelmetProvider>
				<Helmet>
					<title>SIGNUS{pagetitle}</title>
				</Helmet>
			</HelmetProvider>
			{newsfeed}
			<PostWrapper>
				<BoardInfo icon_src="/icons/1x/home.png"
									 small_info="뉴스피드"
									 large_info={pagename} />
				<BoardInfoMobile small_info="뉴스피드"
												 large_info={pagename} />
				<PostTextWrapper />
				<PostTextWrapper />
				<PostImageWrapper />
				<PostTextWrapper />

				<PostImageWrapper />
				<PostImageWrapper />
				<PostImageWrapper />
			</PostWrapper>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: auto;
	flex-grow: 1;
`;

const PostWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 1rem;
	grid-auto-rows: 200px;

	${media.small} {
		display: block;
	}
`;

export default PostLayout