import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import { getDepartments } from '../../utilities/catDep-api';
import AuthPage from '../AuthPage/AuthPage';
/* import AboutUsPage from '../AboutUsPage/AboutUsPage'; */
import CategoryListPage from '../CategoryListPage/CategoryListPage';
import FAQPage from '../FAQPage/FAQPage';
import HomePage from '../HomePage/HomePage';
/* import ItemDetailPage from '../ItemDetailPage/ItemDetailPage'; */
import ItemListPage from '../ItemListPage/ItemListPage';
/* import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'; */
/* import OrderPage from '../OrderPage/OrderPage';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage'; */
import UserProfilePage from '../UserProfilePage/UserProfilePage';
/* import WishlistPage from '../WishlistPage/WishlistPage'; */
// holding pages
import AboutUsPage from '../Dummy';
//import HomePage from '../Dummy';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import OrderHistoryPage from '../Dummy';
import OrderPage from '../Dummy';
import SearchResultsPage from '../Dummy';
import WishlistPage from '../Dummy';
import * as ordersAPI from '../../utilities/orders-api'
import * as catDepAPI from '../../utilities/catDep-api'
import * as wishAPI from '../../utilities/wishlist-api'


export default function App() {
  const [user, setUser] = useState(getUser())
  const [cart, setCart] = useState({})
  const [wishlist, setWishlist] = useState({})
  const depRef = useRef([])

  useEffect(function () {
    async function getDeps() {
      const data = await catDepAPI.getDepartments()
      depRef.current = [...data]
    }
    getDeps()
    async function getCart() {
      const data = await ordersAPI.getCart()
      setCart(data)
    }
    getCart()
    async function getWishlist() {
      const data = await wishAPI.showWishlist()
      setWishlist(data)
    }
    getWishlist()
  }, [])

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addToCart(itemId)
    setCart(updatedCart)
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
    setCart(updatedCart)
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }
  async function handleAddToWishList(itemId) {
    const data = await wishAPI.addToWishlist(itemId)
    setWishlist(data)
  }
  async function handleRemoveFromWishList(itemId) {
    const data = await wishAPI.removeFromWishlist(itemId)
    setWishlist(data)
  }
  return (
    <main className={styles.App}>
      {/* { user ? */}
      <>
        <NavBar
          user={user}
          setUser={setUser}
          cart={cart}
          handleChangeQty={handleChangeQty}
          handleRemoveFromWishList={handleRemoveFromWishList}
          handleCheckout={handleCheckout}
          wishlist={wishlist}
          departments={depRef}
        />
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/home" element={<HomePage user={user} />} />
          <Route path="/cart" element={<OrderPage user={user} />} />
          <Route path="/orders" element={<OrderHistoryPage user={user} />} />
          <Route path="/faq" element={<FAQPage user={user} />} />
          <Route path="/profile" element={<UserProfilePage user={user} />} />
          <Route path="/wishlist" element={<WishlistPage user={user} handleAddToOrder={handleAddToOrder} handleRemoveFromWishList={handleRemoveFromWishList} />} />
          <Route path="/aboutus" element={<AboutUsPage user={user} />} />
          <Route path="/auth" element={<AuthPage user={user} />} />
          <Route path="/home/search/:term" element={<SearchResultsPage user={user} handleAddToOrder={handleAddToOrder} handleAddToWishList={handleAddToWishList} />} />
          <Route path="/home/:depName/categories" element={<CategoryListPage user={user} />} />
          <Route path="/home/:depName/:catName/items" element={<ItemListPage user={user} handleAddToOrder={handleAddToOrder} handleAddToWishList={handleAddToWishList} />} />
          <Route path="/home/:depName/:catName/:id" element={<ItemDetailPage user={user} handleAddToOrder={handleAddToOrder} handleAddToWishList={handleAddToWishList} />} />

          {/*<Route path="/*" element={<Navigate to="/home" />} />*/}
        </Routes>
      </>
      {/* :
        <AuthPage setUser={setUser} /> */}
      {/* } */}
    </main>
  )
}