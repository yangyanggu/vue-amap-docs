function o(a){const l=e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose&&e.material.dispose(),e.material.texture&&e.material.texture.dispose&&e.material.texture.dispose()},i=e=>{let t=e.children.filter(r=>r);t.forEach(r=>{r.children.length?i(r):r.isMesh&&l(r)}),t=null};i(a)}export{o as c};