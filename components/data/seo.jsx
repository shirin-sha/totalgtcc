"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - TOTAL General Trading & Contracting Co.";
  }, []);
};

export default SEO;