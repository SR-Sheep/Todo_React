import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";


//클래스 컴포먼트
//React.Componet를 상속받아서 생성
class Todo extends React.Component {
    //생성자 
    constructor(props){
        //super를 이용하여 props를 초기화
        super(props);
        //this.state를 item 변수와 props.item으로 초기화
        /*
            state : 리액트가 관리하는 오브젝트
        */
        this.state = {item : props.item, readOnly : true};
        // 상위 컴포넌트에서 가져온 delete함수 사용
        this.delete = props.delete;
        // 상위 컴포넌트에서 가져온 update함수 사용
        this.update = props.update;
    }
    //삭제
    deleteEventHandler = ()=>{
        this.delete(this.state.item);
    }
    //읽기 모드끄기
    offReadOnlyMode=()=>{
        console.log("Event",this.state.readOnly);
        this.setState({readOnly:false},()=>{
            console.log("ReadOnly?",this.state.readOnly);
        });
    }
    //읽기모드 켜기(엔터를 누르면 작동, 수정 업데이트)
    enterKeyEventHandler=(e)=>{
        if(e.key==="Enter"){
            this.setState({readOnly:true});
            this.update(this.state.item);
        }
    }
    //수정모드
    editEventHandler=(e)=>{
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
    }

    //체크박스
    checkboxEventHandler=(e)=>{
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item : thisItem});
        this.update(this.state.item); //체크박스 사항 업데이트 
    }


    render(){
        const item = this.state.item;
        return(
            //ListItem : 각 목록의 한개의 요소에 대한 속성
            //ListItem 휘하의 컴포넌트를 사용하기 위해서는 선언해야 함
            <ListItem>
                <Checkbox
                    checked={item.done}
                    onChange={this.checkboxEventHandler}
                    />
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked",readOnly:this.state.readOnly}}
                        onClick = {this.offReadOnlyMode} //클릭시 onlyread off
                        onKeyDown={this.enterKeyEventHandler} //엔터 입력 시 onlyread on
                        onChange={this.editEventHandler}//키보드 입력시 타이틀 변경
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
                {/*  */}
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

            
        );
    }
}

export default Todo;