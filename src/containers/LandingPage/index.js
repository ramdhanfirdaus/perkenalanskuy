import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../image/Logo.png'
import logo2 from '../../image/logo2.png'
import email from '../../image/Desain tanpa judul (1).png'
import ig from '../../image/ig.png'
import lk from '../../image/link.png'
import tw from '../../image/tw.png'
import '../../LandingPage.css'

import { Helmet } from 'react-helmet'

const TITLE = 'Just Combodoh'

export const LandingPage = () => {
    return (
        <div>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <title>RAFS AMELIA</title>
            <div className="header">
                <Link className="logoawal" to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="clearfix"></div>
            <div className="perkenalan">
                <p className="nama"><b>Hey, I'am Ramdhan</b></p>
                <p className="sebagai">Student of Computer Science in University of Indonesia</p>
            </div>
            <div className="mail">
                <a href="mailto:ramdhanfirdaus5@gmail.com">
                    <button>
                        <img src={email} alt='email' />
                        <p>Contact Me</p>
                    </button>
                </a>
            </div>
            <div className="clearfix"></div>
            <div className="desc">
                <p className="left">Currently a student as well as staff of academic division Bimbingan Belajar Gratis (BETIS) UI 2021.</p>
                <p className="right">Previously had an internship at BEM Fasilkom UI in Information Technology Development and was part of Pemira IKM Fasilkom 2020.</p>
            </div>
            <div className="clearfix"></div>
            <div className="footer">
                <div className="sosmed">
                    <a href="https://www.instagram.com/r_adam29/" target="_blank" rel="noreferrer" className="ig">
                        <button>
                            <img src={ig} alt='instagram' />
                            <p>Instagram</p>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/ramdhan-firdaus-amelia-979a171b9/" target="_blank" rel="noreferrer" className="lk">
                        <button>
                            <img src={lk} alt='linkedin' />
                            <p>LinkedIn</p>
                        </button>
                    </a>
                    <a href="https://twitter.com/combodoh_" target="_blank" rel="noreferrer" className="tw">
                        <button>
                            <img src={tw} alt='twitter' />
                            <p>Twitter</p>
                        </button>
                    </a>
                </div>
                <div className="logo">
                    <Link className="logoakhir" to='/'>
                        <img src={logo2} alt='Logo' />
                    </Link>
                </div>
            </div>
        </div>
    )
}