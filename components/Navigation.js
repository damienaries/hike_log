import Link from 'next/link';
import { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Navigation() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        // toggle full screen navigation
        setNavOpen(!navOpen);
    }

    const loginClick = () => {
        alert('log in?')
    }

    const signupClick = () => {
        alert('sign up?')
    }


    return (
        <StyledNav>
            <FontAwesomeIcon 
                className='nav-burger' 
                icon={faHamburger} 
                onClick={toggleNav}
            />
            <div className='nav-user-links'>
                <button 
                    className='nav-user-cta'
                    onClick={loginClick}>
                    Login
                </button>
                <button 
                    className='nav-user-cta'
                    onClick={signupClick}>
                    Sign Up
                </button>
            </div>
            
            <div 
                className='full-screen-nav'
                style={{ left: !navOpen ? '-100%' : '0' }}
                >
                <div className='full-screen-nav-header'>
                    <h3 className='nav-logo'>Hike Log</h3>
                    <FontAwesomeIcon 
                        icon={faTimes}
                        className='nav-close'
                        onClick={toggleNav} 
                    />
                </div>
                <ul className='nav-list'>
                    <li>
                        <Link href='/'>
                            <a onClick={toggleNav}className='nav-list-link'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/hikes'>
                            <a onClick={toggleNav}className='nav-list-link'>Hikes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/profile'>
                            <a onClick={toggleNav}className='nav-list-link'>My Profile</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/leaderboard'>
                            <a onClick={toggleNav}className='nav-list-link'>Leaderboard</a>
                        </Link>
                    </li>
                    <li >
                        <Link href='/about'>
                            <a onClick={toggleNav}className='nav-list-link' >About</a>
                        </Link>
                    </li>
                </ul>
                
            </div>
            
        </StyledNav>
    )
}

const StyledNav = styled.div`
    height: 5rem;
    width: 100%;
    position: fixed;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;

    .nav-burger {
        margin-left: .5rem;
        z-index: 5;
        font-size: 4rem;
        color: var(color-primary);

        &:hover {
            transform: scale(.95);
            cursor: pointer;
            color: var(--color-secondary);
        }
    }

    .nav-user-links {
        .nav-user-cta {
            padding: .5rem 1.5rem;
            margin-right: 1rem;
            border: none;
            background: var(--bg-light-veil);
            text-transform: uppercase;
            border-radius: 10px;
            box-shadow: var(--shadow-down);

            &:hover {
                filter: brightness(110%);
                cursor: pointer;
                box-shadow: var(--shadow-up);
            }
        }
    }

    .full-screen-nav {
        height: 100vh;
        width: 100vw;
        z-index: 100;
        position: absolute;
        top: 0;
        transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1);
        background: var(--bg-light-veil);
        color: var(--color-primary);

        .full-screen-nav-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .nav-logo {
            font-size: 2rem;
            margin-left: 1rem;
        }

        .nav-close {
            margin-right: 1rem;
            font-size: 3rem;

            &:hover {
                cursor: pointer;
                color: var(--color-secondary);
            }
        }

        .nav-list {
            list-style: none;
            width: 80%;
            text-align: left;
            line-height: 2;

            &-link {
                font-size: 3.5rem;
                text-decoration: none;
                color: var(--color-primary);

                &:visited {
                    color: var(--color-primary);
                }

                &:hover {
                    cursor: pointer;
                    color: var(--color-secondary);
                }
            }
        }
    }
` 

