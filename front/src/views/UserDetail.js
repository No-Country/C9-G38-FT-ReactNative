import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import Fonts from '../styles/theme/Fonts';
import CSButton from '../common/ui/Button';
import { BASE_ENDPOINT } from '../constants/endpoints';

const UserDetail = ({ route }) => {
    const [user, setUser] = useState();

    const getUser = async () => {
        try {
            let req = await fetch(`${BASE_ENDPOINT}/users/${route.params.id}`);
            let res = await req.json();
            console.log(res);
            setUser(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.userDetails}>
                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage}
                        source={{
                            uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg'
                        }}
                    />
                </View>
                <View style={styles.userContacts}>
                    <Text style={styles.userName}>{user?.username}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.follows}>
                            <Text style={styles.quantity}>20</Text>
                            <Text>Seguidores</Text>
                        </View>
                        <View style={styles.follows}>
                            <Text style={styles.quantity}>30</Text>
                            <Text>Siguiendo</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.biographyContainer}>
                <Text style={styles.biography}>
                    Biografía Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry
                </Text>
            </View>
            <View style={styles.actionButtons}>
                <CSButton label={'Seguir'} style={styles.followButton} />
                <CSButton label={'Contactar'} onPress={() => Linking.openURL('https://wa.me/')} style={styles.contactButton} />
            </View>
        </View>
    )
};

export default UserDetail;

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    userDetails: {
        height: '18%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    profileImageContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: '90%',
        aspectRatio: 1,
        borderRadius: 100
    },
    userContacts: {
        width: '70%',
        paddingLeft: 20,
        paddingTop: 2,
        justifyContent: 'center'
    },
    userName: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.xxxLarge,
        marginLeft: 10
    },
    follows: {
        marginRight: 20,
        alignItems: 'center'
    },
    quantity: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.xxxLarge
    },
    biographyContainer: {
        paddingHorizontal: 24,
        height: '10%'
    },
    actionButtons: { 
        flexDirection: 'row', 
        height: '10%', 
        paddingHorizontal: 24, 
        justifyContent: 'space-between' 
    },
    followButton: {
        width: '49%'
    },
    contactButton: {
        width: '49%',
        backgroundColor: '#dedede'
    }
});