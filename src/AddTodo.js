import React from "react";
import { TextField, Paper, Button, Grid } from "@mui/material";

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={ item:  {title : ""} }; //사용자 입력을 저장할 오브젝트
        this.add = props.add; //상위 컴포넌트에서 가져온 add 함수를 연결
    }

    //input 변화시 함수 작성
    onInputChange = (e)=>{
        //state의 item값 가져오기
        const thisItem = this.state.item;
        //thisItem의 타이틀을 변화된 값으로 변경
        thisItem.title = e.target.value;
        //state의 item을 thisItem으로 업데이트
        this.setState({item:thisItem});
        console.log(thisItem);
    }

    //+버튼 클릭시 리스트 추가 함수 작성
    onButtonClick=()=>{
        this.add(this.state.item); //add함수 작성, 상위 컴포넌트 이용
        this.setState({item : {title:""}}); //타이틀 초기화
    }

    //엔터 치는 경우 onButtonClick과 동일
    enterKeyEventHandler = (e)=>{
        if(e.key==='Enter'){
            this.onButtonClick();
        }
    }

    render(){
        return(
            <Paper style={{margin : 16, padding : 16}}>
                <Grid container>
                    {/* Grid 의 xs,sm,md,lg,xl 속성에 숫자가 들어가면 너비를 12등분으로 나눈 값의 비율만큼 가로 길이가 차지됨
                        각 속성의 차이는 화면 크기의 차이이며, 각각 최소, 작음, 중간, 큼, 최대 이다. */}
                    <Grid xs={11} md={11} item style={{paddingRight : 16}}>
                        <TextField
                            placeholder="Add Todo Here"
                            fullWidth
                            onChange={this.onInputChange} //input 변화 시 함수 연결
                            onKeyUpCapture={this.enterKeyEventHandler}
                            value={this.state.item.title}/>
                    </Grid>
                    <Grid xs={11} md={1} item>
                        <Button fullWidth 
                            color="secondary"
                            variant="outlined"
                            onClick={this.onButtonClick}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;
