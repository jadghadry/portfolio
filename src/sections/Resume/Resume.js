import React from 'react'
import { Col, Row } from 'antd'

import { timelines } from './Resume.constants.js'

import SectionHeading from '../../components/SectionHeading'
import Timeline from '../../components/Timeline'
import { Container } from '../../shared/styles'





const Resume = (props) => {

	return (

		<>

			<SectionHeading
				backgroundImage={'https://source.unsplash.com/bUpwY7EdrlQ/2400x1600'}
				inverted
				title={{ highlighted: 'MY', underlined: 'RESUME' }}
			/>

			<Container>
				<Row gutter={[0, 88]}>
					{
						timelines.map((object) => {
							const { key, ...other } = object
							return (
								<Col lg={12} key={key}>
									<Timeline {...other} />
								</Col>
							)
						})
					}
				</Row>
			</Container>

		</>

	)

}

export default Resume
