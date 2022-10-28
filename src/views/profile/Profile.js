import {
    CContainer,
    CCol,
    CRow,
    CNavLink,
    CImage
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCopy, cilCloudDownload } from '@coreui/icons'

import trashgoblin from "src/assets/images/social/trashgolbin.png"
import facebook from "src/assets/images/social/facebook.png"
import twitter from "src/assets/images/social/twitter.png"
import shopify from "src/assets/images/social/shopify.png"
import txticon from "src/assets/images/icons/txt.png"

const Profile = () => {
    return(
        <div className="profile-page">
            <div className="gallery-section w-full">
                <div className="cover-top-gradiant">
                    <div className="justify-end">
                        <button className="btn-default">edit Profile</button>
                    </div>
                    <div className="justify-end mt-2">
                        <button className="btn-default" id="show_what_others_see">Show What Others See</button>
                    </div>
                </div>
                <div className="cover-bottom-gradiant"></div>
                <div className="cover-bottom-section">
                    <div className="gallery-tt-section">
                        <div className="gallery-tt">Trash Goblin</div>
                        <div className="gallery-st">BAND from London, UK #trashmetal #glammetal</div>
                    </div>
                    <div>
                        <button className="btn-default">Message</button>
                        <button className="btn-default ms-3 mt-3">Download EPK as a ZIP</button>
                    </div>
                </div>
            </div>
            <CContainer className="blog-section-list mb-5" lg>
                <CRow>
                    <CCol lg className=''>
                        <div className='blog-section mt-5'>
                            <div className='bl-title mb-3'>Featured Tracks</div>
                            <div className='music-widget'>
                                <div>Music Widget UI here</div>
                            </div>
                        </div>
                        <div className='blog-section mt-5'>
                            <CRow className='bl-title mb-1 justify-content-between'>
                                <CCol>Genres</CCol>
                                <CCol className='Action justify-end' style={{ display:'grid' }}>
                                    <button className='btn-default copy-btn'>
                                        <CIcon icon={cilCopy} className="text-white" size="sm" />
                                    </button>
                                </CCol>
                            </CRow>
                            <div className='bl-content'>
                                #metal #thrashmetal #glammetal
                            </div>
                        </div>
                        <div className='blog-section mt-5'>
                            <CRow className='bl-title mb-1 justify-content-between'>
                                <CCol>Bio</CCol>
                                <CCol className='Action justify-end' style={{ display:'grid' }}>
                                    <button className='btn-default copy-btn'>
                                        <CIcon icon={cilCopy} className="text-white" size="sm" />
                                    </button>
                                </CCol>
                            </CRow>
                            <div className='bl-content'>
                            Bob Loblaw Law Blog. No, she's in it. She's a contestant. It's sorta like an inner beauty pageant. Ah, there it is. Boy, I sure feel like a Mary without a Peter and a Paul. You must teach me the ways of the secular flesh. Yeah, well, have you seen the new Mustang? You could hump that hood. Caw ca caw, caw ca caw, caw ca caw, caw ca caw. It's as Ann as the nose on plain's face.

                            <br /><br />
                            Someone order 140 pounds of upper body strength? Yeah, well, have you seen the new Mustang? You could hump that hood. I've used one adjective to describe myself. What is it?
                            <br /><br />
                            ♪♪ Big yellow joint, big yellow joint, I'll meet you down at the big yellow joint. ♪♪ I know, I just call her Annabelle cause she's shaped like a…she's the belle of the ball! George Bush doesn't care about black puppets.
                            </div>
                        </div>
                        <div className='blog-section mt-5'>
                            <CRow className='bl-title mb-1 justify-content-between'>
                                <CCol>Members</CCol>
                                <CCol className='Action justify-end' style={{ display:'grid' }}>
                                    <button className='btn-default copy-btn'>
                                        <CIcon icon={cilCopy} className="text-white" size="sm" />
                                    </button>
                                </CCol>
                            </CRow>
                            <div className='bl-content'>
                            Vocals, Guitar<br />
                            Jelina Crowley
                            <br /><br />
                            Guitar<br />
                            Will Carden
                            <br /><br />
                            Drums<br />
                            Junko Tanaka
                            <br /><br />
                            Bass<br />
                            Shanika Jones
                            </div>
                        </div>
                    </CCol>
                    <CCol lg className=''>
                        <div className='blog-section mt-5'>
                            <div className='bl-title mb-3'>Upcoming Shows</div>
                            <div className='bl-card-list'>
                                <div className='bl-art-card mb-3'>
                                    <div className="bl-art-date">September 1st, 2021</div>
                                    <div className="bl-art-title">Showbox, Seattle, WA, USA</div>
                                    <div className="bl-art-date">w/ Baroness, Summoned by Giants, DeathCave</div>
                                </div>
                                <div className='bl-art-card mb-3'>
                                    <div className="bl-art-date">September 1st, 2021</div>
                                    <div className="bl-art-title">Showbox, Seattle, WA, USA</div>
                                    <div className="bl-art-date">w/ Baroness, Summoned by Giants, DeathCave</div>
                                </div>
                                <button className='show-past-shows'>Show Past Shows</button>
                            </div>
                        </div>
                        <div className='blog-section mt-5'>
                            <div className='bl-title mb-3'>Discography</div>
                            <div className='bl-card-list'>
                                <div className='bl-art-card mb-3'>
                                    <div className="bl-art-date">2019</div>
                                    <div className="bl-art-title">Inhuman</div>
                                    <div className="bl-art-date">
                                        CD/LP - <i style={{ color:'#DBDBDB' }}>War Girlfriend Records</i>
                                    </div>
                                </div>
                                <div className='bl-art-card mb-3'>
                                    <div className="bl-art-date">2019</div>
                                    <div className="bl-art-title">Inhuman</div>
                                    <div className="bl-art-date">
                                        CD/LP - <i style={{ color:'#DBDBDB' }}>War Girlfriend Records</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-section mt-5'>
                            <div className='bl-title mb-3'>Lets Get Social</div>
                            <div className='social-list px-3'>
                                <CNavLink className='social-link mb-4' href="https://www.trashgoblin.com" target='_blank'>
                                    <div className=''>
                                        <CImage className="" fluid src={trashgoblin} alt="S" />
                                        <label className='ms-4'>www.trashgoblin.com</label>
                                    </div>
                                </CNavLink>
                                <CNavLink className='social-link mb-4' href="https://www.facebook.com" target='_blank'>
                                    <div className=''>
                                        <CImage className="" fluid src={facebook} alt="S" />
                                        <label className='ms-4'>facebook</label>
                                    </div>
                                </CNavLink>
                                <CNavLink className='social-link mb-4' href="https://www.instagram.com" target='_blank'>
                                    <div className=''>
                                        <CImage className="" fluid src={facebook} alt="S" />
                                        <label className='ms-4'>Instagram</label>
                                    </div>
                                </CNavLink>
                                <CNavLink className='social-link mb-4' href="https://www.tritter.com" target='_blank'>
                                    <div className=''>
                                        <CImage className="" fluid src={twitter} alt="S" />
                                        <label className='ms-4'>Twitter</label>
                                    </div>
                                </CNavLink>
                                <CNavLink className='social-link mb-4' href="https://www.bandcamp.com" target='_blank'>
                                    <div className=''>
                                        <CImage className="" fluid src={shopify} alt="S" />
                                        <label className='ms-4'>Bandcamp</label>
                                    </div>
                                </CNavLink>
                                <CNavLink className='social-link mb-4' href="https://www.shopify.com" target='_blank'>
                                    <div className=''>
                                        <CImage className="" fluid src={shopify} alt="S" />
                                        <label className='ms-4'>Shopify</label>
                                    </div>
                                </CNavLink>
                            </div>
                        </div>
                    </CCol>
                    <CCol lg className=''>
                        <div className='blog-section mt-5'>
                            <div className='bl-title mb-3'>Downloads</div>
                            <div className='download-item-list'>
                                <div className='download-item mb-5'>
                                    <CImage className="" fluid src="/uploaded/metallogo.jfif" alt="S" />
                                    <button className='btn-default download-btn'>
                                        <CIcon icon={cilCloudDownload} className="text-white" size="sm" />
                                    </button>
                                </div>
                                <div className='download-item mb-5'>
                                    <CImage className="" fluid src="/uploaded/funny-awkward.jfif" alt="S" />
                                    <button className='btn-default download-btn'>
                                        <CIcon icon={cilCloudDownload} className="text-white" size="sm" />
                                    </button>
                                </div>
                                <div className='download-item mb-5'>
                                    <CImage className="" fluid src="/uploaded/blog1.png" alt="S" />
                                    <button className='btn-default download-btn'>
                                        <CIcon icon={cilCloudDownload} className="text-white" size="sm" />
                                    </button>
                                </div>
                            </div>
                            <CNavLink className='download-link pb-3' href="#" target='_blank'>
                                <div className=''>
                                    <CImage className="" fluid src={txticon} alt="S" />
                                    <label className='ms-4'>Hospitality Rider PDF</label>
                                </div>
                            </CNavLink>
                            <CNavLink className='download-link pb-3' href="#" target='_blank'>
                                <div className=''>
                                    <CImage className="" fluid src={txticon} alt="S" />
                                    <label className='ms-4'>Tech Rider PDF</label>
                                </div>
                            </CNavLink>
                        </div>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Profile;