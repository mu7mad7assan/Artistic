import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll/modules';
import styled from 'styled-components';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { FiMenu, FiX} from 'react-icons/fi';
import themeList from '../data/themeList';



const HeaderStyles = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--HeaderHeight);
	background-color: ${({ theme: { theme } }) => theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)' };
	border-bottom:  1px solid var(--mediumSlateBlue);

	.navigation{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0;
	}

	nav ul li{
		display: inline-block;
		margin: 0 0.5rem;
    a{
        font-size: 1.6rem;
        font-weight: 500;
        display: inline-block;
        padding: 0.5rem 1rem;
        color: ${({ theme: { theme } }) => theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)' };
    }
  
    a.active {
      color: var(--mediumSlateBlue);
        
    }
    &:hover {
      a{
        color: var(--mediumSlateBlue);   
      } 
    }

  }
	
	
	.navMenu{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
	}
	.menuIcon,
	.navClose{
		width: 30px;
		height: 30px;
		cursor: pointer;
		margin-left: 1rem;
		padding: 3px;
		svg{
			color: ${({ theme: { theme } }) => theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)' };
			&:hover{  
				color: var(--mediumSlateBlue); 
			}
		}
	}
	.navClose{
		position: absolute;
		right: 1rem;
		top: 1rem;
		svg{
			color: ${({ theme: { theme } }) => theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)' };;
			&:hover{  
				color: var(--mediumSlateBlue); 
			}
		}
	}
	@media only screen and (max-width: 768px){
		nav{
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: fixed;
			width: 100%;
			max-width:100%;
			height: 100vh;
			top: 50px;
			right: 0;
			background-color:${({ theme: { theme } }) => theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)' };
			z-index:100;
			transform: translateX(100%);
			transition: 0.3s ease transform;
			overflow: hidden;

		}
		nav.open{
			transform: translateX(0);

		}
		nav ul li{
			display: block;
			text-align: right;
			margin: 0.5rem 1rem;
			a{
				display: block;
				width: 100%;
			}
		}
	}


`;

function Header () {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width:768px)').matches);
	
	useEffect(() => {
		window.addEventListener('resize', () => { 

			setIsMobile(window.matchMedia('(max-width:768px)').matches);
		});
	});
	console.log(isMobile);
	return (
		<HeaderStyles>
			<div className='container'>
				<div className='navigation'>
					<Link to='hero' smooth>
						<Logo />
					</Link>
					<div className='navMenu'>
						<nav className={ isNavOpen ? "open" : null }>
							{ isMobile ? (<div
								className='navClose'
								tabIndex='0'
								role='button'
								onClick={ () => setIsNavOpen(false) }
								onKeyDown={ () => setIsNavOpen(false) }>
								<FiX />
							</div>):null}
							<ul>
								<li >
									<Link className='active' to="hero" smooth>Home</Link>
								</li>
								<li>
									<Link to="Services" smooth>Services</Link>
								</li>
								<li>
									<Link to="About" smooth>About</Link>
								</li>
								<li>
									<Link to="Contact" smooth>Contact</Link>
								</li>
							</ul>
						</nav>
						<ThemeSwitcher />
						{ isMobile ?
							(
								<div
									className='menuIcon'
									tabIndex='0'
									role='button'
									onClick={ () => setIsNavOpen(true) }
									onKeyDown={ () => setIsNavOpen(true) }>
								<FiMenu />
								</div>
							) : (
								null)
							}
					</div>
				</div>
			</div>
		</HeaderStyles>  

  )
}

export default Header