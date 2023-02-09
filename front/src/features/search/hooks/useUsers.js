import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const useUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        ;(async () => {
            try {
                const response = await fetch(
                    'https://randomuser.me/api/?results=20'
                )
                const dataParsed = await response.json()
                setUsers(dataParsed.results)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])

    return {
        users,
    }
}
