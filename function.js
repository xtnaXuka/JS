const news = [
  {
    title: "Хавар эхлэх бүтээн байгуулалтууд",
    date: "02.02.2022",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/zam.jpg",
  },
  {
    title: "Covid-19 элэг, цөс, нойр булчирхай гэмтээж байна",
    date: "01.02.2022",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2020/08/%D0%91.-%D0%91%D0%BE%D0%BB%D0%BE%D1%80%D0%BC%D0%B0%D0%B0-%D1%8D%D0%BC%D1%87-1-810x500.jpg",
  },
  {
    title: "Малчид нууцаар морины уралдаан зохион байгуулсан",
    date: "31.01.2022",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/2t4mpelteaocegkn2rcecmaf4l.jpg",
  },
  {
    title: "ГУРВАН УЛС ХОЙД СОЛОНГОСЫН ЭСРЭГ ХАМТРАН АЖИЛЛАХААР ТОХИРОВ",
    date: "06.02.2022",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/PYH2021120205920001300_P4-810x500.jpg",
  },
  {
    title: "Бээжин-2022: Камила Валиева өглөөний бэлтгэлдээ оролцлоо",
    date: "06.01.2022",
    type: "спорт",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/FotoJet-1.jpg",
  },
  {
    title: "Түүхий эдийн зах зээлд гарсан өөрчлөлтүүд",
    date: "16.01.2022",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/thermal-coal.jpg",
  },
  {
    title: "Brit Awards 2022: Адель хэзээ ч зогсохгүй",
    date: "17.01.2022",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/123191193_tv073650193-810x500.jpg",
  },
  {
    title: "Сурагчтай илүү ойлголцохын тулд багш нар дохионы хэл сурч байна",
    date: "13.01.2022",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/261167536_863431337863701_8228204878361988179_n-810x500.jpg",
  },
  {
    title: "Бодь даатгал ХК: 'Гэрийн тэжээвэр амьтны даатгал' Монголд анх удаа",
    date: "27.01.2023",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/photo_2022-02-11_09-37-41.jpg",
  },
];
//энд generateHtmlElement() фүнкцийг бич!

function generateHtmlElement(e){
  const a = document.querySelector("#mainNews")
  a.setAttribute('class', 'row');
  const div1 = document.createElement("div");
  div1.setAttribute('class', "col-4")
  a.appendChild(div1);



  const img1 = document.createElement("img");
  img1.setAttribute('src', e.pic_url)
  div1.appendChild(img1);

  const p1 = document.createElement('p')
  p1.innerText = e.title;
  div1.appendChild(p1)

 return div1;
}

document.querySelector("#buhmedee").addEventListener('click', ()=>{
  removesda()
  news.forEach((e, i) =>{
    generateHtmlElement(e);
    console.log(e);

  })
})

const ulstur = news.filter(func_ulstur);

function func_ulstur(value){
  return value.type == "улс төр";
}
const sport1 = news.filter(sport);

function sport(value){
  return value.type == "спорт";
}





document.querySelector("#ulstur").addEventListener('click', ()=>{
  removesda()
  ulstur.forEach((e, i) =>{
    generateHtmlElement(e);

  })
})
document.querySelector("#sport").addEventListener('click', ()=>{
  removesda()
  sport1.forEach((e, i) =>{
    generateHtmlElement(e);

  })
})
document.querySelector("#sortdown").addEventListener('click', ()=>{
 
    removesda()
    const e = news.sort((e1, e2) =>{
      if (e1.date < e2.date) {
        return -1;
      }
      else{
        return 1;
      }
    })
    e.forEach((e, i) =>{
      generateHtmlElement(e);
  
    })
  
})
document.querySelector("#sortup").addEventListener('click', ()=>{
 
  removesda()
    const e = news.sort((e1, e2) =>{
      if (e1.date < e2.date) {
        return 1;
      }
      else{
        return -1;
      }
    })
    e.forEach((e, i) =>{
      generateHtmlElement(e);
  
    })
    
  
})

function removesda(){
  const sda = document.querySelectorAll(".col-4");
  sda.forEach(e => {
  e.remove()
  });
}


//энд removeHtmlElement() фүнкцийг бич!

/*
энд 5н button-оо барьж аваад addEventListener хииж 
removeHtmlElement() фүнкцийг дуудаж index.html доторох
<div id="mainNews"> элементийг цэвэрлсний дараа
зохих loop(filter/sorting хйиж үүсгэсэн array-a generateHtmlElement() фүнкцэд өгч ажилуул

*/
