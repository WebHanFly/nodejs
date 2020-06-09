import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
  import {PORTIP} from './appdata';
import home from '../css/home.scss';
import Artical from './artical'
// import {
//   PhoneOutlined,
//   QqOutlined,
//   GithubOutlined,
//   ZhihuOutlined,
//   WeiboCircleOutlined
// } from '@ant-design/icons';

function Home() {
console.log(PORTIP)
    
  return (
    <div>
       <div className={home.fullpage}>
         <div className={home.top}>
           <div className={home.img}>
             <img src={PORTIP+'/images/bg.jpg'} alt=""/>
           </div>
           <div className="info">
             <div className={home.avatar}>
              <img src={PORTIP+'/images/avatar.jpg'} alt=""/>
             </div>
             <div className={home.infomain}>
               <div className={home.title}>
                  <h1>这个小马不太冷</h1>
                  <div className={home.babel}>心中有梦，以梦为马，志存远方，不负韶华。</div>
               </div>
               <div className="zl">
                 <div className={home.hy}>
                   <div><span className={home.sp1}>居住地</span><span className="sp2">现居上海</span> </div>
                   <div><span className={home.sp1}>就职信息</span><span className="sp2">现就职于<a href="http://www.shengqugames.com/cn/index" target='_blank'>盛趣游戏</a> <a href="">（市场中心）</a></span></div>
                   <div><span className={home.sp1}>个人简介</span><span className="sp2">热爱游戏、旅行、摄影、跑步、极客、完美主义者</span></div>
                   <div><span className={home.sp1}>联系我</span>
                   <span className="sp2">
                    <span > 18616545537</span>
                    <span className={home.mleft} > 670567137</span>
                    <a  className={home.mleft} href="https://github.com/WebHanFly" target="_blank">github</a>
                    <a  className={home.mleft} href="https://www.zhihu.com/people/liu-liu-liu-xiao-ma" target="_blank">知乎</a>
                    <a  className={home.mleft} href="https://weibo.com/u/3287740781/home" target="_blank">微博</a>
                   </span>
                   </div>
                 </div>
               </div>
               <div className="link">
                 
               </div>
             </div>
           </div>
         </div>
         <div className={home.artical}>
            <Artical />
         </div>
       </div>
       <div>
        <Link to={'/manage'}>管理后台</Link>
       </div>
    </div>
  );
}



export default Home;