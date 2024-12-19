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
  date: "2024-12-19",
  day: "गुरुवार",
  tithi: "पंचमी (रात 9:18 बजे तक), फिर षष्ठी",
  nakshatra: "आश्लेषा (दोपहर 12:30 बजे तक), फिर मघा",
  yoga: "विष्कंभ (सुबह 4:42 बजे तक, 20 दिसंबर), फिर प्रीति",
  karana: "कौलव (सुबह 8:49 बजे तक), फिर तैतिल (रात 9:18 बजे तक), फिर गरज",
  sunrise: "सुबह 7:17 बजे",
  sunset: "शाम 4:53 बजे",
  abhijitMuhurta: "दोपहर 11:46 बजे से 12:24 बजे तक",
  amritKalam: "सुबह 10:49 बजे से 12:30 बजे तक",
  rahukalam: "दोपहर 1:17 बजे से 2:29 बजे तक",
  yamganda: "सुबह 7:17 बजे से 8:29 बजे तक",
  gulikaal: "सुबह 9:41 बजे से 10:53 बजे तक",
};

//This data is for today

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
