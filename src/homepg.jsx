import "./homepg.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <h1>JUDICIARY MANAGEMENT SYSTEM</h1>
      </motion.header>

      {/* About Section */}
      <motion.section 
        className="about-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>ABOUT</h2>
        <p>
          This platform streamlines judicial case management, providing an intuitive
          interface for clerks, lawyers, judges, and administrators to efficiently
          handle legal proceedings.
        </p>
      </motion.section>

      {/* Roles Section */}
      <motion.section 
        className="roles"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>Roles</h2>
        <div className="role-list">
          <motion.div className="role-card" whileHover={{ scale: 1.1 }} onClick={handleLogin}>Clerk</motion.div>
          <motion.div className="role-card" whileHover={{ scale: 1.1 }} onClick={handleLogin}>Lawyer</motion.div>
          <motion.div className="role-card" whileHover={{ scale: 1.1 }} onClick={handleLogin}>Judge</motion.div>
          <motion.div className="role-card" whileHover={{ scale: 1.1 }} onClick={handleLogin}>Admin</motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;