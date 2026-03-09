// Luxury Toast/Alert Configuration for SweetAlert2
export const luxuryToast = {
  // Success toast
  success: (title, text) => ({
    icon: 'success',
    title: title,
    text: text,
    confirmButtonText: 'Continue',
    confirmButtonColor: '#1A1A1A',
    background: '#fff',
    color: '#111',
    iconColor: '#D4AF37',
    customClass: {
      popup: 'luxury-swal-popup',
      title: 'luxury-swal-title',
      htmlContainer: 'luxury-swal-text',
      confirmButton: 'luxury-swal-button'
    }
  }),

  // Error toast
  error: (title, text) => ({
    icon: 'error',
    title: title,
    text: text,
    confirmButtonText: 'Try Again',
    confirmButtonColor: '#1A1A1A',
    background: '#fff',
    color: '#111',
    iconColor: '#c0392b',
    customClass: {
      popup: 'luxury-swal-popup',
      title: 'luxury-swal-title',
      htmlContainer: 'luxury-swal-text',
      confirmButton: 'luxury-swal-button'
    }
  }),

  // Info toast
  info: (title, text) => ({
    icon: 'info',
    title: title,
    text: text,
    confirmButtonText: 'Got It',
    confirmButtonColor: '#1A1A1A',
    background: '#fff',
    color: '#111',
    iconColor: '#D4AF37',
    customClass: {
      popup: 'luxury-swal-popup',
      title: 'luxury-swal-title',
      htmlContainer: 'luxury-swal-text',
      confirmButton: 'luxury-swal-button'
    }
  }),

  // Confirm dialog
  confirm: (title, text) => ({
    icon: 'question',
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#1A1A1A',
    cancelButtonColor: '#E5E5E5',
    background: '#fff',
    color: '#111',
    iconColor: '#D4AF37',
    customClass: {
      popup: 'luxury-swal-popup',
      title: 'luxury-swal-title',
      htmlContainer: 'luxury-swal-text',
      confirmButton: 'luxury-swal-button',
      cancelButton: 'luxury-swal-cancel'
    }
  })
};
