import React from 'react'
import { NavLink } from 'react-router-dom'

const BackToMain = props => {
	return (
		<NavLink className='btn outline btn-primary' activeClassName='btn-danger' exact to='/'>
			Back to Main
		</NavLink>
	)
}

export default BackToMain
