import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'

import './navbar.scss'
// Data
import logo from '../../assets/LOGO.svg'

const NavBar = () => {
    const location = useLocation()
    const [visible, setVisible] = useState(false)
    let listener = null
    const [scrollOnTop, setscrollOnTop] = useState(true)

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                if (scrollOnTop !== false) {
                    setscrollOnTop(false)
                }
            } else {
                if (scrollOnTop !== true) {
                    setscrollOnTop(true)
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollOnTop])

    // Navigation
    useEffect(() => {
        if (location.hash) {
            scrollTo(location.hash.slice(1))
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])

    // Visibility of NavBar
    // useEffect(() => {
    //     setTimeout(() => {
    //         setVisible(true)
    //     }, 700)
    // }, [])

    // Scroll Function
    const scrollTo = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            offset: -80,
            smooth: 'easeInOutQuart'
        })
    }

    const navbar = document.getElementById('navbar')
    const navBg = document.getElementsByClassName('nav-bg')[0]
    const navCheckbox = document.getElementById('checkbox')
    var isScrolling = null
    window.addEventListener('scroll', (e) => {
        if (navbar && navBg && navCheckbox) {
            navbar.classList.remove('nav-visible')
            navbar.classList.add('nav-links')
            navBg.style.opacity = 0
            navBg.style.right = '6rem'
            navBg.style.width = '6rem'
            navBg.style.height = '6rem'
            navCheckbox.checked = false
        }
        setVisible(false)
        window.clearTimeout(isScrolling)
        isScrolling = setTimeout(() => {
            setVisible(true)
        }, 300)
    }, false)

    // Nav-Bar mobile view btn
    const handleClick = () => {
        if (navbar.classList.value.includes('nav-visible')) {
            navbar.classList.remove('nav-visible')
            navbar.classList.value.includes('nav-links') ? console.log() : navbar.classList.add('nav-links')
            navBg.style.opacity = 0
            navBg.style.right = '6rem'
            navBg.style.width = '6rem'
            navBg.style.height = '6rem'
            navCheckbox.checked = false
        }
        else {
            setTimeout(() => {
                navbar.classList.add('nav-visible')
                navbar.classList.remove('nav-links')
            }, 500)
            navBg.style.opacity = 1
            navBg.style.transform = 'scale(2)'
            navBg.style.width = '100vh'
            navBg.style.height = '100vh'
            navCheckbox.checked = true
        }
    }

    return (
        <nav className='navbar' style={{ backgroundColor: `${scrollOnTop ? 'transparent' : '#FFD8D8'}` }}>
            {/* style={{ opacity: `${visible ? '1' : '0'}`, top: `${visible ? '0' : '-7rem'}` }} */}
            <Link className='nav-logo' style={{ opacity: `${scrollOnTop ? '0' : '1'}` }} to='/'>
                <img src={logo} alt='logo' />
            </Link>
            <div className='nav-links' id='navbar'>
                <Link className='nav-option' to='/'>Home</Link>
                <Link className='nav-option' to="/#goal">Our Goal</Link>
                <Link className='nav-option' to='/#product'>Product</Link>
                <Link className='nav-option' to='/#faq'>FAQ's</Link>
                <Link className='nav-option' to='/#whoarewe'>Our team</Link>
                <Link className='nav-option' to='/#contactus'>Contact Us</Link>
            </div>
            <input id='checkbox' type='checkbox' className='checkbox' />
            <button className='nav-btn' onClick={() => handleClick()}><span className='nav-icon'>&nbsp;</span></button>
            <div className='nav-bg'><span>&nbsp;</span></div>
        </nav>
    )
}

export default NavBar