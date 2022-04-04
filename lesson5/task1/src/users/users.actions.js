export const TOGGLE_PAGE_NEXT = 'USER/TOGGLE_PAGE_NEXT';
export const TOGGLE_PAGE_PREV = 'USER/TOGGLE_PAGE_PREV';

export const goPrev = () => ({
  type: TOGGLE_PAGE_NEXT,
});

export const goNext = () => ({
  type: TOGGLE_PAGE_PREV,
});