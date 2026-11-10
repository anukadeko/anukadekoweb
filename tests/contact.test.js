import test from 'node:test';
import assert from 'node:assert/strict';
import {POST} from '../api/contact.js';
const makeRequest=(fields={})=>new Request('https://anukadeko.com/api/contact',{method:'POST',headers:{Origin:'https://anukadeko.com','Content-Type':'application/json'},body:JSON.stringify({name:'Prueba simulada',email:'test@example.com',message:'Mensaje simulado, sin envío real.',topic:'interiorismo',...fields})});
test('forwards both form types using the original receiver session protocol',async t=>{
 const seen=[];t.mock.method(globalThis,'fetch',async(url,options)=>{seen.push({url,options});return Response.json([],{status:201})});
 for(const topic of ['interiorismo','arte']){
  const result=await POST(makeRequest({topic}));assert.equal(result.status,200);assert.deepEqual(await result.json(),{ok:true});
  const {url,options}=seen.at(-1);assert.ok(url.includes(topic==='arte'?'anajuradopaintings':'anukadekodesigner'));
  const token=options.headers['X-BCP'];assert.match(token,/^[a-f0-9-]{36}$/);assert.match(options.headers.Cookie,new RegExp('^bcp='+token+'; bcp_generated=\\d+$'));
  assert.equal(options.headers['X-Requested-With'],'XMLHttpRequest');assert.match(options.headers['Content-Type'],/application\/x-www-form-urlencoded/);
  assert.deepEqual(Object.fromEntries(options.body),{field1:'Prueba simulada',email:'test@example.com',field2:'Mensaje simulado, sin envío real.'});
 }
 assert.notEqual(seen[0].options.headers['X-BCP'],seen[1].options.headers['X-BCP']);
});
test('rejects invalid forms before contacting the receiver',async t=>{
 const fetch=t.mock.method(globalThis,'fetch',async()=>{throw Error('Must not send')});
 for(const fields of [{name:''},{email:'invalid'},{message:''},{topic:'unknown'},{website:'bot'}])assert.equal((await POST(makeRequest(fields))).status,400);
 assert.equal(fetch.mock.callCount(),0);
});
test('does not claim success or suggest waiting for a protocol rejection',async t=>{
 t.mock.method(globalThis,'fetch',async()=>new Response(null,{status:406}));const result=await POST(makeRequest());assert.equal(result.status,502);const body=await result.json();assert.equal(body.ok,undefined);assert.match(body.error,/Tu mensaje sigue escrito/);assert.doesNotMatch(body.error,/unos minutos/);
});
