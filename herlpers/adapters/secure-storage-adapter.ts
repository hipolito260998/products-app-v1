import * as SecureStore from 'expo-secure-store';


export class SecureStorageAdapter {
    static async setItem(key: string, value: string) {
        try {
            await SecureStore.setItemAsync(key, value);
        } catch (error) {
            console.error("Error setting item in secure storage:", error);
        }
    }
    static async getItem(key: string) {
        try {
            return await SecureStore.getItemAsync(key);
        } catch (error) {
            console.error("Error getting item from secure storage:", error);
            return null;
        }
    }
    static async deleteItem(key: string) {
        try {
            await SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.error("Error deleting item from secure storage:", error);
        }
    }
}