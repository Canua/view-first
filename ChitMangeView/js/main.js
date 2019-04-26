window.onload = function(){
    const header = document.getElementById('header')
    const subtopics = document.getElementById('subtopics')
    const form = document.getElementById('form')

    // header
     var headerContent = 
        "<i class='fas fa-bars hamburger-btn'></i>" +
        "<span class='header-title'>회계 관리</span>";
    // subtopics
     var subtopicItems = subtopicList.subtopicsItem;
     var subtopicsContent =''
     for(var i=0; i < subtopicItems.length; i++){
         let item = (subtopicItems[i].title);
         subtopicsContent += "<div class='subtopic-item items'>" + item + "</div>"
     }
    // form-wrapper
    
        appendHtml(header, headerContent);
        appendHtml(subtopics, subtopicsContent);
}

function appendHtml(el, str) {
    console.log('append')
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.appendChild(div.children[0]);
    }
}
// subtopic Data
subtopicList = {
    "subtopicsItem" : [
        {
            id : 0,
            title: '현재 자산'
        },
        {
            id : 1,
            title: '전표 입력'
        },
        {
            id : 2,
            title: '기간별'
        },
        {
            id : 3,
            title: '기타'
        }
    ]
    
}