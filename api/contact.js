// Forward to Ana's existing Adobe Portfolio form receivers; no mail credentials in the browser.
const receivers={
 interiorismo:'https://anukadekodesigner.myportfolio.com/site/forms/p675059c19a6b69b4d4fdf684c21bc36ce392c352f2c5db500e1c6/m675059c19c77755ace93d455381cba21d9cf791906c44b2118023/',
 arte:'https://anajuradopaintings.myportfolio.com/site/forms/p672726ff020f7d166083189677140dd6e242f65e4e3e282235f1c/m672726ff03db60c49ba55980ded6c3a3106a53b09b1ffd44a2485/'
};
const reply=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request){
 try{
  const origin=request.headers.get('origin');
  if(!origin||new URL(origin).host!==new URL(request.url).host)return reply({error:'No se puede enviar desde esta página.'},403);
  if(!request.headers.get('content-type')?.startsWith('application/json'))return reply({error:'Formato de mensaje no válido.'},415);
  if(Number(request.headers.get('content-length')||0)>16000)return reply({error:'El mensaje es demasiado largo.'},413);
  let data;try{data=await request.json()}catch{return reply({error:'No se ha podido leer el mensaje.'},400)}
  if(!data||typeof data!=='object')return reply({error:'Revisa los datos del formulario.'},400);
  if(data.website)return reply({error:'No se ha podido enviar el mensaje.'},400);
  const name=typeof data.name==='string'?data.name.trim():'';
  const email=typeof data.email==='string'?data.email.trim():'';
  const message=typeof data.message==='string'?data.message.trim():'';
  if(!name||name.length>120||!email||email.length>254||!/^\S+@\S+\.\S+$/.test(email)||/[\r\n]/.test(email)||!message||message.length>5000||!Object.hasOwn(receivers,data.topic))return reply({error:'Revisa tu nombre, correo y mensaje antes de enviarlo.'},400);
  const body=new URLSearchParams({field1:name,email,field2:message});
  const upstream=await fetch(receivers[data.topic],{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','Accept':'application/json'},body,signal:AbortSignal.timeout(12000),redirect:'error'});
  if(!upstream.ok){console.error('Contact receiver rejected request',{status:upstream.status,topic:data.topic});return reply({error:'No se ha podido enviar el mensaje. Inténtalo de nuevo en unos minutos.'},502)}
  return reply({ok:true});
 }catch(error){console.error('Contact request failed',{name:error.name});return reply({error:'No se ha podido enviar el mensaje. Inténtalo de nuevo en unos minutos.'},502)}
}
export function GET(){return new Response(null,{status:405,headers:{Allow:'POST','Cache-Control':'no-store'}})}
