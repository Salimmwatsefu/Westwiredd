'use client'
import { useEffect, useState } from "react"

import Navbar from "./Navbar"
import Drawer from "./Drawer"
import Cart from "./cart/Cart"



export default function NavCart() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const handleCartIconClick = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	return (
		<>
			<Navbar onCartIconClick={handleCartIconClick} />
			<Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
				<Cart />
			</Drawer>
			
		</>
	)
}