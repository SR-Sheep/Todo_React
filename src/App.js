import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo'
import {Paper,List, Container} from "@mui/material";
import './App.css';
import {call} from "./service/ApiService"

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      items : []
    };
  }
  //리스트 추가 함수, AddTodo 컴포넌트에서는 상위 items에 접근할 수 없음으로 이곳에서 작성
  add = (item) =>{
    call("/todo","POST",item).then((response)=>
      this.setState({item : response.data})
    );
    const thisItems = this.state.items;
    item.id = "ID-"+thisItems.length; //key를 위한 id 추가
    item.done = false; //done 초기화
    thisItems.push(item); //리스트에 item 추가
    this.setState({items: thisItems}); //업데이트
    console.log(thisItems);
    
  };

  //삭제 함수
  delete =(item)=>{
    call("/todo","DELETE",item).then((response)=>
      this.setState({item : response.data})
    );
    const thisItems= this.state.items;
    console.log("Before Update Items : ", this.state.items);
    //클릭한 id가 item.id와 다른 요소 필터링
    const newItems = thisItems.filter(e=>e.id !==item.id);
    this.setState({items:newItems},()=>{
      //디버깅 콜백
      console.log("Update Items : ", this.state.items);
    });
  
  }

  update=(item)=>{
    call("/todo","PUT",item).then((response)=>
      this.setState({item : response.data})
    );
  }

  componentDidMount(){
    call("/todo","GET",null).then((response)=>
      this.setState({items : response.data})
    );
  }

  render(){
    let todoItems = this.state.items.length>0&&(
      //Paper : div에 그림자를 넣어 종이모양으로 변경
      <Paper style={{margin : 16}}>
        {/* List : ul요소 */}
        <List>
          {/* map({변수명},idx) : 향상된 for문처럼 내재된 요소를 변수명으로 사용 */}
          {this.state.items.map((item,idx)=>(
            <Todo item={item} key={item.id}
              delete={this.delete}
              update={this.update}/>
          ))}
        </List>
      </Paper>
    )

    return(
      <div className='App'>
        {/* maxWidth = "md" : 최대크기를 md로 한정 */}
        <Container maxWidth="md">
          {/* AddTodo에 add 함수 연결 */}
          <AddTodo add={this.add}/> 
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;
