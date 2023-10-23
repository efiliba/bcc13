"use client";

import { useState } from 'react';

import { agedCare } from '@/services';
import { Paralax, Book, Location, HomeCareRequestForm } from '@/components';

const AgedCare = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleShowRequest = () => setShowRequestForm(true);

  const handleCloseRequestForm = () => setShowRequestForm(false);

  return (
    <>
      <Paralax
        className="bg-aged-care"
        title="IN-HOME CARE"
        description="If you are looking for in-home care services please complete the form below."
        action="SERVICE REQUEST FORM"
        onClick={handleShowRequest}
      />
      <Book pages={agedCare} />
      <Location />
      <HomeCareRequestForm show={showRequestForm} onHide={handleCloseRequestForm} />

    </>
  );
};

export default AgedCare;
