import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { DatabaseID, databases, userHealthInfoCollectionID } from '@/appwriteConfig'
import { UserContext } from '@/context/UserContext'

const updateHealthInfo = async ({weight_KG, weight_lbs, heightInches, heightCM, ageYears, activityLevel, gender}) => {
    const {userID} = useContext(UserContext)    
    databases.createDocument(
            DatabaseID,
            userHealthInfoCollectionID,
            userID, 
            {
                userID: userID,
                weightlbs: weight_lbs,
                weightKG: weight_KG,
                heightInch: heightInches,
                age: ageYears, 
                gender: gender, 
                activityLevel: activityLevel
            }


        )
    }
}

export default updateHealthInfo