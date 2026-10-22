import React from 'react';
import {Link} from 'react-router-dom';
import {Header,Footer,ContactBand} from './shared';
import PhotoGallery from './PhotoGallery';
import works from './art-details.json';
export default function ArtWorks(){return <><Header/><main><section className="page-heading section"><Link className="back-link" to="/arte">← Arte</Link><p className="eyebrow">ANA JURADO / PINTURA</p><h1>Las obras,<br/><em>de cerca.</em></h1><div className="page-heading-bottom"><p>Una mirada a mis pinturas, sus formas y sus texturas.</p></div></section><section className="section project-catalogue"><PhotoGallery photos={works} artOnly/></section><ContactBand art/></main><Footer/></>}
