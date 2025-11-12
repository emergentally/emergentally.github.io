const a=(s,o,n,u=n)=>o.reduce((e,t)=>(s[t]&&e.push([u,t.replace(n,""),s[t]].filter(l=>l&&typeof l!="boolean").join("-").toLowerCase()),e),[]);export{a as g};
