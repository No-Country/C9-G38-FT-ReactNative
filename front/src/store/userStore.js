import { create } from 'zustand';
import { BASE_URL } from '../constants/endpoints';
export const useUserStore = create((set, get) => ({
  users: [],
  filteredUsers: [],
  setUsers: (value) =>
    set((state) => ({
      ...state,
      users: value,
    })),
  getAllUsers: async () => {
    try {
      const response = await fetch(`${BASE_URL}users`).then((res) =>
        res.json()
      );

      const users = response.data.map((user) => {
        const randomNumber = parseInt(Math.random() * 99);

        return {
          ...user,
          image: `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`,
        };
      });

      set({ users, filteredUsers: users });
    } catch (err) {
      console.error(err);
    }
  },
  searchbarValue: '',
  filterSearchUser: (text) => {
    set({ searchbarValue: text });
    if (text) {
      const newData = get().filteredUsers.filter((item) => {
        const itemData = item.fullname
          ? item.fullname.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      set({ filteredUsers: newData });
    } else {
      set({ filteredUsers: get().users });
    }
  },
}));
