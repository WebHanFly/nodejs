import React, { useState , useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
  import home from '../css/home.scss';

function Artical() {
// 声明一个叫 “count” 的 state 变量。
const [count, setCount] = useState(0);
  // 声明一个新的叫做 “count” 的 state 变量
const [data, setData] = useState([]);

//请求后台数据
useEffect(() => {
  const fetchData = async () => {
    const result = await axios.post(
      'http://localhost/users/login',
      {name : 'xiaoma'}
    );
    setData(result.data.data);
  };
  fetchData();
}, []);

return (
  <div>
    <div className={home.ulwrap}>
      <ul>
        <li className={home.active}>文章</li>
        <li>作品</li>
        <li>历程</li>
        <li>资料</li>
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