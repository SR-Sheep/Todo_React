import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo'
import {Paper,List, Container} from "@mui/material";
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      item : {id: 0, title : "Hello World", done : true},
      //배열 형태로 나열 가능
      items : [
        {id: "1", title : "Hello World 1", done : false},
        {id: "2", title : "Hello World 2", done : false},
        {id: "3", title : "Hello World 3", done : true}
      ]
    };
  }
  //리스트 추가 함수, AddTodo 컴포넌트에서는 상위 items에 접근할 수 없음으로 이곳에서 작성
  add = (item) =>{
    const thisItems = this.state.items;
    item.id = "ID-"+thisItems.length; //key를 위한 id 추가
    item.done = false; //done 초기화
    thisItems.push(item); //리스트에 item 추가
    this.setState({items: thisItems}); //업데이트
    console.log(thisItems);
  }

  render(){
    let todoItems = this.state.items.length>0&&(
      //Paper : div에 그림자를 넣어 종이모양으로 변경
      <Paper style={{margin : 16}}>
        {/* List : ul요소 */}
        <List>
          {/* map({변수명},idx) : 향상된 for문처럼 내재된 요소를 변수명으로 사용 */}
          {this.state.items.map((item,idx)=>(
            <Todo item={item} key={item.id}/>
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
