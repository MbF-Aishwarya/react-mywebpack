import React from 'react';
/*import {Table, Column, Cell} from 'fixed-data-table';*/
import Table from 'text-table';
import PostForm from './PostForm';
import AllPost from './AllPost';


function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

class App extends React.Component {
   render() {
     var i=2;
     var myCss = {
     	fontSize:50,
     	color: 'red',
     }
     var greyCss = {
     	color:'grey',
     }
     const data = {
			date:new Date(),
			content: "hello i am a new content",
			 author: {
			   /* name: 'Hello Kitty',*/
			    avatarUrl: 'http://placekitten.com/g/64/64',
			  },
		};
      return (
         <div>
            Hello World!!         
          	<h1>Hello</h1>
          	<h1>you there?</h1>
          	<p>I am here, and you are {1 + 1}</p>
          	<h3>the value given is : {i == 2 ? 'True!':'false'}</h3>
          	<h4 style = {myCss} >i am red in color</h4>
          	<p style = {greyCss}>i am a stateless example</p>
          	<Header/>
          	<Footer/>
          	<p style = {greyCss}>i am a statefull example</p>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
            /*const and Props*/
             <Comment
			    date={comment.date}
			    text={comment.text}
			    author={comment.author}
			  />,

			  /*crud*/
			  <PostForm />
		     <AllPost />
         </div>

      );
   }

   constructor(){
   	super();
   	this.state = {
   		data:[
   			{
			"id":1,
   			"name":"aishu",
   			"age":24,	
   			},
   			{
			"id":2,
   			"name":"bharu",
   			"age":20,	
   			},
   			{
			"id":3,
   			"name":"rangu",
   			"age":20,	
   			}
   		]
   	}
   }
  
}
 class Header extends React.Component{
 	render(){
 		return(
 			<div>
 				<h1>Header</h1>
 			</div>
		);
 	}
 }
 class Footer extends React.Component{
 	render(){
 		return(
 			<div>
 				<h1>Footer</h1>
 			</div>
		);
 	}
 }
  class TableRow extends React.Component{
 	render(){
 		return(
 			<div>
 			<tr>
	            <td>{this.props.data.id}</td>
	            <td>{this.props.data.name}</td>
	            <td>{this.props.data.age}</td>
         	</tr>
 			</div>
		);
 	}
 }


export default App;