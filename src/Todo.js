import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";


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
        this.state = {item : props.item};
    }
    render(){
        const item = this.state.item;
        return(
            <ListItem>
                <Checkbox checked={item.done}/>
                    <ListItemText>
                        <InputBase
                            inputProps={{"aria-label":"naked"}}
                            type="text"
                            id={item.id}
                            name={item.id}
                            value={item.title}
                            multiline={true}
                            fullWidth={true}
                        />
                    </ListItemText>
            </ListItem>
        );
    }
}

export default Todo;