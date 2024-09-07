import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    alert('Cierre de sesión');
  };

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Email: usuario@example.com</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
