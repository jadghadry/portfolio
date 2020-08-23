import styled from 'styled-components'




export const Text = styled.span`

	color: ${props => props.fontColor};
	font-family: var(--font-main);
	font-weight: ${props => props.fontWeight};

	@media only all {
		font-size: ${props => props.fontSize?.xs};
	}
	
	@media only screen and (min-width: 576px) {
		font-size: ${props => props.fontSize?.sm};
	}
	
	@media only screen and (min-width: 768px) {
		font-size: ${props => props.fontSize?.md};
	}
	
	@media only screen and (min-width: 992px) {
		font-size: ${props => props.fontSize?.lg};
	}
	
	@media only screen and (min-width: 1200px) {
		font-size: ${props => props.fontSize?.xl};
	}
	
	@media only screen and (min-width: 1660px) {
		font-size: ${props => props.fontSize?.xxl};
	}

`

export const Title = styled(Text)`
	background-color: ${props => props.highlighted && 'var(--color-main)'};
	border-bottom: ${props => props.underlined && '1px solid #fff'};
	font-family: var(--font-alternative);
	padding: ${props => props.highlighted && '8px'};
`

Title.defaultProps = {
	fontColor: '#fff',
	fontSize: {
		xs: '3.5rem',
		lg: '5rem',
	},
	fontWeight: 500
}