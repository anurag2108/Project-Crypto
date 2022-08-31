import React from 'react'
import { useEffect,useState } from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'
const Navbar = () => {
  const [activeMenu,setActiveMenu] = useState(true);
  const [screenSize,setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div>
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large">
                </Avatar>
                <Typography.Title level={2} className='logo'>
                    <Link to="/" style={{backgroundColor:'#000',color:'#fff'}}>CryptoVerse </Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
            {activeMenu &&( 
            <div>
                <Menu style={{backgroundColor:'#000',color:'#fff'}}>
                    <Menu.Item icon={<HomeOutlined/>}>
                      <Link to="/" style={{color:'#fff'}}>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                      <Link to="/cryptocurrencies" style={{color:'#fff'}}>Cryptocurrencies</Link>
                    </Menu.Item>
                    {/* <Menu.Item icon={<MoneyCollectOutlined/>}>
                      <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item> */}
                    <Menu.Item icon={<BulbOutlined/>}>
                      <Link to="/news" style={{color:'#fff'}}>News</Link>
                    </Menu.Item>
                </Menu>
            </div>
            )}
        </div>

    </div>
  )
}

export default Navbar