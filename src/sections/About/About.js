import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { Col, Rate, Row, Space } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { facts, testimonials } from './About.constants.js'

import SectionHeading from '../../components/SectionHeading'
import { Button, Container, Divider } from '../../shared/styles'
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





const Statistics = (props) => {

	return (

		<Container
			padding={{
				horizontal: { xs: '32px' },
				vertical: { xs: '24px' }
			}}
			style={{
				backgroundColor: '#eaeaea',
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				justifyContent: 'center',
			}}
		>

			<Space direction='vertical' size={0}>
				<Title
					fontSize={{ xs: '2.5rem' }}
					style={{ color: '#000', fontWeight: 700 }}
				>
					{`${props.averageRating || 5}/5`}
				</Title>
				<Text>Average Rating</Text>
			</Space>

		</Container>

	)

}





const Testimonials = (props) => {

	const [index, setIndex] = React.useState(0)

	const selected = props.values[index]

	const mod = (x, m) => (x % m + m) % m

	const decrementIndex = () => setIndex((prev) => mod(prev - 1, props.values.length))
	const incrementIndex = () => setIndex((prev) => mod(prev + 1, props.values.length))

	return (

		<Space size={24} direction='vertical'>

			<Container
				padding={{
					horizontal: { xs: '56px' },
					vertical: { xs: '48px' }
				}}
				style={{
					backgroundColor: '#fff',
					boxShadow: '1px 1px 20px #00000010',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					position: 'relative'
				}}
			>

				<Space direction='vertical' size={12}>
					<Rate allowHalf value={selected.rating} disabled />
					<Text>{selected.testimonial}</Text>
					<Title
						fontSize={{ xs: '1.25rem' }}
						style={{ color: '#000', fontWeight: 700 }}
					>
						{selected.author?.name}
					</Title>
				</Space>

			</Container>

			<Space size={16}>
				<Button onClick={decrementIndex}><LeftOutlined /></Button>
				<Button onClick={incrementIndex}><RightOutlined /></Button>
			</Space>

		</Space>

	)

}





const About = (props) => {

	const averageRating = Math.round(testimonials.reduce((a, v) => a + v.rating, 0) / testimonials.length * 100) / 100

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
				<Row gutter={[32, 32]} style={{ marginTop: '32px' }} >
					<Col xs={24}>
						<Divider>
							<Text>Testimonials</Text>
						</Divider>
					</Col>
					<Col xs={24} lg={8}>
						<Statistics averageRating={averageRating} />
					</Col>
					<Col xs={24} lg={16}>
						<Testimonials values={testimonials} />
					</Col>
				</Row>

			</Container>

		</div>

	)

}

export default About
