!function(){var e=document.querySelector("button"),o=document.querySelector(".form"),n=o.querySelector('[name="delay"]'),t=o.querySelector('[name="step"]'),c=o.querySelector('[name="amount"]');function a(e,o){var n=Math.random()>.3;new Promise((function(t,c){setTimeout((function(){n?t({position:e,delay:o}):c({position:e,delay:o})}),o)})).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}e.addEventListener("click",(function(e){e.preventDefault();for(var o=Number(n.value),r=Number(t.value),u=Number(c.value),i=1;i<=u;i+=1)a(i,o),o+=r}))}();
//# sourceMappingURL=03-promises.e4528a76.js.map
