import React from 'react'
import { Space } from 'antd'

import { Text, Title } from '../../shared/typography'





const TimelineBlock = (props) => {

	return (

		<div style={{
			paddingLeft: '60px',
			paddingTop: '40px',
		}}>

			<Space direction='vertical'>
				<Text fontSize={{ xs: '14px' }} style={{ fontStyle: 'italic' }}>{props.date}</Text>
				<div style={{ position: 'relative' }}>
					<div 
						style={{
							backgroundColor: 'var(--color-main)',
							bottom: '13px',
							borderRadius: '50%',
							left: '-67px',
							position: 'absolute',
							height: '13px',
							width: '13px',
						}}
					/>
					<Title fontSize={{ xs: '1.5rem' }} style={{ color: '#000', fontWeight: 700 }}>{props.title}</Title>
				</div>
				<Space direction='vertical' size={12}>
					{
						props.description.map((object, index) => (
							<Text key={index}>{object}</Text>
						))
					}
				</Space>
			</Space>

		</div>

	)

}





const Timeline = (props) => {

	return (

		<div>

			<Space size={40}>
				<Text
					fontSize={{
						xs: '1.5rem',
					}}
					style={{
						backgroundColor: 'var(--color-main)',
						color: '#fff',
						display: 'inline-block',
						lineHeight: '80px',
						height: '80px',
						textAlign: 'center',
						width: '80px',
					}}
				>
					<i className={props.icon}></i>
				</Text>
				<Title fontSize={{ xs: '2.5rem', }} style={{ color: '#000', fontWeight: 700 }}>
					{props.title}
				</Title>
			</Space>

			<div 
				style={{
					borderLeft: '1px solid #bbb',
					marginLeft: '40px',
				}}
			>
				{
					props.blocks.map((object) => (
						<TimelineBlock {...object} />
					))
				}
			</div>

		</div >

	)

}

export default Timeline
