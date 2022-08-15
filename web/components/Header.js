import Link from 'next/link'
import React from 'react'

const Header = () => {
	return (
		<h1 className="font-semibold hover:opacity-75 duration-500">
			<Link href="/">Tom Crampin</Link>
		</h1>
	)
}

export default Header
