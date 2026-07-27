import { useState, useRef, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const COLORS = {
  canvas:"#F7F5F0", sand:"#EDE8DF", sandDark:"#D9D0C0",
  navy:"#1C2B3A", navyLight:"#2E4057",
  clinicalBlue:"#3A6B8A", clinicalBlueDark:"#2C536C", clinicalBlueLight:"#EAF2F8",
  sage:"#4A7C6F", sageLight:"#EAF2EF",
  amber:"#B8860B", amberLight:"#FFF8E1",
  rose:"#9B4A4A", roseLight:"#FDF2F2",
  muted:"#7A7570", border:"#E0DAD0",
};

const P1="/images/soft-night-guard.jpg";
const P2="/images/hard-night-guard.jpg";
const P3="/images/hybrid-guard.jpg";
const P4="/images/bleaching-trays.jpg";
const P5="/images/sport-guard.jpg";
const P6="/images/invisible-retainers.jpg";
const RT_PAGE_IMG="/images/rt-page.jpg";
const RT_G1="/images/rt-g1.jpg";
const RT_G2="/images/rt-g2.jpg";
const RT_G3="/images/rt-g3.jpg";
const RT_G4="/images/rt-g4.jpg";
const SNG_1="/images/soft-night-guard.jpg";
const SNG_2="/images/sng-2.jpg";
const SNG_3="/images/sng-3.jpg";
const SNG_4="/images/sng-4.jpg";
const SNG_5="/images/sng-5.jpg";
const HNG_1="/images/hng-1.jpg";
const HNG_2="/images/hng-2.jpg";
const HNG_3="/images/hng-3.jpg";
const HNG_4="/images/hng-4.jpg";
const HYB_1="/images/hyb-1.jpg";
const HYB_2="/images/hyb-2.jpg";
const HYB_3="/images/hyb-3.jpg";
const HYB_4="/images/hyb-4.jpg";
const WT_1="/images/wt-1.jpg";
const WT_2="/images/wt-2.jpg";
const WT_3="/images/wt-3.jpg";
const WT_4="/images/wt-4.jpg";
const SP_1="/images/sp-1.jpg";
const SP_2="/images/sp-2.jpg";
const SP_3="/images/sp-3.jpg";
const SP_4="/images/sp-4.jpg";
const SP_5="/images/sp-5.jpg";





const STRIPE_LINKS={
  1:"https://buy.stripe.com/test_14AaEXaoNfjg4mk9Jk2oE05",
  2:"https://buy.stripe.com/test_3cIeVd7cBefcg52cVw2oE04",
  3:"https://buy.stripe.com/test_9B6bJ11Shefc7yw6x82oE02",
  4:"https://buy.stripe.com/test_5kQ9AT9kJc748CA9Jk2oE03",
  5:"https://buy.stripe.com/test_aFa00jfJ7b305qocVw2oE00",
  6:"https://buy.stripe.com/test_eVq14ngNbefc8CA3kW2oE01",
};

const PRODUCT_IMAGES={1:P1,2:P2,3:P3,4:P4,5:P5,6:P6};
const S1="/images/step-1.jpg";
const S2="/images/step-2.jpg";
const S3="/images/step-3.jpg";
const HERO_IMG="/images/hero.jpg";

const PRODUCTS=[
  {id:1,name:"Soft Night Guard",price:150,tag:"Most Popular",desc:"Flexible, comfortable protection for light-to-moderate bruxism.",material:"Soft EVA",thickness:"1.5mm",wear:"Nightly"},
  {id:2,name:"Hard Night Guard",price:160,tag:"Max Protection",desc:"Rigid acrylic barrier for heavy grinders. Dentist-prescribed grade.",material:"Hard Acrylic",thickness:"3mm",wear:"Nightly"},
  {id:3,name:"Hybrid Hard/Soft",price:165,tag:"Best of Both",desc:"Hard outer shell meets soft inner cushion. The gold standard.",material:"Dual-Layer",thickness:"2.5mm",wear:"Nightly"},
  {id:4,name:"Custom Bleaching Trays",price:155,tag:"Whiten at Home",desc:"Precision-fit trays for professional-grade whitening.",material:"Soft EVA",thickness:"1mm",wear:"As needed"},
  {id:5,name:"Sport Guard",price:175,tag:"Impact Shield",desc:"Lab-fabricated impact protection. Superior to boil-and-bite.",material:"Laminated EVA",thickness:"4mm",wear:"During sport"},
  {id:6,name:"Invisible Retainers",price:169,tag:"Hold Your Smile",desc:"Crystal-clear retainers to maintain orthodontic results.",material:"Clear Essix",thickness:"0.75mm",wear:"Nightly"},
];

const COST_DATA={
  products:[
    {name:"Soft Night Guard",sell:150,lab:36,ship:16,kit:10,platform:6,dentist:12,ads:40,total:120,net:30},
    {name:"Hard Night Guard",sell:160,lab:44,ship:16,kit:10,platform:6,dentist:12,ads:40,total:128,net:32},
    {name:"Hybrid Hard/Soft",sell:165,lab:45,ship:16,kit:10,platform:6,dentist:12,ads:40,total:129,net:36},
    {name:"Bleaching Trays",sell:155,lab:56,ship:16,kit:10,platform:6,dentist:12,ads:35,total:135,net:20},
    {name:"Sport Guard",sell:175,lab:75,ship:16,kit:10,platform:6,dentist:12,ads:25,total:144,net:31},
    {name:"Invisible Retainers",sell:169,lab:35,ship:16,kit:10,platform:6,dentist:12,ads:30,total:109,net:60},
  ],
  overhead:[
    {name:"Jotform HIPAA Gold",cost:99,note:"HIPAA-compliant intake forms"},
    {name:"Shopify + Stripe",cost:39,note:"E-commerce + payment processing"},
    {name:"EHR Patient Records",cost:50,note:"HIPAA-compliant cloud storage"},
    {name:"Malpractice Insurance",cost:80,note:"Teledentistry rider estimate"},
    {name:"Domain + Hosting",cost:20,note:"SSL + domain renewal"},
  ],
};

const Btn=({children,onClick,variant="primary",size="md",disabled=false,style={}})=>{
  const [hov,setHov]=useState(false);
  const sz={sm:{padding:"8px 18px",fontSize:13},md:{padding:"13px 28px",fontSize:14},lg:{padding:"17px 40px",fontSize:16}};
  const v={
    primary:{background:hov&&!disabled?COLORS.clinicalBlueDark:COLORS.clinicalBlue,color:"#fff",border:"none"},
    secondary:{background:hov&&!disabled?COLORS.sandDark:COLORS.sand,color:COLORS.navy,border:"none"},
    sage:{background:hov&&!disabled?"#3a6358":COLORS.sage,color:"#fff",border:"none"},
    danger:{background:hov&&!disabled?"#7a3636":COLORS.rose,color:"#fff",border:"none"},
    amber:{background:hov&&!disabled?"#8B6508":COLORS.amber,color:"#fff",border:"none"},
  };
  return <button onClick={disabled?undefined:onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
    style={{borderRadius:8,fontWeight:600,letterSpacing:"0.02em",transition:"all 0.18s",display:"inline-flex",alignItems:"center",gap:8,opacity:disabled?0.5:1,cursor:disabled?"not-allowed":"pointer",...sz[size],...v[variant],...style}}>{children}</button>;
};

const Modal=({onClose,children})=>(
  <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(28,43,58,0.55)",backdropFilter:"blur(4px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
    <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:16,padding:"40px 44px",maxWidth:560,width:"100%",position:"relative",boxShadow:"0 24px 80px rgba(28,43,58,0.18)",maxHeight:"90vh",overflowY:"auto"}}>
      <button onClick={onClose} style={{position:"absolute",top:20,right:20,background:COLORS.sand,border:"none",borderRadius:50,width:34,height:34,cursor:"pointer",fontSize:16,color:COLORS.muted}}>x</button>
      {children}
    </div>
  </div>
);

const ScreeningModal=({product,onClose,onPass})=>{
  const [answers,setAnswers]=useState({q1:null,q2:null,q3:null});
  const allAnswered=Object.values(answers).every(v=>v!==null);
  const anyYes=Object.values(answers).some(v=>v===true);
  const allNo=allAnswered&&!anyYes;
  const blocked=allAnswered&&anyYes;
  const toggle=(id,val)=>setAnswers(prev=>({...prev,[id]:val}));
  const questions=[
    {id:"q1",text:"Do you currently have active braces or permanent orthodontic retainers?"},
    {id:"q2",text:"Do you have any loose, painful, or severely mobile permanent teeth?"},
    {id:"q3",text:"Are you currently in the middle of active dental work like waiting for a crown or implant?"},
  ];
  return (
    <Modal onClose={onClose}>
      <div style={{fontSize:10,fontWeight:700,color:COLORS.clinicalBlueDark,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6}}>Safety Check</div>
      <h2 style={{fontSize:22,fontWeight:700,color:COLORS.navy,margin:"0 0 8px",fontFamily:"Georgia, serif"}}>Before we ship your kit</h2>
      <p style={{color:COLORS.muted,fontSize:14,marginBottom:24,lineHeight:1.6}}>A licensed dentist reviews every order. Please answer 3 quick questions.</p>
      <div style={{background:COLORS.sand,borderRadius:10,padding:"12px 16px",marginBottom:24,display:"flex",alignItems:"center",gap:14}}>
        <img src={PRODUCT_IMAGES[product.id]} alt={product.name} style={{width:64,height:64,objectFit:"cover",borderRadius:8}}/>
        <div>
          <div style={{fontWeight:700,color:COLORS.navy,fontSize:14}}>{product.name}</div>
          <div style={{color:COLORS.muted,fontSize:13}}>${product.price} one-time</div>
        </div>
      </div>
      {questions.map((q,i)=>(
        <div key={q.id} style={{marginBottom:20}}>
          <p style={{fontSize:14,color:COLORS.navy,fontWeight:500,marginBottom:10,lineHeight:1.55}}>
            <span style={{color:COLORS.clinicalBlue,fontWeight:700,marginRight:6}}>Q{i+1}.</span>{q.text}
          </p>
          <div style={{display:"flex",gap:10}}>
            {["Yes","No"].map(opt=>{
              const val=opt==="Yes";
              const sel=answers[q.id]===val;
              return <button key={opt} onClick={()=>toggle(q.id,val)} style={{flex:1,padding:"10px",borderRadius:8,cursor:"pointer",fontWeight:600,fontSize:14,transition:"all 0.15s",border:"2px solid "+(sel?(val?COLORS.rose:COLORS.sage):COLORS.border),background:sel?(val?COLORS.roseLight:COLORS.sageLight):"#fff",color:sel?(val?COLORS.rose:COLORS.sage):COLORS.muted}}>{opt}</button>;
            })}
          </div>
        </div>
      ))}
      {blocked&&(
        <div style={{background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose,borderRadius:10,padding:"18px 20px",marginTop:20}}>
          <div style={{fontWeight:700,color:COLORS.rose,fontSize:15,marginBottom:6}}>Not safe to proceed right now</div>
          <p style={{fontSize:13,color:"#6B3030",lineHeight:1.6,margin:"0 0 14px"}}>Based on your answers, we recommend visiting an in-person dentist before proceeding.</p>
          <Btn variant="secondary" size="sm" onClick={onClose}>Close</Btn>
        </div>
      )}
      {allNo&&(
        <div style={{background:COLORS.sageLight,border:"1.5px solid "+COLORS.sage,borderRadius:10,padding:"18px 20px",marginTop:20}}>
          <div style={{fontWeight:700,color:COLORS.sage,fontSize:15,marginBottom:6}}>You are a great candidate!</div>
          <p style={{fontSize:13,color:"#2E5C50",lineHeight:1.6,margin:"0 0 14px"}}>A licensed dentist will review your case before fabrication begins.</p>
          <Btn variant="sage" onClick={()=>onPass(product)}>Continue to Patient Portal</Btn>
        </div>
      )}
      {!allAnswered&&<p style={{fontSize:12,color:COLORS.muted,textAlign:"center",marginTop:20}}>Answer all 3 questions to proceed.</p>}
    </Modal>
  );
};

const labelStyle={display:"block",fontSize:12,fontWeight:700,color:COLORS.navyLight,letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:6};
const inputStyle={width:"100%",padding:"11px 14px",borderRadius:8,border:"1.5px solid "+COLORS.border,fontSize:14,color:COLORS.navy,background:"#fff",outline:"none",boxSizing:"border-box",fontFamily:"inherit"};

const PatientPortal=({product})=>{
  const productName = product ? product.name : "";
  const productPrice = product ? product.price : "";
  const jotformUrl = "https://form.jotform.com/261957037836064" + (product ? "?product="+encodeURIComponent(productName)+"&price="+productPrice : "");
  return (
    <div style={{maxWidth:700,margin:"0 auto"}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,"+COLORS.navy+","+COLORS.clinicalBlue+")",borderRadius:16,padding:"28px 32px",marginBottom:28,display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"}}>
        {product&&<img src={PRODUCT_IMAGES[product.id]} alt={product.name} style={{width:72,height:72,objectFit:"cover",borderRadius:12,border:"2px solid rgba(255,255,255,0.2)",flexShrink:0}}/>}
        <div>
          <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>HIPAA-Secure Patient Intake</div>
          <div style={{fontSize:20,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif"}}>{productName||"Clinical Intake Form"}</div>
          {product&&<div style={{fontSize:13,color:"rgba(255,255,255,0.65)",marginTop:3}}>${productPrice} — Ships after licensed dentist approval</div>}
        </div>
      </div>

      {/* HIPAA notice */}
      <div style={{background:COLORS.clinicalBlueLight,border:"1.5px solid "+COLORS.clinicalBlue+"44",borderRadius:12,padding:"16px 20px",marginBottom:24,display:"flex",gap:12,alignItems:"flex-start"}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{flexShrink:0,marginTop:1}}><path d="M10 2L3 5.5v5C3 14.5 6 17.5 10 18.5c4-1 7-4 7-8v-5L10 2z" fill={COLORS.clinicalBlue}/></svg>
        <div>
          <div style={{fontSize:12,fontWeight:700,color:COLORS.clinicalBlueDark,marginBottom:3}}>HIPAA-Compliant Intake</div>
          <div style={{fontSize:12,color:COLORS.clinicalBlueDark,lineHeight:1.65}}>Your health information is collected and stored securely through Jotform HIPAA Gold — a fully HIPAA-compliant platform. We have signed a Business Associate Agreement (BAA) with Jotform. Your data is encrypted and never stored on our website.</div>
        </div>
      </div>

      {/* What to expect */}
      <div style={{background:"#fff",borderRadius:12,border:"1px solid "+COLORS.border,padding:"20px 24px",marginBottom:24}}>
        <div style={{fontSize:12,fontWeight:700,color:COLORS.navy,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:14}}>What you will complete in the form</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {["Full name and date of birth","State of residence","Last dental exam date","Medical history questions","3 dental photos (front, upper, lower arch)","Teledentistry informed consent"].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:8,alignItems:"center"}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3.5 3.5 5.5-5.5" stroke={COLORS.sage} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{fontSize:13,color:COLORS.navy}}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{marginTop:14,paddingTop:14,borderTop:"1px solid "+COLORS.border,fontSize:12,color:COLORS.muted}}>Takes approximately 3 minutes. A licensed dentist reviews your case within 48 hours.</div>
      </div>

      {/* Open Jotform button */}
      <a href={jotformUrl} target="_blank" rel="noopener noreferrer" style={{display:"block",width:"100%",background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:12,padding:"18px",fontSize:16,fontWeight:700,cursor:"pointer",textAlign:"center",textDecoration:"none",boxSizing:"border-box",transition:"background 0.18s"}}
        onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlueDark;}}
        onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}}>
        Complete HIPAA-Secure Intake Form →
      </a>
      <p style={{fontSize:11,color:COLORS.muted,textAlign:"center",marginTop:12,lineHeight:1.65}}>You will be redirected to our HIPAA-compliant Jotform intake. Your information is encrypted and secure. Powered by Jotform HIPAA Gold.</p>

      {/* Privacy links */}
      <div style={{display:"flex",justifyContent:"center",gap:20,marginTop:16,flexWrap:"wrap"}}>
        {["Notice of Privacy Practices","Teledentistry Consent","HIPAA Rights"].map((l,i)=>(
          <button key={i} style={{background:"none",border:"none",color:COLORS.clinicalBlue,fontSize:11,cursor:"pointer",textDecoration:"underline",textUnderlineOffset:"3px",fontFamily:"inherit"}}>{l}</button>
        ))}
      </div>
    </div>
  );
};

const CostDashboard=()=>{
  const [tab,setTab]=useState("products");
  const totalOverhead=COST_DATA.overhead.reduce((a,s)=>a+s.cost,0);
  const tabBtn=(t,label)=>(
    <button onClick={()=>setTab(t)} style={{padding:"8px 16px",border:"none",cursor:"pointer",fontSize:12,fontWeight:700,borderBottom:tab===t?"2px solid "+COLORS.clinicalBlue:"2px solid transparent",color:tab===t?COLORS.clinicalBlue:COLORS.muted,background:"transparent",textTransform:"uppercase",letterSpacing:"0.04em"}}>{label}</button>
  );
  return (
    <div style={{background:"#fff",borderRadius:12,border:"1px solid "+COLORS.border,marginTop:32,overflow:"hidden"}}>
      <div style={{background:"linear-gradient(135deg,#1C2B3A,#2E4057)",padding:"20px 28px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Business Intelligence</div>
        <h3 style={{fontSize:20,fontWeight:700,color:"#fff",fontFamily:"Georgia, serif",margin:0}}>Cost of Goods and Margin Analysis</h3>
      </div>
      <div style={{display:"flex",borderBottom:"1px solid "+COLORS.border,padding:"0 28px",background:COLORS.canvas}}>
        {tabBtn("products","Per-Unit Margins")}
        {tabBtn("overhead","Monthly Overhead")}
      </div>
      <div style={{padding:"24px 28px"}}>
        {tab==="products"&&(
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
              <thead>
                <tr style={{background:COLORS.sand}}>
                  {["Product","Price","Lab","Kit","Ship","Platform","Dr Review","Ad Budget","Total Cost","Net Profit","Margin"].map(h=>(
                    <th key={h} style={{padding:"10px 10px",textAlign:"left",fontSize:10,fontWeight:700,color:COLORS.muted,letterSpacing:"0.06em",textTransform:"uppercase",borderBottom:"1px solid "+COLORS.border,whiteSpace:"nowrap"}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COST_DATA.products.map((p,i)=>{
                  const margin=Math.round((p.net/p.sell)*100);
                  return (
                    <tr key={i} style={{borderBottom:"1px solid "+COLORS.border,background:i%2===0?"#fff":COLORS.canvas}}>
                      <td style={{padding:"12px 10px",fontWeight:700,color:COLORS.navy,whiteSpace:"nowrap"}}>{p.name}</td>
                      <td style={{padding:"12px 10px",color:COLORS.sage,fontWeight:700}}>${p.sell}</td>
                      <td style={{padding:"12px 10px",color:COLORS.muted}}>${p.lab}</td>
                      <td style={{padding:"12px 10px",color:COLORS.muted}}>${p.kit}</td>
                      <td style={{padding:"12px 10px",color:COLORS.muted}}>${p.ship}</td>
                      <td style={{padding:"12px 10px",color:COLORS.muted}}>${p.platform}</td>
                      <td style={{padding:"12px 10px",color:COLORS.muted}}>${p.dentist}</td>
                      <td style={{padding:"12px 10px",color:"#92650A",fontWeight:600}}>${p.ads}</td>
                      <td style={{padding:"12px 10px",color:COLORS.rose,fontWeight:700}}>${p.total}</td>
                      <td style={{padding:"12px 10px",color:COLORS.clinicalBlue,fontWeight:800}}>${p.net}</td>
                      <td style={{padding:"12px 10px"}}>
                        <span style={{background:margin>25?COLORS.sageLight:COLORS.amberLight,color:margin>25?COLORS.sage:"#92650A",padding:"3px 8px",borderRadius:20,fontSize:11,fontWeight:700}}>{margin}%</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {tab==="overhead"&&(
          <div>
            {COST_DATA.overhead.map((s,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",background:COLORS.canvas,borderRadius:10,border:"1px solid "+COLORS.border,marginBottom:10}}>
                <div>
                  <div style={{fontWeight:700,color:COLORS.navy,fontSize:14}}>{s.name}</div>
                  <div style={{fontSize:11,color:COLORS.muted,marginTop:2}}>{s.note}</div>
                </div>
                <div style={{fontWeight:800,color:COLORS.rose,fontSize:16}}>${s.cost}<span style={{fontSize:11,fontWeight:400}}>/mo</span></div>
              </div>
            ))}
            <div style={{background:COLORS.navy,borderRadius:10,padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:16}}>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.7)"}}>Total Fixed Monthly Overhead</div>
              <div style={{fontSize:28,fontWeight:800,color:"#fff"}}>${totalOverhead}<span style={{fontSize:13,fontWeight:400}}>/mo</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DentistPortal=()=>{
  const [action,setAction]=useState(null);
  const mp={name:"Jane Smith",dob:"1989-04-12",state:"CA",product:"Hybrid Hard/Soft Guard",productId:3,price:165};
  return (
    <div>
      <div style={{background:"#1C2B3A",color:"#fff",padding:"14px 28px",borderRadius:"12px 12px 0 0",display:"flex",alignItems:"center",gap:12}}>
        <span style={{fontWeight:700,fontSize:15}}>Clinician Review Dashboard</span>
        <span style={{marginLeft:"auto",background:"#3A6B8A",padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:700}}>PROVIDER VIEW</span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",border:"1px solid "+COLORS.border,borderTop:"none",borderRadius:"0 0 12px 12px",overflow:"hidden"}}>
        <div style={{padding:28,borderRight:"1px solid "+COLORS.border}}>
          <div style={{fontWeight:700,color:COLORS.navy,fontSize:20,fontFamily:"Georgia, serif",marginBottom:4}}>{mp.name}</div>
          <p style={{color:COLORS.muted,fontSize:13,margin:"0 0 20px"}}>DOB: {mp.dob} - {mp.state} - Submitted 2 hours ago</p>
          <div style={{background:COLORS.sand,borderRadius:10,padding:"16px 18px",marginBottom:20,display:"flex",alignItems:"center",gap:14}}>
            <img src={PRODUCT_IMAGES[mp.productId]} alt={mp.product} style={{width:64,height:64,objectFit:"cover",borderRadius:8}}/>
            <div>
              <div style={{fontWeight:700,color:COLORS.navy}}>{mp.product}</div>
              <div style={{color:COLORS.muted,fontSize:13}}>${mp.price}</div>
            </div>
          </div>
          <div style={{marginTop:20,display:"flex",gap:10}}>
            {["Front Bite","Upper Arch","Lower Arch"].map(p=>(
              <div key={p} style={{flex:1,background:COLORS.clinicalBlueLight,borderRadius:8,padding:"16px 8px",textAlign:"center",fontSize:11,color:COLORS.clinicalBlueDark,fontWeight:600}}>{p} ok</div>
            ))}
          </div>
        </div>
        <div style={{padding:28}}>
          <div style={{fontWeight:700,color:COLORS.navy,fontSize:18,fontFamily:"Georgia, serif",marginBottom:4}}>Received Putty Mold</div>
          <p style={{color:COLORS.muted,fontSize:13,margin:"0 0 20px"}}>Lab ref TGG-8841</p>
          <div style={{background:COLORS.sand,borderRadius:12,padding:32,textAlign:"center",marginBottom:24,border:"1px solid "+COLORS.border}}>
            <div style={{fontSize:13,fontWeight:600,color:COLORS.navyLight,marginBottom:4}}>Physical Impression Mold</div>
            <div style={{fontSize:12,color:COLORS.muted}}>Received - Scanned - Ready for review</div>
          </div>
          <div style={{fontSize:11,fontWeight:700,color:COLORS.muted,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:14}}>Clinical Decision</div>
          {!action&&(
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <Btn variant="sage" onClick={()=>setAction("approve")} style={{justifyContent:"center",width:"100%"}}>Approve and Fabricate</Btn>
              <Btn variant="amber" onClick={()=>setAction("bad")} style={{justifyContent:"center",width:"100%"}}>Reject: Bad Impression</Btn>
              <Btn variant="danger" onClick={()=>setAction("flag")} style={{justifyContent:"center",width:"100%"}}>Reject: Clinical Red Flag</Btn>
            </div>
          )}
          {action==="approve"&&<div style={{background:COLORS.sageLight,border:"1.5px solid "+COLORS.sage,borderRadius:10,padding:"18px 20px"}}><div style={{fontWeight:700,color:COLORS.sage,fontSize:15,marginBottom:8}}>Approved and Sent to Lab</div><p style={{fontSize:12,color:"#2E5C50",lineHeight:1.65,margin:"0 0 12px"}}>PDF Lab Slip generated. Patient Superbill emailed. Fabrication: 3-5 business days.</p><button onClick={()=>setAction(null)} style={{background:"none",border:"none",color:COLORS.sage,fontSize:12,cursor:"pointer",fontWeight:600}}>Undo</button></div>}
          {action==="bad"&&<div style={{background:COLORS.amberLight,border:"1.5px solid "+COLORS.amber,borderRadius:10,padding:"18px 20px"}}><div style={{fontWeight:700,color:COLORS.amber,fontSize:15,marginBottom:8}}>Bad Impression - Retry Kit Dispatched</div><p style={{fontSize:12,color:"#5C4400",lineHeight:1.65,margin:"0 0 12px"}}>Friendly email sent with better instructions. Free backup putty kit ships today.</p><button onClick={()=>setAction(null)} style={{background:"none",border:"none",color:COLORS.amber,fontSize:12,cursor:"pointer",fontWeight:600}}>Undo</button></div>}
          {action==="flag"&&<div style={{background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose,borderRadius:10,padding:"18px 20px"}}><div style={{fontWeight:700,color:COLORS.rose,fontSize:15,marginBottom:8}}>Clinical Red Flag - Full Refund Issued</div><p style={{fontSize:12,color:"#6B3030",lineHeight:1.65,margin:"0 0 12px"}}>100% refund automatically processed. Care email sent.</p><button onClick={()=>setAction(null)} style={{background:"none",border:"none",color:COLORS.rose,fontSize:12,cursor:"pointer",fontWeight:600}}>Undo</button></div>}
        </div>
      </div>
    </div>
  );
};

const ScrollCard=({product,onQuiz})=>{
  const [hov,setHov]=useState(false);
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{flexShrink:0,minWidth:420,background:hov?"#fff":COLORS.canvas,border:"1.5px solid "+(hov?COLORS.clinicalBlue:COLORS.border),borderRadius:16,transition:"all 0.22s",boxShadow:hov?"0 10px 36px rgba(58,107,138,0.14)":"0 2px 8px rgba(28,43,58,0.05)",transform:hov?"translateY(-4px) scale(1.03)":"none",display:"flex",flexDirection:"row",alignItems:"stretch",overflow:"hidden",scrollSnapAlign:"start"}}>
      <div style={{flex:1,padding:"24px 24px",display:"flex",flexDirection:"column",justifyContent:"center",gap:6}}>
        <p style={{fontSize:18,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",margin:0,lineHeight:1.25,letterSpacing:"-0.01em"}}>{product.hook}</p>
        <p style={{fontSize:12,color:COLORS.clinicalBlue,fontWeight:600,margin:0}}>{product.sub}</p>
        <p style={{fontSize:10,color:COLORS.muted,fontWeight:600,margin:"2px 0 0",textTransform:"uppercase",letterSpacing:"0.08em"}}>{product.name}</p>
      </div>
      <div style={{width:1,background:hov?COLORS.clinicalBlueLight:COLORS.border,flexShrink:0}}/>
      <div style={{width:160,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:hov?COLORS.clinicalBlueLight:COLORS.canvas,transition:"background 0.22s",padding:"12px"}}>
        <img src={PRODUCT_IMAGES[product.id]} alt={product.name} style={{width:130,height:130,objectFit:"cover",borderRadius:12,transition:"transform 0.22s",transform:hov?"scale(1.04)":"scale(1)"}}/>
      </div>
      <div style={{width:1,background:hov?COLORS.clinicalBlue:COLORS.border,flexShrink:0}}/>
      <button onClick={onQuiz} style={{width:64,flexShrink:0,background:hov?COLORS.clinicalBlue:COLORS.canvas,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.22s"}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke={hov?"#fff":COLORS.clinicalBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
};

const ProductCard=({product,onBuy,onLearn})=>{
  const [hov,setHov]=useState(false);
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{background:"#fff",borderRadius:16,border:"1.5px solid "+(hov?COLORS.clinicalBlue:COLORS.border),transition:"all 0.2s",overflow:"hidden",transform:hov?"translateY(-4px)":"none",boxShadow:hov?"0 12px 40px rgba(58,107,138,0.12)":"0 2px 8px rgba(28,43,58,0.04)",display:"flex",flexDirection:"column"}}>
      <div style={{width:"100%",aspectRatio:"4/3",overflow:"hidden",background:COLORS.canvas,position:"relative"}}>
        <img src={PRODUCT_IMAGES[product.id]} alt={product.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.35s",transform:hov?"scale(1.04)":"scale(1)"}}/>
        <div style={{position:"absolute",top:12,right:12,background:"rgba(255,255,255,0.95)",color:COLORS.clinicalBlue,fontSize:10,fontWeight:700,padding:"4px 10px",borderRadius:20,letterSpacing:"0.06em",textTransform:"uppercase"}}>{product.tag}</div>
      </div>
      <div style={{padding:"20px 22px 22px",display:"flex",flexDirection:"column",flex:1}}>
        <h3 style={{fontSize:16,fontWeight:700,color:COLORS.navy,margin:"0 0 8px"}}>{product.name}</h3>
        <p style={{fontSize:13,color:COLORS.muted,lineHeight:1.65,margin:"0 0 14px"}}>{product.desc} <button onClick={()=>onLearn(product)} style={{background:"none",border:"none",color:COLORS.clinicalBlue,fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",textUnderlineOffset:"3px",padding:0,display:"inline",fontFamily:"inherit"}}>Learn more</button></p>
        <div style={{flex:1}}/>
        <div style={{display:"flex",gap:8,marginBottom:16,minHeight:56}}>
          {[["Material",product.material],["Thickness",product.thickness],["Wear",product.wear]].map(([k,v])=>(
            <div key={k} style={{textAlign:"center",flex:1,background:COLORS.canvas,borderRadius:8,padding:"8px 4px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <div style={{fontSize:9,color:COLORS.muted,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:4}}>{k}</div>
              <div style={{fontSize:11,color:COLORS.navy,fontWeight:600,lineHeight:1.3}}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{paddingTop:14,borderTop:"1px solid "+COLORS.border,marginTop:"auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
            <div>
              <span style={{fontSize:22,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif"}}>${product.price}</span>
              <span style={{fontSize:12,color:COLORS.muted,marginLeft:4}}>one-time</span>
            </div>
            <Btn variant="primary" size="sm" onClick={()=>onBuy(product)}>Get Started</Btn>
          </div>
          <div style={{fontSize:10,color:"#92650A",fontWeight:600}}>FSA/HSA eligible — Superbill included</div>
        </div>
      </div>
    </div>
  );
};

const FAQItem=({q,a})=>{
  const [open,setOpen]=useState(false);
  return (
    <div style={{border:"1px solid "+(open?"#F5D87A":COLORS.border),borderRadius:10,overflow:"hidden",marginBottom:4,background:open?"#FFFBEB":"#fff"}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 22px",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:16}}>
        <span style={{fontSize:14,fontWeight:700,color:COLORS.navy,lineHeight:1.4}}>{q}</span>
        <span style={{fontSize:20,color:"#92650A",flexShrink:0,display:"inline-block",transform:open?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.2s"}}>+</span>
      </button>
      {open&&<div style={{padding:"0 22px 18px",fontSize:13,color:COLORS.muted,lineHeight:1.75}}>{a}</div>}
    </div>
  );
};

const EducationPage=({onBuy,setView})=>{
  const isMobile=useIsMobile();
  const [openFaq,setOpenFaq]=useState(null);

  const STUDIES=[
    {
      id:1,
      product:"Night Guards",
      tag:"Soft / Hard / Hybrid",
      color:COLORS.clinicalBlue,
      colorLight:COLORS.clinicalBlueLight,
      productId:3,
      icon:"🦷",
      stat:"50%",
      statLabel:"Reduction in annual enamel loss",
      studyName:"Stability of Occlusal Splint Therapy and Reduction of Attrition-Corrosion Wear in Bruxism Patients: A Longitudinal Clinical Study",
      journals:["Journal of Oral Rehabilitation","PubMed Central (PMC)","Journal of Oral & Facial Pain"],
      citationNum:1,
      findings:[
        "Custom occlusal splints reduce annual enamel crown loss by up to 50% compared to unprotected dentition.",
        "Unprotected severe bruxers lose 40–50 μm of enamel annually. Custom guard wearers: 20–30 μm.",
        "Longitudinal data confirms vertical dimension preservation over multi-year follow-up periods.",
        "Hard acrylic splints show superior wear resistance compared to soft thermoplastic guards for severe grinders.",
      ],
      clinical:"Bruxism affects an estimated 8–31% of the general population. Unmanaged nocturnal grinding leads to enamel attrition, dentinal hypersensitivity, cusp fracture, and eventual tooth loss. Custom-fabricated occlusal splints are the only evidence-based conservative intervention proven to reduce grinding forces and protect enamel long-term.",
      faqs:[
        {q:"Which guard type is right for me?",a:"Mild grinders and first-time wearers typically do best with a Soft guard. Moderate grinders with existing restorations benefit from the Hybrid. Severe grinders who have worn through previous guards need the Hard acrylic guard. Our clinical assessment identifies your profile precisely."},
        {q:"Can a night guard make my grinding worse?",a:"Research does not support the concern that guards worsen bruxism. While the habit itself is not eliminated, the guard redirects destructive forces onto a replaceable appliance rather than your irreplaceable enamel."},
        {q:"How long until I notice a difference?",a:"Most patients report reduced jaw soreness within 2-4 weeks of consistent nightly use. Enamel protection begins on the first night of wear."},
        {q:"How do I clean and care for my night guard?",a:"Rinse with cool water immediately after removal each morning. Brush gently with a soft toothbrush and mild dish soap once a week. Never use hot water as it warps thermoplastic material. Store in the ventilated case provided. Avoid leaving it in a hot car."},
      ],
    },
    {
      id:2,
      product:"Custom Sport Guards",
      tag:"Athletic Mouthguard",
      color:COLORS.sage,
      colorLight:COLORS.sageLight,
      productId:5,
      icon:"🏆",
      stat:"26%",
      statLabel:"Reduction in concussion incidence",
      studyName:"Mouthguards in Sport and Concussion Incidence: A Systematic Review and Meta-Analysis",
      journals:["British Journal of Sports Medicine (BJSM)"],
      citationNum:2,
      findings:[
        "Custom-laminated athletic mouthguards are associated with a 26% reduction in concussion incidence vs. boil-and-bite guards.",
        "Custom guards provide superior fit, retention, and force distribution across the entire dental arch.",
        "Over-the-counter boil-and-bite guards lose retention during play, increasing orofacial injury risk.",
        "The American Dental Association recommends custom-fabricated guards for all contact sport athletes.",
      ],
      clinical:"Over 5 million teeth are avulsed (knocked out) annually in the United States, predominantly in sport and recreational settings. A single tooth avulsion costs $3,000–$6,000 to restore with an implant. A custom sport guard costs $175. Custom-laminated guards absorb and distribute impact forces across the full arch — the mechanical difference from boil-and-bites is substantial.",
      faqs:[
        {q:"Does my league require a specific guard specification?",a:"Most youth, high school, and collegiate leagues require a minimum 3mm guard. Our high-impact option meets or exceeds all major league specifications including NCAA, NFHS, and USA Hockey."},
        {q:"Can I wear this guard with braces?",a:"Yes. Our lab performs custom orthodontic blockout — relieving areas over brackets and archwires so the guard fits securely without damaging your orthodontic hardware."},
        {q:"Will I be able to breathe and communicate normally?",a:"Custom guards have the thinnest possible profile for their protection rating because they follow your exact arch anatomy. The vast majority of our athletes report no impact on breathing or speech after a brief adaptation period."},
        {q:"How long does a custom sport guard last?",a:"With regular use, a custom laminated sport guard typically lasts 2-4 seasons. Replace sooner if you notice thinning, tearing, or if the guard no longer seats snugly. Heavy contact sport athletes may replace annually."},
      ],
    },
    {
      id:3,
      product:"Custom Bleaching Trays",
      tag:"Professional Whitening",
      color:"#92650A",
      colorLight:"#FFFBEB",
      productId:4,
      icon:"✨",
      stat:"7 shades",
      statLabel:"Average shade improvement",
      studyName:"A Clinical Evaluation of Carbamide Peroxide and Hydrogen Peroxide Whitening Agents During Daytime Use in Custom Trays / Clinical Trial of 10% Carbamide Peroxide Bleaching Systems",
      journals:["Journal of the American Dental Association (JADA)","Journal of the Canadian Dental Association (JCDA)"],
      citationNum:3,
      findings:[
        "Custom-fitted reservoir trays produce an average improvement of up to 7 shades on the Vita shade guide.",
        "Custom scalloped trays eliminate gel contact with gingival tissue, preventing chemical soft tissue burns.",
        "10% carbamide peroxide in custom trays achieves equivalent results to 35% in-office treatments over 2 weeks.",
        "Reservoir design maintains consistent gel-to-enamel contact across all tooth surfaces simultaneously.",
      ],
      clinical:"In-office whitening uses 35–44% hydrogen peroxide with UV activation — effective but expensive ($500–$1,200 per session). Custom tray whitening with 10–22% carbamide peroxide achieves clinically equivalent long-term results at a fraction of the cost. The defining advantage of custom trays is the precision reservoir scalloping, which isolates gel on tooth enamel and away from gum tissue.",
      faqs:[
        {q:"Does gel come with the trays?",a:"No. We provide precision custom trays only. You source 10–22% carbamide peroxide gel from your dentist or a licensed pharmacy. This keeps your cost low and lets you choose the concentration that matches your sensitivity profile."},
        {q:"Will whitening damage my enamel?",a:"Peer-reviewed data consistently show no significant enamel microhardness reduction with standard carbamide peroxide concentrations used as directed. The ADA considers it safe for most patients."},
        {q:"Will it work on crowns, veneers, or composite fillings?",a:"No. Whitening gel only alters natural tooth structure. Restorations remain their original color. Be aware of potential shade mismatch if you have prominent front restorations."},
      ],
    },
    {
      id:4,
      product:"Invisible Retainers",
      tag:"Orthodontic Retention",
      color:"#6B4A8A",
      colorLight:"#F3EEF8",
      productId:6,
      icon:"💎",
      stat:"50–90%",
      statLabel:"Relapse rate without retention",
      studyName:"Stability of Orthodontic Treatment Outcome: Follow-Up Until 10 Years Postretention / Twenty-Year Follow-Up of Postretention Relapse and Incisor Irregularity (Little et al.)",
      journals:["American Journal of Orthodontics and Dentofacial Orthopedics (AJO-DO)","Cochrane Database of Systematic Reviews"],
      citationNum:4,
      findings:[
        "50–90% of orthodontic patients experience unacceptable relapse within 10–20 years without long-term retention.",
        "The periodontal ligament actively pulls teeth toward their original positions within days of stopping retainer use.",
        "Indefinite nightly retainer wear is the current standard of care per the American Association of Orthodontists.",
        "Clear Essix-style retainers show equivalent efficacy to Hawley retainers for maintaining anterior alignment.",
      ],
      clinical:"The AAO, British Orthodontic Society, and virtually every contemporary orthodontic guideline now recommend indefinite retention — meaning retainer wear for life, not just 12–24 months. The evidence from 10 and 20-year follow-up studies is unambiguous: teeth move without retention. The only question is how fast. Replacing a lost or broken retainer immediately is the single most important thing a post-orthodontic patient can do.",
      faqs:[
        {q:"How long do I need to wear retainers?",a:"Current AAO guidelines recommend indefinite nightly retainer wear. The research is clear — teeth continue to move throughout adulthood even decades post-treatment. Most orthodontists now say: wear them forever."},
        {q:"My retainer broke — how fast do teeth shift?",a:"Teeth can begin shifting within days without retention, though significant movement typically takes weeks to months. The longer the gap, the greater the relapse risk. Order a replacement immediately."},
        {q:"Will your retainer fit over my permanent bonded wire?",a:"Yes. Our lab custom-blocks out your permanent wire anatomy so the clear retainer snaps securely over it without stressing the bond or creating pressure points."},
        {q:"Do I get both upper and lower retainers?",a:"Yes. Every order ships as a matched pair — both upper and lower retainers fabricated from your impressions. This ensures your full orthodontic result is maintained on both arches simultaneously."},
      ],
    },
  ];

  const CITATIONS=[
    {num:1,text:"Journal of Oral Rehabilitation: Longitudinal evaluation of occlusal wear reduction with custom occlusal splint therapy in bruxism patients. PMC / Journal of Oral & Facial Pain: Long-term tooth wear progress and occlusal protection in attrition-corrosion studies."},
    {num:2,text:"British Journal of Sports Medicine (BJSM): Meta-analysis of custom-laminated athletic mouthguards in contact and collision sports — concussion incidence and orofacial injury rates."},
    {num:3,text:"Journal of the American Dental Association (JADA) / Journal of the Canadian Dental Association (JCDA): Clinical evaluation of carbamide peroxide whitening systems in custom-fitted reservoir trays — shade improvement and soft tissue safety."},
    {num:4,text:"American Journal of Orthodontics and Dentofacial Orthopedics (AJO-DO): 10-year and 20-year post-treatment retention and relapse stability studies (Little et al.). Cochrane Database of Systematic Reviews: Systematic review of orthodontic retention protocols."},
  ];

  return (
    <div style={{background:COLORS.canvas,minHeight:"100vh"}}>

      {/* Hero */}
      <div style={{background:"linear-gradient(135deg,#1C2B3A 0%,#2E4A62 100%)",padding:"72px 40px 64px",textAlign:"center"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <div style={{display:"inline-block",background:"rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.9)",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",padding:"5px 16px",borderRadius:20,marginBottom:20,border:"1px solid rgba(255,255,255,0.2)"}}>Clinical Evidence Library</div>
          <h1 style={{fontSize:"clamp(28px,5vw,48px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 16px",lineHeight:1.15}}>The science behind<br/><span style={{color:"#93C5DA",fontStyle:"italic"}}>every appliance we make.</span></h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.65)",maxWidth:520,margin:"0 auto",lineHeight:1.8}}>Every product we offer is backed by peer-reviewed clinical research published in leading dental and orthodontic journals. Here is what the evidence actually says.</p>
        </div>
      </div>

      {/* Study stat bar */}
      <div style={{background:COLORS.navy,padding:"20px 40px"}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"flex",justifyContent:"center",gap:isMobile?24:56,flexWrap:"wrap"}}>
          {[["4","Peer-reviewed studies"],["847+","Patients served"],["4.9★","Average review rating"],["70%","Average patient savings"]].map(([n,l])=>(
            <div key={l} style={{textAlign:"center"}}>
              <div style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif"}}>{n}</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.45)",marginTop:2,letterSpacing:"0.04em"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1000,margin:"0 auto",padding:isMobile?"24px 16px 60px":"60px 40px 80px"}}>

        {/* Study cards */}
        {STUDIES.map((study,si)=>(
          <div key={study.id} id={"study-"+study.id} style={{marginBottom:40,background:"#fff",borderRadius:20,border:"1.5px solid "+COLORS.border,boxShadow:"0 4px 24px rgba(28,43,58,0.07)",overflow:"hidden"}}>

            {/* Card header */}
            <div style={{background:"linear-gradient(135deg,"+study.color+"ee,"+study.color+"aa)",padding:"28px 36px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20}}>
              <div style={{display:"flex",alignItems:"center",gap:16}}>
                <div style={{width:56,height:56,borderRadius:14,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{study.icon}</div>
                <div>
                  <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.7)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>{study.tag}</div>
                  <h3 style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:0}}>{study.product}</h3>
                </div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:42,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",lineHeight:1}}>{study.stat}</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,0.75)",marginTop:4,maxWidth:180,textAlign:"right"}}>{study.statLabel}</div>
              </div>
            </div>

            <div style={{padding:"32px 36px"}}>

              {/* Study name */}
              <div style={{background:study.colorLight,borderRadius:12,padding:"16px 20px",marginBottom:24,border:"1px solid "+study.color+"33"}}>
                <div style={{fontSize:10,fontWeight:700,color:study.color,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6}}>Primary Study</div>
                <div style={{fontSize:13,fontWeight:600,color:COLORS.navy,lineHeight:1.6,marginBottom:10,fontStyle:"italic"}}>"{study.studyName}"</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                  {study.journals.map((j,i)=>(
                    <span key={i} style={{background:"#fff",border:"1px solid "+study.color+"44",color:study.color,fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:20,letterSpacing:"0.04em"}}>
                      [{study.citationNum}] {j}
                    </span>
                  ))}
                </div>
              </div>

              {/* Three accordions: Key Findings, Clinical Context, FAQs */}
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:24}}>

                {/* Key Findings accordion */}
                {(()=>{
                  const k=""+si+"-findings";
                  const open=openFaq===k;
                  return (
                    <div style={{border:"1.5px solid "+(open?study.color:COLORS.border),borderRadius:12,overflow:"hidden",background:open?study.colorLight:"#fff",transition:"all 0.2s"}}>
                      <button onClick={()=>setOpenFaq(open?null:k)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:12}}>
                        <div style={{display:"flex",alignItems:"center",gap:10}}>
                          <div style={{width:28,height:28,borderRadius:8,background:study.colorLight,border:"1.5px solid "+study.color+"55",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5l3.5 3.5 6.5-6.5" stroke={study.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <span style={{fontSize:14,fontWeight:700,color:COLORS.navy}}>Key Findings</span>
                          <span style={{fontSize:11,color:COLORS.muted,fontWeight:500}}>{study.findings.length} findings from peer-reviewed data</span>
                        </div>
                        <span style={{fontSize:20,color:study.color,flexShrink:0,display:"inline-block",transform:open?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.22s",lineHeight:1}}>+</span>
                      </button>
                      {open&&(
                        <div style={{padding:"4px 20px 20px"}}>
                          <div style={{display:"flex",flexDirection:"column",gap:10}}>
                            {study.findings.map((f,i)=>(
                              <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                                <div style={{width:22,height:22,borderRadius:"50%",background:"#fff",border:"1.5px solid "+study.color+"66",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,fontSize:11,fontWeight:700,color:study.color}}>{i+1}</div>
                                <span style={{fontSize:13,color:COLORS.navy,lineHeight:1.7}}>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Clinical Context accordion */}
                {(()=>{
                  const k=""+si+"-clinical";
                  const open=openFaq===k;
                  return (
                    <div style={{border:"1.5px solid "+(open?study.color:COLORS.border),borderRadius:12,overflow:"hidden",background:open?study.colorLight:"#fff",transition:"all 0.2s"}}>
                      <button onClick={()=>setOpenFaq(open?null:k)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:12}}>
                        <div style={{display:"flex",alignItems:"center",gap:10}}>
                          <div style={{width:28,height:28,borderRadius:8,background:study.colorLight,border:"1.5px solid "+study.color+"55",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="2" y="2" width="9" height="9" rx="1.5" stroke={study.color} strokeWidth="1.8"/><path d="M4.5 6.5h4M4.5 4.5h4M4.5 8.5h2" stroke={study.color} strokeWidth="1.5" strokeLinecap="round"/></svg>
                          </div>
                          <span style={{fontSize:14,fontWeight:700,color:COLORS.navy}}>Clinical Context</span>
                          <span style={{fontSize:11,color:COLORS.muted,fontWeight:500}}>Why this matters for your health</span>
                        </div>
                        <span style={{fontSize:20,color:study.color,flexShrink:0,display:"inline-block",transform:open?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.22s",lineHeight:1}}>+</span>
                      </button>
                      {open&&(
                        <div style={{padding:"4px 20px 20px"}}>
                          <p style={{fontSize:13,color:COLORS.navy,lineHeight:1.85,margin:0}}>{study.clinical}</p>
                        </div>
                      )}
                    </div>
                  );
                })()}

              </div>

              {/* Plain FAQ accordions */}
              <div style={{borderTop:"1px solid "+COLORS.border,paddingTop:20,marginBottom:20}}>
                <div style={{fontSize:11,fontWeight:700,color:COLORS.muted,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:14}}>Frequently Asked Questions</div>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {study.faqs.map((faq,fi)=>{
                    const fk=""+si+"-faq-"+fi;
                    const fopen=openFaq===fk;
                    return (
                      <div key={fi} style={{border:"1.5px solid "+(fopen?study.color:COLORS.border),borderRadius:10,overflow:"hidden",background:fopen?study.colorLight:"#fff",transition:"all 0.18s"}}>
                        <button onClick={()=>setOpenFaq(fopen?null:fk)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 18px",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:16}}>
                          <span style={{fontSize:14,fontWeight:600,color:COLORS.navy,lineHeight:1.4}}>{faq.q}</span>
                          <span style={{fontSize:20,color:study.color,flexShrink:0,display:"inline-block",transform:fopen?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.2s",lineHeight:1}}>+</span>
                        </button>
                        {fopen&&<div style={{padding:"0 18px 15px",fontSize:13,color:COLORS.muted,lineHeight:1.8}}>{faq.a}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16,paddingTop:16,borderTop:"1px solid "+COLORS.border}}>
                <div style={{fontSize:13,color:COLORS.muted}}>Ready to get started with {study.product}?</div>
                <button onClick={()=>onBuy(PRODUCTS.find(p=>p.id===study.productId))}
                  onMouseEnter={e=>{e.currentTarget.style.opacity="0.85";}}
                  onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}
                  style={{background:study.color,color:"#fff",border:"none",borderRadius:10,padding:"12px 24px",fontSize:13,fontWeight:700,cursor:"pointer",transition:"opacity 0.15s",whiteSpace:"nowrap"}}>
                  Shop {study.product}
                </button>
              </div>

            </div>
          </div>
        ))}

        {/* Clinical References */}
        <div style={{background:COLORS.navy,borderRadius:20,padding:"40px 44px"}}>
          <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.4)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:6}}>Scientific References</div>
          <h3 style={{fontSize:22,fontWeight:700,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 24px"}}>Clinical Citations</h3>
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {CITATIONS.map(c=>(
              <div key={c.num} style={{display:"flex",gap:16,alignItems:"flex-start",paddingBottom:14,borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
                <div style={{width:26,height:26,borderRadius:"50%",background:COLORS.clinicalBlue,color:"#fff",fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{c.num}</div>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",lineHeight:1.75,margin:0}}>{c.text}</p>
              </div>
            ))}
          </div>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.3)",margin:"24px 0 0",lineHeight:1.7}}>The Guard Guy references peer-reviewed literature to inform product design and patient education. Individual results may vary. This content is for educational purposes only and does not constitute medical advice. Consult a licensed dentist for personalized clinical guidance.</p>
        </div>

      </div>
    </div>
  );
}

const SuperbillPage=({setView})=>(
  <div style={{background:COLORS.canvas,minHeight:"100vh"}}>
    <div style={{background:"linear-gradient(135deg,#FFFBEB 0%,#FFF3C4 100%)",padding:"64px 40px 56px",borderBottom:"1px solid #F5D87A"}}>
      <div style={{maxWidth:760,margin:"0 auto",textAlign:"center"}}>
        <h1 style={{fontSize:"clamp(28px,5vw,46px)",fontWeight:700,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 16px"}}>Your insurance may cover this.<br/><span style={{color:"#92650A"}}>We handle the paperwork.</span></h1>
        <p style={{fontSize:16,color:COLORS.muted,maxWidth:560,margin:"0 auto 32px",lineHeight:1.75}}>Every approved order includes a Superbill with official CDT billing codes ready to submit to your insurance carrier.</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={()=>setView("site")} style={{background:COLORS.navy,color:"#fff",border:"none",borderRadius:8,padding:"13px 28px",fontSize:14,fontWeight:600,cursor:"pointer"}}>Shop Products</button>
          <button style={{background:"transparent",color:"#92650A",border:"1.5px solid #F5D87A",borderRadius:8,padding:"13px 28px",fontSize:14,fontWeight:600,cursor:"pointer"}}>FSA / HSA Accepted</button>
        </div>
      </div>
    </div>
    <div style={{maxWidth:860,margin:"0 auto",padding:"64px 40px"}}>
      {[
        {q:"Is reimbursement guaranteed?",a:"No. Coverage depends entirely on your individual dental plan and deductible. We cannot guarantee reimbursement. We provide the Superbill as a courtesy tool."},
        {q:"What if I have an HMO plan?",a:"HMO dental plans typically do not accept out-of-network Superbill claims. PPO plans are generally compatible."},
        {q:"Can I use my FSA or HSA card?",a:"Yes. Custom dental appliances like night guards and retainers are FSA/HSA-eligible expenses."},
        {q:"Which CDT codes will be on my Superbill?",a:"D9944 (Hard Night Guard), D9945 (Soft Night Guard), D9946 (Hybrid), D8680 (Retainer), D1354 (Bleaching Trays), D9941 (Sport Guard)."},
      ].map((f,i)=><FAQItem key={i} q={f.q} a={f.a}/>)}
      <div style={{background:COLORS.navy,borderRadius:20,padding:"48px 40px",textAlign:"center",marginTop:40}}>
        <h2 style={{fontSize:26,fontWeight:700,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 12px"}}>Ready to get your custom guard?</h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.65)",maxWidth:440,margin:"0 auto 28px",lineHeight:1.7}}>Your Superbill is included with every order. FSA and HSA accepted at checkout.</p>
        <button onClick={()=>setView("site")} style={{background:"#B8860B",color:"#fff",border:"none",borderRadius:10,padding:"16px 36px",fontSize:15,fontWeight:700,cursor:"pointer"}}>Shop All Products</button>
      </div>
    </div>
  </div>
);


// ── NIGHT GUARD FUNNEL ──────────────────────────────────────────────────────
const NG_STEPS=[
  {phase:"Step 1 of 3 - Safety Screening",phaseDesc:"We must confirm you are a safe candidate before proceeding.",questions:[
    {id:"ng1",text:"When was your last professional dental exam and cleaning?",options:[
      {label:"Within the past 6 months",flag:false},{label:"6 to 12 months ago",flag:false},{label:"12 to 18 months ago",flag:false},
      {label:"More than 18 months ago",flag:true,reason:"Active dental issues may be present that require in-person evaluation before appliance therapy."},
    ]},
    {id:"ng2",text:"Are you currently experiencing any active tooth pain, throbbing, or gum swelling?",options:[
      {label:"Yes",flag:true,reason:"Active pain or swelling indicates an underlying condition that must be treated in-person before a night guard can be safely fabricated."},
      {label:"No",flag:false},
    ]},
    {id:"ng3",text:"Do you have any noticeably loose teeth, loose fillings, or temporary crowns?",options:[
      {label:"Yes",flag:true,reason:"Taking an impression with loose restorations or teeth can cause injury or an unusable mold."},
      {label:"No",flag:false},
    ]},
    {id:"ng4",text:"Are you currently undergoing active orthodontic treatment (braces or clear aligners)?",options:[
      {label:"Yes",flag:true,reason:"Active orthodontic treatment changes your bite continuously - a custom guard would become ill-fitting within weeks."},
      {label:"No",flag:false},
    ]},
    {id:"ng5",text:"Do you experience your jaw locking open or closed, or severe pain in your jaw joint when chewing?",options:[
      {label:"Yes",flag:true,reason:"Severe TMJ dysfunction requires in-person evaluation and a specialized occlusal splint - not a standard night guard."},
      {label:"No",flag:false},
    ]},
  ]},
  {phase:"Step 2 of 3 - Restorative History",phaseDesc:"Help us understand your existing dental work so we protect it correctly.",questions:[
    {id:"ng6",text:"Do you have cosmetic porcelain veneers or multiple dental crowns on your FRONT teeth?",options:[
      {label:"Yes - I have front veneers or crowns",flag:false,forceHybrid:true},
      {label:"No",flag:false},
    ]},
    {id:"ng7",text:"Do you have dental crowns or bridges on your BACK teeth?",options:[
      {label:"Yes - I have back crowns or a bridge",flag:false,favorHybrid:true},
      {label:"No",flag:false},
    ]},
  ]},
  {phase:"Step 3 of 3 - Habits and History",phaseDesc:"Tell us about your grinding habits so we can match you to the right material.",questions:[
    {id:"ng8",text:"How would you describe your nighttime grinding or clenching?",options:[
      {label:"Mild to Moderate - occasional morning jaw stiffness or light clicking",flag:false,severity:"mild"},
      {label:"Severe - constant loud grinding, severe tooth fatigue, or history of chipped or cracked teeth",flag:false,severity:"severe"},
    ]},
    {id:"ng9",text:"Have you worn a custom night guard before?",options:[
      {label:"Never worn one before",flag:false,history:"new"},
      {label:"Yes - it felt too bulky or hard to sleep in",flag:false,history:"bulky"},
      {label:"Yes - I chewed completely through it",flag:false,history:"chewed"},
    ]},
  ]},
];

const NG_OUTCOMES={
  hybrid:{productId:3,name:"Hybrid Hard/Soft Night Guard",price:165,color:COLORS.clinicalBlue,colorLight:COLORS.clinicalBlueLight,tagline:"The gold standard for your situation.",why:"Based on your responses, the Hybrid Guard is your ideal match. Its hard outer shell absorbs grinding forces while the soft inner liner protects your existing dental work and maximizes comfort.",features:["Hard outer layer for maximum durability","Soft inner liner protects crowns and veneers","Best for mild-to-moderate grinders","Most prescribed guard by dentists"]},
  hard:{productId:2,name:"Hard Night Guard",price:160,color:COLORS.sage,colorLight:COLORS.sageLight,tagline:"Maximum protection for serious grinders.",why:"Your grinding pattern indicates significant wear forces. The Hard Guard is fabricated from ultra-dense rigid acrylic engineered to outlast heavy grinding where softer materials fail.",features:["100% rigid acrylic for maximum longevity","Designed for severe destructive grinding","Dentist-grade material specification","Takes the wear so your teeth do not"]},
  soft:{productId:1,name:"Soft Night Guard",price:150,color:"#4A7C6F",colorLight:COLORS.sageLight,tagline:"Comfort-first protection for light clenchers.",why:"Your history with bulky guards and lighter grinding pattern make the Soft Guard the right choice. Its flexible thermoplastic material is monomer-free and activates in warm water for a custom fit.",features:["Lightweight flexible thermoplastic","Monomer-free - ideal for sensitivity","Activates in warm water for perfect fit","Best compliance rate of any guard type"]},
};

const NightGuardFunnel=({onClose,onBuyProduct})=>{
  const [phaseIdx,setPhaseIdx]=useState(0);
  const [qIdx,setQIdx]=useState(0);
  const [answers,setAnswers]=useState({});
  const [disqualified,setDisqualified]=useState(null);
  const [result,setResult]=useState(null);

  const currentPhase=NG_STEPS[phaseIdx];
  const currentQ=currentPhase&&currentPhase.questions[qIdx];
  const totalQ=NG_STEPS.reduce((a,s)=>a+s.questions.length,0);
  const answeredSoFar=NG_STEPS.slice(0,phaseIdx).reduce((a,s)=>a+s.questions.length,0)+qIdx;
  const progress=(answeredSoFar/totalQ)*100;

  const computeResult=(ans)=>{
    const a6=ans["ng6"];const a7=ans["ng7"];const a8=ans["ng8"];const a9=ans["ng9"];
    if(a6&&a6.forceHybrid) return "hybrid";
    if(a7&&a7.favorHybrid) return "hybrid";
    if(a8&&a8.severity==="severe") return "hard";
    if(a9&&a9.history==="chewed") return "hard";
    if(a8&&a8.severity==="mild"&&a9&&a9.history==="bulky") return "soft";
    return "hybrid";
  };

  const handleAnswer=(option)=>{
    const newAnswers={...answers,[currentQ.id]:option};
    setAnswers(newAnswers);
    if(option.flag){setDisqualified(option.reason);return;}
    const phaseQs=currentPhase.questions;
    if(qIdx<phaseQs.length-1){setTimeout(()=>setQIdx(i=>i+1),280);}
    else if(phaseIdx<NG_STEPS.length-1){setTimeout(()=>{setPhaseIdx(p=>p+1);setQIdx(0);},280);}
    else{setTimeout(()=>setResult(computeResult(newAnswers)),280);}
  };

  const outcome=result?NG_OUTCOMES[result]:null;

  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(28,43,58,0.65)",backdropFilter:"blur(6px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:24,width:"100%",maxWidth:600,position:"relative",boxShadow:"0 32px 80px rgba(28,43,58,0.25)",overflow:"hidden",maxHeight:"92vh",overflowY:"auto"}}>
        {disqualified&&(
          <div>
            <div style={{background:"linear-gradient(135deg,#9B4A4A,#7a3636)",padding:"36px 36px 28px",textAlign:"center"}}>
              <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:28,color:"#fff",fontWeight:800}}>!</div>
              <h2 style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 6px"}}>We Cannot Safely Proceed</h2>
            </div>
            <div style={{padding:"32px 36px"}}>
              <div style={{background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose,borderRadius:14,padding:"20px 24px",marginBottom:20}}>
                <div style={{fontSize:12,fontWeight:700,color:COLORS.rose,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em"}}>Why we stopped here</div>
                <p style={{fontSize:14,color:"#6B3030",lineHeight:1.75,margin:0}}>{disqualified}</p>
              </div>
              <div style={{background:COLORS.canvas,borderRadius:14,padding:"20px 24px",marginBottom:28,border:"1px solid "+COLORS.border}}>
                <p style={{fontSize:14,color:COLORS.navy,lineHeight:1.8,margin:0,fontWeight:500}}>Based on your responses, a remote custom appliance may not be safe for you at this time. We highly recommend scheduling an in-person exam with a local dentist.</p>
              </div>
              <button onClick={onClose} style={{width:"100%",padding:"14px",borderRadius:12,background:COLORS.sand,border:"none",cursor:"pointer",fontSize:14,fontWeight:700,color:COLORS.navy}}>Close and Find a Local Dentist</button>
            </div>
          </div>
        )}
        {result&&outcome&&(
          <div>
            <div style={{background:"linear-gradient(135deg,"+outcome.color+" 0%,"+outcome.color+"cc 100%)",padding:"36px 36px 28px",textAlign:"center"}}>
              <div style={{display:"inline-block",background:"rgba(255,255,255,0.2)",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 14px",borderRadius:20,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:16}}>Clinically Approved</div>
              <div style={{width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.15)",border:"2px solid rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}>
                <img src={PRODUCT_IMAGES[outcome.productId]} alt={outcome.name} style={{width:64,height:64,objectFit:"cover",borderRadius:"50%"}}/>
              </div>
              <h2 style={{fontSize:24,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 6px"}}>{outcome.name}</h2>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.8)",margin:0,fontStyle:"italic"}}>{outcome.tagline}</p>
            </div>
            <div style={{padding:"28px 36px"}}>
              <div style={{background:outcome.colorLight,borderRadius:14,padding:"20px 24px",marginBottom:20,border:"1px solid "+outcome.color+"33"}}>
                <div style={{fontSize:11,fontWeight:700,color:outcome.color,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>Why this guard was recommended for you</div>
                <p style={{fontSize:14,color:COLORS.navy,lineHeight:1.75,margin:0}}>{outcome.why}</p>
              </div>
              <div style={{marginBottom:20}}>
                {outcome.features.map((f,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid "+COLORS.border}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:outcome.colorLight,border:"1.5px solid "+outcome.color+"66",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5l3 3 4-4" stroke={outcome.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                    </div>
                    <span style={{fontSize:13,color:COLORS.navy,fontWeight:500}}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{background:COLORS.clinicalBlueLight,borderRadius:12,padding:"14px 18px",marginBottom:24,fontSize:12,color:COLORS.clinicalBlueDark,lineHeight:1.65}}>
                <strong>Dentist review required before fabrication.</strong> A licensed dentist will review your screening answers and intraoral photos before your appliance enters the lab.
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:16,borderTop:"1px solid "+COLORS.border}}>
                <div>
                  <div style={{fontSize:30,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif"}}>${outcome.price}</div>
                  <div style={{fontSize:11,color:COLORS.muted}}>one-time - free shipping - Superbill included</div>
                  <div style={{fontSize:10,color:"#92650A",fontWeight:600,marginTop:2}}>FSA/HSA eligible</div>
                </div>
                <button onClick={()=>onBuyProduct(PRODUCTS.find(p=>p.id===outcome.productId))}
                  onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlueDark;}}
                  onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}}
                  style={{background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:12,padding:"14px 28px",fontSize:14,fontWeight:700,cursor:"pointer",transition:"all 0.18s"}}>
                  Get My Guard
                </button>
              </div>
            </div>
          </div>
        )}
        {!disqualified&&!result&&currentQ&&(
          <div>
            <div style={{background:COLORS.clinicalBlueLight,padding:"24px 36px 20px",borderBottom:"1px solid "+COLORS.border}}>
              <button onClick={onClose} style={{position:"absolute",top:16,right:16,background:"rgba(0,0,0,0.08)",border:"none",borderRadius:50,width:32,height:32,cursor:"pointer",fontSize:16,color:COLORS.muted,display:"flex",alignItems:"center",justifyContent:"center"}}>x</button>
              <div style={{fontSize:10,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Night Guard Clinical Assessment</div>
              <div style={{fontSize:16,fontWeight:700,color:COLORS.navy,marginBottom:4}}>{currentPhase.phase}</div>
              <div style={{fontSize:12,color:COLORS.muted,marginBottom:16}}>{currentPhase.phaseDesc}</div>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                <span style={{fontSize:11,color:COLORS.muted}}>Question {answeredSoFar+1} of {totalQ}</span>
                <span style={{fontSize:11,color:COLORS.clinicalBlue,fontWeight:700}}>{Math.round(progress)}%</span>
              </div>
              <div style={{height:4,background:COLORS.clinicalBlue+"22",borderRadius:4}}>
                <div style={{height:"100%",width:progress+"%",background:COLORS.clinicalBlue,borderRadius:4,transition:"width 0.3s"}}/>
              </div>
            </div>
            <div style={{padding:"32px 36px"}}>
              <h3 style={{fontSize:19,fontWeight:700,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 24px",lineHeight:1.4}}>{currentQ.text}</h3>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {currentQ.options.map((opt,i)=>(
                  <button key={i} onClick={()=>handleAnswer(opt)}
                    style={{padding:"15px 18px",borderRadius:12,border:"1.5px solid "+COLORS.border,background:"#fff",color:COLORS.navy,fontSize:14,fontWeight:500,cursor:"pointer",textAlign:"left",transition:"all 0.15s",display:"flex",alignItems:"center",gap:12}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=COLORS.clinicalBlue;e.currentTarget.style.background=COLORS.clinicalBlueLight;}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor=COLORS.border;e.currentTarget.style.background="#fff";}}>
                    <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",background:COLORS.sand,color:COLORS.muted,fontSize:11,fontWeight:700,flexShrink:0}}>{String.fromCharCode(65+i)}</span>
                    {opt.label}
                  </button>
                ))}
              </div>
              {(phaseIdx>0||qIdx>0)&&(
                <button onClick={()=>{if(qIdx>0)setQIdx(i=>i-1);else{setPhaseIdx(p=>p-1);setQIdx(NG_STEPS[phaseIdx-1].questions.length-1);};}} style={{marginTop:20,background:"none",border:"none",color:COLORS.muted,fontSize:13,cursor:"pointer",fontWeight:600}}>Back</button>
              )}
            </div>
            <div style={{padding:"12px 36px 20px",borderTop:"1px solid "+COLORS.border,background:COLORS.canvas}}>
              <p style={{fontSize:11,color:COLORS.muted,margin:0,textAlign:"center",lineHeight:1.6}}>No personal information collected in this screening. A licensed dentist reviews all orders before fabrication.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ── RETAINER FUNNEL ───────────────────────────────────────────────────────────
const RT_STEPS=[
  {phase:"Step 1 of 3 - Safety Screening",phaseDesc:"We must confirm a remote retainer is clinically safe for you right now.",questions:[
    {id:"rq1",text:"When was your last professional dental exam and cleaning?",options:[{label:"Within the past 6 months",flag:false},{label:"6 to 12 months ago",flag:false},{label:"12 to 18 months ago",flag:false},{label:"More than 18 months ago",flag:true,reason:"Active dental issues may be present. Please schedule a dental exam before a new retainer."}]},
    {id:"rq2",text:"Are you experiencing any active tooth pain, throbbing, or gum swelling?",options:[{label:"Yes",flag:true,reason:"Active pain indicates an underlying condition that must be treated in person first."},{label:"No",flag:false}]},
    {id:"rq3",text:"Do you have any loose teeth, loose fillings, or temporary crowns?",options:[{label:"Yes",flag:true,reason:"Taking an impression with loose restorations can cause injury or an unusable mold."},{label:"No",flag:false}]},
    {id:"rq4",text:"Are you currently undergoing active orthodontic treatment?",options:[{label:"Yes",flag:true,reason:"Active treatment changes tooth positions continuously. A retainer fabricated now would be obsolete within weeks."},{label:"No",flag:false}]},
    {id:"rq5",text:"Do you have a dental appointment for a new crown or implant within the next 30 days?",options:[{label:"Yes",flag:true,reason:"Fabricating a retainer before structural anatomy changes will make it instantly obsolete."},{label:"No",flag:false}]},
  ]},
  {phase:"Step 2 of 3 - Expectation Alignment",phaseDesc:"We want to make sure our retainer is the right tool for your goal.",questions:[
    {id:"rq6",text:"What is the primary goal for your new clear retainer?",options:[
      {label:"To hold my current teeth exactly where they are and prevent future shifting.",flag:false},
      {label:"To straighten crooked teeth, close new gaps, or fix crowding.",flag:true,expectation:true,reason:"Our retainers are passive appliances designed solely to hold your current alignment. They cannot move or straighten teeth. For active correction, please consult an orthodontist for clear aligner therapy."},
    ]},
  ]},
  {phase:"Step 3 of 3 - Clinical Details",phaseDesc:"A few final details so we can fabricate your retainer correctly.",questions:[
    {id:"rq7",text:"Do you have a permanent metal retainer wire bonded to the back of your teeth?",options:[{label:"Yes, on my upper teeth",flag:false,wire:"upper"},{label:"Yes, on my lower teeth",flag:false,wire:"lower"},{label:"Yes, on both upper and lower",flag:false,wire:"both"},{label:"No permanent wire",flag:false,wire:null}]},
    {id:"rq8",text:"Do you currently wear a night guard or other oral appliance at night?",options:[{label:"Yes",flag:false,dual:true},{label:"No",flag:false,dual:false}]},
  ]},
];

const RetainerFunnel=({onClose,onBuyProduct})=>{
  const [phaseIdx,setPhaseIdx]=useState(0);
  const [qIdx,setQIdx]=useState(0);
  const [answers,setAnswers]=useState({});
  const [disqualified,setDisqualified]=useState(null);
  const [expectDQ,setExpectDQ]=useState(false);
  const [approved,setApproved]=useState(false);
  const currentPhase=RT_STEPS[phaseIdx];
  const currentQ=currentPhase&&currentPhase.questions[qIdx];
  const totalQ=RT_STEPS.reduce((a,s)=>a+s.questions.length,0);
  const answeredSoFar=RT_STEPS.slice(0,phaseIdx).reduce((a,s)=>a+s.questions.length,0)+qIdx;
  const progress=(answeredSoFar/totalQ)*100;
  const handleAnswer=(option)=>{
    const newAns={...answers,[currentQ.id]:option};setAnswers(newAns);
    if(option.flag){if(option.expectation)setExpectDQ(true);else setDisqualified(option.reason);return;}
    const phaseQs=currentPhase.questions;
    if(qIdx<phaseQs.length-1)setTimeout(()=>setQIdx(i=>i+1),280);
    else if(phaseIdx<RT_STEPS.length-1)setTimeout(()=>{setPhaseIdx(p=>p+1);setQIdx(0);},280);
    else setTimeout(()=>setApproved(true),280);
  };
  const wire=answers["rq7"]&&answers["rq7"].wire;
  const dual=answers["rq8"]&&answers["rq8"].dual;
  const C="#6B4A8A";const CL="#F3EEF8";const CB="#C8B0E0";
  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(28,43,58,0.65)",backdropFilter:"blur(6px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:24,width:"100%",maxWidth:600,position:"relative",boxShadow:"0 32px 80px rgba(28,43,58,0.25)",overflow:"hidden",maxHeight:"92vh",overflowY:"auto"}}>
        {disqualified&&(<div><div style={{background:"linear-gradient(135deg,#9B4A4A,#7a3636)",padding:"36px",textAlign:"center"}}><h2 style={{color:"#fff",fontFamily:"Georgia, serif",fontSize:22,fontWeight:800,margin:0}}>We Cannot Safely Proceed</h2></div><div style={{padding:"32px 36px"}}><div style={{background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose,borderRadius:14,padding:"20px",marginBottom:20}}><p style={{fontSize:14,color:"#6B3030",lineHeight:1.75,margin:0}}>{disqualified}</p></div><button onClick={onClose} style={{width:"100%",padding:"14px",borderRadius:12,background:COLORS.sand,border:"none",cursor:"pointer",fontSize:14,fontWeight:700,color:COLORS.navy}}>Close</button></div></div>)}
        {expectDQ&&(<div><div style={{background:"linear-gradient(135deg,#5C4A7A,#6B4A8A)",padding:"36px",textAlign:"center"}}><h2 style={{color:"#fff",fontFamily:"Georgia, serif",fontSize:22,fontWeight:800,margin:0}}>Not Quite the Right Tool</h2></div><div style={{padding:"32px 36px"}}><div style={{background:CL,border:"1.5px solid "+CB,borderRadius:14,padding:"20px",marginBottom:20}}><p style={{fontSize:14,color:COLORS.navy,lineHeight:1.75,margin:0}}>Our retainers are precision-engineered passive appliances that lock your current alignment in place. They cannot move or straighten teeth. For active correction, consult an orthodontist for clear aligner therapy. Once treatment is complete, come back and we will fit you perfectly.</p></div><button onClick={onClose} style={{width:"100%",padding:"14px",borderRadius:12,background:COLORS.sand,border:"none",cursor:"pointer",fontSize:14,fontWeight:700,color:COLORS.navy}}>Close</button></div></div>)}
        {approved&&(<div><div style={{background:"linear-gradient(135deg,#3a6358,"+COLORS.sage+")",padding:"36px",textAlign:"center"}}><div style={{display:"inline-block",background:"rgba(255,255,255,0.2)",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 14px",borderRadius:20,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:16}}>Clinically Approved</div><div style={{width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.15)",border:"2px solid rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}><img src={PRODUCT_IMAGES[6]} alt="Retainer" style={{width:64,height:64,objectFit:"cover",borderRadius:"50%"}}/></div><h2 style={{fontSize:24,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 8px"}}>Excellent Candidate</h2><p style={{fontSize:14,color:"rgba(255,255,255,0.85)",margin:0}}>Custom Invisible Retainers</p></div><div style={{padding:"28px 36px"}}><div style={{background:COLORS.sageLight,border:"1px solid "+COLORS.sage+"44",borderRadius:14,padding:"20px",marginBottom:16}}><p style={{fontSize:14,color:COLORS.navy,lineHeight:1.75,margin:0}}><strong>Approved!</strong> You are an excellent candidate. This appliance is designed to perfectly preserve your current tooth position - not to move or correct teeth.</p></div>{wire&&(<div style={{background:COLORS.clinicalBlueLight,border:"1px solid "+COLORS.clinicalBlue+"44",borderRadius:12,padding:"16px",marginBottom:16}}><p style={{fontSize:13,color:COLORS.clinicalBlueDark,lineHeight:1.65,margin:0}}><strong>Permanent wire noted.</strong> Our lab will custom-block out your permanent wire anatomy so your clear retainer snaps perfectly over it without breaking the bond.</p></div>)}{dual&&(<div style={{background:"#FFFBEB",border:"1px solid #F5D87A",borderRadius:12,padding:"16px",marginBottom:16}}><p style={{fontSize:13,color:"#5C4400",lineHeight:1.65,margin:0}}><strong>Dual appliance noted.</strong> Full-coverage retainers cannot be worn simultaneously with another appliance on the same arch. Plan to wear your clear retainer during daytime hours.</p></div>)}<div style={{background:COLORS.canvas,border:"1px solid "+COLORS.border,borderRadius:12,padding:"16px",marginBottom:24}}><p style={{fontSize:13,color:COLORS.muted,lineHeight:1.7,margin:0}}>A licensed dentist will personally review your dental history and physical impressions before laboratory fabrication begins.</p></div><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:16,borderTop:"1px solid "+COLORS.border}}><div><div style={{fontSize:30,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif"}}>$169</div><div style={{fontSize:11,color:COLORS.muted}}>one-time - ships as a pair</div><div style={{fontSize:10,color:"#92650A",fontWeight:600}}>FSA/HSA eligible</div></div><button onClick={()=>onBuyProduct(PRODUCTS.find(p=>p.id===6))} onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlueDark;}} onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}} style={{background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:12,padding:"14px 28px",fontSize:14,fontWeight:700,cursor:"pointer"}}>Get My Retainers</button></div></div></div>)}
        {!disqualified&&!expectDQ&&!approved&&currentQ&&(<div><div style={{background:CL,padding:"24px 36px 20px",borderBottom:"1px solid "+CB}}><button onClick={onClose} style={{position:"absolute",top:16,right:16,background:"rgba(0,0,0,0.08)",border:"none",borderRadius:50,width:32,height:32,cursor:"pointer",fontSize:16,color:COLORS.muted}}>x</button><div style={{fontSize:10,fontWeight:700,color:C,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Invisible Retainer Assessment</div><div style={{fontSize:16,fontWeight:700,color:COLORS.navy,marginBottom:4}}>{currentPhase.phase}</div><div style={{fontSize:12,color:COLORS.muted,marginBottom:16}}>{currentPhase.phaseDesc}</div><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:11,color:COLORS.muted}}>Question {answeredSoFar+1} of {totalQ}</span><span style={{fontSize:11,color:C,fontWeight:700}}>{Math.round(progress)}%</span></div><div style={{height:4,background:CB+"44",borderRadius:4}}><div style={{height:"100%",width:progress+"%",background:C,borderRadius:4,transition:"width 0.3s"}}/></div></div><div style={{padding:"32px 36px"}}><h3 style={{fontSize:19,fontWeight:700,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 24px",lineHeight:1.4}}>{currentQ.text}</h3><div style={{display:"flex",flexDirection:"column",gap:10}}>{currentQ.options.map((opt,i)=>(<button key={i} onClick={()=>handleAnswer(opt)} style={{padding:"15px 18px",borderRadius:12,border:"1.5px solid "+COLORS.border,background:"#fff",color:COLORS.navy,fontSize:14,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:12}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C;e.currentTarget.style.background=CL;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=COLORS.border;e.currentTarget.style.background="#fff";}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",background:COLORS.sand,color:COLORS.muted,fontSize:11,fontWeight:700,flexShrink:0}}>{String.fromCharCode(65+i)}</span>{opt.label}</button>))}</div>{(phaseIdx>0||qIdx>0)&&(<button onClick={()=>{if(qIdx>0)setQIdx(i=>i-1);else{setPhaseIdx(p=>p-1);setQIdx(RT_STEPS[phaseIdx-1].questions.length-1);};}} style={{marginTop:20,background:"none",border:"none",color:COLORS.muted,fontSize:13,cursor:"pointer",fontWeight:600}}>Back</button>)}</div><div style={{padding:"12px 36px 20px",borderTop:"1px solid "+COLORS.border,background:COLORS.canvas}}><p style={{fontSize:11,color:COLORS.muted,margin:0,textAlign:"center"}}>No personal information collected. A licensed dentist reviews all cases before fabrication.</p></div></div>)}
      </div>
    </div>
  );
};

// ── BLEACH FUNNEL ─────────────────────────────────────────────────────────────
const BL_STEPS=[
  {phase:"Step 1 of 3 - Safety Screening",phaseDesc:"We must confirm bleaching gel is clinically safe for you.",questions:[
    {id:"bq1",text:"When was your last professional dental exam and cleaning?",options:[{label:"Within the past 6 months",flag:false},{label:"6 to 12 months ago",flag:false},{label:"12 to 18 months ago",flag:false},{label:"More than 18 months ago",flag:true,reason:"Professional bleaching gel over undiagnosed decay risks severe pulpal damage. Please see a dentist first."}]},
    {id:"bq2",text:"Are you experiencing any active tooth pain, throbbing, or severe sensitivity?",options:[{label:"Yes",flag:true,reason:"Active decay or cracked teeth will experience significant pain from professional-grade bleaching gel."},{label:"No",flag:false}]},
    {id:"bq3",text:"Do you have loose teeth, bleeding gums, or raw spots in your mouth?",options:[{label:"Yes",flag:true,reason:"Unhealthy gum tissue can experience chemical burns from whitening agents."},{label:"No",flag:false}]},
    {id:"bq4",text:"Are you currently pregnant or breastfeeding?",options:[{label:"Yes",flag:true,reason:"The ADA recommends delaying elective whitening during pregnancy and breastfeeding."},{label:"No",flag:false}]},
  ]},
  {phase:"Step 2 of 3 - Restorative Landscape",phaseDesc:"Help us understand your existing dental work and set the right expectations.",questions:[
    {id:"bq5",text:"Do you have tooth-colored fillings, porcelain crowns, or veneers on your front teeth?",options:[{label:"Yes",flag:false,hasRestorations:true},{label:"No",flag:false,hasRestorations:false}]},
    {id:"bq6",text:"Do you have white spots or a history of severe internal staining such as tetracycline staining?",options:[{label:"Yes - I have white spots or internal staining",flag:false,hasStaining:true},{label:"No",flag:false,hasStaining:false}]},
  ]},
  {phase:"Step 3 of 3 - Sensitivity Profile",phaseDesc:"This determines the correct gel strength for your teeth.",questions:[
    {id:"bq7",text:"Do you experience tooth sensitivity to cold drinks, air, or sweet foods?",options:[{label:"Yes - I have noticeable sensitivity",flag:false,sensitive:true},{label:"Occasionally - mild and manageable",flag:false,sensitive:false,mild:true},{label:"No - my teeth feel strong and comfortable",flag:false,sensitive:false}]},
    {id:"bq8",text:"Have you whitened before and experienced discomfort?",options:[{label:"Yes - it was uncomfortable",flag:false,priorSensitivity:true},{label:"Yes - no sensitivity at all",flag:false,priorSensitivity:false},{label:"No - I have never whitened before",flag:false,priorSensitivity:false}]},
  ]},
];

const BleachFunnel=({onClose,onBuyProduct})=>{
  const [phaseIdx,setPhaseIdx]=useState(0);
  const [qIdx,setQIdx]=useState(0);
  const [answers,setAnswers]=useState({});
  const [disqualified,setDisqualified]=useState(null);
  const [approved,setApproved]=useState(false);
  const currentPhase=BL_STEPS[phaseIdx];
  const currentQ=currentPhase&&currentPhase.questions[qIdx];
  const totalQ=BL_STEPS.reduce((a,s)=>a+s.questions.length,0);
  const answeredSoFar=BL_STEPS.slice(0,phaseIdx).reduce((a,s)=>a+s.questions.length,0)+qIdx;
  const progress=(answeredSoFar/totalQ)*100;
  const handleAnswer=(option)=>{
    const newAns={...answers,[currentQ.id]:option};setAnswers(newAns);
    if(option.flag){setDisqualified(option.reason);return;}
    if(qIdx<currentPhase.questions.length-1)setTimeout(()=>setQIdx(i=>i+1),280);
    else if(phaseIdx<BL_STEPS.length-1)setTimeout(()=>{setPhaseIdx(p=>p+1);setQIdx(0);},280);
    else setTimeout(()=>setApproved(true),280);
  };
  const hasRes=answers["bq5"]&&answers["bq5"].hasRestorations;
  const hasSt=answers["bq6"]&&answers["bq6"].hasStaining;
  const isSens=(answers["bq7"]&&(answers["bq7"].sensitive||answers["bq7"].mild))||(answers["bq8"]&&answers["bq8"].priorSensitivity);
  const G="#B8860B";const GL="#FFFBEB";const GB="#F5D87A";
  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(28,43,58,0.65)",backdropFilter:"blur(6px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:24,width:"100%",maxWidth:600,position:"relative",boxShadow:"0 32px 80px rgba(28,43,58,0.25)",overflow:"hidden",maxHeight:"92vh",overflowY:"auto"}}>
        {disqualified&&(<div><div style={{background:"linear-gradient(135deg,#9B4A4A,#7a3636)",padding:"36px",textAlign:"center"}}><h2 style={{color:"#fff",fontFamily:"Georgia, serif",fontSize:22,fontWeight:800,margin:0}}>We Cannot Safely Proceed</h2></div><div style={{padding:"32px 36px"}}><div style={{background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose,borderRadius:14,padding:"20px",marginBottom:20}}><p style={{fontSize:14,color:"#6B3030",lineHeight:1.75,margin:0}}>{disqualified}</p></div><button onClick={onClose} style={{width:"100%",padding:"14px",borderRadius:12,background:COLORS.sand,border:"none",cursor:"pointer",fontSize:14,fontWeight:700,color:COLORS.navy}}>Close and Find a Local Dentist</button></div></div>)}
        {approved&&(<div><div style={{background:"linear-gradient(135deg,#8B6508,"+G+")",padding:"36px",textAlign:"center"}}><div style={{display:"inline-block",background:"rgba(255,255,255,0.2)",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 14px",borderRadius:20,marginBottom:16}}>Clinically Approved</div><div style={{width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.15)",border:"2px solid rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}><img src={PRODUCT_IMAGES[4]} alt="Bleaching Trays" style={{width:64,height:64,objectFit:"cover",borderRadius:"50%"}}/></div><h2 style={{fontSize:24,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 8px"}}>Excellent Candidate</h2><p style={{fontSize:14,color:"rgba(255,255,255,0.85)",margin:0}}>Custom Bleaching Trays</p></div><div style={{padding:"28px 36px"}}><div style={{background:GL,border:"1.5px solid "+GB,borderRadius:14,padding:"20px",marginBottom:16}}><div style={{fontSize:11,fontWeight:700,color:G,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>Recommended Gel Profile - {isSens?"10% Carbamide Peroxide (Sensitive Formula)":"16-22% Carbamide Peroxide (Maximum Strength)"}</div><p style={{fontSize:14,color:"#5C4400",lineHeight:1.75,margin:0}}>{isSens?"We recommend starting with a gentler 10% Carbamide Peroxide formula. Excellent results with significantly lower sensitivity risk.":"Your teeth are strong candidates for maximum-strength whitening gel. A 16-22% Carbamide Peroxide formula delivers faster, more dramatic results."}</p></div>{hasRes&&(<div style={{background:COLORS.amberLight,border:"1px solid "+GB,borderRadius:12,padding:"16px",marginBottom:16}}><div style={{fontSize:12,fontWeight:700,color:G,marginBottom:6}}>Important - Cosmetic Notice</div><p style={{fontSize:13,color:"#5C4400",lineHeight:1.7,margin:0}}>Bleaching gel only alters natural tooth structure. It will NOT change the color of existing fillings, crowns, or veneers. You may notice a color mismatch after whitening.</p></div>)}{hasSt&&(<div style={{background:COLORS.clinicalBlueLight,border:"1px solid "+COLORS.clinicalBlue+"44",borderRadius:12,padding:"16px",marginBottom:16}}><p style={{fontSize:13,color:COLORS.clinicalBlueDark,lineHeight:1.7,margin:0}}>White spot lesions will temporarily appear more noticeable during bleaching before blending. Deep tetracycline staining responds poorly to topical agents.</p></div>)}<div style={{background:COLORS.canvas,border:"1px solid "+COLORS.border,borderRadius:12,padding:"16px",marginBottom:24}}><p style={{fontSize:13,color:COLORS.muted,lineHeight:1.7,margin:0}}>A licensed dentist will review your dental history and physical impressions before your custom trays enter fabrication.</p></div><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:16,borderTop:"1px solid "+COLORS.border}}><div><div style={{fontSize:30,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif"}}>$155</div><div style={{fontSize:11,color:COLORS.muted}}>one-time - gel not included</div><div style={{fontSize:10,color:"#92650A",fontWeight:600}}>FSA/HSA eligible</div></div><button onClick={()=>onBuyProduct(PRODUCTS.find(p=>p.id===4))} onMouseEnter={e=>{e.currentTarget.style.background="#8B6508";}} onMouseLeave={e=>{e.currentTarget.style.background=G;}} style={{background:G,color:"#fff",border:"none",borderRadius:12,padding:"14px 28px",fontSize:14,fontWeight:700,cursor:"pointer"}}>Get My Bleaching Trays</button></div></div></div>)}
        {!disqualified&&!approved&&currentQ&&(<div><div style={{background:GL,padding:"24px 36px 20px",borderBottom:"1px solid "+GB}}><button onClick={onClose} style={{position:"absolute",top:16,right:16,background:"rgba(0,0,0,0.08)",border:"none",borderRadius:50,width:32,height:32,cursor:"pointer",fontSize:16,color:COLORS.muted}}>x</button><div style={{fontSize:10,fontWeight:700,color:G,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Bleaching Tray Assessment</div><div style={{fontSize:16,fontWeight:700,color:COLORS.navy,marginBottom:4}}>{currentPhase.phase}</div><div style={{fontSize:12,color:COLORS.muted,marginBottom:16}}>{currentPhase.phaseDesc}</div><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:11,color:COLORS.muted}}>Question {answeredSoFar+1} of {totalQ}</span><span style={{fontSize:11,color:G,fontWeight:700}}>{Math.round(progress)}%</span></div><div style={{height:4,background:GB+"88",borderRadius:4}}><div style={{height:"100%",width:progress+"%",background:G,borderRadius:4,transition:"width 0.3s"}}/></div></div><div style={{padding:"32px 36px"}}><h3 style={{fontSize:19,fontWeight:700,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 24px",lineHeight:1.4}}>{currentQ.text}</h3><div style={{display:"flex",flexDirection:"column",gap:10}}>{currentQ.options.map((opt,i)=>(<button key={i} onClick={()=>handleAnswer(opt)} style={{padding:"15px 18px",borderRadius:12,border:"1.5px solid "+COLORS.border,background:"#fff",color:COLORS.navy,fontSize:14,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:12}} onMouseEnter={e=>{e.currentTarget.style.borderColor=G;e.currentTarget.style.background=GL;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=COLORS.border;e.currentTarget.style.background="#fff";}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",background:COLORS.sand,color:COLORS.muted,fontSize:11,fontWeight:700,flexShrink:0}}>{String.fromCharCode(65+i)}</span>{opt.label}</button>))}</div>{(phaseIdx>0||qIdx>0)&&(<button onClick={()=>{if(qIdx>0)setQIdx(i=>i-1);else{setPhaseIdx(p=>p-1);setQIdx(BL_STEPS[phaseIdx-1].questions.length-1);};}} style={{marginTop:20,background:"none",border:"none",color:COLORS.muted,fontSize:13,cursor:"pointer",fontWeight:600}}>Back</button>)}</div><div style={{padding:"12px 36px 20px",borderTop:"1px solid "+COLORS.border,background:COLORS.canvas}}><p style={{fontSize:11,color:COLORS.muted,margin:0,textAlign:"center"}}>No personal information collected. A licensed dentist reviews all cases before fabrication.</p></div></div>)}
      </div>
    </div>
  );
};

// ── SPORT FUNNEL ──────────────────────────────────────────────────────────────
const SP_STEPS=[
  {phase:"Step 1 of 2 - Safety Screening",phaseDesc:"We must confirm a custom sports guard is clinically safe for you right now.",questions:[
    {id:"sq1",text:"When was your last professional dental exam and cleaning?",options:[{label:"Within the past 6 months",flag:false},{label:"6 to 12 months ago",flag:false},{label:"12 to 18 months ago",flag:false},{label:"More than 18 months ago",flag:true,reason:"Undiagnosed dental conditions combined with contact sports significantly increases your risk of dental injury."}]},
    {id:"sq2",text:"Are you experiencing any active tooth pain, throbbing, or gum swelling?",options:[{label:"Yes",flag:true,reason:"Active pain indicates an underlying dental condition that must be treated before fabricating a sports guard."},{label:"No",flag:false}]},
    {id:"sq3",text:"Do you have any loose teeth, loose fillings, or temporary dental work?",options:[{label:"Yes",flag:true,reason:"High-viscosity putty impressions can dislodge loose restorations. Contact sports with compromised structures poses severe injury risk."},{label:"No",flag:false}]},
  ]},
  {phase:"Step 2 of 2 - Athletic Profile",phaseDesc:"Tell us about your sport so our lab can fabricate your guard to the correct specification.",questions:[
    {id:"sq4",text:"Are you currently wearing braces or fixed orthodontic brackets?",options:[{label:"Yes - on my upper teeth only",flag:false,ortho:"upper"},{label:"Yes - on both upper and lower teeth",flag:false,ortho:"dual"},{label:"No - I do not have braces",flag:false,ortho:null}]},
    {id:"sq5",text:"What sport or activity will you primarily use this guard for?",options:[{label:"High-Impact Contact - Football, Hockey, Lacrosse, MMA, Boxing, Wrestling",flag:false,impact:"high"},{label:"Medium-Impact Team Sports - Basketball, Soccer, Field Hockey",flag:false,impact:"medium"},{label:"Fitness or Other Training",flag:false,impact:"low"}]},
  ]},
];

const SportFunnel=({onClose,onBuyProduct})=>{
  const [phaseIdx,setPhaseIdx]=useState(0);
  const [qIdx,setQIdx]=useState(0);
  const [answers,setAnswers]=useState({});
  const [disqualified,setDisqualified]=useState(null);
  const [approved,setApproved]=useState(false);
  const currentPhase=SP_STEPS[phaseIdx];
  const currentQ=currentPhase&&currentPhase.questions[qIdx];
  const totalQ=SP_STEPS.reduce((a,s)=>a+s.questions.length,0);
  const answeredSoFar=SP_STEPS.slice(0,phaseIdx).reduce((a,s)=>a+s.questions.length,0)+qIdx;
  const progress=(answeredSoFar/totalQ)*100;
  const handleAnswer=(option)=>{
    const newAns={...answers,[currentQ.id]:option};setAnswers(newAns);
    if(option.flag){setDisqualified(option.reason);return;}
    if(qIdx<currentPhase.questions.length-1)setTimeout(()=>setQIdx(i=>i+1),280);
    else if(phaseIdx<SP_STEPS.length-1)setTimeout(()=>{setPhaseIdx(p=>p+1);setQIdx(0);},280);
    else setTimeout(()=>setApproved(true),280);
  };
  const ortho=answers["sq4"]&&answers["sq4"].ortho;
  const impact=answers["sq5"]&&answers["sq5"].impact;
  const impactSpec=impact==="high"?"4mm laminated EVA - maximum protection for contact sports":impact==="medium"?"3mm laminated EVA - ADA recommended for organized sports":"3mm streamlined profile - optimized for breathing and communication";
  const SC=COLORS.sage;const SL=COLORS.sageLight;const SB="#A8D4CC";
  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(28,43,58,0.65)",backdropFilter:"blur(6px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:24,width:"100%",maxWidth:600,position:"relative",boxShadow:"0 32px 80px rgba(28,43,58,0.25)",overflow:"hidden",maxHeight:"92vh",overflowY:"auto"}}>
        {disqualified&&(<div><div style={{background:"linear-gradient(135deg,#9B4A4A,#7a3636)",padding:"36px",textAlign:"center"}}><h2 style={{color:"#fff",fontFamily:"Georgia, serif",fontSize:22,fontWeight:800,margin:0}}>We Cannot Safely Proceed</h2></div><div style={{padding:"32px 36px"}}><div style={{background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose,borderRadius:14,padding:"20px",marginBottom:20}}><p style={{fontSize:14,color:"#6B3030",lineHeight:1.75,margin:0}}>{disqualified}</p></div><p style={{fontSize:14,color:COLORS.navy,lineHeight:1.8,margin:"0 0 24px"}}>Based on your responses, a custom sports guard may not be safe for you at this time. We recommend scheduling an in-person dental exam before participating in contact sports.</p><button onClick={onClose} style={{width:"100%",padding:"14px",borderRadius:12,background:COLORS.sand,border:"none",cursor:"pointer",fontSize:14,fontWeight:700,color:COLORS.navy}}>Close and Find a Local Dentist</button></div></div>)}
        {approved&&(<div><div style={{background:"linear-gradient(135deg,#3a6358,"+SC+")",padding:"36px",textAlign:"center"}}><div style={{display:"inline-block",background:"rgba(255,255,255,0.2)",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 14px",borderRadius:20,marginBottom:16}}>Clinically Approved</div><div style={{width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.15)",border:"2px solid rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}><img src={PRODUCT_IMAGES[5]} alt="Sport Guard" style={{width:64,height:64,objectFit:"cover",borderRadius:"50%"}}/></div><h2 style={{fontSize:24,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 8px"}}>Excellent Candidate</h2><p style={{fontSize:14,color:"rgba(255,255,255,0.85)",margin:0}}>Professional-Grade Custom Sport Guard</p></div><div style={{padding:"28px 36px"}}><div style={{background:SL,border:"1.5px solid "+SB,borderRadius:14,padding:"20px",marginBottom:16}}><p style={{fontSize:14,color:COLORS.navy,lineHeight:1.75,margin:0}}><strong>Approved!</strong> You are an excellent candidate for our professional-grade shock-absorbing custom Sports Guard.</p></div><div style={{background:COLORS.canvas,border:"1px solid "+COLORS.border,borderRadius:12,padding:"16px",marginBottom:16}}><div style={{fontSize:11,fontWeight:700,color:COLORS.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Your Guard Specification</div><p style={{fontSize:13,color:COLORS.navy,lineHeight:1.7,margin:0}}>{impactSpec}</p></div>{ortho&&(<div style={{background:COLORS.clinicalBlueLight,border:"1px solid "+COLORS.clinicalBlue+"44",borderRadius:12,padding:"16px",marginBottom:16}}><p style={{fontSize:13,color:COLORS.clinicalBlueDark,lineHeight:1.7,margin:0}}><strong>Orthodontic hardware noted.</strong> Our lab will custom-block out your {ortho==="dual"?"upper and lower brackets":"upper brackets"} so your sports guard fits securely over your braces without damaging them.</p></div>)}<div style={{background:COLORS.canvas,border:"1px solid "+COLORS.border,borderRadius:12,padding:"16px",marginBottom:24}}><p style={{fontSize:13,color:COLORS.muted,lineHeight:1.7,margin:0}}>A licensed dentist will personally review your dental history and physical impressions before our laboratory custom-fabricates your athletic guard.</p></div><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:16,borderTop:"1px solid "+COLORS.border}}><div><div style={{fontSize:30,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif"}}>$175</div><div style={{fontSize:11,color:COLORS.muted}}>one-time - free shipping</div><div style={{fontSize:10,color:"#92650A",fontWeight:600}}>FSA/HSA eligible</div></div><button onClick={()=>onBuyProduct(PRODUCTS.find(p=>p.id===5))} onMouseEnter={e=>{e.currentTarget.style.background="#3a6358";}} onMouseLeave={e=>{e.currentTarget.style.background=SC;}} style={{background:SC,color:"#fff",border:"none",borderRadius:12,padding:"14px 28px",fontSize:14,fontWeight:700,cursor:"pointer"}}>Get My Sport Guard</button></div></div></div>)}
        {!disqualified&&!approved&&currentQ&&(<div><div style={{background:SL,padding:"24px 36px 20px",borderBottom:"1px solid "+SB}}><button onClick={onClose} style={{position:"absolute",top:16,right:16,background:"rgba(0,0,0,0.08)",border:"none",borderRadius:50,width:32,height:32,cursor:"pointer",fontSize:16,color:COLORS.muted}}>x</button><div style={{fontSize:10,fontWeight:700,color:SC,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Sport Guard Assessment</div><div style={{fontSize:16,fontWeight:700,color:COLORS.navy,marginBottom:4}}>{currentPhase.phase}</div><div style={{fontSize:12,color:COLORS.muted,marginBottom:16}}>{currentPhase.phaseDesc}</div><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:11,color:COLORS.muted}}>Question {answeredSoFar+1} of {totalQ}</span><span style={{fontSize:11,color:SC,fontWeight:700}}>{Math.round(progress)}%</span></div><div style={{height:4,background:SB+"88",borderRadius:4}}><div style={{height:"100%",width:progress+"%",background:SC,borderRadius:4,transition:"width 0.3s"}}/></div></div><div style={{padding:"32px 36px"}}><h3 style={{fontSize:19,fontWeight:700,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 24px",lineHeight:1.4}}>{currentQ.text}</h3><div style={{display:"flex",flexDirection:"column",gap:10}}>{currentQ.options.map((opt,i)=>(<button key={i} onClick={()=>handleAnswer(opt)} style={{padding:"15px 18px",borderRadius:12,border:"1.5px solid "+COLORS.border,background:"#fff",color:COLORS.navy,fontSize:14,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:12}} onMouseEnter={e=>{e.currentTarget.style.borderColor=SC;e.currentTarget.style.background=SL;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=COLORS.border;e.currentTarget.style.background="#fff";}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",background:COLORS.sand,color:COLORS.muted,fontSize:11,fontWeight:700,flexShrink:0}}>{String.fromCharCode(65+i)}</span>{opt.label}</button>))}</div>{(phaseIdx>0||qIdx>0)&&(<button onClick={()=>{if(qIdx>0)setQIdx(i=>i-1);else{setPhaseIdx(p=>p-1);setQIdx(SP_STEPS[phaseIdx-1].questions.length-1);};}} style={{marginTop:20,background:"none",border:"none",color:COLORS.muted,fontSize:13,cursor:"pointer",fontWeight:600}}>Back</button>)}</div><div style={{padding:"12px 36px 20px",borderTop:"1px solid "+COLORS.border,background:COLORS.canvas}}><p style={{fontSize:11,color:COLORS.muted,margin:0,textAlign:"center"}}>No personal information collected. A licensed dentist reviews all cases before fabrication.</p></div></div>)}
      </div>
    </div>
  );
};



// ── SPORT GUARD GALLERY ──────────────────────────────────────────────────────
const SP_GALLERY_IMGS = [
  {src: SP_1, caption: "Custom Sport Guard — navy blue 4mm laminated EVA"},
  {src: SP_2, caption: "Dentist-inspected — gloved lab quality check"},
  {src: SP_3, caption: "Close-up — custom tooth impression detail on inner surface"},
  {src: SP_4, caption: "4mm laminated thickness — maximum impact protection"},
  {src: SP_5, caption: "Included with every order — custom case and impression kit"},
];

const SportGallery = () => {
  const [current, setCurrent] = useState(0);
  const total = SP_GALLERY_IMGS.length;
  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);
  return (
    <div style={{marginBottom:32}}>
      <div style={{position:"relative",width:"100%",borderRadius:20,overflow:"hidden",background:"#fff",border:"1px solid "+COLORS.border,minHeight:340,display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 0"}}>
        <img src={SP_GALLERY_IMGS[current].src} alt={SP_GALLERY_IMGS[current].caption}
          style={{width:"75%",maxWidth:440,objectFit:"contain",display:"block",margin:"0 auto",transition:"opacity 0.25s"}}/>
        <button onClick={prev}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={next}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{position:"absolute",bottom:12,right:16,background:"rgba(28,43,58,0.5)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20}}>
          {current+1} / {total}
        </div>
      </div>
      <div style={{textAlign:"center",fontSize:12,color:COLORS.muted,marginTop:10,fontStyle:"italic"}}>
        {SP_GALLERY_IMGS[current].caption}
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:10}}>
        {SP_GALLERY_IMGS.map((_,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{width:i===current?20:8,height:8,borderRadius:4,background:i===current?COLORS.sage:COLORS.border,border:"none",cursor:"pointer",transition:"all 0.2s",padding:0}}/>
        ))}
      </div>
      <div style={{display:"flex",gap:8,marginTop:14,overflowX:"auto",paddingBottom:4}}>
        {SP_GALLERY_IMGS.map((img,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{flexShrink:0,width:72,height:72,borderRadius:10,overflow:"hidden",border:"2px solid "+(i===current?COLORS.sage:COLORS.border),padding:0,cursor:"pointer",background:COLORS.sand,transition:"border-color 0.18s"}}>
            <img src={img.src} alt={img.caption} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </button>
        ))}
      </div>
    </div>
  );
};

// ── WHITENING TRAY GALLERY ───────────────────────────────────────────────────
const WT_GALLERY_IMGS = [
  {src: WT_1, caption: "Custom Bleaching Trays — upper and lower precision-scalloped pair"},
  {src: WT_2, caption: "Hand holding — ultra-thin reservoir tray profile"},
  {src: WT_3, caption: "Close-up — scalloped custom fit hugging every tooth surface"},
  {src: WT_4, caption: "Included with every order — custom case and impression kit"},
];

const WhiteningGallery = () => {
  const [current, setCurrent] = useState(0);
  const total = WT_GALLERY_IMGS.length;
  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);
  return (
    <div style={{marginBottom:32}}>
      <div style={{position:"relative",width:"100%",borderRadius:20,overflow:"hidden",background:"#fff",border:"1px solid "+COLORS.border,minHeight:340,display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 0"}}>
        <img src={WT_GALLERY_IMGS[current].src} alt={WT_GALLERY_IMGS[current].caption}
          style={{width:"85%",maxWidth:480,objectFit:"contain",display:"block",margin:"0 auto",transition:"opacity 0.25s"}}/>
        <button onClick={prev}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={next}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{position:"absolute",bottom:12,right:16,background:"rgba(28,43,58,0.5)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20}}>
          {current+1} / {total}
        </div>
      </div>
      <div style={{textAlign:"center",fontSize:12,color:COLORS.muted,marginTop:10,fontStyle:"italic"}}>
        {WT_GALLERY_IMGS[current].caption}
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:10}}>
        {WT_GALLERY_IMGS.map((_,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{width:i===current?20:8,height:8,borderRadius:4,background:i===current?"#92650A":COLORS.border,border:"none",cursor:"pointer",transition:"all 0.2s",padding:0}}/>
        ))}
      </div>
      <div style={{display:"flex",gap:8,marginTop:14,overflowX:"auto",paddingBottom:4}}>
        {WT_GALLERY_IMGS.map((img,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{flexShrink:0,width:72,height:72,borderRadius:10,overflow:"hidden",border:"2px solid "+(i===current?"#92650A":COLORS.border),padding:0,cursor:"pointer",background:COLORS.sand,transition:"border-color 0.18s"}}>
            <img src={img.src} alt={img.caption} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </button>
        ))}
      </div>
    </div>
  );
};

// ── HYBRID NIGHT GUARD GALLERY ───────────────────────────────────────────────
const HYB_GALLERY_IMGS = [
  {src: HYB_1, caption: "Hybrid Hard/Soft Night Guard — dual-laminate construction"},
  {src: HYB_2, caption: "Side profile — hard clear outer shell over soft blue inner layer"},
  {src: HYB_3, caption: "Close-up macro — dual-layer seam in sharp detail"},
  {src: HYB_4, caption: "Included with every order — custom case and impression kit"},
];

const HybridGuardGallery = () => {
  const [current, setCurrent] = useState(0);
  const total = HYB_GALLERY_IMGS.length;
  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);
  return (
    <div style={{marginBottom:32}}>
      <div style={{position:"relative",width:"100%",borderRadius:20,overflow:"hidden",background:"#fff",border:"1px solid "+COLORS.border,minHeight:340,display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 0"}}>
        <img src={HYB_GALLERY_IMGS[current].src} alt={HYB_GALLERY_IMGS[current].caption}
          style={{width:"75%",maxWidth:440,objectFit:"contain",display:"block",margin:"0 auto",transition:"opacity 0.25s"}}/>
        <button onClick={prev}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={next}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{position:"absolute",bottom:12,right:16,background:"rgba(28,43,58,0.5)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20}}>
          {current+1} / {total}
        </div>
      </div>
      <div style={{textAlign:"center",fontSize:12,color:COLORS.muted,marginTop:10,fontStyle:"italic"}}>
        {HYB_GALLERY_IMGS[current].caption}
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:10}}>
        {HYB_GALLERY_IMGS.map((_,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{width:i===current?20:8,height:8,borderRadius:4,background:i===current?COLORS.clinicalBlue:COLORS.border,border:"none",cursor:"pointer",transition:"all 0.2s",padding:0}}/>
        ))}
      </div>
      <div style={{display:"flex",gap:8,marginTop:14,overflowX:"auto",paddingBottom:4}}>
        {HYB_GALLERY_IMGS.map((img,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{flexShrink:0,width:72,height:72,borderRadius:10,overflow:"hidden",border:"2px solid "+(i===current?COLORS.clinicalBlue:COLORS.border),padding:0,cursor:"pointer",background:COLORS.sand,transition:"border-color 0.18s"}}>
            <img src={img.src} alt={img.caption} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </button>
        ))}
      </div>
    </div>
  );
};

// ── HARD NIGHT GUARD GALLERY ─────────────────────────────────────────────────
const HNG_GALLERY_IMGS = [
  {src: HNG_1, caption: "Custom Hard Night Guard — rigid acrylic precision fit"},
  {src: HNG_2, caption: "Close-up — crystal-clear acrylic detail and tooth impressions"},
  {src: HNG_3, caption: "Three-quarter angle — showing rigidity and thickness"},
  {src: HNG_4, caption: "Included with every order — custom case and impression kit"},
];

const HardGuardGallery = () => {
  const [current, setCurrent] = useState(0);
  const total = HNG_GALLERY_IMGS.length;
  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);
  return (
    <div style={{marginBottom:32}}>
      <div style={{position:"relative",width:"100%",borderRadius:20,overflow:"hidden",background:"#fff",border:"1px solid "+COLORS.border,minHeight:340,display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 0"}}>
        <img src={HNG_GALLERY_IMGS[current].src} alt={HNG_GALLERY_IMGS[current].caption}
          style={{width:"75%",maxWidth:440,objectFit:"contain",display:"block",margin:"0 auto",transition:"opacity 0.25s"}}/>
        <button onClick={prev}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={next}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{position:"absolute",bottom:12,right:16,background:"rgba(28,43,58,0.5)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20}}>
          {current+1} / {total}
        </div>
      </div>
      <div style={{textAlign:"center",fontSize:12,color:COLORS.muted,marginTop:10,fontStyle:"italic"}}>
        {HNG_GALLERY_IMGS[current].caption}
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:10}}>
        {HNG_GALLERY_IMGS.map((_,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{width:i===current?20:8,height:8,borderRadius:4,background:i===current?COLORS.clinicalBlue:COLORS.border,border:"none",cursor:"pointer",transition:"all 0.2s",padding:0}}/>
        ))}
      </div>
      <div style={{display:"flex",gap:8,marginTop:14,overflowX:"auto",paddingBottom:4}}>
        {HNG_GALLERY_IMGS.map((img,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{flexShrink:0,width:72,height:72,borderRadius:10,overflow:"hidden",border:"2px solid "+(i===current?COLORS.clinicalBlue:COLORS.border),padding:0,cursor:"pointer",background:COLORS.sand,transition:"border-color 0.18s"}}>
            <img src={img.src} alt={img.caption} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </button>
        ))}
      </div>
    </div>
  );
};

// ── SOFT NIGHT GUARD GALLERY ──────────────────────────────────────────────────
const SNG_GALLERY_IMGS = [
  {src: SNG_2, caption: "Front view — flexible thermoplastic material"},
  {src: SNG_3, caption: "Dentist-inspected before shipment"},
  {src: SNG_4, caption: "Close-up — smooth flexible EVA surface"},
  {src: SNG_5, caption: "Included with every order — custom case and kit"},
];

const SoftGuardGallery = () => {
  const [current, setCurrent] = useState(0);
  const total = SNG_GALLERY_IMGS.length;
  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);
  return (
    <div style={{marginBottom:32}}>
      <div style={{position:"relative",width:"100%",borderRadius:20,overflow:"hidden",background:"#fff",border:"1px solid "+COLORS.border,minHeight:340,display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 0"}}>
        <img src={SNG_GALLERY_IMGS[current].src} alt={SNG_GALLERY_IMGS[current].caption}
          style={{width:"75%",maxWidth:440,objectFit:"contain",display:"block",margin:"0 auto",transition:"opacity 0.25s"}}/>
        <button onClick={prev}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={next}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{position:"absolute",bottom:12,right:16,background:"rgba(28,43,58,0.5)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20}}>
          {current+1} / {total}
        </div>
      </div>
      <div style={{textAlign:"center",fontSize:12,color:COLORS.muted,marginTop:10,fontStyle:"italic"}}>
        {SNG_GALLERY_IMGS[current].caption}
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:10}}>
        {SNG_GALLERY_IMGS.map((_,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{width:i===current?20:8,height:8,borderRadius:4,background:i===current?COLORS.clinicalBlue:COLORS.border,border:"none",cursor:"pointer",transition:"all 0.2s",padding:0}}/>
        ))}
      </div>
      <div style={{display:"flex",gap:8,marginTop:14,overflowX:"auto",paddingBottom:4}}>
        {SNG_GALLERY_IMGS.map((img,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{flexShrink:0,width:72,height:72,borderRadius:10,overflow:"hidden",border:"2px solid "+(i===current?COLORS.clinicalBlue:COLORS.border),padding:0,cursor:"pointer",background:COLORS.sand,transition:"border-color 0.18s"}}>
            <img src={img.src} alt={img.caption} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </button>
        ))}
      </div>
    </div>
  );
};

// ── RETAINER GALLERY ─────────────────────────────────────────────────────────
const RT_GALLERY_IMGS = [
  {src: RT_PAGE_IMG, caption: "Upper and lower retainer pair"},
  {src: RT_G1, caption: "Close-up of tooth impression detail"},
  {src: RT_G2, caption: "Retainer with custom case and impression kit"},
  {src: RT_G3, caption: "Retainer held in hand — ultra-thin profile"},
  {src: RT_G4, caption: "Upper and lower retainers stacked"},
];

const RetainerGallery = () => {
  const [current, setCurrent] = useState(0);
  const total = RT_GALLERY_IMGS.length;
  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);

  return (
    <div style={{marginBottom:32}}>
      {/* Main image */}
      <div style={{position:"relative",width:"100%",borderRadius:20,overflow:"hidden",background:COLORS.sand,border:"1px solid "+COLORS.border,minHeight:340,display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 0"}}>
        <img
          src={RT_GALLERY_IMGS[current].src}
          alt={RT_GALLERY_IMGS[current].caption}
          style={{width:"75%",maxWidth:440,objectFit:"contain",display:"block",margin:"0 auto",transition:"opacity 0.25s"}}
        />

        {/* Left arrow */}
        <button onClick={prev}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Right arrow */}
        <button onClick={next}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(28,43,58,0.7)";}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(28,43,58,0.4)";}}
          style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(28,43,58,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.18s",zIndex:2}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Counter */}
        <div style={{position:"absolute",bottom:12,right:16,background:"rgba(28,43,58,0.5)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20}}>
          {current+1} / {total}
        </div>
      </div>

      {/* Caption */}
      <div style={{textAlign:"center",fontSize:12,color:COLORS.muted,marginTop:10,fontStyle:"italic"}}>
        {RT_GALLERY_IMGS[current].caption}
      </div>

      {/* Dot indicators */}
      <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:10}}>
        {RT_GALLERY_IMGS.map((_,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{width:i===current?20:8,height:8,borderRadius:4,background:i===current?COLORS.clinicalBlue:COLORS.border,border:"none",cursor:"pointer",transition:"all 0.2s",padding:0}}/>
        ))}
      </div>

      {/* Thumbnail strip */}
      <div style={{display:"flex",gap:8,marginTop:14,overflowX:"auto",paddingBottom:4}}>
        {RT_GALLERY_IMGS.map((img,i)=>(
          <button key={i} onClick={()=>setCurrent(i)} style={{flexShrink:0,width:72,height:72,borderRadius:10,overflow:"hidden",border:"2px solid "+(i===current?COLORS.clinicalBlue:COLORS.border),padding:0,cursor:"pointer",background:COLORS.sand,transition:"border-color 0.18s"}}>
            <img src={img.src} alt={img.caption} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </button>
        ))}
      </div>
    </div>
  );
};

// ── PRODUCT PAGE COMPONENT ────────────────────────────────────────────────────
const ProductPage=({productId,onBuy,onQuiz,setView,preSelectedVariantId})=>{
  const isMobile=useIsMobile();
  const product=PRODUCTS.find(p=>p.id===productId);
  const [activeTab,setActiveTab]=useState("overview");
  const [selectedVariant,setSelectedVariant]=useState(null);
  const [assessmentDone,setAssessmentDone]=useState(false);

  const PAGE_DATA={
    ng:{
      hero:"Waking up with a sore jaw?",
      heroSub:"You might be grinding your teeth at night. Our custom night guards protect your enamel, reduce jaw pain, and help you sleep better — prescribed by a real dentist, built by a real lab.",
      badge:"Most Prescribed Appliance",
      color:COLORS.clinicalBlue,
      colorLight:COLORS.clinicalBlueLight,
      variants:[
        {id:1,name:"Soft Night Guard",price:150,tag:"Best for first-timers",desc:"Flexible thermoplastic. Ideal for light clenchers and sensitive teeth.",best:"Light grinding, first-time wearers, sensitive teeth"},
        {id:3,name:"Hybrid Hard/Soft",price:165,tag:"Most popular",desc:"Hard outer shell meets soft inner cushion. The gold standard for most bruxers.",best:"Mild-to-moderate grinding, crowns, veneers"},
        {id:2,name:"Hard Night Guard",price:160,tag:"Max protection",desc:"100% rigid acrylic for severe grinders who chew through softer guards.",best:"Severe grinding, history of cracked teeth"},
      ],
      defaultVariant:3,
      faqs:[
        {q:"How long does a custom night guard last?",a:"With nightly use, a well-cared-for custom guard typically lasts 3-5 years. Heavy grinders may see 1-3 years. We offer 50% off replacements for life."},
        {q:"Will it feel weird to sleep in?",a:"Most patients adapt within 1-2 weeks. Custom guards are far more comfortable than boil-and-bite guards because they follow the exact contours of your teeth."},
        {q:"How is this different from a $30 drugstore guard?",a:"Drugstore guards are one-size-fits-all boil-and-bites. Bulky, imprecise, and most people stop wearing them within days. Our guards are milled to your exact dental anatomy by a licensed dental lab."},
        {q:"What if my impression does not work?",a:"We ship a free replacement impression kit. Our lab reviews every mold before fabrication — if it does not meet standards, we send another kit at no charge."},
      ],
      stats:[{n:"3-5 yrs",l:"Average lifespan"},{n:"93%",l:"Patient satisfaction"},{n:"48hr",l:"Dentist review"},{n:"Free",l:"Re-impression kit"}],
      symptoms:["Waking up with jaw soreness or stiffness","Morning headaches near your temples","Partner reports grinding sounds at night","Teeth feel sensitive or look shorter","Dentist has noted wear or flattening"],
      includes:["Custom VPS putty impression kit shipped free","Licensed dentist review within 48hrs","ADA-compliant dental lab fabrication","Branded protective case","Itemized Superbill for HSA/FSA/insurance","Up to 1 free re-impression kit if mold fails","6-Month Defect Warranty — cracks and bad fit covered free","Lifetime Fit Protection — 50% off every future replacement"],
    },
    rt:{
      hero:"Did your retainer disappear?",
      heroSub:"Every day without a retainer your teeth can shift. Our custom Essix-style clear retainers ship as a matched pair — upper and lower — fabricated to lock your smile exactly where it is.",
      badge:"Ships as a Matched Pair",
      color:"#6B4A8A",
      colorLight:"#F3EEF8",
      variants:[{id:6,name:"Invisible Retainers",price:169,tag:"Upper + lower pair",desc:"Crystal-clear Essix-style retainers. Virtually invisible, comfortable, and durable.",best:"Anyone who has completed orthodontic treatment"}],
      defaultVariant:6,
      faqs:[
        {q:"Do I get both upper and lower?",a:"Yes. Every retainer order includes both a full upper and full lower retainer fabricated as a matched pair from your impressions."},
        {q:"Will it fit over my permanent bonded wire?",a:"Yes. Our lab will custom-block out the wire anatomy on your model so the retainer snaps perfectly over it without stressing the bond."},
        {q:"How long will it last?",a:"With nightly use, clear retainers typically last 1-3 years before showing wear."},
        {q:"Can I use this to straighten my teeth?",a:"No. Retainers are passive appliances designed to hold your current position. They cannot move teeth."},
      ],
      stats:[{n:"Pair",l:"Upper + lower included"},{n:"0.75mm",l:"Ultra-thin Essix"},{n:"48hr",l:"Dentist review"},{n:"Free",l:"Re-impression kit"}],
      symptoms:["You completed braces or Invisalign","Your retainer cracked, warped, or was lost","You have noticed minor shifting","Your orthodontist recommended a replacement","You want to maintain your smile long-term"],
      includes:["Custom VPS putty impression kit shipped free","Licensed dentist review within 48hrs","Upper AND lower retainer pair fabricated","Branded protective case","Itemized Superbill for HSA/FSA/insurance","Free re-impression if mold fails lab standards"],
    },
    sp:{
      hero:"One bad tackle away from a dental emergency.",
      heroSub:"A knocked-out adult tooth costs $3,000–$6,000 to replace. Our lab-fabricated sport guard delivers professional-grade protection at a fraction of in-office prices.",
      badge:"Professional-Grade Protection",
      color:COLORS.sage,
      colorLight:COLORS.sageLight,
      variants:[
        {id:5,name:"Sport Guard — High Impact",price:175,tag:"Football, Hockey, MMA",desc:"4mm laminated EVA. Full arch coverage with extended posterior protection.",best:"High-contact sports with collision risk"},
        {id:5,name:"Sport Guard — Medium Impact",price:175,tag:"Basketball, Soccer",desc:"3mm laminated EVA. ADA recommended minimum for organized sports.",best:"Medium-contact team sports"},
      ],
      defaultVariant:5,
      faqs:[
        {q:"How is this better than a boil-and-bite?",a:"Boil-and-bites are generic and bulky. They restrict breathing so athletes stop wearing them. Our guards follow your exact dental anatomy for a secure fit that stays in place during play."},
        {q:"Can I wear this if I have braces?",a:"Yes. Our lab specializes in orthodontic blockout — we custom-relieve the bracket areas so the guard fits comfortably without damaging your braces."},
        {q:"Does my league require a specific type?",a:"Most youth and collegiate leagues require a minimum 3mm guard. Our guards meet or exceed all major league specifications."},
        {q:"Will it affect my breathing or speech?",a:"Custom guards have the slimmest profile possible while maintaining protection. Most athletes report normal breathing and speech within days."},
      ],
      stats:[{n:"5M+",l:"Teeth knocked out annually"},{n:"4mm",l:"High-impact thickness"},{n:"60x",l:"More injury risk without"},{n:"$3K+",l:"Cost to replace one tooth"}],
      symptoms:["You play any contact or collision sport","Your league requires a mouthguard","You have had a previous dental sports injury","You wear braces during sport","You want pro-level protection at a fair price"],
      includes:["Custom VPS putty impression kit shipped free","Licensed dentist review within 48hrs","ADA-compliant dental lab fabrication","Branded protective case","Itemized Superbill for HSA/FSA/insurance","Up to 1 free re-impression kit if mold fails","6-Month Defect Warranty — cracks and bad fit covered free","Lifetime Fit Protection — 50% off every future replacement"],
    },
    wt:{
      hero:"Coffee. Wine. Years of staining.",
      heroSub:"Professional-grade whitening at home — custom-fit trays that hold more gel against more tooth surface than anything from a drugstore. Prescribed online, built to your exact teeth.",
      badge:"Professional Strength at Home",
      color:"#92650A",
      colorLight:"#FFFBEB",
      variants:[{id:4,name:"Custom Bleaching Trays",price:155,tag:"Gel not included",desc:"Precision-scalloped custom reservoirs. Compatible with 10–22% carbamide peroxide gel.",best:"Anyone who wants professional whitening at home"}],
      defaultVariant:4,
      faqs:[
        {q:"Does gel come included?",a:"No. Trays only. We recommend purchasing 16% or 22% carbamide peroxide gel from your dentist or a licensed pharmacy."},
        {q:"Will it whiten my crowns or veneers?",a:"No. Professional whitening gel only alters natural tooth structure. Existing crowns, veneers, or composite fillings will stay their current color."},
        {q:"How long until I see results?",a:"Most patients notice visible improvement within 5-7 nights. Full results at 10-14 nights."},
        {q:"Is it safe if I have sensitive teeth?",a:"Our clinical assessment will identify your sensitivity level and recommend starting with 10% carbamide peroxide — a gentler formulation with minimal discomfort."},
      ],
      stats:[{n:"70%",l:"Less than in-office cost"},{n:"10-14",l:"Nights to full results"},{n:"6-8",l:"Shades lighter"},{n:"FSA/HSA",l:"Eligible"}],
      symptoms:["Coffee, tea, wine, or tobacco staining","Post-orthodontic smile refresh","Upcoming wedding or special event","Want professional results without the office visit","Previously whitened and want to maintain"],
      includes:["Custom VPS putty impression kit shipped free","Licensed dentist review within 48hrs","Upper AND lower precision-scalloped trays","Branded protective case","Itemized Superbill for HSA/FSA/insurance","Free re-impression if mold fails lab standards"],
    },
  };

  const pageKey=productId===3||productId===1||productId===2?"ng":productId===6?"rt":productId===5?"sp":"wt";
  const data=PAGE_DATA[pageKey];
  const activeVariant=selectedVariant||(preSelectedVariantId&&data.variants.find(v=>v.id===preSelectedVariantId))||data.variants.find(v=>v.id===data.defaultVariant)||data.variants[0];
  const activeProduct=PRODUCTS.find(p=>p.id===activeVariant.id)||product;

  return (
    <div style={{background:COLORS.canvas,minHeight:"100vh"}}>

      {/* Main content + sticky sidebar */}
      <div style={{maxWidth:1060,margin:"0 auto",padding:"48px 40px 80px",display:"grid",gridTemplateColumns:"1fr 340px",gap:40,alignItems:"start"}}>

        {/* Left: tabs + content */}
        <div>

          {/* Product image / Gallery */}
          {pageKey==="rt" ? (
            <RetainerGallery />
          ) : pageKey==="wt" ? (
            <WhiteningGallery />
          ) : pageKey==="sp" ? (
            <SportGallery />
          ) : pageKey==="ng" && activeVariant.id===2 ? (
            <HardGuardGallery />
          ) : pageKey==="ng" && activeVariant.id===3 ? (
            <HybridGuardGallery />
          ) : pageKey==="ng" ? (
            <SoftGuardGallery />
          ) : (
            <div style={{width:"100%",borderRadius:20,overflow:"hidden",background:COLORS.sand,marginBottom:32,border:"1px solid "+COLORS.border,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 0",minHeight:320}}>
              <img src={PRODUCT_IMAGES[activeVariant.id]} alt={activeVariant.name} style={{width:"70%",maxWidth:420,objectFit:"contain",display:"block",margin:"0 auto",filter:"drop-shadow(0 16px 40px rgba(28,43,58,0.15))"}}/>
            </div>
          )}

          <div style={{display:"flex",gap:4,marginBottom:36,borderBottom:"2px solid "+COLORS.border}}>
            {["overview","symptoms","faqs"].map(t=>(
              <button key={t} onClick={()=>setActiveTab(t)} style={{padding:"10px 20px",border:"none",cursor:"pointer",fontSize:13,fontWeight:700,background:"transparent",color:activeTab===t?data.color:COLORS.muted,borderBottom:activeTab===t?"3px solid "+data.color:"3px solid transparent",marginBottom:"-2px",textTransform:"capitalize",transition:"all 0.15s"}}>
                {t==="faqs"?"FAQs":t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>

          {activeTab==="overview"&&(
            <div>
              {/* Variants selector for night guard */}
              {data.variants.length>1&&(
                <div style={{marginBottom:32}}>
                  <h3 style={{fontSize:18,fontWeight:800,color:COLORS.navy,margin:"0 0 16px"}}>Choose your guard type</h3>
                  <div style={{display:"flex",flexDirection:"column",gap:10}}>
                    {data.variants.map((v,i)=>{
                      const isSelected=activeVariant.name===v.name;
                      return (
                        <button key={i} onClick={()=>setSelectedVariant(v)} style={{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderRadius:12,border:"2px solid "+(isSelected?data.color:COLORS.border),background:isSelected?data.colorLight:"#fff",cursor:"pointer",textAlign:"left",transition:"all 0.18s"}}>
                          <img src={PRODUCT_IMAGES[v.id]} alt={v.name} style={{width:56,height:56,objectFit:"cover",borderRadius:8,flexShrink:0}}/>
                          <div style={{flex:1}}>
                            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3}}>
                              <span style={{fontSize:14,fontWeight:700,color:COLORS.navy}}>{v.name}</span>
                              <span style={{background:data.colorLight,color:data.color,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:20}}>{v.tag}</span>
                            </div>
                            <div style={{fontSize:12,color:COLORS.muted}}>{v.best}</div>
                          </div>
                          <div style={{fontSize:18,fontWeight:800,color:COLORS.navy,flexShrink:0}}>${v.price}</div>
                          <div style={{width:20,height:20,borderRadius:"50%",border:"2px solid "+(isSelected?data.color:COLORS.border),background:isSelected?data.color:"#fff",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                            {isSelected&&<div style={{width:8,height:8,borderRadius:"50%",background:"#fff"}}/>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {!assessmentDone&&<p style={{fontSize:12,color:data.color,fontWeight:600,marginTop:12}}>Not sure which is right? Take the free 2-min clinical assessment — we will recommend the best option for your specific situation.</p>}
                </div>
              )}

              {/* What is included */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
                <div>
                  <h3 style={{fontSize:18,fontWeight:800,color:COLORS.navy,margin:"0 0 16px"}}>Everything included</h3>
                  <div style={{display:"flex",flexDirection:"column",gap:10}}>
                    {data.includes.map((item,i)=>(
                      <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10}}>
                        <div style={{width:20,height:20,borderRadius:"50%",background:data.colorLight,border:"1.5px solid "+data.color+"66",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5l3 3 4-4" stroke={data.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                        </div>
                        <span style={{fontSize:13,color:COLORS.navy,lineHeight:1.5}}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{fontSize:18,fontWeight:800,color:COLORS.navy,margin:"0 0 16px"}}>The process</h3>
                  <div style={{display:"flex",flexDirection:"column",gap:14}}>
                    {[["1","Order and take the assessment","Complete our clinical screening online."],["2","Receive your impression kit","A putty kit ships to your door in 2-3 days."],["3","Make impressions at home","3 minutes of simple putty work, mail it back."],["4","Dentist review and lab fabrication","Reviewed and milled within 5-7 business days."]].map(([n,t,d])=>(
                      <div key={n} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                        <div style={{width:26,height:26,borderRadius:"50%",background:data.color,color:"#fff",fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{n}</div>
                        <div><div style={{fontSize:13,fontWeight:700,color:COLORS.navy,marginBottom:2}}>{t}</div><div style={{fontSize:12,color:COLORS.muted,lineHeight:1.55}}>{d}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab==="symptoms"&&(
            <div>
              <h3 style={{fontSize:22,fontWeight:800,color:COLORS.navy,margin:"0 0 8px"}}>Is this right for you?</h3>
              <p style={{fontSize:14,color:COLORS.muted,margin:"0 0 24px",lineHeight:1.7}}>You may be a great candidate if any of these apply:</p>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:36}}>
                {data.symptoms.map((s,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:14,background:"#fff",borderRadius:12,padding:"14px 18px",border:"1px solid "+COLORS.border}}>
                    <div style={{width:10,height:10,borderRadius:"50%",background:data.color,flexShrink:0}}/>
                    <span style={{fontSize:14,color:COLORS.navy,fontWeight:500}}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{background:data.colorLight,borderRadius:14,padding:"22px 24px",border:"1.5px solid "+data.color+"33",textAlign:"center"}}>
                <p style={{fontSize:14,color:COLORS.navy,fontWeight:600,margin:"0 0 14px"}}>Our 2-minute clinical assessment will confirm you are a good candidate and recommend the right option.</p>
                <button onClick={onQuiz} onMouseEnter={e=>{e.currentTarget.style.opacity="0.85";}} onMouseLeave={e=>{e.currentTarget.style.opacity="1";}} style={{background:data.color,color:"#fff",border:"none",borderRadius:10,padding:"12px 24px",fontSize:14,fontWeight:700,cursor:"pointer"}}>Take the Free Assessment</button>
              </div>
            </div>
          )}

          {activeTab==="faqs"&&(
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {data.faqs.map((faq,i)=><FAQItem key={i} q={faq.q} a={faq.a}/>)}
            </div>
          )}
        </div>

        {/* RIGHT: Sticky purchase sidebar */}
        <div style={{position:isMobile?"relative":"sticky",top:80}}>
          <div style={{background:"#fff",borderRadius:20,border:"1.5px solid "+COLORS.border,boxShadow:"0 8px 40px rgba(28,43,58,0.10)",overflow:"hidden"}}>

            {/* Product image + name */}
            <div style={{background:data.colorLight,padding:"24px 24px 20px",textAlign:"center",borderBottom:"1px solid "+COLORS.border}}>
              <img src={PRODUCT_IMAGES[activeVariant.id]} alt={activeVariant.name} style={{width:120,height:120,objectFit:"cover",borderRadius:14,marginBottom:12,border:"1px solid "+COLORS.border}}/>
              <div style={{fontSize:16,fontWeight:800,color:COLORS.navy}}>{activeVariant.name}</div>
              <div style={{fontSize:12,color:data.color,fontWeight:600,marginTop:3}}>{activeVariant.tag}</div>
            </div>

            <div style={{padding:"20px 24px"}}>
              {/* Price */}
              <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:4}}>
                <span style={{fontSize:36,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif"}}>${activeVariant.price}</span>
                <span style={{fontSize:13,color:COLORS.muted}}>one-time</span>
              </div>
              <div style={{fontSize:11,color:"#92650A",fontWeight:600,marginBottom:20}}>FSA/HSA eligible — Superbill included — Free shipping</div>

              {/* Mini includes */}
              {["Dentist review included","Lab-fabricated custom fit","6-Month Defect Warranty","Lifetime Fit Protection — 50% off replacements","Up to 1 free re-impression kit"].map((item,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7l4 4 6-6" stroke={data.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                  <span style={{fontSize:12,color:COLORS.navy}}>{item}</span>
                </div>
              ))}

              <div style={{height:1,background:COLORS.border,margin:"20px 0"}}/>

              {/* Assessment CTA — primary action */}
              {!assessmentDone&&(
                <div>
                  <button onClick={()=>{setAssessmentDone(true);onQuiz();}}
                    onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlueDark;}}
                    onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}}
                    style={{width:"100%",background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:12,padding:"15px",fontSize:15,fontWeight:700,cursor:"pointer",transition:"background 0.18s",marginBottom:10}}>
                    Start Free Assessment
                  </button>
                  <p style={{fontSize:11,color:COLORS.muted,textAlign:"center",margin:"0 0 10px",lineHeight:1.6}}>Takes 2 minutes. Clinical screening ensures this is safe and right for you. No personal info collected.</p>
                  <button onClick={()=>onBuy(activeProduct)}
                    onMouseEnter={e=>{e.currentTarget.style.background=COLORS.sand;}}
                    onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}
                    style={{width:"100%",background:"transparent",color:COLORS.muted,border:"1.5px solid "+COLORS.border,borderRadius:12,padding:"12px",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all 0.18s"}}>
                    Skip to Checkout
                  </button>
                </div>
              )}

              {assessmentDone&&(
                <div>
                  <button onClick={()=>onBuy(activeProduct)}
                    onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlueDark;}}
                    onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}}
                    style={{width:"100%",background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:12,padding:"15px",fontSize:15,fontWeight:700,cursor:"pointer",transition:"background 0.18s",marginBottom:10}}>
                    Get My {activeVariant.name}
                  </button>
                  <button onClick={()=>setAssessmentDone(false)} style={{width:"100%",background:"transparent",color:COLORS.muted,border:"none",fontSize:12,cursor:"pointer",textDecoration:"underline"}}>Retake assessment</button>
                </div>
              )}

              <div style={{marginTop:16,padding:"12px 14px",background:COLORS.canvas,borderRadius:10,border:"1px solid "+COLORS.border}}>
                <div style={{fontSize:11,color:COLORS.muted,lineHeight:1.65,textAlign:"center"}}>
                  Impression kit ships in 2-3 days. Your appliance ships 5-7 business days after dentist approval.
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div style={{marginTop:16,display:"flex",justifyContent:"center",gap:20,flexWrap:"wrap"}}>
            {["HIPAA Secure","Licensed Dentists","Free Returns","FSA/HSA OK"].map((b,i)=>(
              <div key={i} style={{fontSize:10,fontWeight:700,color:COLORS.muted,letterSpacing:"0.06em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:4}}>
                <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1L2 2.5v3C2 7.8 3.3 9.3 5 10c1.7-.7 3-2.2 3-4.5v-3L5 1z" fill={COLORS.sage}/></svg>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// ── NIGHT GUARD FUNNEL ──────────────────────────────────────────────────────











// ── CHECKOUT — Embedded Stripe ───────────────────────────────────────────────
const CheckoutPage=({product,onBack,setView})=>{
  const isMobileC=useIsMobile();
  const [email,setEmail]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const [agreed,setAgreed]=useState(false);

  const handlePay=async()=>{
    if(!email){setError("Please enter your email address.");return;}
    if(!agreed){setError("Please agree to the terms to continue.");return;}
    setLoading(true);
    setError(null);
    try{
      const res=await fetch("/api/create-checkout",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          productId:product?product.id:1,
          productName:product?product.name:"Custom Appliance",
          price:product?product.price:150,
          email,
        }),
      });
      const data=await res.json();
      if(data.url){
        window.location.href=data.url;
      } else {
        setError("Payment setup failed. Please try again.");
        setLoading(false);
      }
    } catch(e){
      setError("Connection error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div style={{background:COLORS.canvas,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
      <div style={{maxWidth:560,width:"100%"}}>

        <button onClick={onBack} style={{background:"none",border:"none",color:COLORS.muted,fontSize:13,cursor:"pointer",marginBottom:24,display:"flex",alignItems:"center",gap:6,fontWeight:600,fontFamily:"inherit"}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke={COLORS.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </button>

        {/* Product card */}
        <div style={{background:"linear-gradient(135deg,"+COLORS.navy+","+COLORS.clinicalBlue+")",borderRadius:20,padding:"24px 28px",marginBottom:20,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          {product&&<img src={PRODUCT_IMAGES[product.id]} alt={product.name} style={{width:64,height:64,objectFit:"cover",borderRadius:10,border:"2px solid rgba(255,255,255,0.2)",flexShrink:0}}/>}
          <div style={{flex:1}}>
            <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:3}}>Your Order</div>
            <div style={{fontSize:18,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif"}}>{product?product.name:"Custom Appliance"}</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:2}}>Lab-fabricated · Dentist-prescribed · FSA/HSA eligible</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:26,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif"}}>${product?product.price:""}</div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.5)"}}>one-time</div>
          </div>
        </div>

        {/* Whats included */}
        <div style={{background:"#fff",borderRadius:14,padding:"18px 22px",marginBottom:16,border:"1px solid "+COLORS.border}}>
          <div style={{fontSize:11,fontWeight:700,color:COLORS.navy,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12}}>Whats included</div>
          <div style={{display:"grid",gridTemplateColumns:isMobileC?"1fr":"1fr 1fr",gap:8}}>
            {["Free impression kit","Dentist review 48hrs","Lab fabrication","Protective case","FSA/HSA Superbill","6-Month Warranty","Lifetime Fit Protection","Free re-impression kit"].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:7,alignItems:"center"}}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3.5 3.5 5.5-5.5" stroke={COLORS.sage} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{fontSize:12,color:COLORS.navy}}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Email + Pay */}
        <div style={{background:"#fff",borderRadius:16,padding:"24px",border:"2px solid "+COLORS.clinicalBlue,marginBottom:16,boxShadow:"0 8px 32px rgba(58,107,138,0.12)"}}>
          <div style={{fontSize:13,fontWeight:700,color:COLORS.navy,marginBottom:14}}>Enter your email to continue</div>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            style={{width:"100%",padding:"13px 16px",borderRadius:10,border:"1.5px solid "+(error&&!email?COLORS.rose:COLORS.border),fontSize:14,color:COLORS.navy,background:"#fff",outline:"none",fontFamily:"inherit",boxSizing:"border-box",marginBottom:14}}
          />

          <label style={{display:"flex",alignItems:"flex-start",gap:10,cursor:"pointer",marginBottom:18}}>
            <input type="checkbox" checked={agreed} onChange={e=>setAgreed(e.target.checked)} style={{marginTop:3,width:16,height:16,accentColor:COLORS.clinicalBlue,flexShrink:0}}/>
            <span style={{fontSize:12,color:COLORS.muted,lineHeight:1.65}}>I agree to the teledentistry informed consent. I understand this service is provided by a licensed dentist and does not replace in-person emergency dental care.</span>
          </label>

          {error&&<div style={{background:COLORS.roseLight,border:"1px solid "+COLORS.rose,borderRadius:8,padding:"10px 14px",marginBottom:14,fontSize:13,color:COLORS.rose}}>{error}</div>}

          <button
            onClick={handlePay}
            disabled={loading}
            onMouseEnter={e=>{if(!loading)e.currentTarget.style.background=COLORS.clinicalBlueDark;}}
            onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}}
            style={{width:"100%",background:loading?"#aaa":COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:12,padding:"17px",fontSize:16,fontWeight:700,cursor:loading?"not-allowed":"pointer",transition:"background 0.18s",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
            {loading?(
              <span>Setting up secure payment...</span>
            ):(
              <span>Pay ${product?product.price:""} Securely →</span>
            )}
          </button>

          <div style={{display:"flex",justifyContent:"center",gap:16,marginTop:14,flexWrap:"wrap"}}>
            {["SSL Encrypted","Stripe Secure","FSA/HSA OK","No Hidden Fees"].map((b,i)=>(
              <div key={i} style={{fontSize:10,fontWeight:700,color:COLORS.muted,letterSpacing:"0.05em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:4}}>
                <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1L2 2.5v3C2 7.8 3.3 9.3 5 10c1.7-.7 3-2.2 3-4.5v-3L5 1z" fill={COLORS.sage}/></svg>
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* HIPAA note */}
        <div style={{background:COLORS.clinicalBlueLight,borderRadius:12,padding:"13px 16px",border:"1px solid "+COLORS.clinicalBlue+"33",display:"flex",gap:10,alignItems:"flex-start"}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{flexShrink:0,marginTop:1}}><path d="M8 1.5L2 4.5v4C2 11.5 4.5 14 8 14.5c3.5-.5 6-3 6-6v-4L8 1.5z" fill={COLORS.clinicalBlue}/></svg>
          <span style={{fontSize:12,color:COLORS.clinicalBlueDark,lineHeight:1.65}}>After payment you will complete a 3-minute HIPAA-secure intake form. Your dentist cannot begin fabrication until intake is complete.</span>
        </div>

      </div>
    </div>
  );
};

// ── REVIEWS / TESTIMONIALS ────────────────────────────────────────────────────
const REVIEWS=[
  {name:"Sarah M.",location:"San Diego, CA",product:"Hybrid Night Guard",rating:5,date:"2 weeks ago",text:"I was skeptical about ordering a night guard online but the clinical assessment made me feel totally confident. My dentist was impressed with the fit. Woke up without jaw pain for the first time in years."},
  {name:"James R.",location:"Salt Lake City, UT",product:"Hard Night Guard",rating:5,date:"1 month ago",text:"I've been through three drugstore guards in the past year. This one is built completely differently — rigid, precise, and actually stays in place. The superbill got me $120 back from insurance too."},
  {name:"Priya K.",location:"Los Angeles, CA",product:"Invisible Retainers",rating:5,date:"3 weeks ago",text:"My retainer cracked and my old orthodontist wanted $400 to replace it. Got a matched pair here for $169, dentist-reviewed, and they fit perfectly. Process was so easy."},
  {name:"Marcus T.",location:"Boise, ID",product:"Sport Guard — High Impact",rating:5,date:"1 month ago",text:"Play hockey twice a week and I needed something that actually stays in during play. The custom fit is night and day vs the boil and bite I was using. Breathing is so much easier too."},
  {name:"Christine L.",location:"Sacramento, CA",product:"Custom Bleaching Trays",rating:5,date:"2 months ago",text:"Used the 16% gel from my dentist with these trays and got noticeably whiter teeth in about a week. The custom scalloped trays hold gel way better than the strip kits I'd been using."},
  {name:"David W.",location:"Provo, UT",product:"Soft Night Guard",rating:5,date:"3 weeks ago",text:"First time wearing a night guard and I'm surprised at how comfortable it is. Took about 4 nights to get used to it. The impression process was easy and the dentist turnaround was under 24 hours."},
];

const ReviewsSection=()=>{
  const isMobile=useIsMobile();
  const stars=(n)=>Array(n).fill(0).map((_,i)=>(
    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B"><path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885l-3.09 1.624.59-3.44L2 4.632l3.455-.502L7 1z"/></svg>
  ));
  return (
    <section style={{padding:isMobile?"40px 16px":"72px 40px",background:COLORS.canvas}}>
      <div style={{maxWidth:1060,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:52}}>
          <div style={{display:"inline-block",background:COLORS.clinicalBlueLight,color:COLORS.clinicalBlueDark,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"4px 14px",borderRadius:20,marginBottom:16}}>Patient Reviews</div>
          <h2 style={{fontSize:32,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 8px"}}>Real patients. Real results.</h2>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:12}}>
            <div style={{display:"flex",gap:2}}>{stars(5)}</div>
            <span style={{fontSize:18,fontWeight:800,color:COLORS.navy}}>4.9</span>
            <span style={{fontSize:14,color:COLORS.muted}}>out of 5 — 847 verified reviews</span>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:isMobile?14:20}}>
          {REVIEWS.map((r,i)=>(
            <div key={i} style={{background:"#fff",borderRadius:16,padding:"24px",border:"1.5px solid "+COLORS.border,boxShadow:"0 2px 12px rgba(28,43,58,0.06)",display:"flex",flexDirection:"column",gap:14}}>
              <div style={{display:"flex",gap:2}}>{stars(r.rating)}</div>
              <p style={{fontSize:14,color:COLORS.navy,lineHeight:1.75,margin:0,flex:1,fontStyle:"italic"}}>"{r.text}"</p>
              <div style={{borderTop:"1px solid "+COLORS.border,paddingTop:14}}>
                <div style={{fontWeight:700,color:COLORS.navy,fontSize:14}}>{r.name}</div>
                <div style={{fontSize:12,color:COLORS.muted,marginTop:2}}>{r.location} · {r.date}</div>
                <div style={{fontSize:11,color:COLORS.clinicalBlue,fontWeight:600,marginTop:4}}>{r.product}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:36}}>
          <div style={{fontSize:13,color:COLORS.muted}}>All reviews verified through post-shipment email. Powered by Judge.me</div>
        </div>
      </div>
    </section>
  );
};

// ── ABOUT PAGE ────────────────────────────────────────────────────────────────
const TEAM=[
  {name:"Dr. Marcus Webb, DDS",title:"Lead Clinical Director",school:"UCLA School of Dentistry",years:14,spec:"Occlusal therapy and bruxism management",img:null},
  {name:"Dr. Priya Nair, DMD",title:"Clinical Reviewer",school:"UCSF School of Dentistry",years:9,spec:"Orthodontic retention and appliance therapy",img:null},
  {name:"Dr. James Thornton, DDS",title:"Clinical Reviewer",school:"University of Utah Dentistry",years:11,spec:"Sports dentistry and TMJ management",img:null},
];

const AboutPage=({setView})=>{ const isMobile=useIsMobile(); return (
  <div style={{background:COLORS.canvas,minHeight:"100vh"}}>
    {/* Hero */}
    <div style={{background:"linear-gradient(135deg,"+COLORS.navy+" 0%,"+COLORS.clinicalBlue+" 100%)",padding:"72px 40px 64px",textAlign:"center"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <div style={{display:"inline-block",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",padding:"4px 14px",borderRadius:20,marginBottom:20}}>Our Story</div>
        <h1 style={{fontSize:"clamp(28px,5vw,52px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 16px",lineHeight:1.15}}>Built by dentists.<br/><span style={{color:"#93C5DA",fontStyle:"italic"}}>Designed for patients.</span></h1>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.75)",lineHeight:1.8,margin:0}}>The Guard Guy was founded on a simple observation: dentists outsource every appliance to the same dental labs patients could access directly — yet charge 4-6x the lab cost. We built the bridge.</p>
      </div>
    </div>

    <div style={{maxWidth:900,margin:"0 auto",padding:"72px 40px 80px"}}>

      {/* Mission */}
      <div style={{background:"#fff",borderRadius:20,padding:"40px 44px",border:"1.5px solid "+COLORS.border,boxShadow:"0 4px 24px rgba(28,43,58,0.07)",marginBottom:48}}>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?20:40}}>
          <div>
            <div style={{fontSize:11,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12}}>Our Mission</div>
            <h2 style={{fontSize:26,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 16px",lineHeight:1.2}}>Make professional dental appliances accessible to everyone.</h2>
            <p style={{fontSize:14,color:COLORS.muted,lineHeight:1.8,margin:0}}>Custom dental appliances protect teeth, maintain orthodontic results, and enable professional whitening — but they have historically required expensive in-office visits. We built a teledentistry platform so every patient gets the same FDA-cleared, lab-fabricated quality at a fraction of the price.</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {[["$600","Average in-office night guard cost"],["$150","The Guard Guy starting price"],["70%","Average patient savings"],["48hrs","Average dentist review time"]].map(([n,l])=>(
              <div key={n} style={{display:"flex",alignItems:"center",gap:16,background:COLORS.canvas,borderRadius:12,padding:"14px 18px",border:"1px solid "+COLORS.border}}>
                <div style={{fontSize:24,fontWeight:800,color:COLORS.clinicalBlue,fontFamily:"Georgia, serif",minWidth:70}}>{n}</div>
                <div style={{fontSize:13,color:COLORS.muted,lineHeight:1.5}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works clinically */}
      <div style={{marginBottom:56}}>
        <h2 style={{fontSize:26,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 24px",textAlign:"center"}}>The clinical model behind every order</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
          {[
            {icon:"🦷",title:"Licensed dentist reviews every case",body:"No order enters fabrication without a licensed dentist reviewing your dental history, impression photos, and clinical screening answers."},
            {icon:"🏭",title:"ADA-compliant dental lab fabrication",body:"We partner exclusively with ADA-compliant US dental laboratories using FDA-cleared materials — the same labs your dentist outsources to."},
            {icon:"📄",title:"Clinical documentation included",body:"Every order ships with an itemized Superbill containing standard CDT codes for insurance submission, and a HIPAA-compliant clinical record."},
          ].map((c,i)=>(
            <div key={i} style={{background:"#fff",borderRadius:16,padding:"28px 24px",border:"1.5px solid "+COLORS.border,textAlign:"center"}}>
              <div style={{fontSize:32,marginBottom:14}}>{c.icon}</div>
              <h4 style={{fontSize:15,fontWeight:700,color:COLORS.navy,margin:"0 0 10px",lineHeight:1.35}}>{c.title}</h4>
              <p style={{fontSize:13,color:COLORS.muted,lineHeight:1.75,margin:0}}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical team */}
      <h2 style={{fontSize:26,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 24px",textAlign:"center"}}>Meet the clinical team</h2>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:isMobile?12:20,marginBottom:48}}>
        {TEAM.map((t,i)=>(
          <div key={i} style={{background:"#fff",borderRadius:16,padding:"28px 24px",border:"1.5px solid "+COLORS.border,textAlign:"center",boxShadow:"0 2px 12px rgba(28,43,58,0.06)"}}>
            <div style={{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg,"+COLORS.clinicalBlueLight+","+COLORS.sand+")",border:"2px solid "+COLORS.border,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:28}}>🦷</div>
            <div style={{fontSize:15,fontWeight:800,color:COLORS.navy,marginBottom:4}}>{t.name}</div>
            <div style={{fontSize:11,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:10}}>{t.title}</div>
            <div style={{fontSize:12,color:COLORS.muted,lineHeight:1.65}}>{t.school}<br/>{t.years} years experience<br/><em>Specialty: {t.spec}</em></div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{background:COLORS.navy,borderRadius:20,padding:"48px 40px",textAlign:"center"}}>
        <h2 style={{fontSize:26,fontWeight:700,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 12px"}}>Ready to protect your smile?</h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.65)",maxWidth:440,margin:"0 auto 28px",lineHeight:1.7}}>Take our free 2-minute clinical assessment to find the right appliance for your situation.</p>
        <button onClick={()=>setView("site")} style={{background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:10,padding:"16px 36px",fontSize:15,fontWeight:700,cursor:"pointer"}}>Shop Custom Appliances</button>
      </div>
    </div>
  </div>
);
};

// ── FAQ PAGE ──────────────────────────────────────────────────────────────────
const FAQ_DATA=[
  {cat:"Ordering",items:[
    {q:"How does the ordering process work?",a:"Select your appliance, complete a 2-minute clinical assessment, and purchase. We ship a putty impression kit to your door (1-2 days). Take your impressions at home, mail them back in the prepaid envelope, and a licensed dentist reviews your case within 48 hours. Your custom appliance ships 5-7 business days after approval."},
    {q:"Which states do you currently serve?",a:"We currently serve California, Utah, and Idaho — expanding to all 50 states in 2025. Enter your email to be notified when we launch in your state."},
    {q:"Can I order more than one product?",a:"Absolutely. Many patients order a night guard and whitening trays together. Each product requires its own impression kit and dentist review."},
    {q:"What if I am not a good candidate?",a:"Our clinical assessment screens for active dental issues that would make a remote appliance unsafe. If you are flagged, we fully explain why and recommend seeing a local dentist first. You are never charged for a failed screening."},
  ]},
  {cat:"Impressions",items:[
    {q:"What if my impression does not turn out well?",a:"Our lab inspects every impression before fabrication begins. If your mold does not meet our standards, we ship a free replacement kit at no charge. There is no time limit on re-impressions."},
    {q:"Is the impression process difficult?",a:"Most patients complete it successfully on their first try. The kit includes detailed photo and video instructions. You have 2-3 minutes of working time once the putty is mixed. The most common mistake is not pressing firmly enough — our instructions walk you through it."},
    {q:"Does the impression kit contain any allergens?",a:"Our VPS (vinyl polysiloxane) putty is latex-free and allergen-safe for most patients. If you have known allergies to dental impression materials, consult your dentist before ordering."},
  ]},
  {cat:"Insurance and Pricing",items:[
    {q:"Does insurance cover custom dental appliances?",a:"Many PPO dental plans cover a portion of custom night guards (CDT code D9944, D9945, or D9946) and retainers (D8680). We include an itemized Superbill with every order so you can submit for reimbursement. HMO plans typically do not cover out-of-network appliances."},
    {q:"Can I pay with my FSA or HSA card?",a:"Yes. Custom dental appliances are FSA/HSA-eligible medical expenses. Simply use your FSA or HSA debit card at checkout."},
    {q:"Do you offer any discounts or bundles?",a:"Use code FIRSTGUARD for $15 off your first order. We also offer 50% off replacement appliances for life — if your teeth shift or you need a new guard, you pay half price forever."},
  ]},
  {cat:"Product and Quality",items:[
    {q:"What is the 6-Month Defect Warranty?",a:"Every appliance includes a 6-month warranty against manufacturing defects, cracks, material failure, and bad fit. If anything goes wrong within 6 months, we replace it free — no questions asked, no return shipping required. Email us a photo and your replacement ships within 2 business days."},
    {q:"What is Lifetime Fit Protection?",a:"Lifetime Fit Protection means 50% off every replacement appliance you ever order from us, forever. No asterisks, no fine print, no expiration date. Teeth shift, guards wear out, life happens — whenever you need a new one, you pay half price. It starts the moment you place your first order."},
    {q:"Are your appliances the same quality as what a dentist would provide?",a:"Yes. We partner with ADA-compliant US dental laboratories using FDA-cleared materials — the exact same labs that dental offices outsource to. The only difference is we cut out the office visit markup."},
    {q:"How long do the appliances last?",a:"Night guards: 3-5 years with proper care. Retainers: 1-3 years. Sport guards: 2-4 years. Bleaching trays: indefinite (until lost or damaged). Heavy grinders may replace night guards sooner."},
    {q:"How do I clean my appliance?",a:"Rinse with cool water after each use. Brush gently with a soft toothbrush and mild dish soap weekly. Never use hot water (warps thermoplastic). Store in the provided ventilated case."},
  ]},
  {cat:"Shipping and Returns",items:[
    {q:"How long does shipping take?",a:"Impression kit: 1-2 business days. Finished appliance: 5-7 business days after dentist approval. Total typical turnaround: 10-14 days from order to delivery."},
    {q:"What is your return policy?",a:"If you are unhappy with your appliance for any reason within 30 days, contact us for a full refund. We cover return shipping. The only condition is the appliance must be in its original condition."},
    {q:"My appliance cracked or broke — what do I do?",a:"All appliances include a 6-month warranty against manufacturing defects and material failure. Contact support with a photo and we will ship a replacement at no charge."},
  ]},
];

const FAQPage=()=>{
  const isMobile=useIsMobile();
  const [openCat,setOpenCat]=useState("Ordering");
  return (
    <div style={{background:COLORS.canvas,minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(135deg,"+COLORS.navy+","+COLORS.clinicalBlue+")",padding:"56px 40px 48px",textAlign:"center"}}>
        <h1 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 12px"}}>Frequently Asked Questions</h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.7)",margin:0}}>Everything you need to know about The Guard Guy.</p>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:isMobile?"20px 16px 60px":"56px 40px 80px"}}>
        <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:36}}>
          {FAQ_DATA.map(c=>(
            <button key={c.cat} onClick={()=>setOpenCat(c.cat)} style={{padding:"8px 18px",borderRadius:20,border:"1.5px solid "+(openCat===c.cat?COLORS.clinicalBlue:COLORS.border),background:openCat===c.cat?COLORS.clinicalBlue:"#fff",color:openCat===c.cat?"#fff":COLORS.muted,fontSize:13,fontWeight:700,cursor:"pointer",transition:"all 0.18s"}}>
              {c.cat}
            </button>
          ))}
        </div>
        {FAQ_DATA.filter(c=>c.cat===openCat).map(cat=>(
          <div key={cat.cat}>
            {cat.items.map((item,i)=><FAQItem key={i} q={item.q} a={item.a}/>)}
          </div>
        ))}
        <div style={{background:COLORS.navy,borderRadius:16,padding:"32px",textAlign:"center",marginTop:48}}>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.8)",margin:"0 0 16px"}}>Still have questions? Our clinical team is standing by.</p>
          <button style={{background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:10,padding:"12px 28px",fontSize:14,fontWeight:700,cursor:"pointer"}}>Contact Support</button>
        </div>
      </div>
    </div>
  );
};

// ── SHIPPING PAGE ─────────────────────────────────────────────────────────────
const ShippingPage=()=>{ const isMobile=useIsMobile(); return (
  <div style={{background:COLORS.canvas,minHeight:"100vh"}}>
    <div style={{background:"linear-gradient(135deg,"+COLORS.navy+","+COLORS.clinicalBlue+")",padding:"56px 40px 48px",textAlign:"center"}}>
      <h1 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 12px"}}>Shipping and Returns</h1>
      <p style={{fontSize:16,color:"rgba(255,255,255,0.7)",margin:0}}>Free two-way shipping on every order. No surprises.</p>
    </div>
    <div style={{maxWidth:800,margin:"0 auto",padding:isMobile?"20px 16px 60px":"56px 40px 80px"}}>
      {[
        {title:"Shipping Timeline",icon:"📦",items:[
          ["Impression Kit Ships","1-2 business days after order"],["You Mail Back Impressions","Prepaid return label included"],["Dentist Review","Within 48 hours of receiving your mold"],["Lab Fabrication","5-7 business days after dentist approval"],["Appliance Delivered","USPS Priority or UPS Ground"],["Total Typical Turnaround","10-14 days from order to delivery"],
        ]},
        {title:"Shipping Cost",icon:"🚚",items:[
          ["Outbound Kit Shipping","Always free"],["Return Shipping (mold)","Always free — prepaid label included"],["Appliance Delivery","Always free"],["Re-impression Kit (if needed)","Always free"],
        ]},
        {title:"6-Month Defect Warranty",icon:"🛡️",items:[
          ["Coverage","Manufacturing defects, cracks, material failure, bad fit"],["Window","6 months from delivery"],["Cost to you","Free — no questions asked"],["Process","Email a photo, replacement ships within 2 business days"],
        ]},
      {title:"Lifetime Fit Protection",icon:"🔄",items:[
          ["What it is","50% off every replacement appliance, forever"],["When it starts","Immediately after purchase — no waiting period"],["Reason required","None — teeth shift, guard wears out, you want an upgrade"],["How to claim","Log in to your patient portal and reorder at 50% off"],
        ]},
      {title:"Return Policy",icon:"↩️",items:[
          ["Return Window","30 days from delivery"],["Condition","Original condition, unworn"],["Return Shipping","We cover it — free prepaid label"],["Refund","Full amount, processed within 3-5 business days"],
        ]},
      ].map((section,i)=>(
        <div key={i} style={{background:"#fff",borderRadius:16,padding:"28px 32px",border:"1.5px solid "+COLORS.border,boxShadow:"0 2px 12px rgba(28,43,58,0.06)",marginBottom:20}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <span style={{fontSize:24}}>{section.icon}</span>
            <h3 style={{fontSize:18,fontWeight:700,color:COLORS.navy,margin:0}}>{section.title}</h3>
          </div>
          {section.items.map(([label,val],j)=>(
            <div key={j} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:j<section.items.length-1?"1px solid "+COLORS.border:"none"}}>
              <span style={{fontSize:13,color:COLORS.muted,fontWeight:500}}>{label}</span>
              <span style={{fontSize:13,color:COLORS.navy,fontWeight:700}}>{val}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);
};

// ── ORDER TRACKER ─────────────────────────────────────────────────────────────
const OrderTracker=()=>{
  const [orderNum,setOrderNum]=useState("");
  const [tracking,setTracking]=useState(null);
  const MOCK={
    "TGG-38291":{product:"Hybrid Hard/Soft Night Guard",status:2,steps:["Order Placed","Impression Kit Shipped","Mold Received at Lab","Dentist Review","Appliance Fabricating","Shipped to You"]},
    "TGG-44120":{product:"Invisible Retainers",status:4,steps:["Order Placed","Impression Kit Shipped","Mold Received at Lab","Dentist Review","Appliance Fabricating","Shipped to You"]},
  };
  const lookup=()=>{const t=MOCK[orderNum.toUpperCase()];setTracking(t||"notfound");};
  return (
    <div style={{background:COLORS.canvas,minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(135deg,"+COLORS.navy+","+COLORS.clinicalBlue+")",padding:"56px 40px 48px",textAlign:"center"}}>
        <h1 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 12px"}}>Track Your Order</h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.7)",margin:0}}>Enter your order number to see real-time status.</p>
      </div>
      <div style={{maxWidth:600,margin:"0 auto",padding:"56px 40px"}}>
        <div style={{display:"flex",gap:12,marginBottom:32}}>
          <input style={{flex:1,padding:"14px 18px",borderRadius:10,border:"1.5px solid "+COLORS.border,fontSize:15,color:COLORS.navy,background:"#fff",outline:"none",fontFamily:"inherit"}} placeholder="e.g. TGG-38291" value={orderNum} onChange={e=>setOrderNum(e.target.value)} onKeyDown={e=>e.key==="Enter"&&lookup()}/>
          <button onClick={lookup} style={{background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:10,padding:"14px 24px",fontSize:14,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>Track Order</button>
        </div>
        <p style={{fontSize:12,color:COLORS.muted,textAlign:"center",marginBottom:32}}>Try: TGG-38291 or TGG-44120</p>
        {tracking&&tracking==="notfound"&&<div style={{background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose,borderRadius:12,padding:"20px",textAlign:"center",fontSize:14,color:COLORS.rose,fontWeight:600}}>Order not found. Check your confirmation email for the correct order number.</div>}
        {tracking&&tracking!=="notfound"&&(
          <div style={{background:"#fff",borderRadius:16,border:"1.5px solid "+COLORS.border,overflow:"hidden",boxShadow:"0 4px 24px rgba(28,43,58,0.08)"}}>
            <div style={{background:COLORS.navy,padding:"18px 24px"}}>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Order {orderNum.toUpperCase()}</div>
              <div style={{fontSize:16,fontWeight:700,color:"#fff"}}>{tracking.product}</div>
            </div>
            <div style={{padding:"28px 24px"}}>
              {tracking.steps.map((step,i)=>{
                const done=i<=tracking.status;
                const active=i===tracking.status;
                return (
                  <div key={i} style={{display:"flex",gap:16,alignItems:"flex-start",marginBottom:i<tracking.steps.length-1?20:0}}>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0}}>
                      <div style={{width:28,height:28,borderRadius:"50%",background:done?COLORS.clinicalBlue:COLORS.border,border:"2px solid "+(done?COLORS.clinicalBlue:COLORS.border),display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s"}}>
                        {done&&<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3.5 3.5 5.5-5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      {i<tracking.steps.length-1&&<div style={{width:2,height:20,background:done&&i<tracking.status?COLORS.clinicalBlue:COLORS.border,marginTop:4}}/>}
                    </div>
                    <div style={{paddingTop:3}}>
                      <div style={{fontSize:14,fontWeight:active?700:500,color:active?COLORS.clinicalBlue:done?COLORS.navy:COLORS.muted}}>{step}</div>
                      {active&&<div style={{fontSize:11,color:COLORS.clinicalBlue,marginTop:3,fontWeight:600}}>Current status</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────
const ContactPage=()=>{
  const isMobile=useIsMobile();
  const [form,setForm]=useState({name:"",email:"",subject:"",message:""});
  const [sent,setSent]=useState(false);
  const set=(k,v)=>setForm(p=>({...p,[k]:v}));
  const iStyle={width:"100%",padding:"12px 14px",borderRadius:8,border:"1.5px solid "+COLORS.border,fontSize:14,color:COLORS.navy,background:"#fff",outline:"none",boxSizing:"border-box",fontFamily:"inherit",marginBottom:16};
  return (
    <div style={{background:COLORS.canvas,minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(135deg,"+COLORS.navy+","+COLORS.clinicalBlue+")",padding:"56px 40px 48px",textAlign:"center"}}>
        <h1 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 12px"}}>Contact Us</h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.7)",margin:0}}>Clinical questions, order issues, or just want to say hi — we are here.</p>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:isMobile?"20px 16px 60px":"56px 40px 80px",display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?24:40}}>
        <div>
          <h3 style={{fontSize:20,fontWeight:700,color:COLORS.navy,margin:"0 0 20px"}}>Send us a message</h3>
          {sent?(
            <div style={{background:COLORS.sageLight,border:"1.5px solid "+COLORS.sage,borderRadius:12,padding:"24px",textAlign:"center"}}>
              <div style={{fontSize:32,marginBottom:12}}>✓</div>
              <div style={{fontWeight:700,color:COLORS.sage,fontSize:16,marginBottom:6}}>Message sent!</div>
              <p style={{fontSize:13,color:COLORS.muted,margin:0}}>We will get back to you within 1 business day.</p>
            </div>
          ):(
            <div>
              <input style={iStyle} placeholder="Your name" value={form.name} onChange={e=>set("name",e.target.value)}/>
              <input style={iStyle} placeholder="Email address" value={form.email} onChange={e=>set("email",e.target.value)}/>
              <select style={iStyle} value={form.subject} onChange={e=>set("subject",e.target.value)}>
                <option value="">Select a topic</option>
                <option>Order status or tracking</option>
                <option>Impression kit help</option>
                <option>Clinical question</option>
                <option>Billing or refund</option>
                <option>Product question</option>
                <option>Other</option>
              </select>
              <textarea style={{...iStyle,height:120,resize:"vertical"}} placeholder="How can we help?" value={form.message} onChange={e=>set("message",e.target.value)}/>
              <button onClick={()=>form.name&&form.email&&form.message&&setSent(true)} style={{width:"100%",background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:10,padding:"14px",fontSize:14,fontWeight:700,cursor:"pointer"}}>Send Message</button>
            </div>
          )}
        </div>
        <div>
          <h3 style={{fontSize:20,fontWeight:700,color:COLORS.navy,margin:"0 0 20px"}}>Other ways to reach us</h3>
          {[
            {icon:"📧",label:"Email",val:"hello@theguardguy.com",note:"Response within 1 business day"},
            {icon:"💬",label:"Live Chat",val:"Available Mon–Fri, 9am–5pm PT",note:"Click the chat icon in the bottom right"},
            {icon:"📞",label:"Phone",val:"(855) 448-2739",note:"Mon–Fri 9am–5pm Pacific Time"},
            {icon:"📍",label:"Mailing Address",val:"The Guard Guy",note:"123 Dental Way, Los Angeles CA 90001"},
          ].map((c,i)=>(
            <div key={i} style={{display:"flex",gap:16,padding:"18px 0",borderBottom:i<3?"1px solid "+COLORS.border:"none"}}>
              <span style={{fontSize:22,flexShrink:0}}>{c.icon}</span>
              <div>
                <div style={{fontSize:12,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:3}}>{c.label}</div>
                <div style={{fontSize:14,fontWeight:600,color:COLORS.navy,marginBottom:2}}>{c.val}</div>
                <div style={{fontSize:12,color:COLORS.muted}}>{c.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── NIGHT GUARD QUIZ ─────────────────────────────────────────────────────────
const NightGuardQuiz=({onClose,onResult})=>{
  const [phaseIdx,setPhaseIdx]=useState(0);
  const [qIdx,setQIdx]=useState(0);
  const [answers,setAnswers]=useState({});
  const [disqualified,setDisqualified]=useState(null);
  const [result,setResult]=useState(null);

  const currentPhase=NG_STEPS[phaseIdx];
  const currentQ=currentPhase&&currentPhase.questions[qIdx];
  const totalQ=NG_STEPS.reduce((a,s)=>a+s.questions.length,0);
  const answeredSoFar=NG_STEPS.slice(0,phaseIdx).reduce((a,s)=>a+s.questions.length,0)+qIdx;
  const progress=(answeredSoFar/totalQ)*100;

  const computeResult=(ans)=>{
    const a6=ans["ng6"];const a7=ans["ng7"];const a8=ans["ng8"];const a9=ans["ng9"];
    if(a6&&a6.forceHybrid) return "hybrid";
    if(a7&&a7.favorHybrid) return "hybrid";
    if(a8&&a8.severity==="severe") return "hard";
    if(a9&&a9.history==="chewed") return "hard";
    if(a8&&a8.severity==="mild"&&a9&&a9.history==="bulky") return "soft";
    return "hybrid";
  };

  const handleAnswer=(option)=>{
    const newAnswers={...answers,[currentQ.id]:option};
    setAnswers(newAnswers);
    if(option.flag){setDisqualified(option.reason);return;}
    const phaseQs=currentPhase.questions;
    if(qIdx<phaseQs.length-1){setTimeout(()=>setQIdx(i=>i+1),280);}
    else if(phaseIdx<NG_STEPS.length-1){setTimeout(()=>{setPhaseIdx(p=>p+1);setQIdx(0);},280);}
    else{setTimeout(()=>setResult(computeResult(newAnswers)),280);}
  };

  const outcome=result?NG_OUTCOMES[result]:null;

  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(28,43,58,0.65)",backdropFilter:"blur(6px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:24,width:"100%",maxWidth:600,position:"relative",boxShadow:"0 32px 80px rgba(28,43,58,0.25)",overflow:"hidden",maxHeight:"92vh",overflowY:"auto"}}>

        {/* Disqualified */}
        {disqualified&&(
          <div>
            <div style={{background:"linear-gradient(135deg,#9B4A4A,#7a3636)",padding:"36px",textAlign:"center"}}>
              <h2 style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:0}}>We Recommend Seeing a Dentist First</h2>
            </div>
            <div style={{padding:"32px 36px"}}>
              <div style={{background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose,borderRadius:14,padding:"20px",marginBottom:20}}>
                <p style={{fontSize:14,color:"#6B3030",lineHeight:1.75,margin:0}}>{disqualified}</p>
              </div>
              <button onClick={onClose} style={{width:"100%",padding:"14px",borderRadius:12,background:COLORS.sand,border:"none",cursor:"pointer",fontSize:14,fontWeight:700,color:COLORS.navy}}>Close</button>
            </div>
          </div>
        )}

        {/* Result */}
        {result&&outcome&&(
          <div>
            <div style={{background:"linear-gradient(135deg,"+outcome.color+" 0%,"+outcome.color+"cc 100%)",padding:"36px",textAlign:"center"}}>
              <div style={{display:"inline-block",background:"rgba(255,255,255,0.2)",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 14px",borderRadius:20,marginBottom:16}}>Your Recommended Guard</div>
              <div style={{width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.15)",border:"2px solid rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>
                <img src={PRODUCT_IMAGES[outcome.productId]} alt={outcome.name} style={{width:64,height:64,objectFit:"cover",borderRadius:"50%"}}/>
              </div>
              <h2 style={{fontSize:24,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 6px"}}>{outcome.name}</h2>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.8)",margin:0,fontStyle:"italic"}}>{outcome.tagline}</p>
            </div>
            <div style={{padding:"28px 36px"}}>
              <div style={{background:COLORS.clinicalBlueLight,borderRadius:12,padding:"16px 20px",marginBottom:20,fontSize:13,color:COLORS.clinicalBlueDark,lineHeight:1.7}}>
                {outcome.why}
              </div>
              <div style={{display:"flex",gap:12}}>
                <button onClick={onClose} style={{flex:1,padding:"14px",borderRadius:12,background:COLORS.sand,border:"none",cursor:"pointer",fontSize:14,fontWeight:600,color:COLORS.navy}}>Close</button>
                <button onClick={()=>onResult(outcome.productId)}
                  onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlueDark;}}
                  onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}}
                  style={{flex:2,background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:12,padding:"14px",fontSize:15,fontWeight:700,cursor:"pointer",transition:"background 0.18s"}}>
                  View My {outcome.name} →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Questions */}
        {!disqualified&&!result&&currentQ&&(
          <div>
            <div style={{background:COLORS.clinicalBlueLight,padding:"24px 36px 20px",borderBottom:"1px solid "+COLORS.border}}>
              <button onClick={onClose} style={{position:"absolute",top:16,right:16,background:"rgba(0,0,0,0.08)",border:"none",borderRadius:50,width:32,height:32,cursor:"pointer",fontSize:16,color:COLORS.muted,display:"flex",alignItems:"center",justifyContent:"center"}}>x</button>
              <div style={{fontSize:10,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Find Your Night Guard</div>
              <div style={{fontSize:16,fontWeight:700,color:COLORS.navy,marginBottom:4}}>{currentPhase.phase}</div>
              <div style={{fontSize:12,color:COLORS.muted,marginBottom:16}}>{currentPhase.phaseDesc}</div>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                <span style={{fontSize:11,color:COLORS.muted}}>Question {answeredSoFar+1} of {totalQ}</span>
                <span style={{fontSize:11,color:COLORS.clinicalBlue,fontWeight:700}}>{Math.round(progress)}%</span>
              </div>
              <div style={{height:4,background:COLORS.clinicalBlue+"22",borderRadius:4}}>
                <div style={{height:"100%",width:progress+"%",background:COLORS.clinicalBlue,borderRadius:4,transition:"width 0.3s"}}/>
              </div>
            </div>
            <div style={{padding:"32px 36px"}}>
              <h3 style={{fontSize:19,fontWeight:700,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 24px",lineHeight:1.4}}>{currentQ.text}</h3>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {currentQ.options.map((opt,i)=>(
                  <button key={i} onClick={()=>handleAnswer(opt)}
                    style={{padding:"15px 18px",borderRadius:12,border:"1.5px solid "+COLORS.border,background:"#fff",color:COLORS.navy,fontSize:14,fontWeight:500,cursor:"pointer",textAlign:"left",transition:"all 0.15s",display:"flex",alignItems:"center",gap:12}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=COLORS.clinicalBlue;e.currentTarget.style.background=COLORS.clinicalBlueLight;}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor=COLORS.border;e.currentTarget.style.background="#fff";}}>
                    <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",background:COLORS.sand,color:COLORS.muted,fontSize:11,fontWeight:700,flexShrink:0}}>{String.fromCharCode(65+i)}</span>
                    {opt.label}
                  </button>
                ))}
              </div>
              {(phaseIdx>0||qIdx>0)&&(
                <button onClick={()=>{if(qIdx>0)setQIdx(i=>i-1);else{setPhaseIdx(p=>p-1);setQIdx(NG_STEPS[phaseIdx-1].questions.length-1);};}} style={{marginTop:20,background:"none",border:"none",color:COLORS.muted,fontSize:13,cursor:"pointer",fontWeight:600}}>Back</button>
              )}
            </div>
            <div style={{padding:"12px 36px 20px",borderTop:"1px solid "+COLORS.border,background:COLORS.canvas}}>
              <p style={{fontSize:11,color:COLORS.muted,margin:0,textAlign:"center",lineHeight:1.6}}>No personal information collected. Based on your answers we will recommend the best night guard for your situation.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};


// ── WARRANTY & PROTECTION PAGE ────────────────────────────────────────────────
const WarrantyPage=({setView})=>{ const isMobile=useIsMobile(); return (
  <div style={{background:COLORS.canvas,minHeight:"100vh"}}>

    {/* Hero */}
    <div style={{background:"linear-gradient(135deg,"+COLORS.navy+" 0%,"+COLORS.clinicalBlue+" 100%)",padding:"72px 40px 64px",textAlign:"center"}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <div style={{display:"inline-block",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",padding:"5px 16px",borderRadius:20,marginBottom:20,border:"1px solid rgba(255,255,255,0.2)"}}>Patient Protection</div>
        <h1 style={{fontSize:"clamp(28px,5vw,52px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 16px",lineHeight:1.15}}>Coverage Details.<br/><span style={{color:"#93C5DA",fontStyle:"italic"}}>No asterisks. No fine print.</span></h1>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:520,margin:"0 auto",lineHeight:1.8}}>Every Guard Guy order comes with two layers of protection — a 6-Month Defect Warranty and Lifetime Fit Protection. Here is exactly what each one means.</p>
      </div>
    </div>

    {/* Two main protection cards */}
    <div style={{maxWidth:900,margin:"0 auto",padding:isMobile?"20px 16px 0":"60px 40px 0"}}>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?16:24,marginBottom:40}}>

        {/* 6-Month Defect Warranty */}
        <div style={{background:"#fff",borderRadius:20,overflow:"hidden",border:"1.5px solid "+COLORS.border,boxShadow:"0 4px 24px rgba(28,43,58,0.08)"}}>
          <div style={{background:"linear-gradient(135deg,"+COLORS.clinicalBlue+","+COLORS.clinicalBlueDark+")",padding:"28px 32px"}}>
            <div style={{width:48,height:48,borderRadius:12,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h2 style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 6px"}}>6-Month Defect Warranty</h2>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.75)",margin:0}}>Manufacturing defects covered — completely free.</p>
          </div>
          <div style={{padding:"28px 32px"}}>
            <div style={{marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12}}>Coverage Details</div>
              {["Manufacturing defects in materials or workmanship","Cracks or fractures not caused by misuse","Appliance that does not fit despite a proper impression","Material failure within normal use","Lab errors in fabrication"].map((item,i)=>(
                <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10}}>
                  <div style={{width:20,height:20,borderRadius:"50%",background:COLORS.clinicalBlueLight,border:"1.5px solid "+COLORS.clinicalBlue+"55",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                    <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5l3 3 4-4" stroke={COLORS.clinicalBlue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                  </div>
                  <span style={{fontSize:13,color:COLORS.navy,lineHeight:1.6}}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{borderTop:"1px solid "+COLORS.border,paddingTop:20,marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:700,color:COLORS.rose,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12}}>Not covered</div>
              {["Normal wear and thinning over time","Loss or accidental damage","Damage from improper cleaning (hot water, harsh chemicals)","Teeth shifting after fabrication (covered by Lifetime Fit Protection instead)"].map((item,i)=>(
                <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:8}}>
                  <div style={{width:20,height:20,borderRadius:"50%",background:COLORS.roseLight,border:"1.5px solid "+COLORS.rose+"55",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,fontSize:11,color:COLORS.rose,fontWeight:700}}>✕</div>
                  <span style={{fontSize:13,color:COLORS.muted,lineHeight:1.6}}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{background:COLORS.clinicalBlueLight,borderRadius:12,padding:"16px 18px",fontSize:13,color:COLORS.clinicalBlueDark,lineHeight:1.7}}>
              <strong>How to claim:</strong> Email us a photo of the issue. We will ship your replacement within 2 business days. No return required. No forms to fill out.
            </div>
          </div>
        </div>

        {/* Lifetime Fit Protection */}
        <div style={{background:"#fff",borderRadius:20,overflow:"hidden",border:"1.5px solid "+COLORS.border,boxShadow:"0 4px 24px rgba(28,43,58,0.08)"}}>
          <div style={{background:"linear-gradient(135deg,"+COLORS.sage+",#3a6358)",padding:"28px 32px"}}>
            <div style={{width:48,height:48,borderRadius:12,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="#fff" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h2 style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 6px"}}>Lifetime Fit Protection</h2>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.75)",margin:0}}>50% off every replacement. Forever. No expiration date.</p>
          </div>
          <div style={{padding:"28px 32px"}}>
            <div style={{marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:700,color:COLORS.sage,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12}}>When it applies</div>
              {["After your 6-Month Defect Warranty period","When your guard naturally wears down over time","If your teeth shift and the guard no longer fits","After dental work changes your bite or arch","If your guard is lost or accidentally damaged","Any time you want a fresh replacement"].map((item,i)=>(
                <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10}}>
                  <div style={{width:20,height:20,borderRadius:"50%",background:COLORS.sageLight,border:"1.5px solid "+COLORS.sage+"55",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                    <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5l3 3 4-4" stroke={COLORS.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                  </div>
                  <span style={{fontSize:13,color:COLORS.navy,lineHeight:1.6}}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{borderTop:"1px solid "+COLORS.border,paddingTop:20,marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:700,color:COLORS.muted,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12}}>The math</div>
              {[["Soft Night Guard","$150 full","$75 with Lifetime Fit Protection"],["Hard Night Guard","$160 full","$80 with Lifetime Fit Protection"],["Hybrid Hard/Soft","$165 full","$82 with Lifetime Fit Protection"],["Bleaching Trays","$155 full","$77 with Lifetime Fit Protection"],["Sport Guard","$175 full","$87 with Lifetime Fit Protection"],["Invisible Retainers","$169 full","$84 with Lifetime Fit Protection"]].map(([prod,full,disc],i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:i<5?"1px solid "+COLORS.border:"none",fontSize:12}}>
                  <span style={{color:COLORS.navy,fontWeight:500}}>{prod}</span>
                  <div style={{display:"flex",gap:10,alignItems:"center"}}>
                    <span style={{color:COLORS.muted,textDecoration:"line-through"}}>{full}</span>
                    <span style={{color:COLORS.sage,fontWeight:700}}>{disc.split(" ")[0]}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{background:COLORS.sageLight,borderRadius:12,padding:"16px 18px",fontSize:13,color:"#2E5C50",lineHeight:1.7}}>
              <strong>How to claim:</strong> Log in to your Patient Portal and reorder at 50% off automatically applied at checkout. No codes. No forms. No expiration.
            </div>
          </div>
        </div>
      </div>

      {/* Also included */}
      <div style={{background:"#fff",borderRadius:20,padding:"32px 40px",border:"1.5px solid "+COLORS.border,boxShadow:"0 4px 24px rgba(28,43,58,0.06)",marginBottom:40}}>
        <h3 style={{fontSize:20,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 20px"}}>Also included with every order</h3>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:isMobile?12:16}}>
          {[
            {icon:"🔬",title:"Up to 1 Free Re-Impression Kit",body:"If your impression mold does not pass lab quality inspection, we ship a replacement kit at no charge. No questions asked."},
            {icon:"📄",title:"Automated Superbill",body:"Every order ships with an itemized Superbill containing CDT codes for insurance submission. FSA and HSA accepted at checkout."},
            {icon:"🚚",title:"Free Two-Way Shipping",body:"Your impression kit ships free. Your return label is prepaid. Your finished appliance ships free. Zero shipping costs ever."},
          ].map((c,i)=>(
            <div key={i} style={{background:COLORS.canvas,borderRadius:14,padding:"20px",border:"1px solid "+COLORS.border}}>
              <div style={{fontSize:28,marginBottom:10}}>{c.icon}</div>
              <div style={{fontSize:14,fontWeight:700,color:COLORS.navy,marginBottom:6}}>{c.title}</div>
              <p style={{fontSize:13,color:COLORS.muted,lineHeight:1.7,margin:0}}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{background:COLORS.navy,borderRadius:20,padding:"48px 40px",textAlign:"center",marginBottom:80}}>
        <h2 style={{fontSize:26,fontWeight:700,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 12px"}}>Protected from day one. For life.</h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.65)",maxWidth:440,margin:"0 auto 28px",lineHeight:1.7}}>Every Guard Guy appliance comes backed by both our 6-Month Defect Warranty and Lifetime Fit Protection from the moment you order.</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={()=>setView("site")} style={{background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:10,padding:"14px 32px",fontSize:15,fontWeight:700,cursor:"pointer"}}>Shop Custom Appliances</button>
          <button onClick={()=>setView("faq")} style={{background:"transparent",color:"rgba(255,255,255,0.7)",border:"1.5px solid rgba(255,255,255,0.3)",borderRadius:10,padding:"14px 32px",fontSize:15,fontWeight:600,cursor:"pointer"}}>Read Our FAQ</button>
        </div>
      </div>
    </div>
  </div>
);


// ── HIPAA / PRIVACY PAGE ──────────────────────────────────────────────────────
const PrivacyPage=()=>(
  <div style={{background:COLORS.canvas,minHeight:"100vh"}}>
    <div style={{background:"linear-gradient(135deg,"+COLORS.navy+","+COLORS.clinicalBlue+")",padding:"56px 40px 48px",textAlign:"center"}}>
      <h1 style={{fontSize:"clamp(24px,4vw,40px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 12px"}}>Notice of Privacy Practices</h1>
      <p style={{fontSize:15,color:"rgba(255,255,255,0.7)",margin:0}}>Effective Date: January 1, 2025</p>
    </div>
    <div style={{maxWidth:780,margin:"0 auto",padding:"56px 40px 80px"}}>
      {[
        {title:"Who We Are",body:"The Guard Guy is a teledentistry platform that connects patients with licensed dentists for the purpose of prescribing and fabricating custom dental appliances. The licensed dentists on our platform are the Covered Entities under HIPAA. The Guard Guy operates as a Business Associate."},
        {title:"What Information We Collect",body:"We collect Protected Health Information (PHI) including your name, date of birth, state of residence, dental and medical history, dental photographs, and treatment preferences. This information is collected exclusively through our HIPAA-compliant intake partner, Jotform HIPAA Gold, and is never stored on our website."},
        {title:"How We Use Your Information",body:"Your PHI is used solely for the purpose of clinical review by a licensed dentist, fabrication of your custom dental appliance, and communication regarding your case status. We do not sell, rent, or market your health information to any third party."},
        {title:"Who We Share Your Information With",body:"Your information is shared only with: (1) the licensed dentist assigned to review your case, (2) the ADA-compliant dental laboratory that fabricates your appliance, and (3) our HIPAA-compliant technology partners who have signed Business Associate Agreements with us."},
        {title:"Your Rights Under HIPAA",body:"You have the right to: access and receive a copy of your PHI, request corrections to your PHI, request restrictions on how your PHI is used, receive an accounting of disclosures of your PHI, and file a complaint if you believe your privacy rights have been violated."},
        {title:"Data Security",body:"All PHI is encrypted in transit using TLS 1.2 or higher and encrypted at rest. Our intake platform (Jotform HIPAA Gold) maintains HIPAA compliance certification and has signed a Business Associate Agreement with The Guard Guy."},
        {title:"Contact Us",body:"For privacy-related questions or to exercise your HIPAA rights, contact our Privacy Officer at privacy@theguardguy.com or (855) 448-2739, Monday through Friday, 9am to 5pm Pacific Time."},
        {title:"Complaints",body:"If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services Office for Civil Rights at hhs.gov/ocr/privacy. We will not retaliate against you for filing a complaint."},
      ].map((section,i)=>(
        <div key={i} style={{marginBottom:28,background:"#fff",borderRadius:14,padding:"24px 28px",border:"1px solid "+COLORS.border}}>
          <h3 style={{fontSize:16,fontWeight:700,color:COLORS.navy,margin:"0 0 10px"}}>{section.title}</h3>
          <p style={{fontSize:14,color:COLORS.muted,lineHeight:1.8,margin:0}}>{section.body}</p>
        </div>
      ))}
      <div style={{background:COLORS.clinicalBlueLight,borderRadius:14,padding:"20px 24px",border:"1.5px solid "+COLORS.clinicalBlue+"44",fontSize:13,color:COLORS.clinicalBlueDark,lineHeight:1.7}}>
        This Notice of Privacy Practices is provided for informational purposes. For legal advice specific to your situation, consult a qualified healthcare attorney. This document does not constitute legal counsel.
      </div>
    </div>
  </div>
);

};

// ── IMPRESSION GUIDE PAGE ─────────────────────────────────────────────────────
const IMPRESSION_STEPS = [
  {
    phase:"Getting Ready",
    steps:[
      {
        num:1,
        title:"Kit contents",
        duration:"1 min",
        icon:"📦",
        content:"Your kit contains: 3 tray sizes (small, medium, and large), 2 sets of VPS putty (base + catalyst — one set per arch), a prepaid return mailer, and instruction card. Lay everything out on a clean flat surface before you begin.",
        tips:["Do not open the putty until you are ready to mix — it starts setting immediately","Make sure your hands are clean and dry","Have a timer ready on your phone"],
        warning:null,
      },
      {
        num:2,
        title:"Choose the right tray size",
        duration:"2 min",
        icon:"📏",
        content:"Hold each tray up to your teeth without pressing it in. The tray should cover all your teeth from your back molars to your front teeth with about 3-4mm of space on each side. Start with the medium tray — it fits most adults. If your teeth feel crowded, move up to large. If the tray feels very loose, try the small size.",
        tips:["Most adults use the medium tray — start there first","If you are between sizes, go larger — too small is worse than too big","Test both upper and lower before mixing any putty"],
        warning:"Do NOT use the same tray for both arches. Use a fresh tray for each impression.",
      },
    ]
  },
  {
    phase:"Mixing the Putty",
    steps:[
      {
        num:3,
        title:"Measure equal parts",
        duration:"1 min",
        icon:"⚖️",
        content:"Open your putty kit. You will see two colors — one is the base and one is the catalyst. Tear off equal-sized portions of each. They should be the same size — roughly the size of a golf ball for a full arch impression. Equal amounts is critical for proper setting.",
        tips:["The colors are different so you can tell them apart","Equal volumes — not weight — is what matters","Tear cleanly from the block, do not stretch or knead before combining"],
        warning:"Do not let the two putties touch each other until you are ready to mix. Contamination causes premature setting.",
      },
      {
        num:4,
        title:"Mix thoroughly for 30 seconds",
        duration:"30 sec",
        icon:"🔄",
        content:"Press the two pieces together and fold, knead, and roll until the color is completely uniform with no streaks. This should take about 30 seconds of firm kneading. When properly mixed the putty will be a single solid color with no marbling.",
        tips:["Use the full 30 seconds — under-mixing causes weak impressions","Firm consistent kneading, not fast frantic mixing","Roll into a smooth log shape when done — makes loading the tray easier"],
        warning:"Once mixed you have approximately 2 minutes before the putty starts to set. Move quickly but stay calm.",
      },
      {
        num:5,
        title:"Load the tray",
        duration:"20 sec",
        icon:"🥄",
        content:"Press the mixed putty firmly into the tray, filling it evenly from back to front. Make sure the putty fills all the tooth indentations in the tray. Press it slightly above the rim of the tray — it will compress when you bite down. Roll a small ridge of putty along the front of the tray for your front teeth.",
        tips:["Fill generously — you want full coverage","Smooth the surface with wet fingertips to reduce air pockets","Make sure no metal tray is exposed through the putty"],
        warning:null,
      },
    ]
  },
  {
    phase:"Taking the Impression",
    steps:[
      {
        num:6,
        title:"Position and seat the tray",
        duration:"30 sec",
        icon:"😮",
        content:"Stand in front of a mirror. For the upper arch, tilt your head back slightly. Center the tray on your teeth and press it firmly upward and backward simultaneously. For the lower arch, keep your head level and press the tray down and forward. The tray handle should point straight out from the center of your mouth.",
        tips:["Go slowly and deliberately — centering is everything","Press firmly — a weak impression gives shallow tooth detail","Check in the mirror that the tray is centered before fully seating"],
        warning:"Make sure the tray is centered before pressing all the way in. An off-center impression cannot be used.",
      },
      {
        num:7,
        title:"Hold still for 3 minutes",
        duration:"3 min",
        icon:"⏱️",
        content:"Once the tray is seated, bite down gently and evenly — do not clench hard. Hold perfectly still for a full 3 minutes. Breathe through your nose. The putty will feel warm as it sets — this is normal. Do not talk, swallow forcefully, or move your tongue against the putty.",
        tips:["Set a timer the moment the tray is seated","Breathe slowly through your nose","Focus on a fixed point to help stay still — looking at your phone works great"],
        warning:"Moving during the 3-minute hold is the most common cause of failed impressions. Even small movements create distortions.",
      },
      {
        num:8,
        title:"Remove the tray cleanly",
        duration:"30 sec",
        icon:"✅",
        content:"After 3 full minutes, remove the tray with a firm straight pull — do not rock it side to side. For the upper arch, pull straight down. For the lower arch, pull straight up. The putty should feel firm and rubbery, not soft or sticky.",
        tips:["Pull straight out — rocking distorts the impression","If it feels stuck, wiggle your lips to break the seal first","The putty should spring back slightly when pressed — that means it is fully set"],
        warning:"If the putty is still soft or sticky after 3 minutes, wait another 60 seconds before removing.",
      },
    ]
  },
  {
    phase:"Inspect and Repeat",
    steps:[
      {
        num:9,
        title:"Inspect your impression",
        duration:"2 min",
        icon:"🔍",
        content:"Hold the impression up to a bright light and check: all teeth are visible and fully captured, no air bubbles or voids over tooth surfaces, the impression is not torn or distorted, and you can clearly see individual tooth shapes. If your impression passes all checks, proceed to packaging.",
        tips:["Compare upper and lower — both should look equally detailed","Minor bubbles on the gum area are okay — bubbles over teeth are not","Take a photo for your records before packaging"],
        warning:null,
      },
      {
        num:10,
        title:"Repeat for the second arch",
        duration:"5 min",
        icon:"🔁",
        content:"Open your second putty set and repeat steps 3 through 9 for the other arch. Use a fresh tray. Wait at least 5 minutes between impressions to let your mouth return to its natural resting position. Do the upper arch first, then the lower arch.",
        tips:["Rinse your mouth with water between impressions","Let your jaw relax for a few minutes between each arch","Label your trays U for upper and L for lower with the stickers in your kit"],
        warning:"Never reuse putty or trays. Each impression requires a fresh set.",
      },
    ]
  },
  {
    phase:"Packaging and Shipping",
    steps:[
      {
        num:11,
        title:"Package your impressions",
        duration:"2 min",
        icon:"📫",
        content:"Place both impressions putty-side up in the plastic tray holder included in your kit. They should not touch each other. Slide the holder into the cardboard sleeve, then place it into the prepaid return mailer. Do not wrap in tissue or paper — the impressions need to breathe.",
        tips:["Putty side up at all times to avoid distortion","Do not crush or stack the trays","Make sure the mailer is fully sealed before dropping it off"],
        warning:"Do not refrigerate or freeze your impressions. Store at room temperature until you can mail them.",
      },
      {
        num:12,
        title:"Send it back",
        duration:"5 min",
        icon:"🚀",
        content:"Drop your prepaid return mailer at any USPS mailbox or post office. No postage needed — it is already paid for. Your impressions will arrive at our lab in 2-3 business days. You will receive an email confirmation when your mold is received and again when your dentist review is complete.",
        tips:["Mail within 48 hours of taking your impressions for best results","Get a drop-off receipt if mailing at a post office","You can track your return package with the tracking number on the mailer"],
        warning:null,
      },
    ]
  },
];

const ImpressionGuidePage=({setView})=>{
  const isMobileImp=useIsMobile();
  const [currentStep,setCurrentStep]=useState(0);
  const [completedSteps,setCompletedSteps]=useState([]);
  const allSteps=IMPRESSION_STEPS.flatMap(p=>p.steps);
  const totalSteps=allSteps.length;
  const progress=Math.round((completedSteps.length/totalSteps)*100);
  const step=allSteps[currentStep];
  const isCompleted=completedSteps.includes(currentStep);

  const markComplete=()=>{
    if(!completedSteps.includes(currentStep))setCompletedSteps(p=>[...p,currentStep]);
    if(currentStep<totalSteps-1)setCurrentStep(i=>i+1);
  };

  const goToStep=(idx)=>setCurrentStep(idx);

  // Find which phase current step belongs to
  let phaseLabel=""; let stepInPhase=0; let phaseTotal=0;
  let count=0;
  for(const phase of IMPRESSION_STEPS){
    for(let i=0;i<phase.steps.length;i++){
      if(count===currentStep){phaseLabel=phase.phase;stepInPhase=i+1;phaseTotal=phase.steps.length;}
      count++;
    }
  }

  return (
    <div style={{background:COLORS.canvas,minHeight:"100vh"}}>

      {/* Hero */}
      <div style={{background:"linear-gradient(135deg,"+COLORS.navy+" 0%,"+COLORS.clinicalBlue+" 100%)",padding:"48px 40px 40px"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{display:"inline-block",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",padding:"4px 14px",borderRadius:20,marginBottom:16,border:"1px solid rgba(255,255,255,0.2)"}}>Step-by-Step Guide</div>
          <h1 style={{fontSize:"clamp(24px,4vw,40px)",fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 10px"}}>How to take your impression</h1>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.7)",margin:"0 0 24px",lineHeight:1.7}}>Follow each step carefully. Most patients complete both impressions in under 15 minutes. Take your time — a good impression means a perfect-fitting appliance.</p>

          {/* Progress bar */}
          <div style={{background:"rgba(255,255,255,0.1)",borderRadius:12,padding:"16px 20px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <span style={{fontSize:13,fontWeight:700,color:"#fff"}}>{completedSteps.length} of {totalSteps} steps completed</span>
              <span style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,0.8)"}}>{progress}%</span>
            </div>
            <div style={{height:8,background:"rgba(255,255,255,0.2)",borderRadius:4,overflow:"hidden"}}>
              <div style={{height:"100%",width:progress+"%",background:"linear-gradient(90deg,#93C5DA,#fff)",borderRadius:4,transition:"width 0.4s ease"}}/>
            </div>
            <div style={{display:"flex",gap:6,marginTop:14,flexWrap:"wrap"}}>
              {allSteps.map((_,i)=>(
                <button key={i} onClick={()=>goToStep(i)} style={{width:28,height:28,borderRadius:"50%",border:"2px solid "+(completedSteps.includes(i)?"#fff":i===currentStep?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.3)"),background:completedSteps.includes(i)?"#fff":i===currentStep?"rgba(255,255,255,0.2)":"transparent",color:completedSteps.includes(i)?COLORS.clinicalBlue:"#fff",fontSize:10,fontWeight:700,cursor:"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {completedSteps.includes(i)?"✓":i+1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{maxWidth:860,margin:"0 auto",padding:isMobileImp?"20px 16px 60px":"40px 40px 80px",display:"grid",gridTemplateColumns:isMobileImp?"1fr":"220px 1fr",gap:isMobileImp?20:32,alignItems:"start"}}>

        {/* Left sidebar — phase navigation */}
        {!isMobileImp&&<div style={{position:"sticky",top:80}}>
          {IMPRESSION_STEPS.map((phase,pi)=>{
            const phaseStartIdx=IMPRESSION_STEPS.slice(0,pi).reduce((a,p)=>a+p.steps.length,0);
            const phaseComplete=phase.steps.every((_,si)=>completedSteps.includes(phaseStartIdx+si));
            const phaseCurrent=phase.steps.some((_,si)=>phaseStartIdx+si===currentStep);
            return (
              <div key={pi} style={{marginBottom:6}}>
                <button onClick={()=>goToStep(phaseStartIdx)} style={{width:"100%",textAlign:"left",padding:"10px 14px",borderRadius:10,border:"1.5px solid "+(phaseCurrent?COLORS.clinicalBlue:phaseComplete?COLORS.sage:COLORS.border),background:phaseCurrent?COLORS.clinicalBlueLight:phaseComplete?COLORS.sageLight:"#fff",cursor:"pointer",transition:"all 0.18s"}}>
                  <div style={{fontSize:10,fontWeight:700,color:phaseComplete?COLORS.sage:phaseCurrent?COLORS.clinicalBlue:COLORS.muted,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:2}}>Phase {pi+1}</div>
                  <div style={{fontSize:13,fontWeight:700,color:COLORS.navy}}>{phase.phase}</div>
                  <div style={{fontSize:11,color:COLORS.muted,marginTop:2}}>{phase.steps.length} steps</div>
                </button>
              </div>
            );
          })}
          <div style={{marginTop:16,padding:"14px",background:COLORS.amberLight,borderRadius:10,border:"1px solid "+COLORS.amber+"44"}}>
            <div style={{fontSize:11,fontWeight:700,color:COLORS.amber,marginBottom:4}}>Need a new kit?</div>
            <div style={{fontSize:11,color:COLORS.muted,lineHeight:1.6,marginBottom:8}}>Up to 1 free re-impression kit included with your order.</div>
            <button onClick={()=>setView("contact")} style={{width:"100%",background:COLORS.amber,color:"#fff",border:"none",borderRadius:8,padding:"8px",fontSize:11,fontWeight:700,cursor:"pointer"}}>Contact Support</button>
          </div>
        </div>}

        {/* Right — active step */}
        <div>
          {/* Phase label */}
          <div style={{fontSize:11,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:6}}>{phaseLabel} · Step {stepInPhase} of {phaseTotal}</div>

          {/* Step card */}
          <div style={{background:"#fff",borderRadius:20,border:"1.5px solid "+(isCompleted?COLORS.sage:COLORS.border),boxShadow:"0 4px 24px rgba(28,43,58,0.08)",overflow:"hidden",marginBottom:16,transition:"border-color 0.3s"}}>

            {/* Step header */}
            <div style={{background:isCompleted?"linear-gradient(135deg,"+COLORS.sage+",#3a6358)":"linear-gradient(135deg,"+COLORS.clinicalBlue+","+COLORS.clinicalBlueDark+")",padding:"24px 28px",display:"flex",alignItems:"center",gap:16}}>
              <div style={{width:56,height:56,borderRadius:14,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,flexShrink:0}}>{isCompleted?"✓":step.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.65)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:4}}>Step {currentStep+1} of {totalSteps} · {step.duration}</div>
                <h2 style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:0}}>{step.title}</h2>
              </div>
            </div>

            <div style={{padding:"28px"}}>

              {/* Warning box */}
              {step.warning&&(
                <div style={{background:"#FFF8E1",border:"1.5px solid #F59E0B",borderRadius:12,padding:"14px 18px",marginBottom:20,display:"flex",gap:12,alignItems:"flex-start"}}>
                  <span style={{fontSize:18,flexShrink:0}}>⚠️</span>
                  <p style={{fontSize:13,color:"#78350F",lineHeight:1.7,margin:0,fontWeight:500}}>{step.warning}</p>
                </div>
              )}

              {/* Main content */}
              <p style={{fontSize:15,color:COLORS.navy,lineHeight:1.85,margin:"0 0 24px"}}>{step.content}</p>

              {/* Tips */}
              <div style={{background:COLORS.clinicalBlueLight,borderRadius:12,padding:"16px 20px",marginBottom:24,border:"1px solid "+COLORS.clinicalBlue+"33"}}>
                <div style={{fontSize:11,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12}}>Pro Tips</div>
                {step.tips.map((tip,i)=>(
                  <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:i<step.tips.length-1?8:0}}>
                    <div style={{width:18,height:18,borderRadius:"50%",background:COLORS.clinicalBlue,color:"#fff",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>{i+1}</div>
                    <span style={{fontSize:13,color:COLORS.navy,lineHeight:1.65}}>{tip}</span>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div style={{display:"flex",gap:12,alignItems:"center"}}>
                {currentStep>0&&(
                  <button onClick={()=>setCurrentStep(i=>i-1)} style={{flex:1,padding:"13px",borderRadius:10,background:COLORS.sand,border:"none",cursor:"pointer",fontSize:14,fontWeight:600,color:COLORS.navy}}>← Previous</button>
                )}
                <button onClick={markComplete}
                  onMouseEnter={e=>{e.currentTarget.style.opacity="0.85";}}
                  onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}
                  style={{flex:2,padding:"14px",borderRadius:10,background:isCompleted?COLORS.sage:COLORS.clinicalBlue,border:"none",cursor:"pointer",fontSize:15,fontWeight:700,color:"#fff",transition:"all 0.18s"}}>
                  {isCompleted?"✓ Completed":(currentStep===totalSteps-1?"Mark Complete — All Done!":"Mark Complete & Continue →")}
                </button>
              </div>
            </div>
          </div>

          {/* Step dots */}
          <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:24}}>
            {allSteps.map((_,i)=>(
              <button key={i} onClick={()=>goToStep(i)} style={{width:i===currentStep?20:8,height:8,borderRadius:4,background:completedSteps.includes(i)?COLORS.sage:i===currentStep?COLORS.clinicalBlue:COLORS.border,border:"none",cursor:"pointer",transition:"all 0.2s",padding:0}}/>
            ))}
          </div>

          {/* All done */}
          {completedSteps.length===totalSteps&&(
            <div style={{background:"linear-gradient(135deg,"+COLORS.sage+",#3a6358)",borderRadius:20,padding:"32px",textAlign:"center"}}>
              <div style={{fontSize:40,marginBottom:12}}>🎉</div>
              <h3 style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 10px"}}>Impressions complete!</h3>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.8)",lineHeight:1.7,margin:"0 0 20px"}}>Package your impressions and drop them in the mail. Your dentist review begins the moment we receive your mold.</p>
              <button onClick={()=>setView("site")} style={{background:"#fff",color:COLORS.sage,border:"none",borderRadius:10,padding:"13px 28px",fontSize:14,fontWeight:700,cursor:"pointer"}}>Back to Home</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App(){
  const isMobile=useIsMobile();
  const [view,setView]=useState("site");
  const [screeningProduct,setScreeningProduct]=useState(null);
  const [purchasedProduct,setPurchasedProduct]=useState(null);
  const [checkoutProduct,setCheckoutProduct]=useState(null);
  const [menuOpen,setMenuOpen]=useState(false);
  const [portalTab,setPortalTab]=useState("case");
  const [showNG,setShowNG]=useState(false);
  const [showNGQuiz,setShowNGQuiz]=useState(false);
  const [ngQuizResult,setNgQuizResult]=useState(null);
  const [showRT,setShowRT]=useState(false);
  const [showBL,setShowBL]=useState(false);
  const [showSP,setShowSP]=useState(false);
  const productsRef=useRef(null);
  const scrollStripRef=useRef(null);

  const handlePass=(product)=>{setScreeningProduct(null);setCheckoutProduct(product);setView("checkout");window.scrollTo({top:0,behavior:"smooth"});};
  const handleFunnelBuy=(product)=>{setShowNG(false);setShowRT(false);setShowBL(false);setShowSP(false);setCheckoutProduct(product);setView("checkout");window.scrollTo({top:0,behavior:"smooth"});};
  const handleQuizResult=(productId)=>{setShowNGQuiz(false);setNgQuizResult(productId);setView("pg_ng");window.scrollTo({top:0,behavior:"smooth"});};
  const goToCheckout=(product)=>{setCheckoutProduct(product);setView("checkout");window.scrollTo({top:0,behavior:"smooth"});};

  const SCROLL_PRODUCTS=[
    {id:3,hook:"Waking up with a sore jaw?",sub:"You might be grinding.",name:"Night Guard",funnel:"ng"},
    {id:6,hook:"Did your retainer disappear?",sub:"Your smile won't wait.",name:"Invisible Retainer",funnel:"rt"},
    {id:4,hook:"Coffee. Wine. Regret.",sub:"Time to whiten.",name:"Bleaching Trays",funnel:"bl"},
    {id:5,hook:"One bad tackle away?",sub:"Protect what matters.",name:"Sport Guard",funnel:"sp"},
  ];

  return (
    <div style={{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif",background:COLORS.canvas,minHeight:"100vh",color:COLORS.navy}}>

      <nav style={{background:"#fff",borderBottom:"1px solid "+COLORS.border,padding:"0 40px",position:"sticky",top:0,zIndex:200,display:"flex",alignItems:"center",height:64}}>
        <div onClick={()=>{setView("site");setMenuOpen(false);}} style={{fontFamily:"Georgia, serif",fontWeight:700,fontSize:20,color:COLORS.navy,cursor:"pointer",flexShrink:0}}>The Guard Guy</div>
        <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:2}}>
          {[{label:"Home",key:"site"},{label:"Night Guard",key:"pg_ng"},{label:"Retainer",key:"pg_rt"},{label:"Sport Guard",key:"pg_sp"},{label:"Whitening",key:"pg_wt"}].map(tab=>(
            <button key={tab.key} onClick={()=>{setView(tab.key);setMenuOpen(false);}} style={{padding:"8px 12px",border:"none",cursor:"pointer",fontSize:12,fontWeight:600,background:"transparent",color:view===tab.key?COLORS.clinicalBlue:COLORS.muted,borderBottom:view===tab.key?"2px solid "+COLORS.clinicalBlue:"2px solid transparent",borderRadius:0,transition:"all 0.15s",whiteSpace:"nowrap"}}>{tab.label}</button>
          ))}
        </div>
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{width:40,height:40,borderRadius:10,background:menuOpen?COLORS.clinicalBlue:COLORS.sand,border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.18s",flexShrink:0}}>
          <span style={{display:"block",width:18,height:2,background:menuOpen?"#fff":COLORS.navy,borderRadius:2}}/>
          <span style={{display:"block",width:18,height:2,background:menuOpen?"#fff":COLORS.navy,borderRadius:2,opacity:menuOpen?0:1}}/>
          <span style={{display:"block",width:18,height:2,background:menuOpen?"#fff":COLORS.navy,borderRadius:2}}/>
        </button>
        {menuOpen&&(
          <div style={{position:"absolute",top:64,right:0,width:260,background:"#fff",boxShadow:"0 16px 48px rgba(28,43,58,0.16)",borderRadius:"0 0 16px 16px",border:"1px solid "+COLORS.border,borderTop:"none",zIndex:300,overflow:"hidden"}}>
            {[{label:"How to Take Your Impression",key:"impression"},{label:"Education",key:"learn"},{label:"Insurance",key:"superbill"},{label:"About Us",key:"about"},{label:"Warranty & Protection",key:"warranty"},{label:"FAQ",key:"faq"},{label:"Shipping & Returns",key:"shipping"},{label:"Track Order",key:"track"},{label:"Contact",key:"contact"}].map((item,i,arr)=>(
              <button key={item.key} onClick={()=>{setView(item.key);setMenuOpen(false);}} style={{width:"100%",display:"flex",alignItems:"center",gap:14,padding:"14px 20px",background:view===item.key?COLORS.clinicalBlueLight:"#fff",border:"none",borderBottom:i<arr.length-1?"1px solid "+COLORS.border:"none",cursor:"pointer",textAlign:"left"}}>
                <div style={{fontSize:14,fontWeight:700,color:view===item.key?COLORS.clinicalBlueDark:COLORS.navy}}>{item.label}</div>
              </button>
            ))}
          </div>
        )}
        {menuOpen&&<div onClick={()=>setMenuOpen(false)} style={{position:"fixed",inset:0,zIndex:199}}/>}
      </nav>

      {view==="checkout"&&<CheckoutPage product={checkoutProduct} onBack={()=>setView("site")} setView={setView}/>}
      {view==="impression"&&<ImpressionGuidePage setView={setView}/>}
      {view==="about"&&<AboutPage setView={setView}/>}
      {view==="warranty"&&<WarrantyPage setView={setView}/>}
      {view==="faq"&&<FAQPage/>}
      {view==="shipping"&&<ShippingPage/>}
      {view==="track"&&<OrderTracker/>}
      {view==="contact"&&<ContactPage/>}
      {view==="privacy"&&<PrivacyPage/>}
      {view==="pg_ng"&&<ProductPage productId={3} onBuy={goToCheckout} onQuiz={()=>setShowNG(true)} setView={setView} preSelectedVariantId={ngQuizResult}/>}
      {view==="pg_rt"&&<ProductPage productId={6} onBuy={goToCheckout} onQuiz={()=>setShowRT(true)} setView={setView}/>}
      {view==="pg_sp"&&<ProductPage productId={5} onBuy={goToCheckout} onQuiz={()=>setShowSP(true)} setView={setView}/>}
      {view==="pg_wt"&&<ProductPage productId={4} onBuy={goToCheckout} onQuiz={()=>setShowBL(true)} setView={setView}/>}
      {view==="learn"&&<EducationPage onBuy={p=>{setCheckoutProduct(p);setView("checkout");}} setView={setView}/>}
      {view==="superbill"&&<SuperbillPage setView={setView}/>}
      {view==="portal"&&(
        <div style={{maxWidth:700,margin:"0 auto",padding:"60px 24px"}}>
          {purchasedProduct?<PatientPortal product={purchasedProduct}/>:(
            <div style={{textAlign:"center",padding:"80px 20px"}}>
              <h2 style={{fontFamily:"Georgia, serif",fontSize:26,color:COLORS.navy,marginBottom:12}}>Clinical Intake Portal</h2>
              <p style={{color:COLORS.muted,fontSize:15,maxWidth:380,margin:"0 auto 28px"}}>Complete your purchase first to access the HIPAA-secure patient intake form.</p>
              <Btn variant="primary" onClick={()=>setView("site")}>Browse Products</Btn>
            </div>
          )}
        </div>
      )}
      {view==="dentist"&&(
        <div style={{maxWidth:980,margin:"0 auto",padding:"48px 24px"}}>
          <div style={{marginBottom:32,display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
            <div>
              <h2 style={{fontFamily:"Georgia, serif",fontSize:28,color:COLORS.navy,margin:"0 0 6px"}}>Dentist Portal</h2>
              <p style={{color:COLORS.muted,fontSize:14,margin:0}}>Case review and business analytics</p>
            </div>
            <div style={{display:"flex",gap:8}}>
              {[["case","Case Review"],["costs","Cost Analysis"]].map(([t,l])=>(
                <button key={t} onClick={()=>setPortalTab(t)} style={{padding:"10px 20px",borderRadius:10,border:"1.5px solid "+(portalTab===t?COLORS.clinicalBlue:COLORS.border),background:portalTab===t?COLORS.clinicalBlueLight:"#fff",color:portalTab===t?COLORS.clinicalBlueDark:COLORS.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          {portalTab==="case"?<DentistPortal/>:<CostDashboard/>}
        </div>
      )}

      {view==="site"&&(
        <>
          <section style={{background:COLORS.canvas,width:"100%"}}>
            <div style={{width:"100%",maxWidth:900,margin:"0 auto",padding:"64px 60px 0",textAlign:"center",boxSizing:"border-box"}}>
              <div style={{marginBottom:22}}>
                <span style={{display:"inline-block",background:COLORS.clinicalBlueLight,color:COLORS.clinicalBlueDark,padding:"5px 18px",borderRadius:20,fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"}}>Dentist-reviewed. Lab-crafted. Shipped to you.</span>
              </div>
              <div style={{marginBottom:20}}>
                <div style={{fontSize:"clamp(44px,7vw,80px)",fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",lineHeight:1.05,letterSpacing:"-0.03em"}}>Your <span style={{color:COLORS.clinicalBlue}}>teeth</span> called.</div>
                <div style={{fontSize:"clamp(44px,7vw,80px)",fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",lineHeight:1.05,letterSpacing:"-0.03em",fontStyle:"italic"}}>They need <span style={{color:COLORS.clinicalBlue,textDecoration:"underline",textDecorationColor:"rgba(58,107,138,0.35)",textUnderlineOffset:"6px"}}>backup.</span></div>
              </div>
              <p style={{fontSize:17,color:COLORS.muted,lineHeight:1.6,margin:"0 auto 44px",maxWidth:400}}>Custom appliances, <em style={{fontStyle:"italic",color:COLORS.navy,fontWeight:600}}>prescribed online</em>, shipped to your door.</p>
              <div style={{display:"flex",justifyContent:"center",marginBottom:isMobile?16:28}}>
                <img src={HERO_IMG} alt="Dental product lineup" style={{width:"100%",display:"block",objectFit:"contain",mixBlendMode:"multiply",borderRadius:16}}/>
              </div>
              <div style={{textAlign:"center",paddingBottom:48}}>
                <button
                  onClick={()=>productsRef.current&&productsRef.current.scrollIntoView({behavior:"smooth",block:"start"})}
                  onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlueDark;}}
                  onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}}
                  style={{background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:50,padding:"16px 44px",fontSize:15,fontWeight:700,letterSpacing:"0.04em",cursor:"pointer",transition:"background 0.18s",boxShadow:"0 6px 24px rgba(58,107,138,0.28)",marginBottom:14,display:"block",margin:"0 auto 14px"}}>
                  Shop Custom Appliances
                </button>
                <div style={{fontSize:14,fontStyle:"italic",color:COLORS.muted,fontWeight:500,marginBottom:16}}>
                  Save up to <em style={{color:COLORS.clinicalBlue,fontWeight:700,fontStyle:"italic"}}>70% less</em> than in-office prices
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:20,flexWrap:"wrap"}}>
                  <div style={{display:"flex",alignItems:"center",gap:7}}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3.5v4C2 10.5 4.2 12.8 7 13.5c2.8-.7 5-3 5-6v-4L7 1z" fill={COLORS.clinicalBlue}/></svg>
                    <span style={{fontSize:12,fontWeight:700,color:COLORS.navy}}>6-Month Defect Warranty</span>
                  </div>
                  <div style={{width:4,height:4,borderRadius:"50%",background:COLORS.border}}/>
                  <div style={{display:"flex",alignItems:"center",gap:7}}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" stroke={COLORS.sage} strokeWidth="1.5"/><path d="M4.5 7l2 2 3-3" stroke={COLORS.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{fontSize:12,fontWeight:700,color:COLORS.navy}}>Lifetime Fit Protection — 50% off every replacement, forever</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{width:"100%",background:COLORS.sand,borderTop:"1px solid "+COLORS.border,padding:"22px 0 26px"}}>
              <div ref={scrollStripRef} style={{display:"flex",gap:16,overflowX:"auto",padding:"20px 60px",scrollSnapType:"x mandatory",msOverflowStyle:"none",scrollbarWidth:"none"}}>
                {SCROLL_PRODUCTS.map(p=>(
                  <ScrollCard key={p.id} product={p} onQuiz={()=>{
                    if(p.funnel==="ng")setShowNG(true);
                    else if(p.funnel==="rt")setShowRT(true);
                    else if(p.funnel==="bl")setShowBL(true);
                    else if(p.funnel==="sp")setShowSP(true);
                    else setScreeningProduct(PRODUCTS.find(x=>x.id===p.id));
                  }}/>
                ))}
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginTop:16}}>
                <button
                  onClick={()=>{if(scrollStripRef.current){const card=scrollStripRef.current.querySelector("div");const w=card?card.offsetWidth+16:436;scrollStripRef.current.scrollBy({left:-w,behavior:"smooth"});}}}
                  onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color=COLORS.navy;}}
                  style={{width:40,height:40,borderRadius:"50%",background:"#fff",border:"1.5px solid "+COLORS.border,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.18s",color:COLORS.navy}}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <span style={{fontSize:12,color:COLORS.muted,fontWeight:500,letterSpacing:"0.06em"}}>EXPLORE ALL PRODUCTS</span>
                <button
                  onClick={()=>{if(scrollStripRef.current){const card=scrollStripRef.current.querySelector("div");const w=card?card.offsetWidth+16:436;scrollStripRef.current.scrollBy({left:w,behavior:"smooth"});}}}
                  onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color=COLORS.navy;}}
                  style={{width:40,height:40,borderRadius:"50%",background:"#fff",border:"1.5px solid "+COLORS.border,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.18s",color:COLORS.navy}}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </section>

          <section style={{padding:"32px",background:COLORS.canvas}}>
            <div style={{borderRadius:24,overflow:"hidden",border:"3px solid #fff",boxShadow:"0 0 0 1px rgba(58,107,138,0.15),0 16px 48px rgba(28,43,58,0.12)",background:"linear-gradient(160deg,#2C536C 0%,#3A6B8A 40%,#4A7E9E 70%,#2C536C 100%)",padding:"72px 40px"}}>
              <div style={{maxWidth:1060,margin:"0 auto"}}>
              <div style={{textAlign:"center",marginBottom:52}}>
                <div style={{display:"inline-block",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"5px 16px",borderRadius:20,marginBottom:18,border:"1px solid rgba(255,255,255,0.35)"}}>The Process</div>
                <h2 style={{fontSize:44,fontWeight:800,color:"#fff",fontFamily:"Georgia, serif",margin:"0 0 10px",letterSpacing:"-0.02em",lineHeight:1.1}}>Three steps. Zero dentist visits.</h2>
                <p style={{fontSize:18,color:"rgba(255,255,255,0.75)",margin:0,fontWeight:500}}>No appointments. No waiting rooms. No insurance required.</p>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:24}}>
                {[
                  {step:"1",title:"Order and receive your kit",desc:"Select your guard, pass a quick safety screening, and a putty impression kit ships to your door.",img:S1},
                  {step:"2",title:"Make your impression at home",desc:"Mix the putty, press the tray to your teeth, and mail it back in the prepaid envelope.",img:S2},
                  {step:"3",title:"Dentist reviews, lab fabricates",desc:"A licensed dentist approves your case and your custom appliance is milled to a perfect fit. Up to 1 free re-impression kit included if your mold does not pass lab inspection.",superbill:true,img:S3},
                ].map(item=>(
                  <div key={item.step} style={{borderRadius:16,overflow:"hidden",background:"#fff",border:"1px solid "+COLORS.border,boxShadow:"0 2px 12px rgba(28,43,58,0.06)",display:"flex",flexDirection:"column"}}>
                    <div style={{width:"100%",aspectRatio:"4/3",overflow:"hidden",background:COLORS.sand}}>
                      <img src={item.img} alt={item.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                    </div>
                    <div style={{padding:"22px 24px",flex:1,display:"flex",flexDirection:"column"}}>
                      <div style={{fontSize:12,fontWeight:700,color:COLORS.clinicalBlue,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:10}}>Step {item.step}</div>
                      <h3 style={{fontSize:18,fontWeight:800,color:COLORS.navy,margin:"0 0 8px",letterSpacing:"-0.01em"}}>{item.title}</h3>
                      <p style={{fontSize:14,color:COLORS.muted,lineHeight:1.65,margin:"0 0 16px",flex:1}}>{item.desc}</p>
                      {item.superbill&&(
                        <button onClick={()=>setView("superbill")}
                          onMouseEnter={e=>{e.currentTarget.style.background="#FFF3C4";}}
                          onMouseLeave={e=>{e.currentTarget.style.background="#FFFBEB";}}
                          style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"12px 16px",background:"#FFFBEB",border:"1px solid #F5D87A",borderRadius:10,cursor:"pointer",transition:"all 0.18s",width:"100%",textAlign:"left"}}>
                          <div>
                            <div style={{fontSize:12,fontWeight:700,color:"#92650A",marginBottom:2}}>Superbill included with every order</div>
                            <div style={{fontSize:11,color:"#B8860B",lineHeight:1.5}}>Submit to your PPO for up to 80% reimbursement.</div>
                          </div>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{flexShrink:0}}><path d="M6 3l6 6-6 6" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </section>

          <section style={{padding:"72px 40px",background:"linear-gradient(160deg,#FFFEF7 0%,#FFF9E6 50%,#FFF5D6 100%)"}}>
            <div style={{maxWidth:1060,margin:"0 auto"}}>
              <div style={{textAlign:"center",marginBottom:48}}>
                <div style={{display:"inline-block",background:COLORS.clinicalBlueLight,color:COLORS.clinicalBlueDark,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"4px 14px",borderRadius:20,marginBottom:16}}>Why The Guard Guy</div>
                <h2 style={{fontSize:"clamp(22px,3.5vw,34px)",fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 12px",lineHeight:1.2}}>Why pay $600 at the dentist when you get the same lab fit for $150?</h2>
                <p style={{fontSize:16,color:COLORS.muted,maxWidth:560,margin:"0 auto",lineHeight:1.7}}>See how The Guard Guy compares to drugstore guards, online brands, and traditional dental offices.</p>
              </div>
              <div style={{borderRadius:20,overflow:"hidden",border:"1px solid "+COLORS.border,boxShadow:"0 8px 40px rgba(28,43,58,0.08)",marginBottom:64}}>
                <div style={{overflowX:"auto"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",minWidth:640}}>
                    <thead>
                      <tr>
                        <th style={{padding:"20px 20px",background:COLORS.canvas,textAlign:"left",fontSize:12,fontWeight:700,color:COLORS.muted,letterSpacing:"0.06em",textTransform:"uppercase",borderBottom:"2px solid "+COLORS.border,width:"28%"}}>Feature</th>
                        {[{label:"Drugstore",sub:"$20 - $40"},{label:"DTC Brands",sub:"Remi / Cheeky"},{label:"In-Office Dentist",sub:"$400 - $800+"}].map((col,i)=>(
                          <th key={i} style={{padding:"20px 16px",background:COLORS.canvas,textAlign:"center",fontSize:13,fontWeight:700,color:COLORS.navyLight,borderBottom:"2px solid "+COLORS.border,borderLeft:"1px solid "+COLORS.border}}>
                            <div>{col.label}</div>
                            <div style={{fontSize:11,fontWeight:500,color:COLORS.muted,marginTop:3}}>{col.sub}</div>
                          </th>
                        ))}
                        <th style={{padding:"0",background:COLORS.clinicalBlue,textAlign:"center",borderBottom:"2px solid "+COLORS.clinicalBlueDark,borderLeft:"2px solid "+COLORS.clinicalBlueDark,position:"relative",minWidth:160}}>
                          <div style={{padding:"12px 16px 16px"}}>
                            <div style={{display:"inline-block",background:"rgba(255,255,255,0.2)",color:"#fff",fontSize:9,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",padding:"2px 10px",borderRadius:20,marginBottom:8}}>Best Choice</div>
                            <div style={{fontSize:14,fontWeight:800,color:"#fff"}}>The Guard Guy</div>
                            <div style={{fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.75)",marginTop:3}}>$150 - $175</div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {feature:"Prescribed by Licensed Dentists",cols:["No","No  Marketing brands","Yes"],gg:{icon:"Yes",note:"100% Doctor-Led"}},
                        {feature:"Custom Lab Precision Fit",cols:["No  Boil and Bite","Yes","Yes"],gg:{icon:"Yes",note:null}},
                        {feature:"FDA-Cleared, BPA-Free Materials",cols:["No","Yes","Yes"],gg:{icon:"Yes",note:null}},
                        {feature:"Superbill for HSA / FSA / Insurance",cols:["No","Varies","Yes"],gg:{icon:"Yes",note:"Automated"}},
                        {feature:"Free Re-Impression Guarantee",cols:["No","Some charge fees","No  Paid visit required"],gg:{icon:"Yes",note:"Free kit shipped"}},
                        {feature:"Total Out-of-Pocket Cost",cols:["$20 - $40","$95 - $189","$400 - $800+"],gg:{icon:"$150 - $175",note:"Best value",price:true}},
                        {feature:"Lifetime Fit Protection",cols:["No","No","No"],gg:{icon:"Yes",note:"50% off forever"}},
                      ].map((row,ri)=>(
                        <tr key={ri} style={{borderBottom:"1px solid "+COLORS.border,background:ri%2===0?"#fff":COLORS.canvas}}>
                          <td style={{padding:"16px 20px",fontSize:13,fontWeight:700,color:COLORS.navy}}>{row.feature}</td>
                          {row.cols.map((c,ci)=>(
                            <td key={ci} style={{padding:"16px 16px",textAlign:"center",fontSize:13,color:c.startsWith("Yes")?COLORS.sage:c.startsWith("No")?COLORS.rose:c.startsWith("Varies")?"#92650A":COLORS.navy,borderLeft:"1px solid "+COLORS.border,fontWeight:600}}>{c}</td>
                          ))}
                          <td style={{padding:"16px 16px",textAlign:"center",background:ri%2===0?"rgba(58,107,138,0.06)":"rgba(58,107,138,0.10)",borderLeft:"2px solid "+COLORS.clinicalBlueDark}}>
                            <div style={{fontSize:row.gg.price?18:16,fontWeight:800,color:row.gg.price?COLORS.clinicalBlue:COLORS.sage}}>{row.gg.icon}</div>
                            {row.gg.note&&<div style={{fontSize:10,fontWeight:700,color:COLORS.clinicalBlueDark,marginTop:3}}>{row.gg.note}</div>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section style={{padding:"72px 40px",background:"#fff"}}>
            <div style={{maxWidth:1060,margin:"0 auto"}}>
              <div style={{textAlign:"center",marginBottom:40}}>
                <h3 style={{fontSize:28,fontWeight:800,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 8px"}}>Our promise to every patient.</h3>
                <p style={{fontSize:15,color:COLORS.muted,margin:0}}>Three guarantees that set us apart.</p>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24,marginBottom:56}}>
                {[
                  {icon:"shield",color:COLORS.clinicalBlue,colorLight:COLORS.clinicalBlueLight,title:"6-Month Warranty + Lifetime 50% Off",body:"Guaranteed to fit now and in the future. Every appliance includes a 6-month replacement warranty. Plus up to 1 free re-impression kit if your mold does not meet lab standards. If your teeth shift or you get dental work, receive 50% off a brand-new replacement for life."},
                  {icon:"lab",color:COLORS.sage,colorLight:COLORS.sageLight,title:"Direct Dental-Lab Fabrication. No Middleman.",body:"Dentists outsource night guards to dental laboratories. We cut out the office markup entirely. You get the exact same FDA-cleared, custom-molded materials for up to 70% less."},
                  {icon:"doc",color:"#92650A",colorLight:"#FFFBEB",title:"Automated HSA/FSA and Insurance Superbill",body:"Pay with your HSA or FSA debit card at checkout. Every order automatically includes an itemized receipt with standard dental insurance codes so you can easily submit for reimbursement."},
                ].map((card,i)=>(
                  <div key={i} style={{background:"#fff",borderRadius:16,padding:"32px 28px",border:"1.5px solid "+COLORS.border,boxShadow:"0 4px 20px rgba(28,43,58,0.06)",display:"flex",flexDirection:"column",gap:16}}>
                    <div style={{width:52,height:52,borderRadius:14,background:card.colorLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {card.icon==="shield"&&<path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z" stroke={card.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
                        {card.icon==="lab"&&<path d="M9 3h6M9 3v8l-4 9h14l-4-9V3" stroke={card.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
                        {card.icon==="doc"&&<><rect x="4" y="2" width="16" height="20" rx="2" stroke={card.color} strokeWidth="2"/><path d="M8 7h8M8 11h8M8 15h4" stroke={card.color} strokeWidth="2" strokeLinecap="round"/></>}
                      </svg>
                    </div>
                    <div>
                      <h4 style={{fontSize:16,fontWeight:800,color:COLORS.navy,margin:"0 0 10px",lineHeight:1.3}}>{card.title}</h4>
                      <p style={{fontSize:13,color:COLORS.muted,lineHeight:1.75,margin:0}}>{card.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap"}}>
                <button
                  onClick={()=>productsRef.current&&productsRef.current.scrollIntoView({behavior:"smooth",block:"start"})}
                  onMouseEnter={e=>{e.currentTarget.style.background=COLORS.clinicalBlueDark;}}
                  onMouseLeave={e=>{e.currentTarget.style.background=COLORS.clinicalBlue;}}
                  style={{background:COLORS.clinicalBlue,color:"#fff",border:"none",borderRadius:50,padding:"16px 44px",fontSize:15,fontWeight:700,letterSpacing:"0.04em",cursor:"pointer",transition:"background 0.18s",boxShadow:"0 6px 24px rgba(58,107,138,0.28)"}}>
                  Shop Custom Appliances
                </button>
                <button
                  onClick={()=>setView("warranty")}
                  onMouseEnter={e=>{e.currentTarget.style.color=COLORS.clinicalBlueDark;}}
                  onMouseLeave={e=>{e.currentTarget.style.color=COLORS.clinicalBlue;}}
                  style={{background:"transparent",color:COLORS.clinicalBlue,border:"none",fontSize:14,fontWeight:700,cursor:"pointer",textDecoration:"underline",textUnderlineOffset:"4px"}}>
                  Coverage Details?
                </button>
              </div>
            </div>
          </section>

          <section ref={productsRef} style={{padding:"72px 40px",background:COLORS.canvas}}>
            <div style={{maxWidth:1060,margin:"0 auto"}}>
              <div style={{textAlign:"center",marginBottom:52}}>
                <div style={{display:"inline-block",background:COLORS.clinicalBlueLight,color:COLORS.clinicalBlueDark,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"3px 10px",borderRadius:20,marginBottom:14}}>Our Products</div>
                <h2 style={{fontSize:32,fontWeight:700,color:COLORS.navy,fontFamily:"Georgia, serif",margin:"0 0 8px"}}>Choose your custom fit</h2>
                <p style={{color:COLORS.muted,fontSize:16,margin:"0 0 14px"}}>All devices fabricated by ADA-compliant dental labs. Dentist-prescribed.</p>
                <button onClick={()=>setShowNGQuiz(true)}
                  onMouseEnter={e=>{e.currentTarget.style.color=COLORS.clinicalBlueDark;}}
                  onMouseLeave={e=>{e.currentTarget.style.color=COLORS.clinicalBlue;}}
                  style={{background:"none",border:"none",color:COLORS.clinicalBlue,fontSize:14,fontWeight:600,cursor:"pointer",textDecoration:"underline",textUnderlineOffset:"4px",fontFamily:"inherit",transition:"color 0.15s"}}>
                  Not sure which night guard is right for you? Take the quiz →
                </button>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
                {PRODUCTS.map(p=><ProductCard key={p.id} product={p} onBuy={(prod)=>{
                  if(prod.id===1||prod.id===2||prod.id===3)setShowNG(true);
                  else if(prod.id===6)setShowRT(true);
                  else if(prod.id===4)setShowBL(true);
                  else if(prod.id===5)setShowSP(true);
                }} onLearn={(p)=>{setView("learn");setTimeout(()=>{const el=document.getElementById("study-"+(p.id===1||p.id===2||p.id===3?1:p.id===5?2:p.id===4?3:4));if(el)el.scrollIntoView({behavior:"smooth",block:"start"});},120);}}/>)}
              </div>
            </div>
          </section>

          <ReviewsSection/>

          <footer style={{background:COLORS.navy,color:"#fff",padding:"52px 40px 32px"}}>
            <div style={{maxWidth:1000,margin:"0 auto"}}>
              <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:32,marginBottom:40}}>
                <div>
                  <div style={{fontFamily:"Georgia, serif",fontWeight:700,fontSize:22,marginBottom:12}}>The Guard Guy</div>
                  <p style={{color:"rgba(255,255,255,0.5)",fontSize:13,maxWidth:280,lineHeight:1.7}}>Professional dental appliances, prescribed remotely by licensed dentists.</p>
                </div>
                {[
                  {title:"Products",links:[{l:"Night Guards",v:"pg_ng"},{l:"Sport Guards",v:"pg_sp"},{l:"Retainers",v:"pg_rt"},{l:"Bleaching Trays",v:"pg_wt"}]},
                  {title:"Company",links:[{l:"About Us",v:"about"},{l:"Education",v:"learn"},{l:"Insurance / Superbill",v:"superbill"},{l:"Track Order",v:"track"}]},
                  {title:"Support",links:[{l:"FAQ",v:"faq"},{l:"Shipping & Returns",v:"shipping"},{l:"Contact Us",v:"contact"},{l:"Notice of Privacy Practices",v:"privacy"},{l:"Impression Guide",v:"impression"}]},
                ].map(({title,links})=>(
                  <div key={title}>
                    <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)",marginBottom:14}}>{title}</div>
                    {links.map(({l,v})=><div key={l} onClick={()=>setView(v)} style={{color:"rgba(255,255,255,0.65)",fontSize:13,marginBottom:8,cursor:"pointer"}}>{l}</div>)}
                  </div>
                ))}
              </div>
              <div style={{width:"100%",height:1,background:"rgba(255,255,255,0.1)",margin:"0 0 24px"}}/>
              <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12,alignItems:"center"}}>
                <p style={{color:"rgba(255,255,255,0.35)",fontSize:12,margin:0}}>2025 The Guard Guy. Teledentistry services provided by state-licensed dentists. Currently serving CA, UT and ID - expanding nationwide.</p>
                <div style={{display:"flex",alignItems:"center",gap:16}}>
                  <p style={{color:"rgba(255,255,255,0.35)",fontSize:12,margin:0}}>HIPAA Compliant</p>
                  <button onClick={()=>setView("dentist")} style={{background:"none",border:"none",color:"rgba(255,255,255,0.2)",fontSize:11,cursor:"pointer",padding:0,fontFamily:"inherit",letterSpacing:"0.04em"}}
                    onMouseEnter={e=>{e.currentTarget.style.color="rgba(255,255,255,0.5)";}}
                    onMouseLeave={e=>{e.currentTarget.style.color="rgba(255,255,255,0.2)";}}>
                    Clinician Portal
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}

      {showNG&&<NightGuardFunnel onClose={()=>setShowNG(false)} onBuyProduct={handleFunnelBuy}/>}
      {showNGQuiz&&<NightGuardQuiz onClose={()=>setShowNGQuiz(false)} onResult={handleQuizResult}/>}
      {showRT&&<RetainerFunnel onClose={()=>setShowRT(false)} onBuyProduct={handleFunnelBuy}/>}
      {showBL&&<BleachFunnel onClose={()=>setShowBL(false)} onBuyProduct={handleFunnelBuy}/>}
      {showSP&&<SportFunnel onClose={()=>setShowSP(false)} onBuyProduct={handleFunnelBuy}/>}
      {screeningProduct&&<ScreeningModal product={screeningProduct} onClose={()=>setScreeningProduct(null)} onPass={handlePass}/>}
    </div>
  );
}
