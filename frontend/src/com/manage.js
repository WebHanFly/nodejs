import React, { useState , useEffect } from 'react';
import axios from 'axios';
import {PORTIP,port} from './appdata';
import {
    Link
  } from "react-router-dom";




  //获取数据
const fetchData = async (setData,endURL) => {
    console.log(port + endURL)
    const result = await axios.post(
      port + endURL
    ).then((result)=>{
        console.log(result,result.data.data)
        setData(result.data.data);
    }).catch((err)=>{
      console.log(err);
      return;
    });
   
  };
//增加li点击事件
const handleclick = (index,setLiActive,setData)=>{
    setLiActive(index);
    if(index == 1){
      fetchData(setData,'/works/Worksget');
    }else if(index == 2){
      fetchData(setData,'/works/Worksget');
    }else if(index == 3){
    //   fetchData(setData,'/users/login2');
    }else if(index == 4){
    //   fetchData(setData,'/users/login3');
    }
  }

const nameChange = (e,setName)=>{
    setName(e.target.value)
}
const authorChange = (e,setAuthor)=>{
    setAuthor(e.target.value)
}
const imgurlChange = (e,setimgurl)=>{
    setimgurl(e.target.value)
}
const tagsChange = (e,settags)=>{
    settags(e.target.value)
}
const dateChange = (e,setdate)=>{
    setdate(e.target.value)
}
const infoChange = (e,setinfo)=>{
    setinfo(e.target.value)
}
const urlChange = (e,seturl)=>{
    seturl(e.target.value)
}

const btncommit = (name,author,imgurl,tags,date,info,url) =>{
    console.log(name,author,imgurl,tags,date,info,url);
    if(name == '' || author == '' || imgurl == '' || tags == '' ||  date == '' || info == '' || url == ''){
        alert('参数为空');
        return;
    }
    axios.post(
      port + '/works/Workspush',
      {
          title : name,
          author : author,
          imgurl : imgurl,
          tags : tags,
          date : date,
          info : info,
          url : url,
          visitNumb :0,
          lovecunt :0,
      }
    ).then((result)=>{
          console.log(result)
    }).catch((err)=>{
      console.log(err);
      return;
    });
}


function testFetch(testFun,endURL){
  console.log(port + endURL);
  console.log(333333)
  const result =  axios.post(
    port + endURL,
    {name : 'xiaoma'}
  ).then((result)=>{
      console.log(result,result.data.data)
      testFun(result.data.data);
  }).catch((err)=>{
    console.log(err);
    return;
  });
}

function Manage() {

 // 声明一个新的叫做 “count” 的 state 变量
const [data, setData] = useState([]);
useEffect(() => {
    fetchData(setData,'/works/Worksget');
  }, [])



const[test,testFun] = useState([]);
useEffect(() => {
  console.log(22222222)
  testFetch(testFun,'/users/login');
}, []);



const[liactive,setLiActive] = useState(1);

const[name,setName] = useState('');
const[author,setAuthor] = useState('');
const[imgurl,setimgurl] = useState('');
const[tags,settags] = useState('');
const[date,setdate] = useState('');
const[info,setinfo] = useState('');
const[url,seturl] = useState('');




return (
  <div>
    <div className={''}>
      <ul>
        <li onClick={()=>{handleclick(1,setLiActive,setData)}} className={''}>文章后台</li>
        <li onClick={()=>{handleclick(2,setLiActive,setData)}} className={''}>作品后台</li>
        <li onClick={()=>{handleclick(3,setLiActive,setData)}} className={''}>历程后台</li>
        <li onClick={()=>{handleclick(4,setLiActive,setData)}} className={''}>资料后台</li>
      </ul>
    </div>
    <div className="manage">
        {liactive == 1 ? <div>
            <h1>作品后台管理</h1>
            <p className="name"><span>作品名字</span><span><input onChange={(e)=>{nameChange(e,setName)}} type="text"/></span></p>
            <p className="name"><span>作品作者</span><span><input onChange={(e)=>{authorChange(e,setAuthor)}} type="text"/></span></p>
            <p className="name"><span>作品图片</span><span><input onChange={(e)=>{imgurlChange(e,setimgurl)}} type="text"/></span></p>
            <p className="name"><span>作品标签</span><span><input onChange={(e)=>{tagsChange(e,settags)}} type="text"/></span></p>
            <p className="name"><span>作品时间</span><span><input onChange={(e)=>{dateChange(e,setdate)}} type="text"/></span></p>
            <p className="name"><span>作品信息</span><span><input onChange={(e)=>{infoChange(e,setinfo)}} type="text"/></span></p>
            <p className="name"><span>作品地址</span><span><input onChange={(e)=>{urlChange(e,seturl)}} type="text"/></span></p>

            <div className="articalwrap">
                <h2>作品列表</h2>
                {data.map((item,index)=>{
                    return(
                    <div key = {item._id}>{item._id}-----{item.author}</div>
                    )
                })}
            </div>
        </div> : null}
    </div>
    <div className="info">
        {name} + {author} + {imgurl} +{tags} + {date} + {info} + {url}
    </div>
    <div className="btn"><button onClick={()=>{btncommit(name,author,imgurl,tags,date,info,url)}}>提交</button></div>
    <Link to={'/'}>返回首页</Link>
    {test.map(item => (
                <li key={item._id}>
                <span>{item.name}</span>
                </li>
             ))}
  </div>
);
}


export default Manage;