import React from 'react'

import About from './sections/About'
import Footer from './sections/Footer/'
import Home from './sections/Home'
import Resume from './sections/Resume'
import Services from './sections/Services'

import firebase from './firebase'
import 'firebase/analytics'





const App = () => {

	React.useState(() => {
		firebase.analytics()
	}, [])

	return (
		
		<>
			<Home />
			<About />
			<Resume />
			<Services />
			<Footer />
		</>
		
	)

}

export default App
