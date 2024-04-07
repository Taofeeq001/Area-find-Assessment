'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '@/app/firebaseConfig';
import { collection, count, getDocs } from 'firebase/firestore';
const ReviewsContext = createContext();
export const useReviews = () => useContext(ReviewsContext);

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, 'Reviews');
      const snapshot = await getDocs(reviewsCollection);
      const reviewData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReviews(reviewData);
    };

    fetchReviews();
  }, []);

  return (
    <ReviewsContext.Provider value={reviews}>
      {children}
    </ReviewsContext.Provider>
  );
};
