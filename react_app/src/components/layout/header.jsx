import { Link, NavLink } from 'react-router-dom';
// import './header.css';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Header = () => {
    const items = [
        {
            label: <Link to={'/'}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={'/users'}>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,

        },
        {
            label: <Link to={'/books'}>Book</Link>,
            key: 'books',
            icon: <BookOutlined />,

        },

    ];

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header;