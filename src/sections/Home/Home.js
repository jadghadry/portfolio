import React from 'react'
import Typed from 'react-typed'
import { Col, Row, Space } from 'antd'

import { Parallax } from '../../shared/styles'
import { Title } from '../../shared/typography'





const Home = (props) => {

	return (

		<Parallax
			backgroundImage={'https://source.unsplash.com/tMbQpdguDVQ/2400x1600'}
			style={{ height: '100%', textAlign: 'center' }}
		>
			<Row
				justify='center'
				style={{ width: '100%' }}
			>
				<Col xs={24}>
					<Space direction='vertical'>
						<Title>
							I am {' '}
							<Typed
								backSpeed={50}
								loop
								smartBackspace={false}
								strings={[
									'Jad Ghadry.',
									'a Developer.',
									'a Designer.',
								]}
								typeSpeed={100}
							/>
						</Title>
						<Title fontColor='#ccc' fontSize={{ xs: '1.5rem' }}>
							Computer and Communications Engineering
						</Title>
					</Space>
				</Col>
			</Row>
		</Parallax>

	)

}

export default Home
