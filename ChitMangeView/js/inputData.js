const form = document.getElementById('form');
const requestURL = './formData.json';

const request = new XMLHttpRequest();
request.open('GET', requestURL);
// 자바스크립트 객체로 변환
request.responseType = 'json';
request.send();

request.onload = function() {
    var formData = request.response;
      formItems(formData);
}
function formItems(formData) {
    const formItemList = formData['formData'];
    var titles ='';
    var cols ='';
    var types ='';
    var icon =''; 
    var html='';
    for(var i=0; i<formItemList.length; i++){
        titles += formItemList[i].title;
        cols += formItemList[i].col;
        types += formItemList[i].type;
        icon += formItemList[i].icon;
        const widthStyle = (100 / cols) + '%';
        html+=<div className="inputText" style={style}>
        
    }


    // <div className={cx('inputBox', { 
    //     settle: select})}>
        
    //     <div className={cx('titleBox', {
    //          longText: isLong
    //     })}>
            
    //         <span>{title}</span>
    //     </div>
    // </div>
    // {isLong==='true' ?  
    // <textarea className='textarea'></textarea> :
    // <input type={type} className={cx('inputType', { 
    //     settle: select})} style={iconStyle}>
    //     </input>
    // }
    // </div>
    }

//     // 요소 추가
//     var myH1 = document.createElement('h1');
//     // 선택한 요소에 택스트 추가
//     // myH1..createTextNode( 'My Text' );

//     myH1.textContent = jsonObj['squadName'];
//     header.appendChild(myH1);

//     var myPara = document.createElement('p');
//     myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//     header.appendChild(myPara);
  }

//   function showHeroes(jsonObj) {
//     var heroes = jsonObj['members'];

//     for (var i = 0; i < heroes.length; i++) {
//       var myArticle = document.createElement('article');
//       var myH2 = document.createElement('h2');
//       var myPara1 = document.createElement('p');
//       var myPara2 = document.createElement('p');
//       var myPara3 = document.createElement('p');
//       var myList = document.createElement('ul');

//       myH2.textContent = heroes[i].name;
//       myH2.setAttribute('class', 'on');
//       myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//       myPara2.textContent = 'Age: ' + heroes[i].age;
//       myPara3.textContent = 'Superpowers:';

//       var superPowers = heroes[i].powers;
//       for (var j = 0; j < superPowers.length; j++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = superPowers[j];
//         myList.appendChild(listItem);
//       }

//       myArticle.appendChild(myH2);
//       myArticle.appendChild(myPara1);
//       myArticle.appendChild(myPara2);
//       myArticle.appendChild(myPara3);
//       myArticle.appendChild(myList);

//       section.appendChild(myArticle);
//     }
//   }

function appendHtml(el, str) {
    console.log('append')
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.appendChild(div.children[0]);
    }
}