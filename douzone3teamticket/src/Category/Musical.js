import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import './Category.css'
import styles from "./Category.module.css";

function Musical() {
    const [visibleList, setVisibleList] = useState(true);
    const [visibleAlbum, setVisibleAlbum] = useState(false);
    return (
        // let state = useSelector((state) => state);
        // let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

        <div>
            {/* <button onClick={() => { <Musical_album /> }}>앨범</button>
            {/* <button onClick={() => { <Musical_list /> }}>리스트</button> */}

            <button className="switchBtn"
                onClick={() => { setVisibleAlbum(!visibleAlbum); setVisibleList(!visibleList); }}>
                {visibleList 
                ? <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchListImg.jpg"></img></div> 
                : <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchAlbumImg.jpg"></img></div>}
            </button>

            {visibleList && <Musical_list />}
            {visibleAlbum && <Musical_album />}

        </div >
    );
}

function Musical_list() {
    let state = useSelector((state) => state)   
    let naviate = useNavigate()

    return (
        <div>
            <table className={styles.categoryTable}>
                <thead>
                    <tr className={styles.categoryTableTitle}>
                        <th scope="col"></th>
                        <th scope="col">공연명</th>
                        <th scope="col">출연진</th>
                        <th scope="col">공연일</th>
                        <th scope="col">상영시간</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.musical.map((item, i) =>
                            <tr key={{ i }} className={styles.categoryContent}>
                                {/* <td><img className={styles.categoryImg} src={state.musical[i].imageadr}></img></td> */}
                                 <td>
                                    <span onClick={ ()=>{state.performanceId = i; naviate('/musical/detail/' + i);} }>
                                    <img className={styles.categoryImg} src={state.musical[i].imageadr}></img>
                                    </span>
                                </td>
                                <td >{state.musical[i].title}</td>
                                <td>{state.musical[i].cast}</td>
                                <td>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday}</td>
                                <td>{state.musical[i].showtime}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

function Musical_album() {

    let state = useSelector((state) => state)
    let naviate = useNavigate()

    return (
        <div>
            <div className="mu">
                {
                    state.musical.map((item, i) =>
                        <div className="stuff">
                            {/* <span className="stuff_img"><img src={state.musical[i].imageadr}></img></span> */}
                            
                            <span className="stuff_img" onClick={ ()=>{state.performanceId = i; naviate('/musical/detail/' + i);} }>
                                <img src={state.musical[i].imageadr}></img>
                            </span>

                            <div className="stuff_content">
                                <span className="stuff_title">{state.musical[i].title}</span><br />
                                <span>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday} </span><br />
                                <span>{state.musical[i].showtime}</span><br />  
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
}

export default Musical;