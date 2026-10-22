import React,{useState,useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
export default function PhotoGallery({photos}){
 const [page,setPage]=useState(0),[selected,setSelected]=useState(null);
 const dialog=useRef(null),opener=useRef(null),grid=useRef(null);
 const size=12,pages=Math.ceil(photos.length/size),photo=selected===null?null:photos[selected];
 useEffect(()=>{if(selected===null)return;const previous=document.body.style.overflow;dialog.current.showModal();document.body.style.overflow='hidden';return()=>{dialog.current?.close();document.body.style.overflow=previous;opener.current?.focus();}},[selected===null]);
 function close(){setSelected(null)}
 function step(amount){setSelected(i=>(i+amount+photos.length)%photos.length)}
 function turn(next){setPage(next);grid.current.scrollIntoView({behavior:'smooth',block:'start'});}
 return <><div className="photo-gallery" ref={grid}>{photos.slice(page*size,(page+1)*size).map((p,i)=><button className="photo-tile" key={p.id} aria-label={'Ampliar fotografía '+(page*size+i+1)} onClick={e=>{opener.current=e.currentTarget;setSelected(page*size+i)}}><img src={p.thumbnail} alt={p.name} loading="lazy"/>{p.artByAna&&<span className="art-credit-badge">Obra de Ana Jurado</span>}<span className="photo-zoom" aria-hidden="true">+</span></button>)}</div>
 {pages>1&&<nav className="gallery-pagination" aria-label="Páginas de fotografías"><button disabled={page===0} onClick={()=>turn(page-1)} aria-label="Página anterior">←</button>{Array.from({length:pages},(_,i)=><button key={i} aria-label={'Página '+(i+1)} aria-current={page===i?'page':undefined} onClick={()=>turn(i)}>{i+1}</button>)}<button disabled={page===pages-1} onClick={()=>turn(page+1)} aria-label="Página siguiente">→</button></nav>}
 <dialog className="photo-dialog" ref={dialog} aria-label="Fotografía ampliada" onCancel={close} onClose={close} onClick={e=>{if(e.target===dialog.current)close()}} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();step(1)}if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}}}>{photo&&<><div className="photo-dialog-toolbar"><span>{selected+1} / {photos.length}</span><button onClick={close} aria-label="Cerrar fotografía">Cerrar ×</button></div><div className="photo-dialog-image"><img src={photo.photos[0]} alt={photo.name}/></div>{photo.artByAna&&<div className="photo-art-credit"><span>Pintura realizada por Ana Jurado</span><Link to="/arte" onClick={close}>Descubrir su arte →</Link></div>}<div className="photo-dialog-controls"><button onClick={()=>step(-1)} aria-label="Fotografía anterior">← Anterior</button><button onClick={()=>step(1)} aria-label="Fotografía siguiente">Siguiente →</button></div></>}</dialog></>;
}
