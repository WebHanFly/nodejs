import React, { useState , useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
  import home from '../css/home.scss';
  import {PORTIP} from './appdata';

const fetchData = async (setData,endURL) => {
    let port = location.href.indexOf('3000') > -1 ? 'http://localhost:80' : '';
    const result = await axios.post(
      port + endURL,
      {name : 'xiaoma'}
    ).catch((err)=>{
      console.log(err);
      setData([{name : 'test'}]);
    });
    setData(result.data.data);
  };

const handleclick = (index,setLiActive,setData)=>{
    setLiActive(index);
    if(index == 1){
      fetchData(setData,'/users/login');
    }else if(index == 2){
      fetchData(setData,'/users/login1');
    }else if(index == 3){
      fetchData(setData,'/users/login2');
    }else if(index == 4){
      fetchData(setData,'/users/login3');
    }
  }
function Artical() {
  // 声明一个新的叫做 “count” 的 state 变量
const [data, setData] = useState([]);

//请求后台数据
useEffect(() => {
  fetchData(setData,'/users/login');
}, []);

const[liactive,setLiActive] = useState(1);


return (
  <div>
    <div className={home.ulwrap}>
      <ul>
        <li onClick={()=>{handleclick(1,setLiActive,setData)}} className={liactive == 1 ?  home.active : ''}>文章</li>
        <li onClick={()=>{handleclick(2,setLiActive,setData)}} className={liactive == 2 ?  home.active : ''}>作品</li>
        <li onClick={()=>{handleclick(3,setLiActive,setData)}} className={liactive == 3 ?  home.active : ''}>历程</li>
        <li onClick={()=>{handleclick(4,setLiActive,setData)}} className={liactive == 4 ?  home.active : ''}>资料</li>
      </ul>
    </div>
    <ul>
        {data.map(item => (
                <li key={item._id}>
                <Link to={'/artical'}>{item.name}</Link>
                </li>
             ))}
        </ul>
  </div>
);
}



export default Artical;