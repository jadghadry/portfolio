import React from 'react'
import styled from 'styled-components'
import { Col, Row, Space } from 'antd'

import { socialLinks } from './Footer.constants.js'

import { Container } from '../../shared/styles'
import { Text } from '../../shared/typography'





const Anchor = styled.a`
		background-color: #fff;
		border-radius: 50%;
		color: #212121;
		display: inline-block;
		font-size: 1.25rem;
		line-height: 40px;
		margin: 0px 8px;
		text-align: center;
		height: 40px;
		width: 40px;

		&:hover {
			color: #212121;
			text-decoration: none;
		}
	`





const Footer = (props) => {

	return (

		<Container 
			padding={{
				horizontal: {
					xs: '48px'
				},
				vertical: {
					xs: '128px'
				}
			}}
			style={{ 
				backgroundColor: '#000', 
				color: '#fff', 
				textAlign: 'center' 
			}}
		>
			<Row justify='center'>
				<Col>
					<Space direction='vertical' size={16}>
						<Space size={0}>
							{
								socialLinks.map((object) => (
									<Anchor key={object.key} href={object.href} rel='noopener noreferrer' target='_blank'>
										<i className={object.icon} />
									</Anchor>
								))
							}
						</Space>
						<Text style={{ textAlign: 'center' }}>
							©2020 <Text style={{ color: 'var(--color-main)', fontWeight: 600 }}>Jad Ghadry</Text>. All Rights Reserved.
						</Text>
					</Space>
				</Col>
			</Row>
		</Container>

	)

}

export default Footer
