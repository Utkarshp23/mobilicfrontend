const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
  };

  return (
    <button className="btn btn-secondary" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;