import React from 'react';

const Users = (props) =>{
    return(
<div>
    <input>{props.name} </input>
    <p> user name : {props.name}</p>
</div>
    );
}
export default  Users;