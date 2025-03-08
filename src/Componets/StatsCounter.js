import React, { useEffect, useState } from 'react';
import { FaRegFileAlt, FaUserGraduate, FaUsers, FaPenFancy } from 'react-icons/fa';
import './StatsCounter.css';

const StatsCounter = () => {
  // State for the counters
  const [scripts, setScripts] = useState(0);
  const [clients, setClients] = useState(0);
  const [writers, setWriters] = useState(0);
  const [disciplines, setDisciplines] = useState(0);

  // Function to animate numbers in a loop
  useEffect(() => {
    const interval = setInterval(() => {
      setScripts((prev) => (prev >= 500 ? 0 : prev + 5));
      setClients((prev) => (prev >= 250 ? 0 : prev + 5));
      setWriters((prev) => (prev >= 50 ? 0 : prev + 1));
      setDisciplines((prev) => (prev >= 45 ? 0 : prev + 1));
    }, 200); // Adjust speed of counting

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="stats-counter">
      <div className="stat-item">
        <FaRegFileAlt className="stat-icon" />
        <h2>{scripts.toLocaleString()} +</h2>
        <p>Scripts Done</p>
      </div>

      <div className="stat-item">
        <FaUserGraduate className="stat-icon" />
        <h2>{clients.toLocaleString()} +</h2>
        <p>Happy Clients</p>
      </div>

      <div className="stat-item">
        <FaUsers className="stat-icon" />
        <h2>{writers.toLocaleString()} +</h2>
        <p>Active Scholar Writers</p>
      </div>

      <div className="stat-item">
        <FaPenFancy className="stat-icon" />
        <h2>{disciplines.toLocaleString()} +</h2>
        <p>Disciplines Handled</p>
      </div>
    </section>
  );
};

export default StatsCounter;
