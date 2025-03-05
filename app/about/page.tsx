import styles from '../about/about.module.css'
const About = () => {
  const fakeData = {
    name: "John Doe",
    bio: "A passionate developer who loves building web applications.",
    location: "San Francisco, CA",
    hobbies: ["Coding", "Hiking", "Photography"]
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.text}><strong>Name:</strong> {fakeData.name}</p>
      <p className={styles.text}><strong>Bio:</strong> {fakeData.bio}</p>
      <p className={styles.text}><strong>Location:</strong> {fakeData.location}</p>
      <p className={styles.text}><strong>Hobbies:</strong> {fakeData.hobbies.join(", ")}</p>
    </div>
  );
};
  
  export default About;