import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Fonts from '../../styles/theme/Fonts'
import colors from '../../constants/colors'

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
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: colors.green,
        padding: 10,
        borderRadius: 40,
    },
    text: {
        fontFamily: Fonts.type.raleway,
        fontWeight: 'bold',
        color: colors.darkBlue,
        fontSize: 16,
    },
    textBold: {},
})
