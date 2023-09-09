import { useState } from "react";
import styles from "./UserProfilePage.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import DeleteUser from "../../components/DeleteUser/DeleteUser";
import { deleteUser } from "../../utilities/users-api";

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

  const handleDeleteAccount = async () => {
    try {
      await deleteUser();
      alert("Account deleted!");
  } catch (error) {
    console.error("An error occured while deleting the user.");
  }
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
      <DeleteUser user={user} setUser={setUser} />
    </div>
  </>
  );
};

export default UserProfilePage;
