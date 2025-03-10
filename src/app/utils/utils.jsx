export const loadStoredData = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const saveMemoryData = (memories) => {
  localStorage.setItem('engineeringMemories', JSON.stringify(memories));
};

export const saveGalleryData = (gallery) => {
  localStorage.setItem('engineeringGallery', JSON.stringify(gallery));
};

export const saveSignatureData = (signatures) => {
  localStorage.setItem('engineeringSignatures', JSON.stringify(signatures));
};

export const updateCountdown = (setCountdown) => {
  const graduationDate = new Date();
  graduationDate.setDate(graduationDate.getDate() + 100);
  
  const update = () => {
    const now = new Date();
    const diff = graduationDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    setCountdown(`${days} days, ${hours} hours, ${minutes} minutes`);
  };
  
  update();
  setInterval(update, 60000);
};
