import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../Logo.png'
import logo2 from '../../logo2.png'
import email from '../../Desain tanpa judul (1).png'
import ig from '../../ig.png'
import lk from '../../link.png'
import tw from '../../tw.png'
import '../../LandingPage.css'

export const LandingPage = () => {
    return (
        <div>
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
                        <img src={email} />
                        <p>Contact Me</p>
                    </button>
                </a>
            </div>
            <div className="clearfix"></div>
            <div className="desc">
                <p className="left">Currently a student as well as staff of the academia and faculty Bimbingan Belajar Gratis (BETIS) UI 2021.</p>
                <p className="right">Previously had an internship at BEM Fasilkom UI as Information Technology Development and was part of Pemira IKM Fasilkom 2020.</p>
            </div>
            <div className="clearfix"></div>
            <div className="footer">
                <div className="sosmed">
                    <a href="mailto:ramdhanfirdaus5@gmail.com" className="ig">
                        <button>
                            <img src={ig} />
                            <p>Instagram</p>
                        </button>
                    </a>
                    <a href="mailto:ramdhanfirdaus5@gmail.com" className="lk">
                        <button>
                            <img src={lk} />
                            <p>LinkedIn</p>
                        </button>
                    </a>
                    <a href="mailto:ramdhanfirdaus5@gmail.com" className="tw">
                        <button>
                            <img src={tw} />
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