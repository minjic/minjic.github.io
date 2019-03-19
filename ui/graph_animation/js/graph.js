const Graph = (_=>{

  const menuList = [
    {idx:0, name:"맥스파이시상하이 버거", value:"shanghai", count:10},
    {idx:1, name:"베이컨 토마토 디럭스", value:"bacon", count:15},
    {idx:2, name:"골든에그치즈 버거", value:"golden", count:7},
    {idx:3, name:"더블 1955 버거", value:"double", count:3}
  ];

  const form = document.querySelector(".form__menu");
  const radioList = document.getElementsByName("menu");

  /*

  1. 투표하면 value 증가
  2. value 기반으로 그래프 그리기
  2-1. 최대수치 + 10 > 그래프 최대값
  2-2. 최대값 대비 항목 값 퍼센트로 높이 지정
  2-3. 각 value값 그래프 위에 넣기

  */

  // 1. 투표하면 value 증가
  const addCount = checkedValue => {
    menuList.forEach( v => {
      if (v.value === checkedValue) v.count += 1;
    })
    
    alert("투표 완료!")
    renderGraph();
  };

  const addEvent = _ => {
    form.addEventListener("submit", function(e) {
      event.preventDefault();

      if ( radioList.length <= 1) return false;

      let postValue;
      const value = Array.from(radioList).some(v => {
        if (v.checked) {
          postValue = v.value;
          return v.value;
        } else return false;
      })
      
      if ( value && postValue ) addCount(postValue);
      else alert("메뉴를 선택해주세요");

      radioCheckReset();
    })
  };

  const radioCheckReset = _ => {
    if ( radioList.length <= 1) return false;
    radioList.forEach(v => {
      v.checked = false;
    })
  }

  // 2. value 기반으로 그래프 그리기
  const renderGraph = init => {
    const menuListCopy = menuList.concat();
    const maxElement = menuListCopy.reduce((p, c) => p.count > c.count ? p : c);
    
    // x항목
    const xAxis = document.querySelector(".graph .graph__xAxis");
    const max = Number(maxElement.count + 5);
    const unit = Number(max/4)
    xAxis.innerHTML = "";
    for ( let i = 0; i < 5; i++ ){
      const span = createTagAddClassName("span", "value"+ (i*25));
      span.innerText = Math.ceil(unit * i);
      xAxis.appendChild(span);
    }
    
    // bar
    const graphBar = document.querySelectorAll(".graph .graph__bar");
    // if (init) {
    //   console.log(init);
    //   graphBar.forEach( v => {
    //     v.style.height = 0;
    //   })
    // }
    graphBar.forEach( (v,i) => {
      v.style.height = `${Math.ceil((menuListCopy[i].count / max) * 100)}%`;
      v.querySelector(".graph__number").innerText = menuListCopy[i].count;
    })
  };

  const createTagAddClassName = (tagName, className)=> {
    const tag = document.createElement(tagName);
    tag.className = className;
    return tag;
  }

  return (_ => {
    addEvent();
    renderGraph("init");
  })()
})();