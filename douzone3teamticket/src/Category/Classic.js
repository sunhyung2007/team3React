import { useSelector } from "react-redux";
import React, { useState } from "react";
import { createPath, Link, useNavigate } from 'react-router-dom'

import '../css/Category.css'
import styles from "../css/Category.module.css";

import {ClassicSlide} from "./CatrgoryImgSlide";
import {ClassicSort} from "./PerformanceSort";

function Classic() {
    const [visibleList, setVisibleList] = useState(true);
    const [visibleAlbum, setVisibleAlbum] = useState(false);

    return (
        <div className={styles.categoryCont}>

        <ClassicSlide/>

        <ClassicSort/>

        <div>
            <button className={styles.switchBtn}
                onClick={() => { setVisibleAlbum(!visibleAlbum); setVisibleList(!visibleList); }}>
                {visibleList
                    ? <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchListImg.jpg"></img></div>
<<<<<<< HEAD
                    : <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchAlbumImg.jpg"></img></div>}
=======
                    : <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchAlbumImg.jpg"></img></div>
                }
>>>>>>> origin/geonho
            </button>

            {visibleList && <Classic_list />}
            {visibleAlbum && <Classic_album />}

        </div >
        </div>
    );
}

function Classic_list() {
    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')
<<<<<<< HEAD

    let data = [];
    let temp = [];

    state.concert.map((data1) => {
        temp.push(data1)
    })

    data.push(temp)
    temp = [];

    state.musical.map((data2) => {
        temp.push(data2)
    })

    data.push(temp);
    temp = [];


    state.classic.map((data3) => {
        temp.push(data3)
    })

    data.push(temp)
    temp = [];

    state.theater.map((data4) => {
        temp.push(data4)
    })

    data.push(temp)
    temp = [];

    // console.log(data)
    //titel 비교z를 위한 배열

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
=======

    return (
        <div>
            <input className={styles.searchInput} type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
>>>>>>> origin/geonho
            <table className={styles.categoryTable}>
                <thead>
                    <tr className={styles.categoryTableTitle}>
                        <th scope="col"></th>
                        <th scope="col">공연명</th>
                        <th scope="col">출연진</th>
                        <th scope="col">공연일</th>
                        <th scope="col">상영시간</th>
                        <th scope="col">가격 (S석 기준)</th>
                    </tr>
                </thead>
                <tbody>
<<<<<<< HEAD

=======
                    {
                        state.classic.map((item, i) => [item].filter((val) => {

                            if (search == "") {
                                return val
                            }
                            else if
                                (item.title.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        }).map((val, k) =>
                            <tr key={{ i }} className={styles.categoryContent}>
                                {/* <td><img className={styles.categoryImg} src={state.classic[i].imageadr}></img></td> */}
                                <td>
                                    <span onClick={() => { localStorage.setItem('performanceId', state.classic[i].id); naviate('/classic/detail/' + state.classic[i].id); }}>
                                        <img className={styles.categoryImg} src={state.classic[i].imageadr}></img>
                                    </span>
                                </td>
                                <td >{state.classic[i].title}</td>
                                <td>{state.classic[i].cast}</td>
                                <td>{state.classic[i].showyear}-{state.classic[i].showmonth}-{state.classic[i].showday}</td>
                                <td>{state.classic[i].showtime}</td>
                                <td>{state.classic[i].priceS}원</td>
                            </tr>

                        )
                        )
                    }
>>>>>>> origin/geonho

                </tbody>
            </table>
        </div >
    );

}

function Classic_album() {

    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')
<<<<<<< HEAD
    let arr = [];
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
            <div className="mu">


=======
    return (
        <div>
            <input className={styles.searchInput} type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
            <div className="mu">
                {
                    state.classic.map((item, i) => [item].filter((val) => {

                        if (search == "") {
                            return val
                        }
                        else if
                            (item.title.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    }).map((val, k) => {
                        return (
                            <div className="stuff" key={{ i }}>
                                <span className="stuff_img" onClick={() => { localStorage.setItem('performanceId', state.classic[i].id); naviate('/classic/detail/' + state.classic[i].id); }}>
                                    <img src={state.classic[i].imageadr}></img>
                                </span>
                                <div className="stuff_content">
                                    <span className="stuff_title">{state.classic[i].title}</span><br />
                                    <span>{state.classic[i].showyear}-{state.classic[i].showmonth}-{state.classic[i].showday} </span><br />
                                    <span>{state.classic[i].showtime}</span><br />
                                    <span>{state.classic[i].priceS}원</span><br />
                                </div>
                            </div>

                        )
                    }))
                }

>>>>>>> origin/geonho
            </div>
        </div>

    );
}

export default Classic;