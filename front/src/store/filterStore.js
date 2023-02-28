import { create } from 'zustand';
import { AsyncStorage } from 'react-native';
import { BASE_URL } from '../constants/endpoints';
export const useFilterStore = create((set) => ({
  gender: null,
  agesrange: [20, 99],
  categories: null,
  categoriesList: [],

  setCategorie: (value) =>
    set((state) => ({
      ...state,
      categories: value,
    })),

  setGender: (value) =>
    set((state) => ({
      ...state,
      gender: value,
    })),
  setAgesRanges: (value) =>
    set((state) => ({
      ...state,
      agesrange: value,
    })),

  getCategories: async () => {
    const res = await fetch(`${BASE_URL}sports`);
    const listcategories = await res.json();
    const newData = listcategories.data.map((item) => {
      return { key: item.id.toString(), value: item.name };
    });
    set((state) => ({
      ...state,
      categoriesList: newData,
    }));
  },
}));
