//app-config에서 url 주소 가져오기
import { API_BASE_URL } from "../app-config";

export function call(api,method,request){
    //옵션 세팅
    let options ={
        headers : new Headers({
        "Content-Type" : "application/json",
        }),
        url : API_BASE_URL+api,
        method:method,
    };

    if(request){
        //json 형태로 options에 요청(item)넣기
        options.body = JSON.stringify(request);
    }
    //url에 options와 함께 fetch
    return fetch(options.url, options).then((response)=>
        response.json().then((json)=>{
            //정상 응답시 json 리턴
            if(response.ok){
                return json
            }
            //에러 발생 시
            return Promise.reject(json);
        })  
          
    );
}