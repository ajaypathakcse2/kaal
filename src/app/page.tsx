// pages/panchang.js

"use client"; // Indicate that this is a client component

import styles from "./Panchang.module.css"; // Import CSS module for styling

const data = {
  date: "2024-10-06",
  tithi: "चतुर्थी (प्रातः 7:49 बजे से प्रारंभ, 7 अक्टूबर प्रातः 9:47 बजे तक)",
  nakshatra: "विशाखा (7 अक्टूबर को रात 12:11 बजे तक), फिर अनुराधा",
  yoga: "प्रीति (7 अक्टूबर सुबह 6:39 बजे तक)",
  karan: "वणिज (रात 8:52 बजे तक), फिर विष्टि",
  sunrise: "सुबह 6:11 बजे",
  sunset: "शाम 5:57 बजे",
  abhijitMuhurta: "दोपहर 11:40 बजे से 12:27 बजे तक",
  amritKalam: "दोपहर 2:25 बजे से 4:11 बजे तक",
  rahukalam: "शाम 4:29 बजे से 5:57 बजे तक",
  yamganda: "दोपहर 12:04 बजे से 1:32 बजे तक",
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
