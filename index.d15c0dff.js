!function(){const e=document.querySelector(".hour__arrow"),t=document.querySelector(".minute__arrow"),r=document.querySelector(".second__arrow");setInterval((()=>{const o=new Date,n=30*o.getHours(),s=6*o.getMinutes(),a=6*o.getSeconds();e.style.transform=`rotateZ(${n+s/12}deg)`,t.style.transform=`rotateZ(${s}deg)`,r.style.transform=`rotateZ(${a}deg)`}),0)}();
//# sourceMappingURL=index.d15c0dff.js.map