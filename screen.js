import React from 'react'
import './screen.css'
import Screenshot1 from '../components/s-t-f-images/screenshot1.png';
import Screenshot2 from '../components/s-t-f-images/screenshot2.jpg';
import Screenshot3 from '../components/s-t-f-images/screenshot3.jpg';
import Screenshot4 from '../components/s-t-f-images/screenshot4.jpg';
import Screenshot5 from '../components/s-t-f-images/screenshot5.jpg';
import Screenshot6 from '../components/s-t-f-images/screenshot6.jpg';




const Screen = () =>{

    return(
        <>

<section id="screenshot">
<div className="container">
    <div className="row">
        <div className="col-lg-12 text-center overview-head down-oh">
            <h2>SCREENSHOT</h2>
        </div>
    </div>
    <div className="row">
        <div className="kc-wrap" style={{perspective:"1e+10px"}}>


     {/*   <div class="kc-horizon" style={{position: "absolute", top: "50%", width: "800px", perspective: "1500px", transformStyle: "preserve-3d", perspectiveOrigin: "50% 0px", left: "-130px", transform: "scaleX(0.50625) scaleY(0.50625)", visibility: "visible"}}><div class="kc-item" data-cc-item-key="8" style={{transform-style: preserve-3d; opacity: 1; z-index: -100; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-600px) translateX(-74.4226px) rotateY(-45deg) rotateX(-20deg)}}>
        <img src={Screenshot2} alt="s6-img"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" style={{height: "12%", top: "99%", width="400", height="32"}}></canvas></div><div class="kc-item" data-cc-item-key="9" style={{transformStyle: preserve-3d; opacity: 1; z-index: 50; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-450px) translateX(-89.0753px) rotateY(-33.75deg) rotateX(-15deg)}}>
                    <img src={Screenshot3} alt="s6-img"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" width="400" height="32" style="height: 12%; top: 99%;"></canvas></div><div class="kc-item" data-cc-item-key="10" style={{transformStyle: preserve-3d; opacity: 1; z-index: 200; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-300px) translateX(-17.6068px) rotateY(-22.5deg) rotateX(-10deg)}}>
                    <img src={Screenshot4} alt="s6-img"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" width="400" height="32" style="height: 12%; top: 99%;"></canvas></div><div class="kc-item" data-cc-item-key="1" style={{transformStyle: preserve-3d; opacity: 1; z-index: 350; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-150px) translateX(124.404px) rotateY(-11.25deg) rotateX(-5deg)}}>
                    <img src={Screenshot1} alt="s6-img"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" width="400" height="32" style="height: 12%; top: 99%;"></canvas></div><div class="kc-item kc-front-item" data-cc-item-key="2" style={{transformStyle: preserve-3d; opacity: 1; z-index: 500; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(0px) translateX(306px) rotateY(0deg) rotateX(0deg)}}>
                    <img src={Screenshot2} alt="s6-img"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" width="400" height="32" style="height: 12%; top: 99%;"></canvas></div><div class="kc-item" data-cc-item-key="3" style={{transformStyle: preserve-3d; opacity: "1", z-index: 350; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-150px) translateX(487.596px) rotateY(11.25deg) rotateX(-5deg)}}>
                    <img src={Screenshot3} alt="s6-img"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" width="400" height="32" style="height: 12%; top: 99%;"></canvas></div><div class="kc-item" data-cc-item-key="4" style={{transformStyle: preserve-3d; opacity: "1", zIndex: 200; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-300px) translateX(629.607px) rotateY(22.5deg) rotateX(-10deg)}}>
                    <img src={Screenshot4} alt="s6-img"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" width="400" height="32" style="height: 12%; top: 99%;"></canvas></div><div class="kc-item" data-cc-item-key="5", style={{transformStyle: "preserve-3d", opacity: "1", zIndex: "50", visibility: "visible", width: "188px", height: "250px", transform:"translateY(-125px) translateZ(-450px) translateX(701.075px) rotateY(33.75deg) rotateX(-15deg)"}}>
                    <img src={Screenshot5} alt="s6-img"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" width="400" height="32" style={{height: "12%", top: "99%"}}></canvas></div><div class="kc-item" data-cc-item-key="6", style={{transformStyle: "preserve-3d", opacity: "1", zIndex: "-100", visibility: "visible", width: "188px", height: "250px", transform: "translateY(-125px) translateZ(-600px) translateX(686.423px) rotateY(45deg) rotateX(-20deg)"}}>
                        <img src={Screenshot6} alt="s6-1mg"/>
                    <img class="cc-decoration kc-shadow-bottom"/><img class="cc-decoration kc-shadow-left"/><img class="cc-decoration kc-shadow-right"/><canvas class="cc-decoration kc-reflection" width="400" height="32" style={{height: "12%", top: "99%;"}}></canvas></div></div>

                    <div style={{position:"absolute", left: "10px", bottom:"10px", zIndex: "100000", visibility: "visible", display: "block", color: "rgb(255, 255, 255)", textShadow: "none", fontFamily: "sans-serif", fontSize: "10px", fontWeight: "bold", padding: "2px", border: "1px solid rgb(68, 0, 0)", backgroundColor: "rgb(221, 0, 0)"}}>Killer Carousel trial</div>

            
            <div className="kc-item">
                <img src={Screenshot1} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot2} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot3} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot4} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot5} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot6} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot1} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot2} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot3} alt="eben"/>
            </div>
            <div className="kc-item">
                <img src={Screenshot4} alt="eben"/>
            </div>
        </div>
    </div>
</div>
</section>

</>
    )
}

export default Screen

