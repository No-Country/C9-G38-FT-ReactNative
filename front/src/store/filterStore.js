import { create } from "zustand";
import { AsyncStorage } from "react-native";

export const useFilterStore = create((set) => ({
  gender: null,
  ages: null,
  agesrange: null,
  categories: [],
  categoriesList: [],

  setCategorie: (value) =>
    set((state) => ({
      categories: value,
    })),

  setGender: (value) =>
    set((state) => ({
      ...state,
      gender: value,
    })),

  setAges: (value) =>
    set((state) => ({
      ...state,
      ages: value,
    })),
  setAgesRanges: (value) =>
    set((state) => ({
      ...state,
      agesrange: value,
    })),

  getCategories: async () => {
    const res = await fetch(
      "https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/categories"
    );
    const listcategories = await res.json();
    const newData = listcategories.data.map((item) => {
      return { key: item.id.toString(), value: item.name };
    });
    set((state) => ({
      ...state,
      categoriesList: newData,
    }));
  },
  // getAuth: async () => {
  //     let value = await AsyncStorage.getItem('token');
  //     console.log(value);
  //     set(() => ({
  //         authToken: value
  //     }))
  // }
}));
