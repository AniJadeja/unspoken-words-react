import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ConfirmationDialog.css'; // Create a CSS file for animations

const ConfirmationDialog = ({ isError, isVisible, setDialogVisible }) => {
  const dialogTitle = isError
    ? 'Oops! Something went wrong. :('
    : 'Thank you for reaching out. ～⁠(⁠つ⁠ˆ⁠Д⁠ˆ⁠)⁠つ⁠｡⁠☆';

  const dialogMessage = isError
    ? `We encountered an issue while trying to send your message. Please double-check your internet connection and try again. If the problem persists, you can reach out to us directly on my email. We apologize for any inconvenience and appreciate your patience.`
    : 'Your message has been successfully sent. I appreciate you taking the time to get in touch. I will review your message and respond as soon as possible. I look forward to connect with you. :)';
 
  const dialogButtonLabel = 'Close';

  const handleClose = () => {
    setDialogVisible(false);
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={300}
      classNames="dialog"
      unmountOnExit
    >
      <div className="transition-all fixed top-0 bottom-0 right-0 left-0 bg-[var(--color-primary-overlay)] w-full min-w-full align-center max-w-full">
        <div className='rounded-lg shadow-sm shadow-[var(--color-primary-accent)] bg-[var(--color-primary-black)] text-[--color-primary-white] w-fit my-auto max-w-[90%] lg:max-w-[60%] 2xl:max-w-[40%]'>
          <div className='flex flex-col p-4 md:p-12'>
            <h1 className='text-2xl font-bold text-[var(--color-primary)]'>{dialogTitle}</h1>
            <p className='text-[var(--color-primary)] text-justify text-xl mt-12 mb-12'>{dialogMessage}</p>
            <button className='text-[var(--color-primary-black)] hover:bg-[var(--color-primary-accent-shadow)] rounded-lg py-2 px-8 text-xl font-bold bg-[var(--color-primary-accent)] w-fit transition-all mr-auto ml-0' onClick={handleClose}>{dialogButtonLabel}</button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ConfirmationDialog;
