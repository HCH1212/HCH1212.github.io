var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="w(ﾟДﾟ)w 不要离开我～",clearTimeout(titleTime)):(document.title="♪(^∇^*)欢迎肥来！"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));