import React from "react";
import { Link } from "react-router-dom";
import b from '../proimg/b.png';
import user from '../proimg/user.png';
import './reset.css'
import styles from './Community1.module.css'

const Community1 = () => {
	const handleClick=() => {
		alert("유저 관련 툴 만들기 or figma 따라가기")
	}

	return(
		<>
			<header className={styles.loginHeader}>
				<div className={styles.site}>
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className={styles.category}>
					<Link to='/home' style={{
						color:"white",
						fontSize:"30px",
						fontWeight:"400",
						textDecoration:"none"
					}}>Home</Link>
						<Link to='/upload' style={{
						color:"white",
						fontSize:"30px",
						fontWeight:"400",
						textDecoration:"none"
					}}>Upload</Link>
					<Link to='/community' style={{
						color:"white",
						fontSize:"30px",
						fontWeight:"400",
						textDecoration:"none"
					}}>Community</Link>
				</div>
				<img src={user} alt="profile" className={styles.imgbtn} onClick={handleClick}></img>
			</header>
			<main>
                <div className={styles.container}>
                    <p className={styles.h1}>자유 게시판</p>
                    <div className={styles.h2}>
                        <p>공지사항</p>
                        <p>자유 게시판</p>
                    </div>
                    <div className={styles.subcon}>
                        <div className={styles.box}>
                            <div>번호</div>
                            <div>제목</div>
                            <div>작성자</div>
                            <div>작성 시간</div>
                        </div>
                        <div className={styles.box1}>
                            <div>15</div>
                            <div>제목입니다15</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>14</div>
                            <div>제목입니다14</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>13</div>
                            <div>제목입니다13</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>12</div>
                            <div>제목입니다12</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>11</div>
                            <div>제목입니다11</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>10</div>
                            <div>제목입니다10</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>9</div>
                            <div>제목입니다9</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>8</div>
                            <div>제목입니다8</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>7</div>
                            <div>제목입니다7</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                        <div className={styles.box1}>
                            <div>6</div>
                            <div>제목입니다6</div>
                            <div>유저</div>
                            <div>2025-01-20</div>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <div>글쓰기</div>
                    </div>
                    <div className={styles.page}>
                        <div>&lt;&lt;</div>
                        <div>&lt;</div>
                        <div>1</div>
                        <div>2</div>
                        <div>&gt;</div>
                        <div>&gt;&gt;</div>
                    </div>
                </div>
            </main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Community1;