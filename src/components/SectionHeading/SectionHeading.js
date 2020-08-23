import React from 'react'
import { Space } from 'antd'

import { Parallax } from '../../shared/styles'
import { Title } from '../../shared/typography'





const SectionHeading = (props) => {

	return (

		<Parallax
			backgroundImage={props.backgroundImage}
			padding={{ horizontal: { xs: '96px' }, vertical: { xs: '96px' } }}
			style={{ textAlign: 'center' }}
		>
			<Space size={12}>
				{
					props.inverted ?
					<Title highlighted>{props.title?.highlighted}</Title> :
					<Title underlined>{props.title?.underlined}</Title>
				}
				{
					props.inverted ?
					<Title underlined>{props.title?.underlined}</Title> :
					<Title highlighted>{props.title?.highlighted}</Title>
				}
			</Space>
		</Parallax>

	)

}

export default SectionHeading
