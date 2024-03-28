import React from 'react'

const Navbar = () => {
	return (
		<div>
			<div className='logo'>
				<h1 className='lg:text-3xl'>TSA Shopping</h1>
				<nav>
					<ul className='flex ml-5'>
						<li>
							<a href='/' className='mr-5 focus:text-black'>
								Main
							</a>
						</li>
						<li>
							<a href='/' className='mr-5 focus:text-black'>
								Home
							</a>
						</li>
						<li>
							<a href='/Category/Blouse' className='mr-5 focus:text-black'>
								Blouse
							</a>
						</li>

						<li>
							<a href='/Category/Skirt' className='mr-5 focus:text-black'>
								Skirt
							</a>
						</li>

					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navbar
