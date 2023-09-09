import { useState } from "react";
import styles from "./UserProfilePage.module.scss";
import NavBar from "../../components/NavBar/NavBar";

const UserProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleWishlist = () => {
  };

  const handleOrderHistory = () => {
  };

  const handleDeleteAccount = () => {
    alert("Account deleted!");
  };

  return (
  <>
    <NavBar />
    <div className={styles.container}>
      <h1>Personal Details</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={!isEditing}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={!isEditing}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default UserProfilePage;
