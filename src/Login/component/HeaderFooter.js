import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/-reset.css';
import '../css/HeaderFooter.css';
import b from '../img/b.png';
import out from '../img/logout.png';
import user from '../img/user.png';

const HeaderFooter = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])

	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}

	return(
		<>
			<header className="login-header">
				<div className="logo">
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className="category">
					<Link to='/home'>Home</Link>
					<Link to='/fix'>Upload</Link>
					<Link to='/board'>Community</Link>
				</div>
				<img src={user} alt="profile" onClick={handleClick}></img>
			</header>
			<main>
				{profileOpen && <div className="profile-box">
					<img src={user}/>
					<p>{loginData.nickname}</p>
					<p>Member Since : {loginData.signupDate}</p>
					<div className="my-page">My Page</div>
					<div className="logout">
						<img src={out}></img>
						<p>Log Out</p>
					</div>
				</div>}
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default HeaderFooter;