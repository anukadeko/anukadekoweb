import React from 'react';
import {Header, Footer, ContactBand} from './shared';
import {Link} from 'react-router-dom';
import {art} from './editorial';

export default function PaintingPage(){return <><Header/><main>
<section className="hero art-process-hero"><div className="hero-copy"><p className="eyebrow"><span className="dot"/> ANA JURADO / PINTURA</p><h1>Una mirada.<br/>Un lienzo.<br/><em>Un mundo propio.</em></h1><p className="intro">El color, la textura y el gesto.<br/>Otra forma de crear y de mirar.</p><a className="text-link" href="#proceso">Acercarte a mi pintura <span>↘︎</span></a><div className="hero-note"><span>EL PROCESO CREATIVO</span><span>PINTURA · COLOR · EMOCIÓN</span></div></div><div className="hero-image"><img src="/photos/arte-01.webp" alt="Ana Jurado trabajando con un pincel sobre un lienzo abstracto en tonos verdes" fetchPriority="high"/><div className="hero-caption"><span>Ana Jurado, pintando</span></div></div></section>
<section className="artist section" id="proceso"><div className="artist-photo easel-photo"><img src="/photos/arte-02.webp" loading="lazy" alt="Cuadro abstracto de Ana Jurado presentado en un caballete"/><span>EL CUADRO Y SU ESPACIO</span></div><div className="artist-copy"><p className="eyebrow">01 / ENTRE EL COLOR Y EL ESPACIO</p><h2>{art.title}</h2><p>{art.text}</p><span className="signature">Ana Jurado</span><Link className="text-link" to="/contacto">Hablemos de arte <span>↗︎</span></Link></div></section>
<section className="quote section"><p className="eyebrow">PINTURA & ESPACIO</p><h2>Un cuadro puede cambiar<br/>la forma de <em>sentir un lugar.</em></h2><p>Dos mundos que se encuentran: el arte y el interiorismo.</p></section><ContactBand art/></main><Footer/></>}
