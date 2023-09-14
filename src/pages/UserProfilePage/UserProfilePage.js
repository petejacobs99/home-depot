import React, { useState, useEffect } from "react";
import styles from "./UserProfilePage.module.scss";


export default function UserProfilePage({ user, setUser }) {

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser();
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);


  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = async () => {
    try {
      await updateUser({
        name,
        email,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  const handleOrderHistory = () => {
    navigate("/orders");
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteUser();
      alert("Account deleted!");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const { name, email } = user;

  return (
    <>
      <div className={styles.container}>
        <h1>Personal Details</h1>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            disabled={!isEditing}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            disabled={!isEditing}
          />
          {isEditing ? (
            <button className={styles.editBtn} onClick={handleSaveProfile}>
              Save Profile
            </button>
          ) : (
            <button className={styles.editBtn} onClick={handleEditProfile}>
              Edit Profile
            </button>
          )}
        </div>
        <div className={styles.buttons}>
          <button className={styles.wishlistBtn} onClick={handleWishlist}>
            Wishlist
          </button>
          <button className={styles.orderHistoryBtn} onClick={handleOrderHistory}>
            Order History
          </button>
          <button className={styles.deleteBtn} onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
};