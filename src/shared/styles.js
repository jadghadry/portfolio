import styled from 'styled-components'





export const Container = styled.div`

	@media only all {
		padding-bottom: ${props => props.padding?.vertical?.xs};
		padding-left: ${props => props.padding?.horizontal?.xs};
		padding-right: ${props => props.padding?.horizontal?.xs};
		padding-top: ${props => props.padding?.vertical?.xs};
	}
	
	@media only screen and (min-width: 576px) {
		padding-bottom: ${props => props.padding?.vertical?.sm};
		padding-left: ${props => props.padding?.horizontal?.sm};
		padding-right: ${props => props.padding?.horizontal?.sm};
		padding-top: ${props => props.padding?.vertical?.sm};
	}
	
	@media only screen and (min-width: 768px) {
		padding-bottom: ${props => props.padding?.vertical?.md};
		padding-left: ${props => props.padding?.horizontal?.md};
		padding-right: ${props => props.padding?.horizontal?.md};
		padding-top: ${props => props.padding?.vertical?.md};
	}
	
	@media only screen and (min-width: 992px) {
		padding-bottom: ${props => props.padding?.vertical?.lg};
		padding-left: ${props => props.padding?.horizontal?.lg};
		padding-right: ${props => props.padding?.horizontal?.lg};
		padding-top: ${props => props.padding?.vertical?.lg};
	}
	
	@media only screen and (min-width: 1200px) {
		padding-bottom: ${props => props.padding?.vertical?.xl};
		padding-left: ${props => props.padding?.horizontal?.xl};
		padding-right: ${props => props.padding?.horizontal?.xl};
		padding-top: ${props => props.padding?.vertical?.xl};
	}
	
	@media only screen and (min-width: 1660px) {
		padding-bottom: ${props => props.padding?.vertical?.xxl};
		padding-left: ${props => props.padding?.horizontal?.xxl};
		padding-right: ${props => props.padding?.horizontal?.xxl};
		padding-top: ${props => props.padding?.vertical?.xxl};
	}

`

Container.defaultProps = {
	padding: {
		horizontal: { xs: '44px', sm: '88px', lg: '132px', xl: '176px', xxl: '264px' },
		vertical: { xs: '96px' }
	}
}

export const Divider = styled.div`

	align-items: center;
	display: flex;

	::before,
	::after {
		background-color: #ccc;
		content: '';
		flex: 1;
		height: 1px;
	}

	::before {
		margin-right: 16px;
	}

	::after {
		margin-left: 16px;
	}

`

export const Parallax = styled(Container)`

	align-items: center;
	background-image: url(${props => props.backgroundImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	height: ${props => props.height};
	justify-content: center;
	object-fit: cover;
	position: relative;

	> * {
		position: relative;
	}

	&:before {
		background-color: #00000080;
		bottom: 0px;
		content: '';
		left: 0px;
		position: absolute;
		right: 0px;
		top: 0px;
	}

	@media only all {
		background-attachment: scroll;
	}
	
	@media only screen and (min-width: 576px) {
		background-attachment: fixed;
	}

`