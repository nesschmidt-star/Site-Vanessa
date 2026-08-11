const STORAGE_KEY = 'vanessa_custom_profile_photo';
const EVENT_NAME = 'vanessa_photo_updated';

export const getStoredPhoto = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

export const saveStoredPhoto = (photoDataUrlOrUrl: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY, photoDataUrlOrUrl);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: photoDataUrlOrUrl }));
  } catch (err) {
    console.error('Erro ao salvar foto no armazenamento local:', err);
  }
};

export const clearStoredPhoto = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: null }));
  } catch (err) {
    console.error('Erro ao remover foto:', err);
  }
};

export const subscribePhotoChanges = (callback: (photo: string | null) => void): (() => void) => {
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<string | null>;
    callback(customEvent.detail);
  };
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
};
