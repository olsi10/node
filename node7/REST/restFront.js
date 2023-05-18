function getUser() { // 로딩시 사용자 가져오는 함수
    // 웹 브라우저는 서버에 데이터를 요청하기 위한 XMLHttpRequest 객체 내장
    // reponseText 프로퍼티 : 서버에 요청하여 응답으로 받은 데이터를 문자열로 저장
    // AJAX 에서는 요청을 보내기 전에 setRequest 메소드로 HTTP 상태를 알 수 있습니다.

    // XMLHttpRequest
    // open : 요청 초기화
    // send(String) : 서버에 요청보내기. GET 방식 요청일 때 사용
    // send : 서버에 요청 보냄. POST 방식 요청일 때 사용

    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
       if(xhr.status == 200) {
        let users = JSON.parse(xhr.responseText);
        let list = document.getElementById('list');
        list.innerHTML = '';
        Object.keys(users).map(function(key) {
            let userDiv = document.createElement('div');
            let span = document.createElement('span');
            span.textContent = users[key];
            
            let edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', function() {
                let name = prompt("바꿀 이름 입력 : ");
                if(!name) {
                    return alert("이름이 입력되지 않음");
                }
                let xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    if(xhr.status === 200) {
                        console.log(xhr.responseText);
                        getUser();
                    }
                    else {
                        console.error(xhr.responseText);
                    }
                };
                xhr.open('PUT', '/users/' + key);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify({name:name}));
            });
            let remove = document.createElement('button');
            remove.textContent = "삭제";
            remove.addEventListener('click', function() {
                let xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    if(xhr.status === 200) {
                        console.log(xhr.responseText);
                        getUser();
                    }
                    else {
                        console.error(xhr.responseText);
                    }
                };
                xhr.open('DELETE', '/users/' + key);
                xhr.send();
            });
            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove);
            list.appendChild(userDiv);
        });
       } else {
        console.error(xhr.responseText);
       }
    };

    xhr.open('GET', '/users');
    xhr.send();
}

window.onload = getUser;

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = e.target.username.value;
    if(!name) {
        return alert("이름 입력하세여");
    }
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if(xhr.status === 201) {
            console.log(xhr.responseText);
            getUser();
        }
        else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({name : name}));
    e.target.username.value = '';
});