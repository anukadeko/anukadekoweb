import React,{useState,useRef,useEffect} from 'react';
export default function PhotoGallery({photos,notes=[],introduction=null}){
 const [page,setPage]=useState(0),[selected,setSelected]=useState(null);
 const dialog=useRef(null),opener=useRef(null),grid=useRef(null);
 // Keep later pages at twelve photographs and collect the remainder on the first.
 const pages=Math.max(1,Math.floor(photos.length/12));
 const firstSize=photos.length-(pages-1)*12;
 const start=page===0?0:firstSize+(page-1)*12,size=page===0?firstSize:12;
 const photo=selected===null?null:photos[selected];
 useEffect(()=>{if(selected===null)return;const previous=document.body.style.overflow;dialog.current.showModal();document.body.style.overflow='hidden';return()=>{dialog.current?.close();document.body.style.overflow=previous;opener.current?.focus();}},[selected===null]);
 function close(){setSelected(null)}
 function step(amount){setSelected(i=>(i+amount+photos.length)%photos.length)}
 function turn(next){setPage(next);grid.current.scrollIntoView({behavior:'smooth',block:'start'});}
 return <>{page===0&&introduction&&<div className="gallery-introduction"><h3>{introduction.title}</h3><p>{introduction.text}</p></div>}<div className="photo-gallery" ref={grid}>{photos.slice(start,start+size).map((p,i)=><div className="photo-tile-wrap" key={p.id}><button className="photo-tile" aria-label={'Ampliar fotografía '+(start+i+1)} onClick={e=>{opener.current=e.currentTarget;setSelected(start+i)}}><img src={p.thumbnail} alt={p.name} loading="lazy"/><span className="photo-zoom" aria-hidden="true">+</span></button>{p.artByAna&&<span className="art-credit-badge">Obra de Ana Jurado</span>}</div>)}</div>
 {notes[page]&&<section className="gallery-editorial" aria-label="Una mirada al espacio"><h3>{notes[page].title}</h3><p>{notes[page].text}</p></section>}
 {pages>1&&<nav className="gallery-pagination" aria-label="Páginas de fotografías"><button disabled={page===0} onClick={()=>turn(page-1)} aria-label="Página anterior">←</button>{Array.from({length:pages},(_,i)=><button key={i} aria-label={'Página '+(i+1)} aria-current={page===i?'page':undefined} onClick={()=>turn(i)}>{i+1}</button>)}<button disabled={page===pages-1} onClick={()=>turn(page+1)} aria-label="Página siguiente">→</button></nav>}
 <dialog className="photo-dialog" ref={dialog} aria-label="Fotografía ampliada" onCancel={close} onClose={close} onClick={e=>{if(e.target===dialog.current)close()}} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();step(1)}if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}}}>{photo&&<><div className="photo-dialog-toolbar"><span>{selected+1} / {photos.length}</span><button onClick={close} aria-label="Cerrar fotografía">Cerrar ×</button></div><div className="photo-dialog-image"><img src={photo.photos[0]} alt={photo.name}/></div>{photo.artByAna&&<div className="photo-art-credit"><span>Obra de Ana Jurado</span></div>}<div className="photo-dialog-controls"><button onClick={()=>step(-1)} aria-label="Fotografía anterior">← Anterior</button><button onClick={()=>step(1)} aria-label="Fotografía siguiente">Siguiente →</button></div></>}</dialog></>;
}
