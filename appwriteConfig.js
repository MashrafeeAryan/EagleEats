import { Client, Account, Databases } from "react-native-appwrite";



export const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('685e1abf001d44e68831')




export const account = new Account(client)
export const databases = new Databases(client)

export const DatabaseID = "6865b332001c4c913020"
export const userCollectionID = "6865b340003474dd7214"
