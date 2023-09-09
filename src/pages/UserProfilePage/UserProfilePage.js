import { useState, useEffect } from "react";
import styles from "./UserProfilePage.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import { getUser, updateUser } from "../../utilities/users-service";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user information when component mounts
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
        firstName,
        lastName,
        email,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleWishlist = () => {
    // Implement wishlist functionality
  };

  const handleOrderHistory = () => {
    // Implement order history functionality
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteUser();
      alert("Account deleted!");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Handle loading state if user data is not yet available
  }

  const { firstName, lastName, email } = user;

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
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            disabled={!isEditing}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
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

export default UserProfilePage;
