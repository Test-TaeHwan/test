import logo from './logo.svg';
import './App.css';
import * as React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bomb_num:"",
			error_message:""
		};
	}

	makeTable(){
		let trList = new Array(10);
		
		for(let i= 0; i < trList.lemght; i++){
			trList[i] = new Array(10);
		}
		
		for (let i = 0; i < trList.length; i++){
			for (let j = 0; j < trList[i].length; j++){
				trList[i][j] = "" ;
			}
		}
	}

	//爆弾数取得
	handleOnChange(e){
	
		if(!isNaN(e.target.value)){
			if(e.target.value < 25){
				this.setState({bomb_num:e.target.value});
				this.setState({error_message:""});
			}else{
				this.setState({error_message:"24以下を入力してください。"});
			}
		}else{
			this.setState({error_message:"数字を入力してください。"});
		}
	}
	
	render() {

		let trList = new Array(10);
		const a = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]];

//		for(let i = 0; i < trList.lenght; i++){
//			trList[i] = i;
//		}
		
		return (
	 		<div>
	 		
	 			<input type="text" value={this.state.bomb_num} onChange={e => this.handleOnChange(e)} />
	 			
	 			<h1>爆弾の数：{this.state.bomb_num}</h1>
	 			<h1>{this.state.error_message}</h1>
	 			<table border="1" width="300" height="300">
	 					{a.map(row1 =>
	 						<tr>
	 							{row1.map(row2 =>
	 								<td>{row2}</td>
	 							)}
	 						</tr>
	 					)}
	 			</table>
			</div>
		);
	}
}
export default App;
