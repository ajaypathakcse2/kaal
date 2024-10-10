// pages/panchang.js

"use client"; // Indicate that this is a client component

import styles from "./Panchang.module.css"; // Import CSS module for styling

interface Panchang {
  date: string; // Date of the Panchang in YYYY-MM-DD format
  day: string; // Day of the week
  tithi: string; // Tithi details
  nakshatra: string; // Nakshatra details
  yoga: string; // Yoga details
  karan: string; // Karan details
  sunrise: string; // Sunrise time
  sunset: string; // Sunset time
  abhijitMuhurta: string; // Abhijit Muhurta timing
  amritKalam: string; // Amrit Kalam timing
  rahukalam: string; // Rahukalam timing
  yamganda: string; // Yamganda timing
  gulikaal: string; // Gulikaal timing
}

const data: Panchang = {
  date: "2024-10-10",
  day: "Thursday",
  tithi: "चतुर्थी (रात 12:47 बजे तक), फिर पंचमी",
  nakshatra: "अनुराधा (रात 12:46 बजे तक), फिर ज्येष्ठा",
  yoga: "आयुष्मान (रात 9:48 बजे तक), फिर सौभाग्य",
  karan: "विष्टि (रात 12:47 बजे तक), फिर बव",
  sunrise: "प्रातः 6:12 बजे",
  sunset: "सायं 5:55 बजे",
  abhijitMuhurta: "दोपहर 11:40 बजे से 12:27 बजे तक",
  amritKalam: "दोपहर 4:47 बजे से शाम 6:34 बजे तक",
  rahukalam: "दोपहर 1:32 बजे से 3:00 बजे तक",
  yamganda: "प्रातः 6:12 बजे से 7:40 बजे तक",
  gulikaal: "प्रातः 9:07 बजे से 10:35 बजे तक",
};
const Home = () => {
  const panchangData = data;

  // Panchang data for demonstration (can be expanded or fetched from an API)

  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <h2>आज का पंचांग - {panchangData.date}</h2>
      </div>
      {panchangData ? (
        <>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>मुख्य विवरण</h2>{" "}
            <p className={styles.sectionText}>
              <strong>तिथि:</strong> {panchangData.tithi}
            </p>
            <p className={styles.sectionText}>
              <strong>नक्षत्र:</strong> {panchangData.nakshatra}
            </p>
            <p className={styles.sectionText}>
              <strong>योग:</strong> {panchangData.yoga}
            </p>
            <p className={styles.sectionText}>
              <strong>करण:</strong> {panchangData.karan}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>सूर्योदय और सूर्यास्त</h2>
            <p className={styles.sectionText}>
              <strong>सूर्योदय:</strong> {panchangData.sunrise}
            </p>
            <p className={styles.sectionText}>
              <strong>सूर्यास्त:</strong> {panchangData.sunset}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>शुभ मुहूर्त</h2>
            <p className={styles.sectionText}>
              <strong>अभिजीत मुहूर्त:</strong> {panchangData.abhijitMuhurta}
            </p>
            <p className={styles.sectionText}>
              <strong>अमृत काल:</strong> {panchangData.amritKalam}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>अशुभ समय</h2>
            <p className={styles.sectionText}>
              <strong>राहु काल:</strong> {panchangData.rahukalam}
            </p>
            <p className={styles.sectionText}>
              <strong>यमगंड:</strong> {panchangData.yamganda}
            </p>
          </div>
        </>
      ) : (
        <p className={styles.sectionText}>
          चयनित तिथि के लिए डेटा उपलब्ध नहीं है।
        </p>
      )}
    </div>
  );
};

export default Home;
