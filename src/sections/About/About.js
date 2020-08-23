import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { Col, Rate, Row, Space } from 'antd'

import { facts, testimonials } from './About.constants.js'

import SectionHeading from '../../components/SectionHeading'
import { Container, Divider } from '../../shared/styles'
import { Text, Title } from '../../shared/typography'





const Fact = (props) => {

	const [didCountUp, setDidCountUp] = React.useState(false)
	const startRef = React.useRef()

	return (

		<VisibilitySensor
			active={!didCountUp}
			delayedCall
			onChange={(isVisible) => {
				if (isVisible) {
					setDidCountUp(true)
					startRef.current()
				}
			}}
		>

			<div style={{ backgroundColor: '#eaeaea', padding: '32px 0px' }}>

				<Space direction='vertical' size={0}>
					<CountUp duration={3} end={props.value} start={0}>
						{
							({ countUpRef, start }) => {
								startRef.current = start
								return (
									<Title
										fontColor='#000'
										fontSize={{ xs: '2.5rem' }}
										style={{ fontWeight: 700 }}
										ref={countUpRef}
									/>
								)
							}
						}
					</CountUp>
					<Text fontSize={{ xs: '0.75rem' }} fontWeight={500}>
						{props.description.toUpperCase()}
					</Text>
				</Space>

			</div>

		</VisibilitySensor>

	)

}





const Testimonial = (props) => {

	return (

		<Container
			padding={{
				horizontal: { xs: props.faded ? '32px' : '56px' },
				vertical: { xs: props.faded ? '24px' : '48px' }
			}}
			style={{
				backgroundColor: props.faded ? '#eaeaea' : '#fff',
				boxShadow: !props.faded && '1px 1px 20px #00000010',
				lineHeight: props.faded && 'normal',
			}}
		>

			<Space direction='vertical' size={12}>
				{
					!props.faded &&
					<Rate allowHalf defaultValue={props.rating} disabled />
				}
				<Text fontSize={{ xs: props.faded ? '0.75rem' : '1rem' }}>
					{props.testimonial}
				</Text>
				<Title
					fontSize={{ xs: props.faded ? '1rem' : '1.25rem' }}
					style={{ color: '#000', fontWeight: 700 }}
				>
					{props.author?.name}
				</Title>
			</Space>

		</Container>

	)

}





const About = (props) => {

	const [index, setIndex] = React.useState(0)

	React.useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % testimonials.length)
		}, 12000)
		return () => clearInterval(interval)
	}, [])

	return (

		<div style={{ textAlign: 'center' }}>

			<SectionHeading
				backgroundImage={'https://source.unsplash.com/pVt9j3iWtPM/2400x1600'}
				title={{ highlighted: 'ME', underlined: 'ABOUT' }}
			/>

			<Container>
				<Space direction='vertical' size={24}>
					<Text>
						Enthusiastic software engineer with a monstrous drive for developing innovative programs that highlight the effectiveness and efficiency of organizational success. Well-versed  and updated in technology  as well as writing code to create reliable, user-friendly systems.
						</Text>
					<Text>
						Skilled leader who has the proven ability to motivate, educate, and manage a team to build software programs and closely monitor changes using versioning tools. Confident communicator and critical thinker with a hawk-eye for the sharpest of details and intricacies.
						</Text>
				</Space>
				<Row gutter={[32, 32]} justify='center' style={{ marginTop: '40px' }} >
					<Col xs={24}>
						<Divider>
							<Text>Some Facts</Text>
						</Divider>
					</Col>
					{
						facts.map((object) => {
							const { key, ...other } = object
							return (
								<Col key={key} xs={24} md={8}>
									<Fact {...other} />
								</Col>
							)
						})
					}
				</Row>
				<Row align='middle' gutter={[32, 32]} justify='center' style={{ marginTop: '32px' }} >
					<Col xs={24}>
						<Divider>
							<Text>Testimonials</Text>
						</Divider>
					</Col>
					<Col xs={24}>
						<Testimonial {...testimonials[index]} />
					</Col>
				</Row>

			</Container>

		</div>

	)

}

export default About
