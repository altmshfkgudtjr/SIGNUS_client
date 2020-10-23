import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
// components
import Snackbar from 'components/commons/Snackbar'
// lib
import zIndex from 'lib/styles/zIndex'
import media from 'lib/styles/media'
// modules
import { RootState } from 'store/index'
import { deleteSnackbar } from 'modules/snackbar'

const SnackbarWrapper = () => {
	const dispatch = useDispatch();
	
	const display = useSelector((state: RootState) => state.snackbar.display);
	const message = useSelector((state: RootState) => state.snackbar.message);
	const type = useSelector((state: RootState) => state.snackbar.type);

	const onClose = () => {
		dispatch(deleteSnackbar());
	}

	return (
		<Container>
			{display && <Snackbar onClick={onClose}
														message={message} 
														type={type}></Snackbar>}
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	top: 40px;
	right: 50px;
	width: auto;
	max-width: 300px;
	height: auto;
	z-index: ${zIndex.snackbar};

	${media.small} {
		width: 95%;
		max-width: 800px;
		top: initial;
		bottom: 10px;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

export default SnackbarWrapper