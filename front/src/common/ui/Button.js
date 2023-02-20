import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Fonts from '../../styles/theme/Fonts'

const CSButton = ({ onPress, label, style, labelBold, icon = null }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={[styles.wrapper, style]}>
                {icon}
                <Text style={styles.text}>{label} </Text>
                <Text style={styles.textBold}>{labelBold}</Text>
            </TouchableOpacity>
        </>
    )
}

export default CSButton

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#2192FF',
        padding: 10,
        borderRadius: 20,
    },
    text: {
        fontFamily: Fonts.type.semiBold,
        color: 'white',
        fontSize: 16,
    },
    textBold: {},
})
