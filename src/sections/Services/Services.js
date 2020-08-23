import React from 'react'
import styled from 'styled-components'
import { Col, Row, Space } from 'antd'

import { services } from './Services.constants.js'

import SectionHeading from '../../components/SectionHeading'
import { Container } from '../../shared/styles'
import { Text, Title } from '../../shared/typography'





const Icon = styled.div`
		background-color: #f3f3f3;
		border-radius: 50%;
		font-size: 1.75rem;
		line-height: 80px;
		margin: 0 auto;
		height: 80px;
		width: 80px;
		transition: all 0.3s ease-in-out;
	`

	const Content = styled.div`
		background-color: #fff;
		box-shadow: 1px 1px 20px #00000010;
		padding: 48px 32px;
		text-align: center;
		transition: all 0.3s ease-in-out;

		&:hover {
			box-shadow: 1px 5px 20px #00000040;
			transform: translateY(-10px);

			${Icon} {
				background-color: var(--color-main);
				color: #fff;
			}
		}
	`





const Card = (props) => {

	return (

		<Content>
			<Space direction='vertical' size={16}>
				<Icon>
					<i className={props.icon} />
				</Icon>
				<Space direction='vertical' size={4}>
					<Title fontSize={{ xs: '1.5rem' }} style={{ color: '#000', fontWeight: 700 }}>
						{props.title}
					</Title>
					<Text>
						{props.subtitle}
					</Text>
				</Space>
			</Space>
		</Content>

	)

}





const Services = (props) => {

	return (

		<>

			<SectionHeading
				backgroundImage={'https://source.unsplash.com/aOC7TSLb1o8/2400x1714'}
				inverted
				title={{ highlighted: 'MY', underlined: 'SERVICES' }}
			/>

			<Container>
				<Row gutter={[32, 32]}>
					{
						services.map((object, index) => (
							<Col md={12} xl={8} key={index}>
								<Card {...object} />
							</Col>
						))
					}
				</Row>
			</Container>

		</>

	)

}

export default Services
