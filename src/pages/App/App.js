import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import { getDepartments } from '../../utilities/catDep-api';
import AuthPage from '../AuthPage/AuthPage';
/* import AboutUsPage from '../AboutUsPage/AboutUsPage'; */
import CategoryListPage from '../CategoryListPage/CategoryListPage';
import FAQPage from '../FAQPage/FAQPage';
/* import HomePage from '../HomePage/HomePage'; */
/* import ItemDetailPage from '../ItemDetailPage/ItemDetailPage'; */
import ItemListPage from '../ItemListPage/ItemListPage';
/* import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'; */
/* import OrderPage from '../OrderPage/OrderPage';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage'; */
import UserProfilePage from '../UserProfilePage/UserProfilePage';
/* import WishlistPage from '../WishlistPage/WishlistPage'; */
// holding pages
import AboutUsPage from '../Dummy';
import HomePage from '../Dummy';
import ItemDetailPage from '../Dummy';
import OrderHistoryPage from '../Dummy';
import OrderPage from '../Dummy';
import SearchResultsPage from '../Dummy';
import WishlistPage from '../Dummy';

export default function App() {
  const [user, setUser] = useState(getUser());
  const departments = getDepartments();
  return (
    <main className={styles.App}>
      {/* { user ? */}
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
            <Route path="/home/categories" element={<CategoryListPage user={user} setUser={setUser} />} />
            <Route path="/home/categories/items" element={<ItemListPage user={user} setUser={setUser} />} />
            <Route path="/home/categories/items/itemdetail" element={<ItemDetailPage user={user} setUser={setUser} />} />
            <Route path="/home/search" element={<SearchResultsPage user={user} setUser={setUser} />} />
            <Route path="/cart" element={<OrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/faq" element={<FAQPage user={user} setUser={setUser} />} />
            <Route path="/profile" element={<UserProfilePage user={user} setUser={setUser} />} />
            <Route path="/wishlist" element={<WishlistPage user={user} setUser={setUser} />} />
            <Route path="/aboutus" element={<AboutUsPage user={user} setUser={setUser} />} />
            <Route path="/auth" element={<AuthPage user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/home/categories/items" />} />
          </Routes>
        </>
        {/* :
        <AuthPage setUser={setUser} /> */}
      {/* } */}
    </main>
  );
}