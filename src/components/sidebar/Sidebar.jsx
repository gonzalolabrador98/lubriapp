import React from 'react';
import { navigation } from '../../utils/navigation';
import { Link } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
  return (
    <div>
      <div className="drawer sidebar">
        <div className="drawer-side">
          <h1 className="title">LUBRI-APP</h1>
          <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content">
            {navigation.map((item) => (
              <div key={item.title}>
                <li>
                  <Link to={item.itemId}>
                    <h1>{item.title}</h1>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
